import { defineMiddleware } from "astro/middleware";
import { isInternal } from "./utils";
import { isLocal } from "@src/utils/server/urls";
import { getToken, validateTokenxToken } from "@navikt/oasis";

export const onRequest = defineMiddleware(async (context, next) => {
  const token = getToken(context.request.headers);

  if (isLocal) {
    return next();
  }

  if (isInternal(context)) {
    return next();
  }

  if (!token) {
    console.info("Could not find any bearer token on the request. Redirecting to login.");
    return new Response(null, { status: 401 });
  }

  const validation = await validateTokenxToken(token);

  if (!validation.ok) {
    const error = new Error(
      `Invalid JWT token found (cause: ${validation.errorType} ${validation.error}, redirecting to login.`,
    );
    console.error(error);
    return new Response(null, { status: 401 });
  }

  context.locals.token = token;

  return next();
});

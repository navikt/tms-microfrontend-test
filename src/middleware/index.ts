import { defineMiddleware } from "astro/middleware";
import { loginUrl } from "./urls";
import { isInternal } from "./utils";
import { isLocal } from "@src/utils/server/urls";
import { getToken, validateTokenxToken } from "@navikt/oasis";

export const onRequest = defineMiddleware(async (context, next) => {
  const token = getToken(context.request.headers);
  const params = encodeURIComponent(context.url.search);
  console.info("Debug: ", token);
  console.info("Headers: ", context.request.headers);

  if (isLocal) {
    return next();
  }

  if (isInternal(context)) {
    return next();
  }

  if (!token) {
    console.info("Could not find any bearer token on the request. Redirecting to login.");
    return context.redirect(`${loginUrl}${params}`);
  }

  const validation = await validateTokenxToken(token);

  if (!validation.ok) {
    const error = new Error(
      `Invalid JWT token found (cause: ${validation.errorType} ${validation.error}, redirecting to login.`,
    );
    console.error(error);
    return context.redirect(`${loginUrl}${params}`);
  }

  context.locals.token = token;

  return next();
});

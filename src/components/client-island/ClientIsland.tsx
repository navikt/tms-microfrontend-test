import { Button } from "@navikt/ds-react";

const ClientIsland = () => {
  return (
    <div>
      <p>Client-side button</p>
      <Button onClick={() => console.log("clicked")}>Button</Button>
    </div>
  );
};

export default ClientIsland;

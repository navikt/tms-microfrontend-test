import { Button, Heading } from "@navikt/ds-react";

const ClientIsland = () => {
    return (
        <div>
            <Heading size="small" level="3">
                Client-side component
            </Heading>
            <Button onClick={() => console.log("clicked")}>
                Button
            </Button>
        </div>
    );
};

export default ClientIsland;
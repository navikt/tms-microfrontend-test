import { Button } from "@navikt/ds-react";
import styles from "../../styles/test.module.css";

const ClientIsland = () => {
  return (
    <div>
      <p className={styles.test}>Client-side button</p>
      <Button onClick={() => console.log("clicked")}>Button</Button>
    </div>
  );
};

export default ClientIsland;

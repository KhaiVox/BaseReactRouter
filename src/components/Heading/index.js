import styles from "./Heading.module.scss"
import clsx from "clsx";

function Heading() {
    return ( <h1 className={clsx(styles.heading, styles.active)}>Hello</h1> );
}

export default Heading;
import Link from "next/link";

import styles from "../../styles/Home.module.css";

export default function firstAttempt() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        This is my first attempt with NextJS{" "}
        <Link href="/">
          <h4>
            <a>Back</a>
          </h4>
        </Link>
      </h1>
    </div>
  );
}

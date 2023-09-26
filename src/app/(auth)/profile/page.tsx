import type { NextPageProps } from "next";
import styles from "./styles.module.scss";

export default function ProfilePage(props: NextPageProps) {
  return <div className={styles.profile}>Profile: hello</div>;
}

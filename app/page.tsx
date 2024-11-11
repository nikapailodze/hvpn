import Image from "next/image";
import styles from "./page.module.scss";
import AsideMenu from "./Components/AsideMenu/AsideMenu";

export default function Home() {
  return (
    <div className={styles.page}>
        <AsideMenu/>
    </div>
  );
}

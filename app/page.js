import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to Penn Chefs&nbsp;
        </p>
      </div>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text_container">
          <h1 className="text-4xl font-extrabold">Your Ingredients</h1>
          <p>Input the ingredients you have or want to make a dish with.</p>
        </div>
        <div className="home-filters">
        </div>
      </div>
      
      <div className={styles.Home}>
        <a>
          By{" Penn Chefs "}
          <Image
            src="/chef-logo.png"
            alt="Penn Chefs Logo"
            className={styles.chefLogo}
            width={50}
            height={60}
          />
        </a>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import styles from "./SixthStep.module.css";

import doneIcon from "@/assets/rechner/done-icon.png";

export default function SixthStep() {
  return (
    <section className={styles.mortgageStep}>
      <div className={styles.successIcon}>
        <Image
          src={doneIcon}
          alt="Success"
          width={120}
          height={120}
        />
      </div>

      <div className={styles.successContent}>
        <h2>Vielen Dank!</h2>

        <p>
          Unser Berater wird sich in Kürze mit Ihnen in Verbindung setzen.
        </p>
      </div>
    </section>
  );
}
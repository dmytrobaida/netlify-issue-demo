"use client";

import { signIn } from "next-auth/react";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <button
            onClick={async () => {
              const res = await fetch(".netlify/functions/hello").then((res) =>
                res.text()
              );
              alert(res);
            }}
          >
            Call function (working)
          </button>
          <button onClick={() => signIn("facebook")}>
            Call next-auth (not working)
          </button>
        </div>
      </div>
    </main>
  );
}

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

import styles from "../styles/index.module.scss";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");

  const { data: session, status } = useSession();

  if (status == "authenticated") {
    console.log("chinese kaas eten nom nom nom");
    return (
      <>
        <Head>
          <title>Create T3 App</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Welkom {session.user.name}</h1>
          <button onClick={() => signOut()}>Log out</button>
        </main>
      </>
    );
  } 

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <div className={styles.flex}>
          <div className={styles.box}>
            <img src="/chillhub.png" alt="jpg" />

            <input type="text" onChange={ (e) => {
              setEmail(e.target.value);
            }} />
            <button onClick={ () => {
              signIn("email", { email: email}); 
            }}>Sign in</button>

            <button onClick={ () => {
              signIn("discord");
            }}>Log in met discord</button>
          </div>
        </div>

      </main>
    </>
  );
};

export default Home;

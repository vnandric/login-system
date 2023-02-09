/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/user.module.scss";

import { useState } from "react";
import { api } from "../utils/api";

const NewUser = () => {

    const [user, setUser] = useState("");
    const changeName = api.user.changeName.useMutation();

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
                            setUser(e.target.value);
                        }}/>
                        <button onClick={ () => {
                            changeName.mutate({ name: user });  
                        }}>Submit</button>
                    </div>
                </div>

            </main>
        </>
    );
}

export default NewUser;
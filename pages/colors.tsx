import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { sprinkles } from '../styles/sprinkles.css';

export default function Colors() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className={
              sprinkles({
                color: 'blue-3',
                background: 'gray-2',
                '--background': 'gray-2'
              })
            }>
                Welcome To Colors
            </h1>
        </div>
    );
}
import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [numbersList, setNumbersList] = useState([]),
        [isLoading, setIsLoading] = useState(false)
    let result;

    useEffect(() => {
        let n;
        setIsLoading(true)
        fetch('api/hello')
            .then(res => res.json())
            .then(data => {
                setNumbersList(data.name)
                n = setTimeout(setIsLoading, 500, false);
            })

    }, [])

    if (isLoading) {
        result = <li>Loading...</li>
    } else if (!numbersList) {
        result = <li>Empty, no data</li>
    } else {
        // eslint-disable-next-line react/jsx-key
        result = numbersList.map(number => <li>{number}</li>)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <ul>{result}</ul>
            </main>

            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                   target="_blank"
                   rel="noopener noreferrer">
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
                    </span>
                </a>
            </footer>
        </div>
    )
}
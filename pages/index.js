import Head from "next/head";
import styles from "../styles/Home.module.css";
import Player from "../src/components/Player";
import PlayAll from "../src/components/PlayAll";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>TEST | Web Mixer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TEST | Web Mixer</h1>
        <p className={styles.description}><code className={styles.code}>otomanos</code></p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Player url={"https://www.youtube.com/embed/FUaOHywYeZ8"} />
          </div>

          <div className={styles.card}>
            <Player url={"https://www.youtube.com/watch?v=TvT-xSOYmiA"} />
          </div>

          <div className={styles.card}>
            <Player url={"https://www.youtube.com/watch?v=riWGdwy5lbs&t=2s"} />
          </div>

          <div className={styles.card}>
            <Player url={"https://www.youtube.com/watch?v=usy1sxVqeZ0"} />
          </div>
        </div>
        <div className={styles.grid} style={{width:"94%"}}>
          <PlayAll />
        </div>
      </main>
    </div>
  );
}

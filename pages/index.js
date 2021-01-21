import Head from "next/head";
import Content from "../components/content";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Patryck Golebiewski</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navigation />
        <Content />
        <Footer />
      </main>
    </div>
  );
}

import Head from "next/head";
import axios from "axios";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import NewProjects from "../components/projects/projects";
import styles from "../styles/Home.module.scss";
import CallToAction from "../components/calltoaction";

export default function Home({ data }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Patryck Golebiewski</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Navigation />
				<Hero />
				<div style={{ height: "100%", width: "100%" }}>
					<NewProjects data={data} />
				</div>
				<CallToAction />
				<Footer />
			</main>
		</div>
	);
}


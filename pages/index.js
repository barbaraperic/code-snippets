import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GlassPane from "../components/NavBar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Code Snippets</title>
				<meta name="description" content="Code Snippets Generator" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<GlassPane>
					<h1>hello</h1>
				</GlassPane>
			</main>

			<footer></footer>
		</div>
	);
}

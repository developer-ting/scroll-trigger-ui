// MODULES //

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BannerScrollTxt from "../src/components/BannerScrollTxt";

// SECTIONS //

// PLUGINS //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";
// IMAGES //

// DATA //

/** Home Page */
export default function HomePage() {
	gsap.registerPlugin(ScrollTrigger);
	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			{/* <Header /> */}

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<BannerScrollTxt gsap={gsap} ScrollTrigger={ScrollTrigger} />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			{/* <Footer /> */}
		</div>
	);
}

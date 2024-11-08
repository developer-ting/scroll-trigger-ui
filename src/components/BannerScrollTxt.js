// MODULES //
import React, { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/BannerScrollTxt.module.scss";

// IMAGES //
import Arrow from "@/../public/img/icons/arrow.svg";

// DATA //

/** BannerScrollTxt Component */
export default function BannerScrollTxt({ gsap, ScrollTrigger }) {
	useEffect(() => {
		const toastAnimTimeline = gsap.timeline({});
		const winW = window.innerWidth;
		const winH = window.innerHeight;

		/** animation for desktop */
		function toastAnimationDesktop() {
			toastAnimTimeline
				.fromTo(".aniTxt", { y: "100vh", color:"black", opacity: 0 }, { y: "0vh", opacity: 1 }, 0)
				.fromTo(".bubbles", { y: "100vh" }, { y: "0vh"}, 0)
				.fromTo(".bubbles1", { y: "100vh" }, { y: "0vh"}, 0);
			ScrollTrigger.create({
				trigger: `.${styles.BannerScrollTxt}`,
				animation: toastAnimTimeline,
				start: "top top",
				end: "bottom center",
				scrub: true,
				pin: true,
				markers: true,
				pinSpacing: true,
			});
		}

		/** Check if the window width is greater than a specific breakpoint (e.g., 768px) */
		// if (winW > 1199) {
		// 	/** Desktop view */
			
		// }
		toastAnimationDesktop();
	}, []);
	return (
		<div className={`${styles.abc}`}>
			<section className={`${styles.BannerScrollTxtTwo}`}>
				
			</section>
			<section className={`${styles.BannerScrollTxt}`}>
				<div className={`${styles.aniTxt} aniTxt`}>
					<h2>
						Animation Text
					</h2>
				</div>
				<div className={`${styles.bubbles} bubbles`}></div>
				<div className={`${styles.bubbles1} bubbles1`}></div>
			</section>
			<section className={`${styles.BannerScrollTxtTwo}`}>
				
			</section>
		</div>
		
	);
}

// MODULES //
import React, { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/BetterThanMeet.module.scss";

// IMAGES //
import circleOne from "@/../public/img/home/circleOne.png";
import circleTwo from "@/../public/img/home/circleTwo.png";

// DATA //

/** BetterThanMeet Component */
export default function BetterThanMeet({ gsap, ScrollTrigger }) {
	useEffect(() => {
		const betterThanMeetTimeline = gsap.timeline({});
		const betterThanMeetTimelinePin = gsap.timeline({});
		const winW = window.innerWidth;
		const winH = window.innerHeight;

		/** animation for desktop */
		function betterThanMeetDesktop() {
			betterThanMeetTimeline.fromTo(
				".circle_one",
				{ rotate: "-180deg" },
				{ rotate: "0deg", duration: 1 }
			);
			ScrollTrigger.create({
				trigger: `.${styles.BetterThanMeet}`,
				animation: betterThanMeetTimeline,
				start: "top bottom",
				end: "top top",
				scrub: true,
				// pin: true,
				//markers: true,
				// pinSpacing: true,
			});

			betterThanMeetTimelinePin

				.fromTo(
					".circle_two",
					{ rotate: "-180deg", opacity: 0 },
					{ rotate: "0deg", opacity: 1 }, "first",
				)
				.fromTo(
					".circle_one",
					{ rotate: "0deg", opacity: 1 },
					{ rotate: "180deg", opacity: 0 },"first",
				);

			ScrollTrigger.create({
				trigger: `.${styles.BetterThanMeet}`,
				animation: betterThanMeetTimelinePin,
				start: "top top",
				end: "bottom top",
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
		betterThanMeetDesktop();
	}, []);
	return (
		<div>
			<section className={`${styles.bg}`}></section>
			<section className={`${styles.BetterThanMeet}`}>
				<div className={`${styles.MeetCircleImg}`}>
					<img className="circle_one" src={circleOne.src} />
					<img className="circle_two" src={circleTwo.src} />
				</div>
				<div className={`${styles.MeetListContent}`}>
					<div className={`${styles.text}`}>Cholesterol</div>
					<div className={`${styles.text}`}>Less Calories</div>
					<div className={`${styles.text}`}>Cruelty- Free</div>
				</div>
			</section>
			<section className={`${styles.bg}`}></section>
		</div>
	);
}

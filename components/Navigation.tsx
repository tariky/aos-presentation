import Image from "next/image";
import React, { useRef } from "react";
import logoImage from "../public/logo.svg";
import logoDarkImage from "../public/logo-dark.svg";
import { Menu, X } from "lucide-react";
import { useCycle, motion, Variants } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import { NavigationList } from "./NavList";
import { useWindowSize } from "@uidotdev/usehooks";

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 88% 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 88% 40px)",
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export default function Navigation() {
	const { width } = useWindowSize();
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [bgHide, setBgHide] = React.useState(false);
	const containerRef = useRef(null);

	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleCircleClick = () => {
		setIsExpanded(!isExpanded);
	};

	const circleVariants: Variants = {
		initial: {
			scale: 1,
			clipPath: `circle(0px at ${width && width - 40}px 40px)`, // Start with a small circle
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
				delay: 0.4,
			},
		},
		expanded: {
			scale: 1,
			clipPath: `circle(1200px at ${width && width - 40}px 40px)`, // Expand to a full circle
			transition: {
				type: "spring",
				stiffness: 20,
				restDelta: 2,
			},
		},
	};

	return (
		// <motion.nav
		// 	initial={false}
		// 	animate={isOpen ? "open" : "closed"}
		// 	custom={height}
		// 	ref={containerRef}
		// 	className="fixed"
		// >
		// 	<motion.div
		// 		className="w-full absolute h-[100vh] top-0 left-0 flex bg-white z-20"
		// 		variants={sidebar}
		// 	>
		// 		<Menu
		// 			color={"black"}
		// 			className="ml-6 mt-6 absolute right-9 top-1"
		// 			onClick={() => {
		// 				toggleOpen();
		// 				if (isOpen) {
		// 					setTimeout(() => {
		// 						setBgHide(false);
		// 					}, 500);
		// 				} else {
		// 					setBgHide(true);
		// 				}
		// 			}}
		// 		/>
		// 	</motion.div>
		// </motion.nav>
		<motion.nav
			animate={isExpanded ? "expanded" : "initial"}
			className="flex justify-between bg-slate-950 px-6 py-5 items-center fixed w-full z-10 top-0"
		>
			<Image src={logoImage} alt="logo" />
			<motion.div
				initial="initial"
				animate={isExpanded ? "expanded" : "initial"}
				variants={circleVariants}
				transition={{ duration: 1 }}
				className={`bg-white absolute top-0 left-0 w-full h-[100vh] z-20`}
			/>
			{bgHide && <NavigationList isExpanded={isExpanded} />}
			{isExpanded ? (
				<X
					color={"black"}
					onClick={() => {
						handleCircleClick();
						setTimeout(() => {
							setBgHide(false);
						}, 400);
					}}
					className="z-40"
				/>
			) : (
				<Menu
					color={isExpanded ? "black" : "white"}
					onClick={() => {
						handleCircleClick();
						setBgHide(true);
					}}
					className="z-40"
				/>
			)}
		</motion.nav>
	);
}

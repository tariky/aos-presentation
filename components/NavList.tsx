import * as React from "react";
import { Variant, Variants, motion } from "framer-motion";
import { NavItem } from "./NavItem";
import { X } from "lucide-react";

type Props = {
	isExpanded: boolean;
};

const variants: Variants = {
	initial: {
		transition: { staggerChildren: 0.07, delayChildren: 1 },
	},
	expanded: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const item_variants: Variants = {
	initial: {
		y: 0,
		opacity: 0,
		transition: {
			y: { stiffness: 100, velocity: 100 },
			delay: 0,
		},
	},
	expanded: {
		y: 95,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: 100 },
			delay: 0.5,
		},
	},
};

export const NavigationList = ({ isExpanded }: Props) => (
	<motion.div
		variants={variants}
		animate={isExpanded ? "expanded" : "initial"}
		className={`${"flex"} z-30 absolute flex-col py-10 gap-6 pl-10 w-[100%] h-[100vh] left-0 top-0`}
	>
		<motion.h1
			variants={item_variants}
			className="text-slate-950 text-3xl"
			initial={{ opacity: 0 }}
		>
			Početna
		</motion.h1>
		<motion.h1
			variants={item_variants}
			className="text-slate-950 text-3xl"
			initial={{ opacity: 0 }}
		>
			Rješenja
		</motion.h1>
		<motion.h1
			variants={item_variants}
			className="text-slate-950 text-3xl"
			initial={{ opacity: 0 }}
		>
			Reference
		</motion.h1>
		<motion.h1
			variants={item_variants}
			className="text-slate-950 text-3xl"
			initial={{ opacity: 0 }}
		>
			Kontaktiraj nas
		</motion.h1>
	</motion.div>
);

const itemIds = [0, 1, 2, 3, 4];

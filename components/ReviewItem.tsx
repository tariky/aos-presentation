import { Variants, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
	logoSrc: StaticImageData | string;
	avatarSrc: StaticImageData | string;
	review: string;
	name: string;
	position: string;
};

const cardVariants: Variants = {
	offscreen: {
		scale: 0,
	},
	onscreen: {
		scale: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

export default function ReviewItem({
	logoSrc,
	avatarSrc,
	review,
	name,
	position,
}: Props) {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.6 }}
		>
			<motion.div
				variants={cardVariants}
				className="flex flex-col mt-9 gap-6"
			>
				<div className="h-[5rem] flex items-center">
					<Image src={logoSrc} className="w-[6rem]" alt="logo-firme" />
				</div>
				<p className="text-md text-slate-300">{review}</p>
				<div className="flex gap-6 items-center">
					<Image
						src={avatarSrc}
						alt="avatar"
						height={64}
						width={64}
						className="w-[4rem] h-[4rem] rounded-full object-cover"
					/>
					<div className="flex flex-col gap-1">
						<h3 className="font-bold">{name}</h3>
						<span className="text-slate-300">{position}</span>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

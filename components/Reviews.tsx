import React from "react";
import ReviewItem from "./ReviewItem";
import freshhair from "../public/alma.jpg";
import almaAvatar from "../public/alma-avatar.jpg";
import amraAvatar from "../public/amra.png";
import bisLogo from "../public/bis.svg";

export default function Reviews() {
	return (
		<section className="flex flex-col px-6 mt-20 sm:mt-44">
			<h4 className="text-emerald-400 sm:text-center">Recenzije</h4>
			<h1 className="text-3xl font-bold my-4 sm:text-center">
				Neka drugi govore umjesto nas
			</h1>
			<div className="flex flex-col gap-6 sm:gap-12 sm:grid sm:grid-cols-2">
				<ReviewItem
					logoSrc={freshhair}
					avatarSrc={almaAvatar}
					review={
						"Njihov tim za web razvoj pretvorio je našu viziju u stvarnost! Njihova stručnost i posvećenost stvaranju besprijekornih web aplikacija bili su impresivni. Hvala im na tome što su nam pomogli postići uspjeh u digitalnom svijetu."
					}
					name="Alma Dubravac"
					position="CEO - freshhair"
				/>
				<ReviewItem
					logoSrc={bisLogo}
					avatarSrc={amraAvatar}
					review={
						"Naša e-trgovina nikada nije bila tako uspješna. Zahvaljujući njihovoj platformi, naša prodaja je eksplodirala, a korisnici hvale intuitivno sučelje. Sve što trebamo za uspješno online poslovanje pronašli smo u njihovoj platformi za web trgovinu."
					}
					name="Amra Unkić"
					position="CEO - bis.ba"
				/>
			</div>
		</section>
	);
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Art of Selling",
	description: "Digitalna agencija za moderne biznise",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className} style={{ scrollBehavior: "smooth" }}>
				{children}
			</body>
		</html>
	);
}

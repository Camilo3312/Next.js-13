import Navigation from "../components/Navigation/Navigation"
import '../styles/globals.css'

export default function RootLayout({ children }) {
	return (
		<html>
			<title>Next.js 13</title>
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<link rel="icon" href="/favicon.ico" />
			<body>
				<Navigation />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}

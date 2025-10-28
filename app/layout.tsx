import type { Metadata, Viewport } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'
import { ReducedMotionProvider } from '@/components/Motion'
import { Nav } from '@/components/Nav'

const karla = Karla({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	style: ['normal', 'italic'],
	variable: '--font-karla',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'embark - travel smarter. live freer.',
	description: 'Embark is your ultimate travel companion, designed to help you explore the world with confidence and ease. From budgeting tools to safety features, embark has everything you need for a seamless journey.',
	keywords: ['travel app', 'travel companion', 'budget travel', 'travel safety', 'itinerary planner', 'travel alerts', 'location sharing', 'offline maps', 'travel deals', 'Embark'],
	authors: [{ name: 'embark' }],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		title: 'embark — travel smarter. live freer.',
		description: 'Embark is your ultimate travel companion, designed to help you explore the world with confidence and ease. From budgeting tools to safety features, embark has everything you need for a seamless journey.',
		type: 'website',
		locale: 'en_US',
		url: 'https://embarkapp.com',
		siteName: 'embark',
		images: [
			{
				url: '/og.png',
				width: 1200,
				height: 630,
				alt: 'embark - travel smarter. live freer.',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'embark — travel smarter. live freer.',
		description: 'Embark is your ultimate travel companion, designed to help you explore the world with confidence and ease. From budgeting tools to safety features, embark has everything you need for a seamless journey.',
		images: ['/og.png'],
		creator: '@embark',
		site: '@embark',
	},
	metadataBase: new URL('https://embarkapp.com'),
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#0A0F14',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark scroll-smooth">
			<body className={`${karla.variable} font-sans bg-bg text-text antialiased`}>
				<ReducedMotionProvider>
					<Nav />
					{children}
				</ReducedMotionProvider>
			</body>
		</html>
	)
}

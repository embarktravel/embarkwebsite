'use client'

import { EmbarkHero } from '@/components/EmbarkHero'
import { IntegrationsHub } from '@/components/IntegrationsHub'
import { TwoModes } from '@/components/TwoModes'
import { CoreFeatures } from '@/components/CoreFeatures'
import { AboutUs } from '@/components/AboutUs'
import { EmbarkFinalCTA } from '@/components/EmbarkFinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<main id="main-content" className="relative bg-bg">
			{/* Faint sunset gradient overlay (10% opacity) for cinematic warmth */}
			<div 
				className="fixed inset-0 pointer-events-none opacity-20 z-0"
				style={{
					background: 'linear-gradient(135deg, #FFB578 0%, transparent 70%)'
				}}
			/>
			
			<div className="relative z-10">
				{/* Hero Section */}
				<section id="hero">
					<EmbarkHero />
				</section>

				{/* Integrations Hub */}
				<section id="integrations">
					<IntegrationsHub />
				</section>

				{/* Core Features */}
				<section id="core-features">
					<CoreFeatures />
				</section>

				{/* Two Modes: Explore & Travel */}
				<section id="two-modes">
					<TwoModes />
				</section>

				{/* Final CTA / Waitlist Section */}
				<section id="waitlist">
					<EmbarkFinalCTA />
				</section>

				{/* About Us / Team Section */}
				<section id="about-us">
					<AboutUs />
				</section>

				{/* Footer */}
				<Footer />
			</div>
		</main>
	)
}

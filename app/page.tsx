'use client'

import { EmbarkHero } from '@/components/EmbarkHero'
import { IntegrationsHub } from '@/components/IntegrationsHub'
import { ProblemSolution } from '@/components/ProblemSolution'
import { TwoModes } from '@/components/TwoModes'
import { CoreFeatures } from '@/components/CoreFeatures'
import { Community } from '@/components/Community'
import { TrustSafety } from '@/components/TrustSafety'
import { EmbarkFinalCTA } from '@/components/EmbarkFinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<main id="main-content">
			{/* Hero Section */}
			<section id="hero">
				<EmbarkHero />
			</section>

			{/* Integrations Hub */}
			<section id="integrations">
				<IntegrationsHub />
			</section>

			{/* Problem vs Solution Section */}
			<section id="problem-solution">
				<ProblemSolution />
			</section>

			{/* Two Modes: Explore & Travel */}
			<section id="two-modes">
				<TwoModes />
			</section>

			{/* Core Features */}
			<section id="core-features">
				<CoreFeatures />
			</section>

			{/* Community & Testimonials */}
			<section id="community">
				<Community />
			</section>

			{/* Trust & Safety */}
			<section id="trust-safety">
				<TrustSafety />
			</section>

			{/* Final CTA / Waitlist Section */}
			<section id="waitlist">
				<EmbarkFinalCTA />
			</section>

			{/* Footer */}
			<Footer />
		</main>
	)
}

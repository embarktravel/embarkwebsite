'use client'

import { motion } from 'framer-motion'

const trustFeatures = [
	{
		icon: '🔒',
		title: 'Encrypted Wallet',
		description: '256-bit encryption keeps your payment info and transactions secure.'
	},
	{
		icon: '🧳',
		title: 'Verified Local Tips',
		description: 'Curated insights from verified travelers and local experts you can trust.'
	},
	{
		icon: '🆘',
		title: 'Smart Safety Check-Ins',
		description: 'Automatic location sharing with loved ones when you need it most.'
	}
]

export function TrustSafety() {
	return (
		<section className="relative py-20 lg:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="font-bold mb-6 text-pink" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
						Travel with confidence.
					</h2>
					<p className="text-xl lg:text-2xl text-text/80 max-w-3xl mx-auto">
						Your privacy and safety are at the heart of every feature.
						<br />
						<strong className="text-orange">Embark never sells your data</strong> and uses 256-bit encryption to keep your wallet and location secure.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
					{trustFeatures.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.15 }}
							className="text-center"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								className="text-6xl mb-6 inline-block p-6 rounded-3xl bg-white shadow-lg border border-pink/20"
							>
								{feature.icon}
							</motion.div>
							<h3 className="text-xl font-bold mb-3 text-pink">
								{feature.title}
							</h3>
							<p className="text-text/70 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className="text-center mt-16"
				>
					<p className="text-muted italic text-lg">
						"Built responsibly for travelers, by travelers."
					</p>
				</motion.div>
			</div>
		</section>
	)
}

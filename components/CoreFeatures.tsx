'use client'

import { motion } from 'framer-motion'

const features = [
	{
		emoji: '✈️',
		title: 'Smart Planning',
		description: 'AI-powered recommendations for destinations, flights, hotels, and checklists — tailored to your budget and travel style.',
		color: 'orange'
	},
	{
		emoji: '💬',
		title: 'Instant Translation',
		description: 'Speak and understand anywhere. Type, talk, or use your camera for real-time translations.',
		color: 'peach'
	},
	{
		emoji: '💰',
		title: 'Smart Wallet',
		description: 'Track expenses automatically, manage your virtual card, and see where your money goes — all in your local currency.',
		color: 'coral'
	},
	{
		emoji: '🧭',
		title: 'Safety Check-Ins',
		description: 'Instantly notify loved ones when you land or move between cities. Stay informed with verified local alerts.',
		color: 'pink'
	},
	{
		emoji: '🤝',
		title: 'Traveler Groups',
		description: 'Join curated community meetups and group experiences nearby — connect safely, share moments, and make friends.',
		color: 'orange'
	},
	{
		emoji: '📸',
		title: 'AI Memories',
		description: 'Relive your trip with daily recaps, smart photo sorting, and one-tap AI montages ready to share.',
		color: 'peach'
	}
]

export function CoreFeatures() {
	return (
		<section id="features" className="py-20 lg:py-32 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-bold mb-6 text-orange" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
						Everything you need to travel confidently
					</h2>
					<p className="text-xl text-text/80 max-w-2xl mx-auto">
						Six powerful features designed to make every journey smoother, safer, and more memorable.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -8, transition: { duration: 0.2 } }}
							className="card-glass p-8 hover:shadow-glow-lg transition-all duration-300"
						>
							<div className={`text-6xl mb-6 inline-block p-4 rounded-2xl bg-${feature.color}/10`}>
								{feature.emoji}
							</div>
							<h3 className={`text-2xl font-bold mb-4 text-${feature.color}`}>
								{feature.title}
							</h3>
							<p className="text-text/80 leading-relaxed">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8 }}
					className="text-center mt-16"
				>
					<a href="#waitlist" className="btn-primary text-lg px-12 py-5 rounded-2xl">
						Get Early Access →
					</a>
				</motion.div>
			</div>
		</section>
	)
}

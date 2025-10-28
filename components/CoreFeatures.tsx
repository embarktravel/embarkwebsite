'use client'

import { motion } from 'framer-motion'

// SVG Icons for each feature
const FeatureIcons = {
	plane: (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
			<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
		</svg>
	),
	message: (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
			<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
			<path d="M8 10h8M8 14h4" />
		</svg>
	),
	wallet: (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
			<path d="M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5M18 12a2 2 0 000 4h4v-4h-4z" />
		</svg>
	),
	compass: (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
			<circle cx="12" cy="12" r="10" />
			<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.5" />
		</svg>
	),
	users: (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
			<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
		</svg>
	),
	camera: (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
			<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
			<circle cx="12" cy="13" r="4" />
		</svg>
	)
}

const features = [
	{
		icon: 'plane',
		title: 'Smart Planning',
		description: 'AI-powered recommendations for destinations, flights, hotels, and checklists — tailored to your budget and travel style.',
		color: '#FF8559'
	},
	{
		icon: 'message',
		title: 'Instant Translation',
		description: 'Speak and understand anywhere. Type, talk, or use your camera for real-time translations.',
		color: '#FFB578'
	},
	{
		icon: 'wallet',
		title: 'Smart Wallet',
		description: 'Track expenses automatically, manage your virtual card, and see where your money goes — all in your local currency.',
		color: '#E65447'
	},
	{
		icon: 'compass',
		title: 'Safety Check-Ins',
		description: 'Instantly notify loved ones when you land or move between cities. Stay informed with verified local alerts.',
		color: '#CF5376'
	},
	{
		icon: 'users',
		title: 'Traveler Groups',
		description: 'Join curated community meetups and group experiences nearby — connect safely, share moments, and make friends.',
		color: '#FF8559'
	}
]

export function CoreFeatures() {
	return (
		<section id="features" className="relative py-20 lg:py-25">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-10"
				>
					<h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#CF5376' }}>
						everything you need to travel confidently.
					</h2>
					<p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
						powerful features designed to make every journey smoother, safer, and more memorable.
					</p>
				</motion.div>

				<div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto mb-8 mt-20">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
							className="flex flex-col items-center text-center"
						>
							<div 
								className="relative w-40 h-40 rounded-full bg-transparent border-1 transition-all duration-300 flex flex-col items-center justify-center p-4 mb-4"
								style={{ borderColor: feature.color }}
							>
								<div className="mb-2" style={{ color: feature.color }}>
									{FeatureIcons[feature.icon as keyof typeof FeatureIcons]}
								</div>
								<h3 className="text-base font-bold" style={{ color: feature.color }}>
									{feature.title}
								</h3>
							</div>
							<p className="text-sm text-text/80 leading-relaxed max-w-[160px]">
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

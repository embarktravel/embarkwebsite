'use client'

import { motion } from 'framer-motion'
import WaitlistForm from '@/components/WaitlistForm'

export function EmbarkFinalCTA() {
	return (
		<section id="waitlist" className="py-20 lg:py-32 bg-gradient-to-b from-peach/5 via-orange/5 to-pink/5 relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-10 w-64 h-64 bg-orange rounded-full blur-3xl" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-pink rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="font-bold mb-6 bg-gradient-to-r from-orange via-coral to-pink bg-clip-text text-transparent" 
						style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
						Your next adventure starts here.
					</h2>
					<p className="text-xl lg:text-2xl text-text/80 max-w-2xl mx-auto">
						Join thousands of early explorers shaping the future of travel.
						<br />
						<strong className="text-orange">Be among the first to experience Embark.</strong>
					</p>
				</motion.div>

				{/* Waitlist Form */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
					className="max-w-2xl mx-auto"
				>
					<WaitlistForm />
				</motion.div>

				{/* Visual decoration */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className="mt-16 flex justify-center gap-8 flex-wrap opacity-20"
				>
					{['✈️', '🌍', '📸', '🗺️', '🎒', '🌅'].map((emoji, i) => (
						<motion.div
							key={i}
							animate={{
								y: [0, -10, 0],
								rotate: [0, 5, -5, 0]
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								delay: i * 0.3
							}}
							className="text-6xl"
						>
							{emoji}
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

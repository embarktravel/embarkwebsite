'use client'

import { motion } from 'framer-motion'

export function ProblemSolution() {
	return (
		<section className="py-20 lg:py-32 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="font-bold mb-6 text-coral" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
						"Travel shouldn't feel fragmented."
					</h2>
					<p className="text-xl lg:text-2xl text-text/80 max-w-3xl mx-auto">
						Flights in one app. Budgets in another. Notes lost in a tab you forgot to reopen.
						<br />
						<strong className="text-orange">Embark brings everything together</strong> — planning, connection, and safety — in one seamless experience.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
					{/* Left: Messy Icons */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="text-center mb-4">
							<p className="text-muted font-semibold uppercase tracking-wide">Before</p>
						</div>
						<div className="grid grid-cols-3 gap-4 opacity-60">
							{['✈️ Flights', '📝 Notes', '💰 Budget', '📍 Maps', '📸 Photos', '🗂️ Docs'].map((item, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, rotate: -5 }}
									whileInView={{ opacity: 1, rotate: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 + i * 0.1 }}
									className="bg-gray-100 rounded-xl p-4 text-center border border-gray-200"
								>
									<span className="text-sm text-gray-600">{item}</span>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right: Unified Embark */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="relative"
					>
						<div className="text-center mb-4">
							<p className="text-orange font-semibold uppercase tracking-wide">After</p>
						</div>
						<div className="relative">
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="bg-gradient-to-br from-orange via-peach to-pink rounded-3xl p-12 text-center shadow-glow-lg"
							>
								<div className="text-6xl mb-4">✈️</div>
								<h3 className="text-2xl font-bold text-white mb-2">Embark</h3>
								<p className="text-white/90">Everything. One app.</p>
							</motion.div>
							
							{/* Connecting lines animation */}
							<div className="absolute inset-0 pointer-events-none">
								{[...Array(6)].map((_, i) => (
									<motion.div
										key={i}
										className="absolute w-1 h-1 bg-orange rounded-full"
										initial={{ opacity: 0, scale: 0 }}
										animate={{ 
											opacity: [0, 1, 0],
											scale: [0, 1, 0],
											x: [0, -100 + Math.random() * 200],
											y: [0, -100 + Math.random() * 200]
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											delay: i * 0.3,
											ease: "easeInOut"
										}}
										style={{
											left: '50%',
											top: '50%'
										}}
									/>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.8 }}
					className="text-center mt-12"
				>
					<a href="#modes" className="text-orange hover:text-coral transition-colors font-semibold text-lg flex items-center justify-center gap-2">
						See How It Works
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</a>
				</motion.div>
			</div>
		</section>
	)
}

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function TwoModes() {
	const [activeMode, setActiveMode] = useState<'explore' | 'travel'>('explore')

	return (
		<section id="modes" className="py-20 lg:py-32 bg-gradient-to-b from-peach/5 via-white to-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-bold mb-6 text-orange" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
						Two Modes, One Journey
					</h2>
					<p className="text-xl lg:text-2xl text-text/80 max-w-3xl mx-auto">
						The world doesn't stay still — and neither should your travel app.
						<br />
						Embark adapts to your trip's stage, from first idea to final flight home.
					</p>
				</motion.div>

				{/* Mode Toggle */}
				<div className="flex justify-center mb-12">
					<div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-orange/10">
						<button
							onClick={() => setActiveMode('explore')}
							className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
								activeMode === 'explore'
									? 'bg-gradient-to-r from-orange to-peach text-white shadow-glow'
									: 'text-text/60 hover:text-orange'
							}`}
						>
							🌅 Explore Mode
						</button>
						<button
							onClick={() => setActiveMode('travel')}
							className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
								activeMode === 'travel'
									? 'bg-gradient-to-r from-coral to-pink text-white shadow-glow-coral'
									: 'text-text/60 hover:text-coral'
							}`}
						>
							🗺️ Travel Mode
						</button>
					</div>
				</div>

				{/* Mode Content */}
				<div className="max-w-5xl mx-auto">
					{activeMode === 'explore' && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="card-glass p-8 lg:p-12"
						>
							<div className="grid md:grid-cols-2 gap-8 items-center">
								<div>
									<h3 className="text-3xl font-bold text-orange mb-4">🌅 Explore Mode</h3>
									<p className="text-xl text-text/80 mb-6">
										Plan, budget, and dream — all in one flow.
									</p>
									<div className="space-y-4">
										{[
											{ emoji: '✨', title: 'Inspire', desc: 'AI-curated destinations based on your interests' },
											{ emoji: '📋', title: 'Plan', desc: 'Smart itineraries, checklists, and booking links' },
											{ emoji: '💰', title: 'Budget', desc: 'Track costs before you even pack your bags' },
											{ emoji: '🎒', title: 'Prep', desc: 'Personalized packing lists and travel docs' }
										].map((item, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: i * 0.1 }}
												className="flex items-start gap-4 p-4 rounded-xl bg-peach/10 border border-peach/20"
											>
												<span className="text-3xl">{item.emoji}</span>
												<div>
													<h4 className="font-bold text-lg text-orange">{item.title}</h4>
													<p className="text-text/70">{item.desc}</p>
												</div>
											</motion.div>
										))}
									</div>
								</div>
								<div className="relative h-96 bg-gradient-to-br from-orange/20 to-peach/20 rounded-3xl flex items-center justify-center">
									<p className="text-muted italic">[ Phone mockup: Explore dashboard ]</p>
								</div>
							</div>
						</motion.div>
					)}

					{activeMode === 'travel' && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="card-glass p-8 lg:p-12"
						>
							<div className="grid md:grid-cols-2 gap-8 items-center">
								<div>
									<h3 className="text-3xl font-bold text-coral mb-4">🗺️ Travel Mode</h3>
									<p className="text-xl text-text/80 mb-6">
										Stay connected, organized, and safe on the go.
									</p>
									<div className="space-y-4">
										{[
											{ emoji: '🌐', title: 'Engage', desc: 'Real-time translation and local insights' },
											{ emoji: '🤝', title: 'Connect', desc: 'Join verified traveler groups nearby' },
											{ emoji: '🛡️', title: 'Stay Safe', desc: 'Auto check-ins and emergency alerts' },
											{ emoji: '📸', title: 'Record Memories', desc: 'AI-sorted photos and daily recaps' }
										].map((item, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: i * 0.1 }}
												className="flex items-start gap-4 p-4 rounded-xl bg-coral/10 border border-coral/20"
											>
												<span className="text-3xl">{item.emoji}</span>
												<div>
													<h4 className="font-bold text-lg text-coral">{item.title}</h4>
													<p className="text-text/70">{item.desc}</p>
												</div>
											</motion.div>
										))}
									</div>
								</div>
								<div className="relative h-96 bg-gradient-to-br from-coral/20 to-pink/20 rounded-3xl flex items-center justify-center">
									<p className="text-muted italic">[ Phone mockup: Travel dashboard ]</p>
								</div>
							</div>
						</motion.div>
					)}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="text-center mt-12"
				>
					<a href="#features" className="btn-glass text-lg px-8 py-4">
						Explore Both Modes →
					</a>
				</motion.div>
			</div>
		</section>
	)
}

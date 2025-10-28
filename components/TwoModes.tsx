'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

// SVG Icons for modes
const ModeIcons = {
	explore: (
		<svg viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
			<g>
				<path d="M511.403,394.027l-16.299-293.397C491.968,44.203,445.227,0,388.736,0c-29.589,0-57.067,11.84-77.376,33.323 c-20.331,21.483-30.635,49.579-28.992,79.125L283.243,128h-54.485l0.875-15.552c1.643-29.547-8.661-57.643-28.992-79.125 C180.331,11.84,152.853,0,123.264,0C66.773,0,20.032,44.203,16.896,100.629L0.597,394.027C0.213,397.739,0,401.515,0,405.333 C0,464.149,47.851,512,106.667,512c58.219,0,105.557-46.955,106.496-104.96c0.021-0.192,0.128-0.341,0.128-0.512l5.995-107.861 h73.429l5.995,107.861c0,0.171,0.107,0.32,0.128,0.512C299.776,465.045,347.115,512,405.333,512 C464.149,512,512,464.149,512,405.333C512,401.515,511.787,397.739,511.403,394.027z M106.667,469.333 c-35.243,0-63.893-28.629-63.979-63.829l0.043-0.725c0.021-3.392,0.448-6.677,1.003-9.941c0.299-1.771,0.683-3.541,1.131-5.269 c0.576-2.219,1.237-4.395,2.027-6.507c0.619-1.664,1.28-3.285,2.027-4.864c0.981-2.048,2.048-3.989,3.221-5.909 c0.896-1.493,1.813-2.965,2.837-4.352c1.323-1.835,2.773-3.52,4.288-5.205c1.131-1.259,2.24-2.539,3.477-3.712 c1.664-1.579,3.477-2.987,5.312-4.373c1.323-1.024,2.581-2.069,3.989-2.987c2.005-1.301,4.16-2.368,6.315-3.435 c1.429-0.704,2.773-1.515,4.245-2.112c2.475-1.003,5.099-1.707,7.701-2.389c1.323-0.363,2.581-0.875,3.925-1.131 c4.032-0.789,8.171-1.259,12.437-1.259c35.285,0,64,28.715,64,64C170.667,440.619,141.952,469.333,106.667,469.333z M221.675,256 l4.736-85.333h59.179L290.325,256H221.675z M405.333,469.333c-35.285,0-64-28.715-64-64c0-35.285,28.715-64,64-64 c4.267,0,8.405,0.469,12.437,1.259c1.344,0.256,2.603,0.768,3.925,1.131c2.603,0.683,5.227,1.387,7.701,2.389 c1.472,0.597,2.816,1.408,4.245,2.112c2.155,1.088,4.309,2.133,6.315,3.435c1.408,0.917,2.667,1.963,3.989,2.987 c1.835,1.387,3.648,2.795,5.312,4.373c1.237,1.173,2.347,2.453,3.477,3.712c1.515,1.685,2.965,3.371,4.288,5.205 c1.024,1.387,1.941,2.859,2.837,4.352c1.173,1.899,2.24,3.861,3.2,5.909c0.768,1.579,1.429,3.221,2.048,4.864 c0.789,2.112,1.451,4.288,2.027,6.507c0.448,1.728,0.832,3.477,1.131,5.269c0.555,3.264,0.981,6.549,1.003,9.941l0.043,0.725 C469.227,440.704,440.576,469.333,405.333,469.333z"></path>
			</g>
		</svg>
	),
	travel: (
		<svg viewBox="0 0 371.656 371.656" className="w-6 h-6" fill="currentColor">
			<g>
				<path d="M37.833,212.348c-0.01,0.006-0.021,0.01-0.032,0.017c-4.027,2.093-5.776,6.929-4.015,11.114 c1.766,4.199,6.465,6.33,10.787,4.892l121.85-40.541l-22.784,37.207c-1.655,2.703-1.305,6.178,0.856,8.497 c2.161,2.318,5.603,2.912,8.417,1.449l23.894-12.416c0.686-0.356,1.309-0.823,1.844-1.383l70.785-73.941l87.358-45.582 c33.085-17.835,29.252-31.545,27.29-35.321c-1.521-2.928-4.922-6.854-12.479-8.93c-7.665-2.106-18.021-1.938-31.653,0.514 c-4.551,0.818-7.063,0.749-9.723,0.676c-9.351-0.256-15.694,0.371-47.188,16.736L90.788,164.851l-66.8-34.668 c-2.519-1.307-5.516-1.306-8.035,0.004l-11.256,5.85c-2.317,1.204-3.972,3.383-4.51,5.938c-0.538,2.556,0.098,5.218,1.732,7.253 l46.364,57.749L37.833,212.348z"></path>
				<path d="M355.052,282.501H28.948c-9.17,0-16.604,7.436-16.604,16.604s7.434,16.604,16.604,16.604h326.104 c9.17,0,16.604-7.434,16.604-16.604C371.655,289.934,364.222,282.501,355.052,282.501z"></path>
			</g>
		</svg>
	)
}

// Feature Icons for Explore mode
const FeatureIcons = {
	inspire: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
		</svg>
	),
	plan: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
			<line x1="9" y1="9" x2="15" y2="9"/>
			<line x1="9" y1="13" x2="15" y2="13"/>
			<line x1="9" y1="17" x2="13" y2="17"/>
		</svg>
	),
	budget: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<line x1="12" y1="1" x2="12" y2="23"/>
			<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
		</svg>
	),
	prep: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M20 7h-3a2 2 0 0 1-2-2V2"/>
			<path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/>
			<path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"/>
		</svg>
	)
}

// Travel Mode Icons
const TravelIcons = {
	engage: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="12" r="10"/>
			<line x1="2" y1="12" x2="22" y2="12"/>
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
		</svg>
	),
	connect: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
			<circle cx="9" cy="7" r="4"/>
			<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
			<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
		</svg>
	),
	safety: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
		</svg>
	),
	memories: (
		<svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
			<circle cx="12" cy="13" r="4"/>
		</svg>
	)
}

export function TwoModes() {
	const [activeMode, setActiveMode] = useState<'explore' | 'travel'>('explore')

	return (
		<section id="modes" className="relative py-20 lg:py-25">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#CF5376' }}>
						two modes, one journey.
					</h2>
					<p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
						the world doesn't stay still — and neither should your travel app.
						<br />
						<strong className='text-orange'>embark adapts to your trip's stage,</strong> from first idea to final flight home.
					</p>
				</motion.div>

				{/* Mode Toggle */}
				<div className="flex justify-center mb-12">
					<div className="inline-flex rounded-2xl p-2 border relative">
						{/* Sliding background indicator */}
						<motion.div
							className="absolute top-2 bottom-2 rounded-xl bg-sunset"
							initial={false}
							animate={{
								left: activeMode === 'explore' ? '0.5rem' : '50%',
								width: activeMode === 'explore' ? 'calc(50% - 0.5rem)' : 'calc(50% - 0.5rem)',
							}}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						/>
						
						<button
							onClick={() => setActiveMode('explore')}
							className={`relative z-10 px-8 py-4 rounded-3xl font-semibold transition-colors duration-300 flex items-center gap-2 ${
								activeMode === 'explore'
									? 'text-white bg-sunset'
									: 'text-sunset hover:text-orange'
							}`}
						>
							<span className={activeMode === 'explore' ? 'text-white' : 'text-orange'}>
								{ModeIcons.explore}
							</span>
							Explore Mode
						</button>
						<button
							onClick={() => setActiveMode('travel')}
							className={`relative z-10 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center gap-2 ${
								activeMode === 'travel'
									? 'text-white bg-sunset'
									: 'text-sunset hover:text-coral'
							}`}
						>
							<span className={activeMode === 'travel' ? 'text-white' : 'text-coral'}>
								{ModeIcons.travel}
							</span>
							Travel Mode
						</button>
					</div>
				</div>

				{/* Mode Content */}
				<div className="max-w-5xl mx-auto relative overflow-hidden">
					<AnimatePresence mode="wait">
						{activeMode === 'explore' && (
							<motion.div
								key="explore"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ type: 'spring', stiffness: 300, damping: 30 }}
								className="p-8 lg:p-12"
							>
							<div className="grid md:grid-cols-2 gap-8 items-center">
								<motion.div
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
								>
									<h3 className="text-3xl font-bold text-mauve mb-4 flex items-center gap-3">
										<span className="text-mauve">{ModeIcons.explore}</span>
										explore mode
									</h3>
									<p className="text-xl text-text/80 mb-6">
										Plan, budget, and dream — all in one flow.
									</p>
									<div className="space-y-4">
										{[
											{ icon: FeatureIcons.inspire, title: 'Inspire', desc: 'AI-curated destinations based on your interests' },
											{ icon: FeatureIcons.plan, title: 'Plan', desc: 'Smart itineraries, checklists, and booking links' },
											{ icon: FeatureIcons.budget, title: 'Budget', desc: 'Track costs before you even pack your bags' },
											{ icon: FeatureIcons.prep, title: 'Prep', desc: 'Personalized packing lists and travel docs' }
										].map((item, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.2 + i * 0.1 }}
												className="flex items-start gap-4 p-4 rounded-xl bg-peach/5 border border-peach/10"
											>
												<span className="text-mauve">{item.icon}</span>
												<div>
													<h4 className="font-bold text-lg text-sunset">{item.title}</h4>
													<p className="text-text/70">{item.desc}</p>
												</div>
											</motion.div>
										))}
									</div>
								</motion.div>
								<motion.div 
									className="relative h-[32rem] rounded-3xl overflow-hidden flex items-center justify-center"
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
								>
									<img 
										src="/feedupright.png" 
										alt="Explore dashboard on phone" 
										className="h-full w-auto object-contain"
									/>
								</motion.div>
							</div>
						</motion.div>
					)}

					{activeMode === 'travel' && (
						<motion.div
							key="travel"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							className="p-8 lg:p-12"
						>
							<div className="grid md:grid-cols-2 gap-8 items-center">
								<motion.div
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
								>
									<h3 className="text-3xl font-bold text-mauve mb-4 flex items-center gap-3">
										<span className="text-mauve">{ModeIcons.travel}</span>
										travel mode
									</h3>
									<p className="text-xl text-text/80 mb-6">
										Stay connected, organized, and safe on the go.
									</p>
									<div className="space-y-4">
										{[
											{ icon: TravelIcons.engage, title: 'Engage', desc: 'Real-time translation and local insights' },
											{ icon: TravelIcons.connect, title: 'Connect', desc: 'Join verified traveler groups nearby' },
											{ icon: TravelIcons.safety, title: 'Stay Safe', desc: 'Auto check-ins and emergency alerts' },
											{ icon: TravelIcons.memories, title: 'Record Memories', desc: 'AI-sorted photos and daily recaps' }
										].map((item, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.2 + i * 0.1 }}
												className="flex items-start gap-4 p-4 rounded-xl bg-peach/5 border border-peach/10"
											>
												<span className="text-mauve">{item.icon}</span>
												<div>
													<h4 className="font-bold text-lg text-sunset">{item.title}</h4>
													<p className="text-text/70">{item.desc}</p>
												</div>
											</motion.div>
										))}
									</div>
								</motion.div>
								<motion.div 
									className="relative h-[32rem] rounded-3xl overflow-hidden flex items-center justify-center"
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
								>
									<img 
										src="/feedtilted.png" 
										alt="Travel dashboard on phone" 
										className="h-full w-auto object-contain"
									/>
								</motion.div>
							</div>
						</motion.div>
					)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	)
}
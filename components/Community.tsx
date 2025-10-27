'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
	{
		quote: "Embark helped me plan Tokyo in a single night.",
		author: "@nomadnate",
		location: "Tokyo, Japan",
		coords: { x: 75, y: 35 }
	},
	{
		quote: "I met amazing people through group experiences in Lisbon.",
		author: "@sarah_travels",
		location: "Lisbon, Portugal",
		coords: { x: 30, y: 40 }
	},
	{
		quote: "Finally, one app for planning, budgeting, and staying safe.",
		author: "@king_in_paris",
		location: "Paris, France",
		coords: { x: 35, y: 35 }
	}
]

export function Community() {
	const [activeTestimonial, setActiveTestimonial] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className="py-20 lg:py-32 bg-gradient-to-b from-white via-peach/5 to-white overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="font-bold mb-6 text-coral" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
						Real travelers. Real stories.
					</h2>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					{/* Left: Testimonial Carousel */}
					<div className="relative h-64">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 100 }}
								animate={{
									opacity: activeTestimonial === index ? 1 : 0,
									x: activeTestimonial === index ? 0 : activeTestimonial > index ? -100 : 100,
									scale: activeTestimonial === index ? 1 : 0.8
								}}
								transition={{ duration: 0.5 }}
								className={`absolute inset-0 ${activeTestimonial === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
							>
								<div className="card-glass p-8 h-full flex flex-col justify-center">
									<p className="text-2xl lg:text-3xl font-semibold text-text mb-6 italic">
										"{testimonial.quote}"
									</p>
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-pink flex items-center justify-center text-white font-bold text-xl">
											{testimonial.author[1].toUpperCase()}
										</div>
										<div>
											<p className="font-bold text-orange">{testimonial.author}</p>
											<p className="text-muted text-sm">{testimonial.location}</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}

						{/* Dots Navigation */}
						<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveTestimonial(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										activeTestimonial === index
											? 'bg-orange w-8'
											: 'bg-orange/30 hover:bg-orange/50'
									}`}
								/>
							))}
						</div>
					</div>

					{/* Right: World Map with Dots */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className="relative h-96 bg-gradient-to-br from-orange/5 to-peach/10 rounded-3xl overflow-hidden border border-orange/10"
					>
						{/* Simplified world map background */}
						<div className="absolute inset-0 opacity-10">
							<svg viewBox="0 0 100 100" className="w-full h-full">
								<circle cx="30" cy="40" r="15" fill="currentColor" className="text-orange" />
								<circle cx="75" cy="35" r="12" fill="currentColor" className="text-peach" />
								<circle cx="50" cy="60" r="8" fill="currentColor" className="text-coral" />
							</svg>
						</div>

						{/* Animated location dots */}
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								className="absolute"
								style={{
									left: `${testimonial.coords.x}%`,
									top: `${testimonial.coords.y}%`
								}}
								initial={{ scale: 0 }}
								animate={{
									scale: activeTestimonial === index ? [1, 1.5, 1] : 1,
									opacity: activeTestimonial === index ? 1 : 0.5
								}}
								transition={{
									scale: {
										duration: 2,
										repeat: Infinity,
										repeatType: "reverse"
									}
								}}
							>
								<div className="relative">
									<div className={`w-4 h-4 rounded-full ${
										activeTestimonial === index ? 'bg-coral' : 'bg-orange'
									} shadow-glow`} />
									{activeTestimonial === index && (
										<motion.div
											className="absolute inset-0 rounded-full bg-coral"
											initial={{ scale: 1, opacity: 0.5 }}
											animate={{ scale: 3, opacity: 0 }}
											transition={{ duration: 2, repeat: Infinity }}
										/>
									)}
								</div>
							</motion.div>
						))}

						{/* Connecting lines */}
						<svg className="absolute inset-0 w-full h-full pointer-events-none">
							<motion.path
								d="M30,40 Q50,30 75,35"
								fill="none"
								stroke="currentColor"
								strokeWidth="0.5"
								className="text-orange/20"
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
							/>
						</svg>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="text-center mt-16"
				>
					<a href="#waitlist" className="btn-ghost text-lg px-8 py-4">
						Join the Early Explorer Community →
					</a>
				</motion.div>
			</div>
		</section>
	)
}

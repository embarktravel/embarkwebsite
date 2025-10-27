'use client'

import { motion } from 'framer-motion'
import { useReduced } from './Motion'
import { PlaneIcon, GlobeIcon } from './Icons'

const footerVariants = {
	hidden: { 
		opacity: 0, 
		y: 20
	},
	visible: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1]
		}
	}
}

const links = [
	{ label: 'About', href: '#about' },
	{ label: 'Press', href: '#press' },
	{ label: 'Careers', href: '#careers' },
	{ label: 'Privacy', href: '#privacy' },
	{ label: 'Contact', href: '#contact' }
]

export default function Footer() {
	const shouldReduceMotion = useReduced()

	return (
		<footer className="bg-gradient-sunset-flow border-t border-mauve/30">
			<div className="max-w-7xl mx-auto px-6 py-12">
				<motion.div
					variants={shouldReduceMotion ? {} : footerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-8"
				>
					{/* Top section - Logo and tagline */}
					<div className="text-center space-y-3">
						<div className="flex items-center justify-center gap-2">
							<h3 className="text-3xl font-bold text-white">
								embark
							</h3>
							<PlaneIcon className="w-7 h-7 text-white" />
						</div>
						<p className="text-apricot/90 italic flex items-center justify-center gap-2">
							<span>Built by a global team of students and explorers.</span>
							<GlobeIcon className="w-5 h-5 text-apricot inline" />
						</p>
					</div>

					{/* Links */}
					<nav className="flex justify-center" aria-label="Footer navigation">
						<ul className="flex flex-wrap items-center justify-center gap-6">
							{links.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Copyright */}
					<div className="text-center pt-6 border-t border-white/20">
						<p className="text-sm text-white/80">
							© 2025 Embark, Inc. | All Rights Reserved
						</p>
					</div>
				</motion.div>
			</div>
		</footer>
	)
}

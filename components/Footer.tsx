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
	{ label: 'product', href: '#integrations' },
	{ label: 'connect', href: '#waitlist' },
	{ label: 'about us', href: '#about-us' }
]

export default function Footer() {
	const shouldReduceMotion = useReduced()

	return (
		<footer className="relative bg-bg border-mauve/20 rounded-t-3xl overflow-hidden">
			{/* Gradient overlay for cinematic warmth */}
			<div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{background: 'linear-gradient(135deg, #FFB578 0%, transparent 70%)'}} />
			<div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
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
							<img src="/embark.png" alt="Embark" className="h-20 w-auto mx-auto mb-2" />
						</div>
					</div>

					{/* Links */}
					<nav className="flex justify-center" aria-label="Footer navigation">
						<ul className="flex flex-wrap items-center justify-center gap-6">
							{links.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-charcoal/80 hover:text-sunset transition-colors duration-200 font-medium px-3 py-1 rounded-xl"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Copyright */}
					<div className="text-center">
						<p className="text-sm text-muted">
							© 2025 Embark, Inc. | All Rights Reserved
						</p>
					</div>
				</motion.div>
			</div>
		</footer>
	)
}

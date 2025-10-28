'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// SVG Plane Icon Component
function PlaneIcon({ className = "w-6 h-6" }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path 
				d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" 
				fill="currentColor"
			/>
		</svg>
	)
}

export function Nav() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Close mobile menu when clicking on links
	const closeMobileMenu = () => setIsMobileMenuOpen(false)

	return (
		<>
			{/* Skip to content link for accessibility */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-orange text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
			>
				Skip to content
			</a>
			
			<motion.nav
				className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}
				style={{ background: 'transparent' }}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
						{/* Brand/Logo */}
						<Link 
							href="/"
							className="flex items-center hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg px-2 py-1 z-50 relative flex-shrink-0"
						>
							<Image
								src="/embark.png"
								alt="Embark"
								width={150}
								height={50}
								className="h-10 sm:h-12 lg:h-14 w-auto"
								priority
							/>
						</Link>

						{/* Center Navigation Links - Desktop Only */}
						<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
							<NavLink href="#integrations">product</NavLink>
							<NavLink href="#waitlist">connect</NavLink>
							<NavLink href="#about-us">about us</NavLink>
						</div>

						{/* Right Side - CTA and Mobile Menu */}
						<div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
							{/* CTA Pill - Hidden on very small screens, visible on larger screens */}
							<motion.a
								href="#waitlist"
								className="hidden sm:block btn-primary text-xs sm:text-sm whitespace-nowrap"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								Join Waitlist
							</motion.a>
							
							{/* Mobile menu button - Always visible on mobile */}
							<button 
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="md:hidden p-2 text-text hover:text-coral transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-panel rounded-lg z-50 relative flex-shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center"
								aria-label="Toggle mobile menu"
								aria-expanded={isMobileMenuOpen}
							>
								<motion.div
									animate={isMobileMenuOpen ? "open" : "closed"}
									className="w-5 h-5 flex flex-col justify-center items-center"
								>
									<motion.span
										variants={{
											closed: { rotate: 0, y: 0 },
											open: { rotate: 45, y: 4 }
										}}
										className="w-5 h-0.5 bg-current origin-center transition-all duration-300 block"
									/>
									<motion.span
										variants={{
											closed: { opacity: 1 },
											open: { opacity: 0 }
										}}
										className="w-5 h-0.5 bg-current mt-1 transition-all duration-300 block"
									/>
									<motion.span
										variants={{
											closed: { rotate: 0, y: 0 },
											open: { rotate: -45, y: -4 }
										}}
										className="w-5 h-0.5 bg-current mt-1 origin-center transition-all duration-300 block"
									/>
								</motion.div>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							className="md:hidden border-t border-coral/20 bg-panel/95 backdrop-blur-lg overflow-hidden"
						>
							<div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-4">
								<nav className="flex flex-col space-y-2">
									<MobileNavLink href="#core-features" onClick={closeMobileMenu}>
										Product
									</MobileNavLink>
									<MobileNavLink href="#community" onClick={closeMobileMenu}>
										Connect
									</MobileNavLink>
									<MobileNavLink href="#trust-safety" onClick={closeMobileMenu}>
										About Us
									</MobileNavLink>
									{/* Mobile-only CTA for small screens */}
									<motion.a
										href="#waitlist"
										onClick={closeMobileMenu}
										className="sm:hidden btn-primary text-center block"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Join Waitlist
									</motion.a>
								</nav>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	)
}

// Desktop navigation link component
function NavLink({ 
	href, 
	children 
}: { 
	href: string
	children: React.ReactNode 
}) {
	return (
		<Link
			href={href}
			className="text-text/70 hover:text-coral font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-panel rounded-lg px-3 py-2 relative group"
		>
			{children}
			{/* Hover underline effect - Sunset Flow gradient */}
			<span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-sunset-flow scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
		</Link>
	)
}

// Mobile navigation link component
function MobileNavLink({ 
	href, 
	children,
	onClick 
}: { 
	href: string
	children: React.ReactNode
	onClick: () => void
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="text-text hover:text-coral font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-panel rounded-lg px-3 py-2 text-base border-l-2 border-transparent hover:border-coral block w-full"
		>
			{children}
		</Link>
	)
}

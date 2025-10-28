'use client'

import { motion } from 'framer-motion'
import { useReduced } from '@/components/Motion'
import { SemiCircleCarousel } from '@/components/SemiCircleCarousel'

export function EmbarkHero() {
	const prefersReducedMotion = useReduced()

	const carouselImages = [
		{ id: 1, image: '/segment1.png', alt: 'Travel moment 1' },
		{ id: 2, image: '/segment2.png', alt: 'Travel moment 2' },
		{ id: 3, image: '/segment3.png', alt: 'Travel moment 3' },
		{ id: 4, image: '/segment4.png', alt: 'Travel moment 4' },
		{ id: 5, image: '/segment5.png', alt: 'Travel moment 5' },
		{ id: 6, image: '/segment6.png', alt: 'Travel moment 6' },
        { id: 7, image: '/segment7.png', alt: 'Travel moment 7' },
        { id: 8, image: '/segment8.png', alt: 'Travel moment 8' },
        { id: 9, image: '/segment9.png', alt: 'Travel moment 9' },
        { id: 10, image: '/segment10.png', alt: 'Travel moment 10' },
        { id: 11, image: '/segment11.png', alt: 'Travel moment 11' },
        { id: 12, image: '/segment12.png', alt: 'Travel moment 12' },
        { id: 13, image: '/segment13.png', alt: 'Travel moment 13' },
        { id: 14, image: '/segment14.png', alt: 'Travel moment 14' },
        { id: 15, image: '/segment15.png', alt: 'Travel moment 15' },
        { id: 16, image: '/segment16.png', alt: 'Travel moment 16' },
	]

	return (
		<div className="relative min-h-screen flex flex-col items-center justify-start overflow-visible">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-50 pb-20 lg:pb-32 relative z-10">
				<div className="max-w-4xl mx-auto">
					{/* Centered Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center"
					>
						<motion.h1 
							className="font-bold mb-3 leading-none lowercase"
							style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#CF5376' }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							travel smarter. live freer. embark.
						</motion.h1>
						
						<motion.p 
							className="text-xl lg:text-2xl mb-6 lg:mb-8 max-w-3xl mx-auto leading-snug"
							style={{ color: '#2e2e2e' }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							From inspiration to exploration, Embark keeps you on budget, aware, and connected — so even when you travel solo, you're never truly alone.
						</motion.p>

						<motion.div 
							className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
						>
							<a
								href="#waitlist"
								className="btn-primary text-lg px-8 py-4 rounded-2xl font-semibold"
							>
								Join Waitlist
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Semi-Circle Carousel - Bottom of hero */}
			<div className="absolute bottom-[-100px] left-0 right-0 z-0">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 1 }}
				>
					<SemiCircleCarousel images={carouselImages} speed={30} gap={10} curve={12} />
				</motion.div>
			</div>
		</div>
	)
}

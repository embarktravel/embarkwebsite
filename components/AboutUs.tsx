'use client'

import { motion } from 'framer-motion'

const teamMembers = [
	{
		name: 'King Igbozurike',
		experience: 'Meta, Netskope',
		role: 'Co-Founder and CEO',
		education: 'Computer Science Major, Grambling State University',
		image: '/headshots/king.jpeg',
		linkedin: 'https://linkedin.com/in/thetechking/'
	},
	{
		name: 'Nonso Duaka',
		experience: 'Merck, Rossette Commons',
		role: 'Co-Founder and CPO',
		education: 'Computer Science Major and Mathematics and Physics, Grambling State University',
		image: '/headshots/nonso.jpeg',
		linkedin: 'https://www.linkedin.com/in/nonso-duaka-3117b8316/'
	},
	{
		name: 'Eniola Irinoye',
		experience: 'Loft Orbital and NSLC',
		role: 'Co-Founder and COO',
		education: 'Electronics Engineering Technology Computer Science, Grambling State University',
		image: '/headshots/eniola.jpeg',
		linkedin: 'https://www.linkedin.com/in/eniola-irinoye/'
	},
	{
		name: 'Ugochukwu Igweagu',
		experience: 'Cisco and NSLC',
		role: 'Co-Founder and CTO',
		education: 'Computer Science Major and Business Management, Grambling State University',
		image: '/headshots/ugo.jpeg',
		linkedin: 'https://www.linkedin.com/in/ugochukwu-igweagu/'
	},
	{
		name: 'Emmanuel Nnanna',
		experience: 'EY and KPMG',
		role: 'Co-Founder and CFO',
		education: 'Accounting Major, Grambling State University',
		image: '/headshots/kalu.jpeg',
		linkedin: 'https://www.linkedin.com/in/emmanuel-nnanna/'
	}
]

export function AboutUs() {
	return (
		<section className="relative py-20 lg:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#CF5376' }}>
						meet the team
					</h2>
					<p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
						built by travelers, for travelers. we're a team of passionate builders from Grambling State University, 
						bringing together experience from top tech companies to reimagine travel.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
					{teamMembers.map((member, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative"
						>
							<div className="relative overflow-hidden rounded-xl aspect-[3/4]">
								{/* Image with monotone overlay */}
								   <img
									   src={member.image}
									   alt={member.name}
									   className="w-full h-full object-cover object-top"
									   style={{objectPosition: 'top center'}}
								   />
								{/* Monotone overlay matching color theme */}
								<div className="absolute inset-0 bg-gradient-to-br from-orange/60 to-peach/60 mix-blend-multiply" />
								
								{/* LinkedIn icon in bottom left */}
								   <a
									   href={member.linkedin}
									   target="_blank"
									   rel="noopener noreferrer"
									   className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 z-10"
								   >
									<svg
										viewBox="0 0 24 24"
										className="w-5 h-5 fill-orange"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
									</svg>
								</a>

								{/* Info overlay on hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
									<p className="text-white/90 text-sm mb-2">{member.experience}</p>
									<p className="text-white/70 text-xs">{member.education}</p>
								</div>
							</div>

							{/* Name and Role (always visible) */}
							<div className="mt-4 text-center">
								<h3 className="text-xl font-bold text-orange mb-1">{member.name}</h3>
								<p className="text-text/80 font-medium">{member.role}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

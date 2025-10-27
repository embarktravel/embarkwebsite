import type { Config } from 'tailwindcss'

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			screens: {
				'xs': '480px',
				'3xl': '1600px',
			},
			colors: {
				// Neutral backgrounds
				bg: '#FFFFFF',       // pure white backdrop
				panel: '#FFFFFF',    // pure white panels
				neutral: '#FAFAFA',  // very light gray for subtle sections
				
				// Brand colors (Sunset energy meets trust)
				coral: '#FF8559',    // primary - adventure energy
				apricot: '#FFB578',  // secondary - warmth and balance
				sunset: '#E65447',   // highlight - hover/alerts
				mauve: '#CF5376',    // emotion - calm connection
				
				// Text colors
				text: '#2E2E2E',     // charcoal for readability
				charcoal: '#2E2E2E', // alias for authority tone
				muted: '#9C9C9C',    // muted gray for secondary text
				
				// Legacy aliases (for backwards compatibility)
				orange: {
					DEFAULT: '#FF8559',
					light: '#FFB578',
					dark: '#E65447',
					pink: '#CF5376'
				},
				peach: '#FFB578',
				pink: '#CF5376',
				accent: '#FF8559',
			},
			borderRadius: {
				lg: '12px',
				DEFAULT: '12px'
			},
			fontFamily: {
				sans: ['var(--font-karla)', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				'subtle': '0 2px 8px rgba(0, 0, 0, 0.05)',
				'low': '0 4px 16px rgba(0, 0, 0, 0.08)',
				card: '0 6px 30px rgba(255,133,89,0.15)',
				glow: '0 0 20px rgba(255,133,89,0.4)',          // coral glow
				'glow-md': '0 0 30px rgba(255,133,89,0.5)',
				'glow-lg': '0 0 40px rgba(255,133,89,0.6)',
				'glow-pulse': '0 0 20px rgba(255,133,89,0.5), 0 0 40px rgba(255,133,89,0.3)',
				'glow-apricot': '0 0 20px rgba(255,181,120,0.4)',  // apricot glow
				'glow-sunset': '0 0 20px rgba(230,84,71,0.4)',     // sunset glow
				'glow-mauve': '0 0 20px rgba(207,83,118,0.4)',     // mauve glow
				// Legacy aliases
				'glow-peach': '0 0 20px rgba(255,181,120,0.4)',
				'glow-coral': '0 0 20px rgba(230,84,71,0.4)',
				'glow-pink': '0 0 20px rgba(207,83,118,0.4)'
			}
		}
	},
	plugins: []
} satisfies Config

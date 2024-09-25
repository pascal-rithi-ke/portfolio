/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			  eyeMove: {
				'0%, 100%': { transform: 'translateX(0)' }, // Position initiale
				'50%': { transform: 'translateX(30px)' },  // Mouvement vers la droite
			  },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'spin-slow': 'spin 5s linear infinite',
			'spin-fast': 'spin 2s linear infinite',
			eyeMove: 'eyeMove 3s ease-in-out infinite', // Durée de 3 secondes, répétée en boucle
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
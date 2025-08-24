import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        white: '#FFFFFF',
        'light-gray': '#F8F9FA',
        'dark-gray': '#2C3E50',
        
        // Accent Colors (เลือกใช้ 1 ใน 2)
        lavender: '#9B7EDE',      // สีม่วงลาเวนเดอร์
        emerald: '#10B981',       // สีเขียวมรกต
        
        // Supporting Colors
        success: '#10B981',       // Green-500
        warning: '#F59E0B',       // Amber-500
        error: '#EF4444',         // Red-500
        info: '#06B6D4',          // Cyan-500
      },
      fontFamily: {
        sans: ['Kanit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config

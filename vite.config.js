import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	base: '/react-learning/', // Укажите имя вашего репозитория (замените "react-learning" на название вашего репозитория)
})

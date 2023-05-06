import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem'
      }
    }
  },
  shortcuts: {
    // btn: 'bg-emerald-500 text-light-50 font-bold px-12 py-3 rounded-2xl'
  },
  fontFamily: {
    body: ['Rubik']
  }
})

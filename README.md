DONE
[x] npx create-payload-app@beta
// create-payload-app@3.0.0-beta.54

[x] (frontend) added

[x] Tailwind setup
// pnpm add -D tailwindcss postcss autoprefixer
// pnpm dlx tailwindcss init -p
// tailwind.config.js: content: ['./src/**/*.{ts,tsx}'],
// rename postcss/tailwind.config -> .cjs
// replace < export default > with < module.exports = >

[x] Shadcn/ui setup
// pnpm dlx shadcn-ui@latest init
// modify tailwind.config: darkMode: ['selector', '[data-mode="dark"]', '.dark'],
// replace < .dark > in custom.css (if using) with < [data-mode="dark"] >

TODO
// pnpm install
// create < .env > & add database
// pnpm dev

import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy:'#08111f', ink:'#111827', gold:'#c7a35f', cream:'#f7f2e8' } } }, plugins: [] };
export default config;

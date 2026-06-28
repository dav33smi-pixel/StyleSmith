import { profile, wardrobe, outfits } from '../lib/data';
import { Shirt, Sparkles, Heart, Search } from 'lucide-react';
export default function Home(){
 const cats=[...new Set(wardrobe.map(w=>w[0]))];
 return <main className="min-h-screen p-4 md:p-8 bg-[radial-gradient(circle_at_top_right,#24334e,transparent_35%),#08111f]">
  <section className="max-w-6xl mx-auto grid gap-5">
   <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
    <div><p className="text-gold uppercase tracking-[.35em] text-xs">Built for you</p><h1 className="text-4xl md:text-6xl font-semibold">StyleSmith</h1><p className="text-cream/70 mt-2">Personal AI wardrobe and outfit engine for David.</p></div>
    <div className="card p-4"><p className="text-sm text-cream/60">Budget</p><p className="text-2xl text-gold">{profile.budget}</p></div>
   </header>
   <div className="grid md:grid-cols-3 gap-5">
    <section className="card p-5 md:col-span-1"><h2 className="text-xl font-semibold flex gap-2"><Sparkles/> Style DNA</h2><div className="grid grid-cols-2 gap-3 mt-4 text-sm text-cream/80">{Object.entries(profile).filter(([k])=>k!=='palette').map(([k,v])=><div key={k}><p className="text-cream/45 capitalize">{k}</p><p>{String(v)}</p></div>)}</div><div className="flex flex-wrap gap-2 mt-5">{profile.palette.map(c=><span className="pill text-xs" key={c}>{c}</span>)}</div></section>
    <section className="card p-5 md:col-span-2"><h2 className="text-xl font-semibold flex gap-2"><Shirt/> Outfit Recommendations</h2><div className="grid md:grid-cols-2 gap-4 mt-4">{outfits.map(o=><article key={o.title} className="rounded-2xl bg-white/5 p-4 border border-white/10"><div className="flex justify-between gap-3"><h3 className="font-semibold text-lg">{o.title}</h3><span className="text-gold text-sm">{o.budget}</span></div><p className="text-sm text-cream/50">{o.occasion}</p><p className="mt-3 text-sm text-cream/75">{o.note}</p><p className="mt-3 text-xs text-gold">Uses owned: {o.owned.join(', ')}</p><p className="mt-2 text-xs text-cream/55">Suggested buy: {o.buy.join(', ')}</p><button className="mt-4 px-4 py-2 rounded-full bg-gold text-navy font-semibold text-sm">View outfit</button></article>)}</div></section>
   </div>
   <section className="card p-5"><h2 className="text-xl font-semibold flex gap-2"><Search/> Wardrobe Inventory</h2><div className="grid md:grid-cols-4 gap-4 mt-4">{cats.map(cat=><div key={cat} className="rounded-2xl bg-white/5 p-4"><h3 className="text-gold font-semibold">{cat}</h3><ul className="mt-2 space-y-1 text-sm text-cream/75">{wardrobe.filter(w=>w[0]===cat).map(w=><li key={w[1]}>• {w[1]}</li>)}</ul></div>)}</div></section>
   <section className="card p-5"><h2 className="text-xl font-semibold flex gap-2"><Heart/> Next Build Steps</h2><p className="text-cream/75 mt-2">Connect Supabase, add live product links, create saved outfits, then add AI stylist prompts and virtual try-on image generation.</p></section>
  </section>
 </main>
}

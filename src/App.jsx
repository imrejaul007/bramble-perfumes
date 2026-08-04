import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeft, ChevronRight, ArrowRight, Crown, Shield, Gem, Award, Leaf,
  Globe, Heart, Droplets, Flower2, Star, CheckCircle2, Phone, Mail, MapPin, Check, BookOpen
} from 'lucide-react'
import StoryPortal from './StoryPortal'

const SLIDES = [
  { id: 'cover', label: '' },
  { id: 'executive', label: 'Executive Summary' },
  { id: 'problem', label: 'The Problem' },
  { id: 'wins', label: 'Why NUHOUD Wins' },
  { id: 'different', label: 'What Makes Us Different' },
  { id: 'funds', label: 'The Investment' },
  { id: 'model', label: 'The Business' },
  { id: 'margins', label: 'The Margins' },
  { id: 'story', label: 'Why Story Matters' },
  { id: 'community', label: 'The Community' },
  { id: 'competitive', label: 'Our Position' },
  { id: 'vision', label: 'Five Years' },
  { id: 'unique', label: 'Why This Is Unique' },
  { id: 'close', label: '' },
]

const fu = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function App() {
  const [slide, setSlide] = useState(0)
  const [showPortal, setShowPortal] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') setSlide(s => Math.min(s + 1, SLIDES.length - 1))
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') setSlide(s => Math.max(s - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollTo = (i) => {
    setSlide(i)
    const el = document.getElementById(SLIDES[i].id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  if (showPortal) {
    return <StoryPortal />
  }

  return (
    <div ref={containerRef} className="relative" style={{background:'#FFFDF7'}}>

      {/* ── NAV ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{background:'rgba(255,253,247,0.92)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(154,114,53,0.12)'}}>
        <div className="flex items-center gap-4">
          <div className="font-serif text-lg tracking-tight text-charcoal-800" style={{fontFamily:'Playfair Display,serif'}}>NUHOUD</div>
          <button onClick={() => setShowPortal(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100" style={{color:'#9A7235'}}>
            <BookOpen size={14} />
            <span className="hidden sm:inline">Story Portal</span>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {SLIDES.map((s, i) => s.label && (
            <button key={i} onClick={() => scrollTo(i)}
              className="px-2 py-1 text-xs rounded transition-all"
              style={{
                background: slide === i ? 'rgba(154,114,53,0.1)' : 'transparent',
                color: slide === i ? '#9A7235' : '#9A8A78',
                letterSpacing:'0.05em',
              }}>{s.label}</button>
          ))}
        </div>
        <button onClick={() => scrollTo(SLIDES.length - 1)}
          className="px-4 py-2 rounded-full text-xs font-medium transition-all"
          style={{background:'#9A7235', color:'#FFFDF7', letterSpacing:'0.08em'}}>
          Contact Us
        </button>
      </div>

      {/* ── SLIDE 1: COVER ── */}
      <section id="cover" className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16" style={{scrollSnapAlign:'start'}}>
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:1}} className="space-y-6 max-w-4xl">
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:1}}
            className="text-xs tracking-[0.4em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>
            Private & Confidential
          </motion.p>
          <motion.div initial={{opacity:0, scale:0.96}} animate={{opacity:1,scale:1}} transition={{delay:0.5,duration:1}}
            className="space-y-4">
            <h1 className="font-serif font-light leading-none tracking-tight"
              style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(72px,14vw,160px)', color:'#2A2018', letterSpacing:'-0.03em'}}>
              NUHOUD
            </h1>
            <div className="w-24 h-px mx-auto" style={{background:'linear-gradient(90deg,transparent,rgba(154,114,53,0.4),transparent)'}}/>
          </motion.div>
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.8,duration:1}}
            className="space-y-4">
            <p className="font-display italic text-2xl md:text-3xl leading-relaxed"
              style={{fontFamily:'Cormorant Garamond,serif', color:'#5A4A38', fontStyle:'italic', fontWeight:300}}>
              Building the World's Leading<br/>Natural Perfumery House
            </p>
            <p className="font-display italic text-base"
              style={{fontFamily:'Cormorant Garamond,serif', color:'#9A8A78', fontStyle:'italic'}}>
              A long-term investment in heritage, craftsmanship, and global luxury.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:1}}
            className="pt-8 space-y-2">
            <p className="text-xs tracking-[0.25em] uppercase" style={{color:'#9A8A78'}}>Shahid Ahmed — Bu Nuh</p>
            <p className="text-xs tracking-[0.2em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>Fourth Generation Agarwood Expertise · Est. 2009</p>
          </motion.div>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5,duration:1}}
          className="absolute bottom-12">
          <button onClick={() => scrollTo(1)} className="flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity">
            <span className="text-xs tracking-widest uppercase" style={{color:'#9A8A78'}}>Scroll</span>
            <ChevronRight size={16} style={{color:'#9A7235', transform:'rotate(90deg)'}}/>
          </button>
        </motion.div>
      </section>

      {/* ── SLIDE 2: EXECUTIVE SUMMARY ── */}
      <section id="executive" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>Executive Summary</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                We are not selling perfume.<br/><span className="italic" style={{color:'#9A7235'}}>We are building a legacy.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium tracking-wider uppercase" style={{color:'#9A7235'}}>Why NUHOUD Exists</h3>
                  <p className="text-base leading-relaxed" style={{color:'#5A4A38', fontFamily:'Cormorant Garamond,serif', fontSize:'17px'}}>
                    Four generations of agarwood expertise have given us something rare: the knowledge, the relationships, and the reputation to source and distil the world's finest natural raw materials.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium tracking-wider uppercase" style={{color:'#9A7235'}}>The Global Opportunity</h3>
                  <p className="text-base leading-relaxed" style={{color:'#5A4A38', fontFamily:'Cormorant Garamond,serif', fontSize:'17px'}}>
                    The global natural fragrance market is entering a new era. Consumers are rejecting synthetic, mass-produced luxury. They want authenticity. Provenance. Story. These are the foundations NUHOUD was built on — fifteen years ago.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium tracking-wider uppercase" style={{color:'#9A7235'}}>Why Natural Perfumery Is Entering Its Golden Era</h3>
                  <p className="text-base leading-relaxed" style={{color:'#5A4A38', fontFamily:'Cormorant Garamond,serif', fontSize:'17px'}}>
                    Regulatory pressure on synthetics is increasing. Supply of rare natural materials is finite and shrinking. Brands with authentic sourcing relationships and distillation capability are becoming irreplaceable.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium tracking-wider uppercase" style={{color:'#9A7235'}}>Why Now</h3>
                  <p className="text-base leading-relaxed" style={{color:'#5A4A38', fontFamily:'Cormorant Garamond,serif', fontSize:'17px'}}>
                    NUHOUD already has the reputation, the collectors, and the craft. The investment accelerates what already works — expanding distillation, securing rare inventory, and building the storytelling infrastructure that converts collectors into ambassadors.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 3: THE PROBLEM ── */}
      <section id="problem" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start', background:'#F5EDD8'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>The Problem</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                Today's luxury perfume industry<br/><span className="italic" style={{color:'#9A7235'}}>is built on a contradiction.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon:'🧪', title:'Synthetic Ingredients', desc:'The vast majority of luxury fragrance today is synthetic. Mass-market chemistry dressed in luxury packaging.' },
                { icon:'🏭', title:'Mass Production', desc:'Thousands of bottles produced daily. Quality is optimized for cost, not craft.' },
                { icon:'📢', title:'Marketing Without Authenticity', desc:'Brands spend millions on celebrity endorsements and campaigns. The story is fabricated.' },
                { icon:'🌲', title:'Disconnected from Raw Materials', desc:'Most fragrance houses have never touched the wood, the flower, or the source.' },
              ].map((p, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.1}}
                  className="bg-white rounded-2xl p-8 space-y-3 shadow-sm" style={{border:'1px solid rgba(154,114,53,0.1)'}}>
                  <div className="text-3xl">{p.icon}</div>
                  <h3 className="font-serif text-xl" style={{fontFamily:'Playfair Display,serif', color:'#2A2018'}}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'#7A6A58', fontFamily:'Cormorant Garamond,serif', fontSize:'16px'}}>{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="text-center space-y-4 p-10 rounded-2xl" style={{background:'#9A7235', color:'#FFFDF7'}}>
              <p className="font-display italic text-2xl" style={{fontFamily:'Cormorant Garamond,serif', fontStyle:'italic'}}>
                Consumers are increasingly seeking authenticity.<br/>They want to know where it came from.<br/>Who made it. Why it matters.
              </p>
              <div className="w-16 h-px mx-auto opacity-40" style={{background:'#FFFDF7'}}/>
              <p className="text-sm font-medium tracking-wider uppercase" style={{letterSpacing:'0.15em'}}>
                NUHOUD fills that gap.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 4: WHY NUHOUD WINS ── */}
      <section id="wins" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>Competitive Position</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                Unlike most brands,<br/><span className="italic" style={{color:'#9A7235'}}>NUHOUD already has</span> the foundations.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon:<Droplets size={20} style={{color:'#9A7235'}}/>, t:'Real Distillation', d:"We own the craft. Copper stills. Patient process. No shortcuts." },
                { icon:<Crown size={20} style={{color:'#9A7235'}}/>, t:'Real Oud Expertise', d:"Four generations of agarwood knowledge cannot be bought or replicated." },
                { icon:<Globe size={20} style={{color:'#9A7235'}}/>, t:'Direct Sourcing', d:"Relationships with harvesters and distributors across Sri Lanka, Borneo, Cambodia, India." },
                { icon:<Heart size={20} style={{color:'#9A7235'}}/>, t:'Family Legacy', d:"A lineage of expertise passed down — not assembled for marketing purposes." },
                { icon:<Star size={20} style={{color:'#9A7235'}}/>, t:'Existing Collectors', d:"25,000+ collectors and enthusiasts worldwide, built without a single dirham of advertising." },
                { icon:<Award size={20} style={{color:'#9A7235'}}/>, t:'Authentic Storytelling', d:"The story is not invented. It is inherited. Every release carries genuine history." },
              ].map((item, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.08}}
                  className="bg-white rounded-xl p-6 space-y-3" style={{border:'1px solid rgba(154,114,53,0.1)'}}>
                  <div className="flex items-center gap-2"><div>{item.icon}</div><h4 className="font-serif text-base" style={{fontFamily:'Playfair Display,serif', color:'#2A2018'}}>{item.t}</h4></div>
                  <p className="text-sm leading-relaxed" style={{color:'#7A6A58', fontFamily:'Cormorant Garamond,serif', fontSize:'15px'}}>{item.d}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}}
              className="text-center p-8 rounded-2xl" style={{background:'rgba(154,114,53,0.06)', border:'1px solid rgba(154,114,53,0.12)'}}>
              <p className="font-display italic text-xl" style={{fontFamily:'Cormorant Garamond,serif', color:'#5A4A38', fontStyle:'italic'}}>
                Very few companies in the world possess all of these simultaneously.<br/>NUHOUD does. This is the foundation of the investment thesis.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 5: WHAT MAKES US DIFFERENT ── */}
      <section id="different" className="min-h-screen flex items-center justify-center px-8 py-32" style={{scrollSnapAlign:'start', background:'#2A2018', color:'#FFFDF7'}}>
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>The Core Differentiator</p>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)'}}>
                NOT<br/><span className="italic" style={{color:'#C4974E'}}>"We sell perfume."</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-display italic text-2xl md:text-3xl leading-relaxed" style={{fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', color:'rgba(255,253,247,0.8)'}}>
                NUHOUD preserves the complete journey of natural perfumery.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 py-6">
                {['From tree…', 'to wood…', 'to distillation…', 'to oil…', 'to perfume…', 'to collector.'].map((step, i) => (
                  <motion.div key={i} initial={{opacity:0, y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}}
                    className="px-5 py-2.5 rounded-full text-sm" style={{background:'rgba(154,114,53,0.15)', color:'#C4974E', border:'1px solid rgba(154,114,53,0.25)', fontFamily:'Cormorant Garamond,serif', fontStyle:'italic'}}>
                    {step}
                  </motion.div>
                ))}
              </div>

              <p className="font-display italic text-lg" style={{fontFamily:'Cormorant Garamond,serif', color:'rgba(255,253,247,0.5)'}}>
                Nobody else in the world tells this story. From beginning to end.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {[
                'We source from specific trees in specific regions.',
                'We distil using traditional copper methods, patiently.',
                'We age oils that deserve aging.',
                'We release in quantities that reflect scarcity, not ambition.',
                'We tell the story — because it is the truth.',
              ].map((line, i) => (
                <motion.div key={i} initial={{opacity:0,x:-12}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                  className="flex items-center gap-4 text-left">
                  <Check size={14} style={{color:'#C4974E', flexShrink:0}}/>
                  <p className="text-sm" style={{color:'rgba(255,253,247,0.7)', fontFamily:'Cormorant Garamond,serif', fontSize:'16px'}}>{line}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 6: USE OF FUNDS ── */}
      <section id="funds" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>The Investment</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                Why AED 3 Million<br/><span className="italic" style={{color:'#9A7235'}}>Matters.</span>
              </h2>
              <p className="font-display italic text-lg" style={{fontFamily:'Cormorant Garamond,serif', color:'#5A4A38', fontStyle:'italic', maxWidth:'600px'}}>
                The investment does not fund growth from scratch. It accelerates what already works.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="p-6 rounded-xl space-y-4" style={{background:'rgba(154,114,53,0.04)', border:'1px solid rgba(154,114,53,0.1)'}}>
                  <h4 className="text-sm font-medium tracking-wider uppercase" style={{color:'#9A7235'}}>Without Investment</h4>
                  <div className="space-y-2">
                    {['Limited production runs', 'Slow and infrequent distillation', 'Rare materials secured opportunistically', 'No capacity for continuous storytelling', 'Constrained inventory'].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm" style={{color:'#7A6A58'}}>
                        <div className="w-1.5 h-1.5 rounded-full opacity-40" style={{background:'#9A7235'}}/>
                        <span style={{fontFamily:'Cormorant Garamond,serif', fontSize:'15px'}}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="p-6 rounded-xl space-y-4" style={{background:'rgba(154,114,53,0.08)', border:'1px solid rgba(154,114,53,0.2)'}}>
                  <h4 className="text-sm font-medium tracking-wider uppercase" style={{color:'#9A7235'}}>With AED 3 Million</h4>
                  <div className="space-y-2">
                    {['Continuous distillation capacity', 'Ability to acquire rare inventory when it surfaces', 'Professional storytelling and documentary content', 'Accelerated brand development', 'International expansion infrastructure'].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm" style={{color:'#2A2018'}}>
                        <CheckCircle2 size={14} style={{color:'#9A7235', flexShrink:0}}/>
                        <span className="font-medium" style={{fontFamily:'Cormorant Garamond,serif', fontSize:'15px'}}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title:'Distillation Expansion', items:['Additional copper stills', 'Expanded production capacity', 'New experimental distillations', 'Long aging program'] },
                { title:'Rare Material Acquisition', items:['Agarwood — premium grades', 'Deer musk, ambergris', 'Rare sandalwood, roses', 'Botanicals — appreciating inventory'] },
                { title:'Brand & Storytelling', items:['Professional film & documentary', 'Website & journal', 'Collector experiences', 'Educational content'] },
              ].map((block, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.08}}
                  className="bg-white rounded-xl p-6 space-y-3" style={{border:'1px solid rgba(154,114,53,0.1)'}}>
                  <h4 className="font-serif text-base" style={{fontFamily:'Playfair Display,serif', color:'#2A2018'}}>{block.title}</h4>
                  {block.items.map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs" style={{color:'#7A6A58'}}>
                      <div className="w-1 h-1 rounded-full" style={{background:'#9A7235', opacity:0.5}}/>
                      <span style={{fontFamily:'Cormorant Garamond,serif', fontSize:'14px'}}>{item}</span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 7: BUSINESS MODEL ── */}
      <section id="model" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start', background:'#F5EDD8'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>Revenue Streams</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                The NUHOUD<br/><span className="italic" style={{color:'#9A7235'}}>Business Model</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title:'Rare Oud Oils', sub:'Core product', desc:'Vintage, aged, single-origin. Limited releases. The anchor of the brand and the collector\'s first entry point.' },
                { title:'Limited Edition Attars', sub:'Signature collections', desc:'Blended oils of exceptional character. Released annually. Each tied to a story, a place, a season.' },
                { title:'Extrait Perfumes', sub:'Accessible luxury', desc:'Diluted for daily wear. Premium positioning. Allow a wider audience to enter the NUHOUD world.' },
                { title:'Collector Editions', sub:'Flagship releases', desc:'Numbered, aged, documented. Sold once. Never repeated. The releases that build the legend.' },
                { title:'Pre-Order Programmes', sub:'Demand-led production', desc:'Collectors reserve upcoming releases. Confirms demand before production. Zero waste.' },
                { title:'International Distribution', sub:'Wholesale & retail', desc:'Selective partnerships with luxury retailers, duty-free, and specialist perfumery boutiques globally.' },
              ].map((item, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.08}}
                  className="bg-white rounded-xl p-7 flex gap-5" style={{border:'1px solid rgba(154,114,53,0.1)'}}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{background:'rgba(154,114,53,0.1)'}}>
                    <Check size={16} style={{color:'#9A7235'}}/>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2"><h4 className="font-serif text-base" style={{fontFamily:'Playfair Display,serif', color:'#2A2018'}}>{item.title}</h4><span className="text-xs" style={{color:'#9A8A78'}}>{item.sub}</span></div>
                    <p className="text-sm leading-relaxed" style={{color:'#7A6A58', fontFamily:'Cormorant Garamond,serif', fontSize:'15px'}}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 8: MARGINS ── */}
      <section id="margins" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>Unit Economics</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                Why margins in natural luxury<br/><span className="italic" style={{color:'#9A7235'}}>can be exceptional.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num:'01', title:'Low Volume, High Value', desc:'We produce in small quantities. Every bottle is deliberate. Scarcity is structural, not manufactured.' },
                { num:'02', title:'High Customer Loyalty', desc:'A collector who has experienced real aged oud rarely returns to synthetic. Loyalty is earned through quality.' },
                { num:'03', title:'Exceptional Repeat Rates', desc:'The nature of natural perfumery means repeat purchase. A collector builds a relationship with the brand over years.' },
                { num:'04', title:'Long Product Lifespan', desc:'Aged oud improves with time. Inventory is an appreciating asset, not a depreciating one.' },
                { num:'05', title:'Scarcity as Default', desc:'We do not manufacture abundance. Every release is finite by design. This is not a strategy — it is the craft.' },
                { num:'06', title:'Premium Positioning', desc:'The price reflects the cost and the rarity. NUHOUD customers understand this. They are paying for authenticity.' },
              ].map((item, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.08}}
                  className="space-y-4 p-8 rounded-2xl" style={{background:'rgba(154,114,53,0.04)', border:'1px solid rgba(154,114,53,0.1)'}}>
                  <p className="text-5xl font-light" style={{fontFamily:'Playfair Display,serif', color:'rgba(154,114,53,0.15)'}}>{item.num}</p>
                  <h4 className="font-serif text-lg" style={{fontFamily:'Playfair Display,serif', color:'#2A2018'}}>{item.title}</h4>
                  <p className="text-sm leading-relaxed" style={{color:'#7A6A58', fontFamily:'Cormorant Garamond,serif', fontSize:'15px'}}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 9: WHY STORY ── */}
      <section id="story" className="min-h-screen flex items-center justify-center px-8 py-32" style={{scrollSnapAlign:'start', background:'#2A2018', color:'#FFFDF7'}}>
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>The Real Product</p>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)'}}>
                People don't only buy<br/><span className="italic" style={{color:'#C4974E'}}>fragrance.</span>
              </h2>
              <p className="font-display italic text-xl" style={{fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', color:'rgba(255,253,247,0.6)'}}>
                They buy everything that fragrance represents.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { t:'History', d:"Generations of knowledge in every bottle." },
                { t:'Craftsmanship', d:"The art of patience over efficiency." },
                { t:'Authenticity', d:"Provenance that can be verified, not claimed." },
                { t:'Scarcity', d:"Limited releases that create lasting value." },
                { t:'Identity', d:"The fragrance you wear says who you are." },
                { t:'Belonging', d:"A community of people who understand." },
                { t:'The Founder', d:"A real person with real knowledge." },
                { t:'The Journey', d:"From forest floor to your skin." },
              ].map((item, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.07}}
                  className="p-6 rounded-xl text-left space-y-2" style={{background:'rgba(154,114,53,0.1)', border:'1px solid rgba(154,114,53,0.15)'}}>
                  <h4 className="font-serif text-base" style={{fontFamily:'Playfair Display,serif', color:'#C4974E'}}>{item.t}</h4>
                  <p className="text-sm" style={{color:'rgba(255,253,247,0.6)', fontFamily:'Cormorant Garamond,serif', fontSize:'14px'}}>{item.d}</p>
                </motion.div>
              ))}
            </div>

            <p className="font-display italic text-2xl" style={{fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', color:'rgba(255,253,247,0.7)'}}>
              NUHOUD sells all of these. The fragrance is the proof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 10: COMMUNITY ── */}
      <section id="community" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>The Collectors</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                Not customers.<br/><span className="italic" style={{color:'#9A7235'}}>Collectors.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="font-display italic text-lg leading-relaxed" style={{fontFamily:'Cormorant Garamond,serif', color:'#5A4A38', fontStyle:'italic'}}>
                  NUHOUD does not have "customers." It has collectors — people who wait for releases, track the journal, share the story, and return generation after generation.
                </p>
                <div className="space-y-4">
                  {[
                    { t:'People waiting for releases', d:'There are already thousands of people who track NUHOUD releases and buy within hours.' },
                    { t:'Educational journal', d:'Ongoing content that builds knowledge and deepens the relationship with the brand.' },
                    { t:'Early access', d:'Collectors get priority access to upcoming releases before public announcement.' },
                    { t:'Private community', d:'A growing network of enthusiasts who share knowledge, not just purchases.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:'rgba(154,114,53,0.12)'}}>
                        <Check size={12} style={{color:'#9A7235'}}/>
                      </div>
                      <div><p className="text-sm font-medium" style={{color:'#2A2018'}}>{item.t}</p><p className="text-sm" style={{color:'#7A6A58', fontFamily:'Cormorant Garamond,serif', fontSize:'14px'}}>{item.d}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-center space-y-6 p-12 rounded-2xl w-full" style={{background:'rgba(154,114,53,0.05)', border:'1px solid rgba(154,114,53,0.1)'}}>
                  <p className="font-serif text-7xl font-light" style={{fontFamily:'Playfair Display,serif', color:'#9A7235'}}>25K+</p>
                  <p className="text-sm tracking-wider uppercase" style={{color:'#9A8A78'}}>Collectors Worldwide</p>
                  <div className="w-12 h-px mx-auto" style={{background:'rgba(154,114,53,0.2)'}}/>
                  <p className="text-sm" style={{color:'#7A6A58', fontFamily:'Cormorant Garamond,serif', fontSize:'15px', fontStyle:'italic'}}>Built organically. Without advertising. Without a single celebrity endorsement.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 11: COMPETITIVE ── */}
      <section id="competitive" className="min-h-screen flex items-center justify-center px-8 py-32" style={{scrollSnapAlign:'start', background:'#F5EDD8'}}>
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>Competitive Position</p>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                Don't compare prices.<br/><span className="italic" style={{color:'#9A7235'}}>Compare philosophies.</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-xl mx-auto">
              {[
                { label:'Mass Luxury', width:'100%', bg:'rgba(42,32,24,0.08)', color:'#9A8A78' },
                { label:'Niche Luxury', width:'72%', bg:'rgba(42,32,24,0.15)', color:'#7A6A58' },
                { label:'Natural Perfumery', width:'48%', bg:'rgba(154,114,53,0.15)', color:'#9A7235' },
                { label:'NUHOUD', width:'28%', bg:'#9A7235', color:'#FFFDF7' },
              ].map((step, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.15}}
                  className="rounded-full overflow-hidden flex items-center" style={{background:step.bg}}>
                  <div className="px-8 py-4 text-left">
                    <p className="text-sm font-medium" style={{color:step.color}}>{step.label}</p>
                  </div>
                  <div className="flex-1 h-full flex items-center justify-end pr-6">
                    <div className="w-2 h-2 rounded-full" style={{background:step.color, opacity:0.5}}/>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="font-display italic text-lg" style={{fontFamily:'Cormorant Garamond,serif', color:'#5A4A38', fontStyle:'italic', maxWidth:'560px', margin:'0 auto'}}>
              Fewer competitors. Higher barriers to entry. Longer lasting advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 12: FIVE YEAR VISION ── */}
      <section id="vision" className="min-h-screen flex items-center px-8 py-32" style={{scrollSnapAlign:'start'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3"><div className="w-8 h-px" style={{background:'rgba(154,114,53,0.35)'}}/><span className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>Five Year Vision</span></div>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)', color:'#2A2018'}}>
                What success<br/><span className="italic" style={{color:'#9A7235'}}>looks like.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { t:'Globally Recognised', d:'NUHOUD named alongside the world\'s most respected natural perfumery houses.' },
                { t:'Collector Community', d:'Tens of thousands of collectors across 50+ countries, waiting for each release.' },
                { t:'Annual Releases', d:'Signature annual collections that become events the community anticipates.' },
                { t:'Distillation Destination', d:'A physical distillation centre that collectors can visit and learn from.' },
                { t:'Educational Destination', d:'The NUHOUD journal and platform become the authoritative voice in natural perfumery.' },
                { t:'International Reputation', d:'Sought out by luxury retailers and distributors across the GCC, Europe, and Asia.' },
              ].map((item, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.08}}
                  className="flex gap-5 p-6 rounded-xl" style={{background:'rgba(154,114,53,0.04)', border:'1px solid rgba(154,114,53,0.1)'}}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(154,114,53,0.1)'}}>
                    <Star size={14} style={{color:'#9A7235'}}/>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base" style={{fontFamily:'Playfair Display,serif', color:'#2A2018'}}>{item.t}</h4>
                    <p className="text-sm" style={{color:'#7A6A58', fontFamily:'Cormorant Garamond,serif', fontSize:'14px'}}>{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 13: WHY UNIQUE ── */}
      <section id="unique" className="min-h-screen flex items-center justify-center px-8 py-32" style={{scrollSnapAlign:'start', background:'#2A2018', color:'#FFFDF7'}}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="space-y-16">
            <div className="space-y-4">
              <p className="text-xs tracking-[0.3em] uppercase" style={{color:'rgba(154,114,53,0.5)'}}>The Opportunity</p>
              <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,5vw,60px)'}}>
                You cannot<br/><span className="italic" style={{color:'#C4974E'}}>buy these things.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                'Twenty years of hands-on agarwood expertise.',
                'Reputation built across generations.',
                'Sourcing relationships with harvesters.',
                'A collector community that trusts the brand.',
                'The story — inherited, not invented.',
                'The knowledge of what makes a great oil.',
              ].map((item, i) => (
                <motion.div key={i} variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*0.1}}
                  className="flex items-center gap-4 p-5 rounded-xl" style={{background:'rgba(154,114,53,0.08)', border:'1px solid rgba(154,114,53,0.15)'}}>
                  <CheckCircle2 size={18} style={{color:'#C4974E', flexShrink:0}}/>
                  <p className="text-base" style={{fontFamily:'Cormorant Garamond,serif', fontSize:'17px', color:'rgba(255,253,247,0.8)'}}>{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center p-10 rounded-2xl" style={{background:'rgba(154,114,53,0.1)', border:'1px solid rgba(154,114,53,0.2)'}}>
              <p className="font-display italic text-xl leading-relaxed" style={{fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', color:'rgba(255,253,247,0.85)'}}>
                These already exist.<br/>The investment accelerates what already works.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SLIDE 14: CLOSING ── */}
      <section id="close" className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-32" style={{scrollSnapAlign:'start'}}>
        <motion.div variants={fu} initial="hidden" whileInView="visible" viewport={{once:true}} className="max-w-4xl space-y-12">
          <div className="space-y-6">
            <div className="w-16 h-px mx-auto" style={{background:'rgba(154,114,53,0.3)'}}/>
            <h2 className="font-serif leading-tight" style={{fontFamily:'Playfair Display,serif', fontSize:'clamp(36px,6vw,72px)', color:'#2A2018'}}>
              We are not trying to become<br/>the biggest perfume company.
            </h2>
            <p className="font-display italic text-2xl" style={{fontFamily:'Cormorant Garamond,serif', color:'#9A7235', fontStyle:'italic', fontWeight:300}}>
              We are trying to become<br/>the most respected.
            </p>
            <div className="w-16 h-px mx-auto" style={{background:'rgba(154,114,53,0.3)'}}/>
          </div>

          <div className="p-10 rounded-2xl space-y-4" style={{background:'rgba(154,114,53,0.05)', border:'1px solid rgba(154,114,53,0.1)'}}>
            <p className="font-display italic text-lg leading-relaxed" style={{fontFamily:'Cormorant Garamond,serif', fontStyle:'italic', color:'#5A4A38'}}>
              The financial success will follow<br/>the reputation we build.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase" style={{color:'#9A8A78'}}>Strategic Investment</p>
            <div className="font-serif text-5xl font-light" style={{fontFamily:'Playfair Display,serif', color:'#9A7235'}}>AED 3,000,000</div>
            <p className="text-sm" style={{color:'#9A8A78'}}>Partnership Proposal</p>
          </div>

          <div className="space-y-3 pt-4">
            <p className="text-sm" style={{color:'#7A6A58'}}>Shahid Ahmed — Bu Nuh</p>
            <div className="flex items-center justify-center gap-6">
              <a href="mailto:shahid@nuhoud.com" className="flex items-center gap-2 text-sm" style={{color:'#9A7235'}}>
                <Mail size={14}/> shahid@nuhoud.com
              </a>
              <span className="opacity-30">|</span>
              <span className="flex items-center gap-2 text-sm" style={{color:'#9A7235'}}>
                <Phone size={14}/> Upon Request
              </span>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

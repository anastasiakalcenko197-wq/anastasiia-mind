"use client"

import { useEffect, useRef, useState } from "react"

import * as C from "@/content"
import type { Lang, T } from "@/content"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text"
import { AuroraText } from "@/components/magicui/aurora-text"
import { BlurFade } from "@/components/magicui/blur-fade"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { MagicCard } from "@/components/magicui/magic-card"
import { Marquee } from "@/components/magicui/marquee"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { Particles } from "@/components/magicui/particles"
import { Ripple } from "@/components/magicui/ripple"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { WordRotate } from "@/components/magicui/word-rotate"

const BORDO = "#7C2230"
const BORDO_SOFT = "#C46A76"
const OLIVE_SOFT = "#B4AE72"

/* card styling passed to MagicCard so its spotlight uses the brand colours */
const card = {
  gradientFrom: BORDO_SOFT,
  gradientTo: OLIVE_SOFT,
  gradientColor: "#3a2226",
  gradientOpacity: 0.55,
  gradientSize: 260,
}

function Arrow({ d = "M7 17 17 7M8 7h9v9" }: { d?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round] transition-transform duration-500 group-hover:translate-x-[3px] group-hover:-translate-y-[2px]">
      <path d={d} />
    </svg>
  )
}

function Head({ eyebrow, title, lead, id }: { eyebrow: string; title: React.ReactNode; lead: string; id?: string }) {
  return (
    <div className="mb-12 grid items-end gap-6 md:mb-18 md:grid-cols-[1fr_1.3fr] md:gap-20">
      <BlurFade inView>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={id} className="mt-4 text-[clamp(38px,5vw,68px)]">{title}</h2>
      </BlurFade>
      <BlurFade inView delay={0.1}>
        <p className="max-w-[52ch] text-ivory-dim">{lead}</p>
      </BlurFade>
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("uk")
  const t = (x: T) => x[lang]

  useEffect(() => {
    try {
      const saved = localStorage.getItem("am-lang")
      if (saved === "en" || saved === "uk") setLang(saved)
    } catch {}
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem("am-lang", lang)
    } catch {}
  }, [lang])

  /* animated beam between the three steps */
  const stepsRef = useRef<HTMLDivElement>(null)
  const n1 = useRef<HTMLDivElement>(null)
  const n2 = useRef<HTMLDivElement>(null)
  const n3 = useRef<HTMLDivElement>(null)

  const [status, setStatus] = useState<T | null>(null)
  const handleRef = useRef<HTMLElement>(null)
  const copyHandle = () => {
    const select = () => {
      const r = document.createRange()
      if (handleRef.current) r.selectNodeContents(handleRef.current)
      const s = getSelection()
      s?.removeAllRanges()
      s?.addRange(r)
      setStatus(C.contact.selected)
    }
    try {
      navigator.clipboard.writeText(C.LINKS.instagramHandle).then(() => setStatus(C.contact.copied), select)
    } catch {
      select()
    }
  }

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress className="h-[2px] bg-linear-to-r from-bordo via-bordo-soft to-olive-soft" />

      {/* NAV */}
      <nav
        aria-label="Navigation"
        className="fixed top-[calc(env(safe-area-inset-top,0px)+14px)] left-1/2 z-50 flex w-max max-w-[calc(100%-32px)] -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-ink/70 py-1.5 pr-1.5 pl-4.5 shadow-[inset_0_1px_0_rgba(237,228,216,.06)] backdrop-blur-xl"
      >
        <span className="mr-2.5 font-display text-xl whitespace-nowrap italic">Anastasiia</span>
        {C.nav.map((l) => (
          <a key={l.href} href={l.href} className="hidden rounded-full px-3 py-2 text-[13px] text-ivory-dim no-underline transition-colors hover:bg-ivory/5 hover:text-ivory md:inline-block">
            {t(l.label)}
          </a>
        ))}
        <div role="group" aria-label="Мова / Language" className="flex gap-0.5 rounded-full bg-ivory/5 p-[3px]">
          {(["uk", "en"] as const).map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              className="cursor-pointer rounded-full px-2.5 py-2 text-[11px] leading-none font-medium tracking-[.12em] text-ivory-dim transition-colors aria-pressed:bg-ivory aria-pressed:text-ink"
            >
              {l === "uk" ? "UA" : "EN"}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {/* HERO */}
        <header className="relative overflow-hidden">
          <Particles className="absolute inset-0" quantity={110} ease={70} staticity={40} color="#EDE4D8" size={0.5} />
          <Particles className="absolute inset-0" quantity={40} ease={80} color={BORDO_SOFT} size={0.7} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-linear-to-b from-transparent to-ink" />
          <div className="wrap relative z-10 pt-[clamp(120px,15vh,160px)] pb-[clamp(56px,8vh,96px)]">
            <div className="grid items-end gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1.15fr_.85fr]">
              <div className="min-w-0">
                <BlurFade delay={0}>
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-ivory/[.04] py-1.5 pr-4 pl-3">
                    <span className="size-1.5 rounded-full bg-bordo-soft shadow-[0_0_0_4px_rgba(196,106,118,.14)]" />
                    <AnimatedShinyText className="mx-0 max-w-none text-[11px] font-medium tracking-[.2em] text-ivory-dim/80 uppercase dark:text-ivory-dim/80 dark:via-ivory">
                      {t(C.hero.badge)}
                    </AnimatedShinyText>
                  </div>
                </BlurFade>
                <BlurFade delay={0.1}>
                  <h1 className="mt-6 text-[clamp(46px,7vw,100px)]">
                    {t(C.hero.titleA)}{" "}
                    <AuroraText className="font-normal italic" colors={[BORDO_SOFT, "#E6B2A8", OLIVE_SOFT, BORDO_SOFT]} speed={0.8}>
                      {t(C.hero.titleAccent)}
                    </AuroraText>{" "}
                    {t(C.hero.titleB)}
                  </h1>
                </BlurFade>
                <BlurFade delay={0.2}>
                  <p className="mt-7 max-w-[46ch] text-[17px] text-ivory-dim">{t(C.hero.lead)}</p>
                </BlurFade>
                <BlurFade delay={0.25}>
                  <div className="mt-5 flex flex-wrap items-baseline gap-x-2 font-display text-[clamp(22px,2.2vw,28px)] italic">
                    <span className="text-ivory-dim">{t(C.hero.rotatePrefix)}</span>
                    <WordRotate key={lang} words={C.hero.rotate[lang]} duration={2600} className="text-bordo-soft" />
                  </div>
                </BlurFade>
                <BlurFade delay={0.3}>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a href="#contact" className="group">
                      <ShimmerButton background={BORDO} shimmerColor="#EDE4D8" shimmerDuration="3.2s" className="gap-3 px-7 py-4 text-sm font-medium">
                        {t(C.hero.ctaPrimary)}
                        <Arrow />
                      </ShimmerButton>
                    </a>
                    <a href="#about" className="group inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-sm font-medium no-underline transition-colors hover:bg-ivory/5">
                      {t(C.hero.ctaSecondary)}
                      <Arrow d="M12 5v14M6 13l6 6 6-6" />
                    </a>
                  </div>
                </BlurFade>
                <BlurFade delay={0.4}>
                  <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-[.14em] text-ivory-dim uppercase">
                    {C.hero.meta.map((m) => (
                      <span key={m.en} className="inline-flex items-center gap-2 before:h-px before:w-3.5 before:bg-olive-soft">
                        {t(m)}
                      </span>
                    ))}
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={0.2} className="relative mx-auto w-full max-w-[440px] min-w-0 lg:max-w-none">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[30px] border border-border bg-ink-3 p-1.5">
                  <img src="img/gallery.jpg" alt="Анастасія на сходах серед чорно-білих фотографій" className="size-full rounded-[24px] object-cover" />
                  <BorderBeam size={220} duration={10} colorFrom={BORDO_SOFT} colorTo={OLIVE_SOFT} borderWidth={1.5} />
                </div>
                <div className="absolute bottom-[-6%] left-[-4%] aspect-[3/4] w-[40%] -rotate-3 rounded-[26px] border border-border bg-ink-3 p-[5px] shadow-[0_30px_60px_-20px_rgba(0,0,0,.7)] lg:left-[-18%] lg:w-[44%]">
                  <img src="img/cafe.jpg" alt="Анастасія усміхається в кафе з дзеркалами" className="size-full rounded-[21px] object-cover" />
                </div>
                <span className="absolute top-4.5 right-4.5 rounded-full border border-border bg-ink/65 px-3.5 py-2 text-[11px] tracking-[.16em] uppercase backdrop-blur-md">
                  Mind · Body
                </span>
              </BlurFade>
            </div>
          </div>
        </header>

        {/* STATS — NumberTicker */}
        <div className="wrap">
          <div className="grid grid-cols-2 border-y border-border md:grid-cols-4">
            {C.stats.map((s, i) => (
              <div
                key={i}
                className={`grid gap-1.5 px-3 py-6 md:px-7 md:py-9 ${i % 2 === 1 ? "border-l border-border" : ""} ${i >= 2 ? "border-t border-border md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
              >
                <b className="font-display text-[clamp(44px,5vw,72px)] leading-none font-medium tabular-nums">
                  <NumberTicker value={s.value} className="text-ivory dark:text-ivory" />
                  {s.unit && <small className="ml-1.5 text-[.4em] text-olive-soft italic">{t(s.unit)}</small>}
                </b>
                <span className="max-w-[22ch] text-[13px] text-ivory-dim">{t(s.label)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MARQUEE phrases */}
        <div aria-hidden="true" className="relative grid gap-2 py-12 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <Marquee pauseOnHover className="[--duration:46s] [--gap:3rem]">
            {C.phrasesA.map((p) => (
              <span key={p.en} className="inline-flex items-center gap-12 font-display text-[clamp(26px,3vw,42px)] whitespace-nowrap text-ivory-dim italic after:size-2 after:rounded-full after:bg-olive">
                {t(p)}
              </span>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:52s] [--gap:3rem]">
            {C.phrasesB.map((p) => (
              <span key={p.en} className="inline-flex items-center gap-12 font-display text-[clamp(26px,3vw,42px)] whitespace-nowrap text-bordo-soft/75 italic after:size-2 after:rounded-full after:bg-olive">
                {t(p)}
              </span>
            ))}
          </Marquee>
        </div>

        {/* ABOUT */}
        <section id="about" className="wrap py-[clamp(80px,12vw,150px)]">
          <div className="grid items-center gap-[clamp(32px,6vw,96px)] md:grid-cols-[.8fr_1.2fr]">
            <BlurFade inView className="mx-auto w-full max-w-[420px]">
              <div className="aspect-[2/3] rounded-[30px] border border-border bg-ink-3 p-1.5">
                <img src="img/milan.jpg" alt="Анастасія усміхається на даху Міланського собору" className="size-full rounded-[24px] object-cover" />
              </div>
            </BlurFade>
            <div className="grid min-w-0 gap-5.5">
              <BlurFade inView><span className="eyebrow">{t(C.about.eyebrow)}</span></BlurFade>
              <BlurFade inView delay={0.06}>
                <h2 className="text-[clamp(38px,5vw,68px)]">
                  {t(C.about.titleA)} <em>{t(C.about.titleEm)}</em>
                </h2>
              </BlurFade>
              <BlurFade inView delay={0.12}>
                <p className="font-display text-[clamp(24px,2.4vw,32px)] leading-[1.3] italic">{t(C.about.quote)}</p>
              </BlurFade>
              <BlurFade inView delay={0.18}><p className="max-w-[58ch] text-[17px] text-ivory-dim">{t(C.about.p1)}</p></BlurFade>
              <BlurFade inView delay={0.24}><p className="max-w-[58ch] text-[17px] text-ivory-dim">{t(C.about.p2)}</p></BlurFade>
            </div>
          </div>
        </section>

        {/* TOPICS — Bento of MagicCards */}
        <section id="topics" className="wrap py-[clamp(80px,12vw,150px)]">
          <Head
            eyebrow={t(C.topics.eyebrow)}
            title={<>{t(C.topics.titleA)} <em>{t(C.topics.titleEm)}</em>{t(C.topics.titleB)}</>}
            lead={t(C.topics.lead)}
          />
          <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {C.topics.groups.map((g, i) => {
              const span = i === 0 ? "md:col-span-2" : i === 1 ? "lg:row-span-2" : ""
              const tall = i === 1
              return (
                <BlurFade key={g.key} inView delay={i * 0.06} className={span}>
                  <MagicCard {...card} className="h-full rounded-[26px]">
                    <div className="grid h-full content-start gap-4 p-[clamp(24px,3vw,36px)]">
                      <TopicIcon k={g.key} />
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[clamp(30px,3vw,40px)] font-normal italic">{t(g.title)}</h3>
                        <small className="text-[11px] tracking-[.18em] text-olive-soft uppercase">{g.num}</small>
                      </div>
                      <ul className={tall ? "grid" : "flex flex-wrap gap-2"}>
                        {g.items.map((it) => (
                          <li
                            key={it.en}
                            className={
                              tall
                                ? "border-b border-border py-3.5 text-[15px]"
                                : "rounded-full border border-border bg-ivory/[.03] px-3.5 py-2 text-sm"
                            }
                          >
                            {t(it)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </MagicCard>
                </BlurFade>
              )
            })}
            <BlurFade inView delay={0.2}>
              <MagicCard {...card} className="h-full rounded-[26px]">
                <div className="grid h-full content-start gap-4 p-[clamp(24px,3vw,36px)]">
                  <TopicIcon k="chat" />
                  <h3 className="text-[30px]">{t(C.topics.ctaTitle)}</h3>
                  <p className="text-ivory-dim">{t(C.topics.ctaText)}</p>
                  <a href="#contact" className="group inline-flex items-center gap-2 font-medium text-bordo-soft no-underline hover:underline hover:underline-offset-4">
                    {t(C.topics.ctaLink)}
                    <Arrow d="M5 12h14M13 6l6 6-6 6" />
                  </a>
                </div>
              </MagicCard>
            </BlurFade>
          </div>
        </section>

        {/* METHODS */}
        <section id="methods" className="wrap py-[clamp(80px,12vw,150px)]">
          <Head eyebrow={t(C.methods.eyebrow)} title={<>{t(C.methods.titleA)} <em>{t(C.methods.titleEm)}</em></>} lead={t(C.methods.lead)} />
          <div className="grid gap-4 md:grid-cols-2">
            {C.methods.items.map((m, i) => (
              <BlurFade key={m.title.en} inView delay={i * 0.06}>
                <MagicCard {...card} className="h-full rounded-[26px]">
                  <div className="grid gap-4 p-[clamp(24px,3vw,36px)]">
                    <div className="font-display text-[clamp(32px,3.6vw,48px)] leading-none">
                      {t(m.title)}
                      <small className="mt-3 block font-sans text-[11px] tracking-[.2em] text-olive-soft uppercase">{t(m.tag)}</small>
                    </div>
                    <p className="max-w-[52ch] text-ivory-dim">{t(m.text)}</p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* LIFE — photo Marquee */}
        <section aria-labelledby="life-h" className="py-[clamp(80px,12vw,150px)]">
          <div className="wrap">
            <Head
              id="life-h"
              eyebrow={t(C.life.eyebrow)}
              title={<>{t(C.life.titleA)} <em>{t(C.life.titleEm)}</em> {t(C.life.titleB)}</>}
              lead={t(C.life.lead)}
            />
          </div>
          <Marquee pauseOnHover repeat={3} className="[--duration:70s] [--gap:18px]">
            {C.life.photos.map((p) => (
              <figure key={p.src} className="group m-0 grid w-[clamp(230px,24vw,320px)] gap-3.5">
                <div className="aspect-[3/4] overflow-hidden rounded-[28px] border border-border bg-ink-3 p-1.5">
                  <img src={p.src} alt={p.alt} loading="lazy" className="size-full rounded-[22px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                </div>
                <figcaption className="grid gap-0.5 px-1.5">
                  <b className="font-display text-2xl font-medium italic">{t(p.title)}</b>
                  <span className="text-sm text-ivory-dim">{t(p.text)}</span>
                </figcaption>
              </figure>
            ))}
          </Marquee>
        </section>

        {/* STEPS — AnimatedBeam */}
        <section aria-labelledby="how-h" className="wrap py-[clamp(80px,12vw,150px)]">
          <Head id="how-h" eyebrow={t(C.steps.eyebrow)} title={<>{t(C.steps.titleA)} <em>{t(C.steps.titleEm)}</em></>} lead={t(C.steps.lead)} />
          <div ref={stepsRef} className="relative grid gap-9 md:grid-cols-3 md:gap-10">
            {C.steps.items.map((s, i) => (
              <BlurFade key={s.n} inView delay={i * 0.12} className="relative z-10">
                <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-x-5 gap-y-2 md:grid-cols-1 md:gap-y-3.5">
                  <div
                    ref={[n1, n2, n3][i]}
                    className="row-span-3 grid size-16 place-items-center rounded-full border border-border bg-ink-2 font-display text-[26px] text-olive-soft italic shadow-[0_0_0_6px_var(--color-ink),0_0_24px_-4px_rgba(196,106,118,.45)] md:row-span-1"
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-3 text-3xl md:mt-1.5">{t(s.title)}</h3>
                  <p className="max-w-[34ch] text-ivory-dim">{t(s.text)}</p>
                </div>
              </BlurFade>
            ))}
            <AnimatedBeam containerRef={stepsRef} fromRef={n1} toRef={n2} curvature={0} pathColor="#EDE4D8" pathOpacity={0.12} gradientStartColor={BORDO_SOFT} gradientStopColor={OLIVE_SOFT} duration={3.5} />
            <AnimatedBeam containerRef={stepsRef} fromRef={n2} toRef={n3} curvature={0} pathColor="#EDE4D8" pathOpacity={0.12} gradientStartColor={BORDO_SOFT} gradientStopColor={OLIVE_SOFT} duration={3.5} delay={1.2} />
          </div>
        </section>

        {/* EDUCATION */}
        <section aria-labelledby="edu-h" className="wrap py-[clamp(80px,12vw,150px)]">
          <div className="grid items-start gap-[clamp(32px,6vw,96px)] md:grid-cols-2">
            <BlurFade inView>
              <div className="relative grid gap-4.5 overflow-hidden rounded-[30px] border border-border bg-linear-160 from-[#2A1A1C] to-ink-2 to-70% p-[clamp(28px,4vw,48px)]">
                <span className="eyebrow">{t(C.education.eyebrow)}</span>
                <h3 id="edu-h" className="text-[clamp(28px,3vw,40px)]">{t(C.education.title)}</h3>
                <p className="text-ivory-dim">{t(C.education.p1)}</p>
                <p className="text-ivory-dim">{t(C.education.p2)}</p>
                <BorderBeam size={200} duration={11} colorFrom={BORDO_SOFT} colorTo={OLIVE_SOFT} borderWidth={1.5} />
              </div>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <span className="eyebrow">{t(C.education.certEyebrow)}</span>
              <ul className="mt-5.5 border-t border-border">
                {C.education.certs.map((c) => (
                  <li key={c.name.en} className="flex justify-between gap-5 border-b border-border py-4.5">
                    <span>{t(c.name)}</span>
                    <span className="flex-none text-right text-xs tracking-[.14em] text-olive-soft uppercase">{t(c.note)}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" aria-labelledby="price-h" className="wrap py-[clamp(80px,12vw,150px)]">
          <Head
            id="price-h"
            eyebrow={t(C.pricing.eyebrow)}
            title={<>{t(C.pricing.titleA)} <em>{t(C.pricing.titleEm)}</em> {t(C.pricing.titleB)}</>}
            lead={t(C.pricing.lead)}
          />
          <div className="grid items-start gap-[clamp(16px,2.5vw,28px)] md:grid-cols-[.85fr_1.15fr]">
            <BlurFade inView>
              <div className="grid gap-5 rounded-[30px] border border-border bg-ink-2 p-[clamp(26px,3.5vw,44px)]">
                <span className="text-xs font-medium tracking-[.2em] text-ivory-dim uppercase">{t(C.pricing.single.kicker)}</span>
                <Price value={C.PRICES.single} ph={t(C.pricing.single.placeholder)}>
                  <small className="font-sans text-sm text-ivory-dim">{t(C.pricing.single.unit)}</small>
                </Price>
                <p className="text-ivory-dim">{t(C.pricing.single.text)}</p>
                <a href="#contact" className="group inline-flex items-center gap-3 justify-self-start rounded-full border border-border px-7 py-4 text-sm font-medium no-underline transition-colors hover:bg-ivory/5">
                  {t(C.pricing.single.cta)}
                  <Arrow />
                </a>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.1}>
              <div className="relative grid gap-5 overflow-hidden rounded-[30px] border border-border bg-linear-170 from-[#2A1A1C] to-ink-2 to-65% p-[clamp(26px,3.5vw,44px)]">
                <span className="flex flex-wrap items-center gap-2.5 text-xs font-medium tracking-[.2em] text-ivory-dim uppercase">
                  {t(C.pricing.pack.kicker)}
                  <b className="rounded-full bg-olive-soft/15 px-2.5 py-1 font-medium tracking-[.08em] text-olive-soft normal-case">{t(C.pricing.pack.badge)}</b>
                </span>
                <Price value={C.PRICES.pack} ph={t(C.pricing.pack.placeholder)}>
                  <small className="font-sans text-sm text-ivory-dim">
                    {t(C.pricing.pack.insteadOf)}{" "}
                    {C.PRICES.packInsteadOf ? <s>{C.PRICES.packInsteadOf}</s> : <span className="ph text-[13px]">{t(C.pricing.pack.placeholderInstead)}</span>}
                  </small>
                </Price>
                <p className="text-ivory-dim">{t(C.pricing.pack.text)}</p>
                <ul className="grid">
                  {C.pricing.pack.gifts.map((g) => (
                    <li key={g.ph.en} className="grid gap-1 border-t border-border py-3.5 text-sm text-ivory-dim">
                      <span className="ph justify-self-start text-[13px]">{t(g.ph)}</span>
                      {t(g.text)}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="group justify-self-start">
                  <ShimmerButton background={BORDO} shimmerColor="#EDE4D8" shimmerDuration="3.2s" className="gap-3 px-7 py-4 text-sm font-medium">
                    {t(C.pricing.pack.cta)}
                    <Arrow />
                  </ShimmerButton>
                </a>
                <BorderBeam size={220} duration={8} colorFrom={BORDO_SOFT} colorTo={OLIVE_SOFT} borderWidth={1.5} />
                <BorderBeam size={220} duration={8} delay={4} colorFrom={OLIVE_SOFT} colorTo={BORDO_SOFT} borderWidth={1.5} />
              </div>
            </BlurFade>
          </div>
        </section>

        {/* CONTACT — Ripple + Dock */}
        <section id="contact" className="wrap py-[clamp(80px,12vw,150px)]">
          <div className="relative grid min-h-[680px] items-end overflow-hidden rounded-[36px] border border-border md:min-h-[560px]">
            <img src="img/oslo.jpg" alt="" loading="lazy" className="absolute inset-0 size-full object-cover object-[center_30%]" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/95 from-40% via-ink/60 to-ink/25 md:bg-linear-to-r md:from-ink/95 md:from-0% md:via-ink/80 md:via-48% md:to-ink/20" />
            <div className="absolute inset-0 [--foreground:var(--color-bordo-soft)] md:right-auto md:w-[56%]">
              <Ripple mainCircleSize={180} mainCircleOpacity={0.22} numCircles={7} className="[&>div]:bg-bordo-soft/10" />
            </div>
            <div className="relative z-10 grid max-w-[640px] min-w-0 gap-5.5 p-[clamp(28px,5vw,72px)]">
              <span className="eyebrow">{t(C.contact.eyebrow)}</span>
              <BlurFade inView>
                <h2 className="text-[clamp(38px,5vw,68px)]">
                  {t(C.contact.titleA)} <em>{t(C.contact.titleEm)}</em>
                </h2>
              </BlurFade>
              <BlurFade inView delay={0.08}><p className="text-ivory-dim">{t(C.contact.text)}</p></BlurFade>
              <code ref={handleRef} className="justify-self-start rounded-full border border-border bg-ink/55 px-4.5 py-3 font-sans text-[15px] font-medium select-all">
                {C.LINKS.instagramHandle}
              </code>
              <Dock iconSize={50} iconMagnification={72} iconDistance={140} direction="bottom" className="mx-0 mt-0 h-[74px] border-border bg-ink/60">
                <DockIcon className="bg-bordo text-ivory">
                  <a href={C.LINKS.instagram} target="_blank" rel="noopener" aria-label="Instagram" title="Instagram" className="grid place-items-center">
                    <IgIcon />
                  </a>
                </DockIcon>
                <DockIcon className="border border-border bg-ink-3 text-ivory">
                  <a
                    href={C.LINKS.telegram || "#contact"}
                    {...(C.LINKS.telegram ? { target: "_blank", rel: "noopener" } : {})}
                    aria-label={t(C.LINKS.telegram ? C.contact.tg : C.contact.tgSoon)}
                    title={t(C.LINKS.telegram ? C.contact.tg : C.contact.tgSoon)}
                    className="grid place-items-center"
                  >
                    <TgIcon />
                  </a>
                </DockIcon>
                <div className="mx-0.5 h-10 w-px self-center bg-border" />
                <DockIcon className="border border-border bg-ink-3 text-ivory">
                  <button type="button" onClick={copyHandle} aria-label={t(C.contact.copy)} title={t(C.contact.copy)} className="grid cursor-pointer place-items-center">
                    <CopyIcon />
                  </button>
                </DockIcon>
              </Dock>
              <p aria-live="polite" className="min-h-[1.4em] text-[13px] text-olive-soft">{status ? t(status) : ""}</p>
              <div className="flex flex-wrap gap-2">
                {C.contact.facts.map((f) => (
                  <span key={f.en} className="rounded-full border border-border bg-ink/45 px-3 py-1.5 text-xs text-ivory-dim">{t(f)}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-14 text-[13px] text-ivory-dim">
        <div className="wrap">
          <div className="flex flex-wrap justify-between gap-4 border-t border-border pt-7">
            <span>Anastasiia · mind &amp; body</span>
            <p className="max-w-[62ch]">{t(C.footer.note)}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function Price({ value, ph, children }: { value: string; ph: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline gap-2.5 font-display text-[clamp(40px,4.5vw,58px)] leading-none">
      {value ? value : <span className="ph">{ph}</span>}
      {children}
    </div>
  )
}

const ico = "size-[22px] fill-none stroke-current stroke-[1.5] [stroke-linecap:round] [stroke-linejoin:round]"

function TopicIcon({ k }: { k: string }) {
  const paths: Record<string, React.ReactNode> = {
    emotions: <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />,
    self: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="16.5" cy="9.5" r="2.4" />
        <path d="M3.5 19c.6-3 2.8-5 5.5-5s4.9 2 5.5 5M14.5 14.6c2.6-.4 4.9 1.3 5.5 4.4" />
      </>
    ),
    body: (
      <>
        <circle cx="12" cy="4.5" r="2" />
        <path d="M5 9h14M12 9v5m0 0-3.5 6.5M12 14l3.5 6.5" />
      </>
    ),
    chat: <path d="M4 5h16v11H8l-4 4z" />,
  }
  return (
    <div className="grid size-11 place-items-center rounded-[14px] bg-bordo-soft/12 text-bordo-soft">
      <svg viewBox="0 0 24 24" className={ico}>{paths[k]}</svg>
    </div>
  )
}
function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ico}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" />
    </svg>
  )
}
function TgIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ico}>
      <path d="M21 4 3 11l6 2 2 6 3-4 5 4z" />
    </svg>
  )
}
function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" className={ico}>
      <rect x="8" y="8" width="12" height="12" rx="3" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  )
}

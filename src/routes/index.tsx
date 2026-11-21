import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import img1 from "@/assets/app-image.png.asset.json";
import img2 from "@/assets/app-image-2.png.asset.json";
import img3 from "@/assets/app-image-3.png.asset.json";
import img4 from "@/assets/app-image-4-sem-arroba.png.asset.json";

const CHECKOUT = "https://pay.kiwify.com.br/BtvX7Gx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MUSCLE RECOVERY — Oferta: acesso por R$ 23,90" },
      { name: "description", content: "Registre cada treino, veja os músculos trabalhados e acompanhe sua evolução. Oferta relâmpago por R$ 23,90." },
      { property: "og:title", content: "MUSCLE RECOVERY — Oferta: acesso por R$ 23,90" },
      { property: "og:description", content: "O app de treino que mostra sua evolução. Acesso por R$ 23,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAMES = ["Lucas M.", "Ana P.", "Rafael S.", "Juliana C.", "Pedro H.", "Camila R.", "Gustavo L.", "Bianca F.", "Matheus O.", "Larissa T.", "Thiago A.", "Fernanda B."];
const CITIES = ["São Paulo", "Belo Horizonte", "Rio de Janeiro", "Curitiba", "Salvador", "Recife", "Goiânia", "Porto Alegre", "Fortaleza", "Campinas"];

function Cta({ children = "QUERO MEU ACESSO AGORA", big = false }: { children?: string; big?: boolean }) {
  return (
    <a href={CHECKOUT} className={`bg-lime shadow-glow animate-pulse-ring inline-flex items-center justify-center rounded-full font-display font-extrabold text-primary-foreground transition-transform hover:scale-105 ${big ? "px-10 py-6 text-lg md:text-xl" : "px-8 py-5 text-base"}`}>
      {children} →
    </a>
  );
}

function Phone({ src, r = "0deg", className = "" }: { src: string; r?: string; className?: string }) {
  return (
    <div style={{ ["--r" as string]: r }} className={`animate-floaty rounded-[2.5rem] border-4 border-secondary bg-card p-1.5 shadow-glow ${className}`}>
      <img src={src} alt="Tela do app MUSCLE RECOVERY" className="w-full rounded-[2rem]" loading="lazy" />
    </div>
  );
}

function useCountdown() {
  const [s, setS] = useState(15 * 60);
  useEffect(() => { const t = setInterval(() => setS((v) => (v > 0 ? v - 1 : 15 * 60)), 1000); return () => clearInterval(t); }, []);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function Notifications() {
  const [n, setN] = useState<{ name: string; city: string; min: number } | null>(null);
  useEffect(() => {
    const show = () => {
      setN({ name: NAMES[Math.floor(Math.random() * NAMES.length)]!, city: CITIES[Math.floor(Math.random() * CITIES.length)]!, min: 1 + Math.floor(Math.random() * 9) });
      setTimeout(() => setN(null), 4500);
    };
    const first = setTimeout(show, 3000);
    const t = setInterval(show, 9000);
    return () => { clearTimeout(first); clearInterval(t); };
  }, []);
  if (!n) return null;
  return (
    <div key={n.name + n.min} className="animate-toast fixed bottom-4 left-4 z-50 flex max-w-xs items-center gap-3 rounded-2xl border border-primary/40 bg-card/95 p-3 pr-5 shadow-glow backdrop-blur">
      <div className="bg-lime flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display font-extrabold text-primary-foreground">{n.name[0]}</div>
      <div className="text-sm leading-tight">
        <p><b>{n.name}</b> de {n.city}</p>
        <p className="text-primary">acabou de garantir o acesso ✓</p>
        <p className="text-xs text-muted-foreground">há {n.min} min</p>
      </div>
    </div>
  );
}

const FEATURES = [
  { t: "Mapa muscular", d: "Marque os músculos treinados, frente e costas, e veja o corpo acender." },
  { t: "+330 exercícios", d: "Filtre por músculo e equipamento: barra, halteres, máquina, cabo." },
  { t: "Séries, reps e carga", d: "Registre tudo em segundos, com intensidade percebida (RPE)." },
  { t: "Histórico e evolução", d: "Veja seu progresso semana após semana e nunca mais treine no chute." },
];

const TESTIMONIALS = [
  { n: "Bruno Alves", c: "Treina há 3 anos", t: "Mano, parei de esquecer quanto peguei de carga. Em 1 mês subi 10kg no supino só por acompanhar direito." },
  { n: "Mariana Costa", c: "Iniciante", t: "O bonequinho mostrando os músculos é viciante kkkk. Agora sei exatamente o que treinei na semana." },
  { n: "Diego Ferreira", c: "Personal trainer", t: "Indico pros meus alunos. Interface linda, rápida e por esse preço é praticamente de graça." },
  { n: "Isabela Rocha", c: "Treina em casa", t: "Achei que ia ser mais um app abandonado, mas é tão simples que uso todo dia. Melhor R$ 23 que gastei." },
  { n: "Felipe Nunes", c: "Hipertrofia", t: "O RPE por série mudou meu treino. Finalmente tô vendo evolução de verdade." },
  { n: "Letícia Mendes", c: "Crossfit", t: "Lindo demais, parece app gringo de 100 dólares. Comprei sem pensar." },
];

function Index() {
  const time = useCountdown();
  return (
    <div className="bg-grid min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="bg-lime py-2 text-center font-display text-xs font-extrabold tracking-wide text-primary-foreground md:text-sm">
        🔥 OFERTA RELÂMPAGO: 76% OFF — termina em {time}
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-block rounded-full border border-primary/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">MUSCLE RECOVERY</p>
          <h1 className="font-display text-4xl font-black leading-[1.05] md:text-6xl">
            Pare de treinar <span className="text-primary">no chute.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Registre cada treino, veja os músculos que você trabalhou e acompanhe sua evolução real. Simples, rápido e lindo.
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-4">
            <div>
              <p className="text-muted-foreground line-through">De R$ 97,00</p>
              <p className="font-display text-5xl font-black text-primary">R$ 23,90</p>
            </div>
            <span className="mb-2 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground">-76% HOJE</span>
          </div>
          <div className="mt-8"><Cta /></div>
          <p className="mt-4 text-sm text-muted-foreground">✓ Acesso imediato &nbsp; ✓ Pagamento seguro &nbsp; ✓ +4.800 alunos</p>
        </div>
        <div className="relative mx-auto flex w-full max-w-md justify-center">
          <div className="absolute inset-10 rounded-full bg-primary/30 blur-3xl" />
          <Phone src={img1.url} r="-6deg" className="relative z-10 w-1/2 -mr-6 mt-12" />
          <Phone src={img2.url} r="6deg" className="relative z-20 w-1/2" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-center font-display text-3xl font-extrabold md:text-5xl">Tudo que você precisa <span className="text-primary">pra crescer</span></h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {FEATURES.map((f, i) => (
            <div key={f.t} className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary">
              <p className="font-display text-3xl font-black text-primary">0{i + 1}</p>
              <h3 className="mt-3 font-display text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
        <div className="flex justify-center gap-4">
          <Phone src={img3.url} r="-3deg" className="w-1/2" />
          <Phone src={img4.url} r="3deg" className="w-1/2 mt-16" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-extrabold md:text-5xl">Monte o treino em <span className="text-primary">10 segundos</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">Escolha entre mais de 330 exercícios, defina séries, reps, carga e intensidade. Toque em salvar. Pronto.</p>
          <div className="mt-8"><Cta>GARANTIR POR R$ 23,90</Cta></div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="px-5 text-center font-display text-3xl font-extrabold md:text-5xl">Quem usa, <span className="text-primary">não larga</span></h2>
        <p className="mt-3 text-center text-muted-foreground">★★★★★ 4.9 de média</p>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 px-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.n} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-primary">★★★★★</p>
              <p className="mt-3">"{t.t}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="bg-lime flex h-10 w-10 items-center justify-center rounded-full font-bold text-primary-foreground">{t.n[0]}</div>
                <div><p className="font-semibold">{t.n}</p><p className="text-xs text-muted-foreground">{t.c}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="rounded-[2.5rem] border-2 border-primary bg-card p-8 text-center shadow-glow md:p-12">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-primary">Oferta por tempo limitado</p>
          <h2 className="mt-4 font-display text-3xl font-black md:text-5xl">Acesso completo ao MUSCLE RECOVERY</h2>
          <ul className="mx-auto mt-8 max-w-sm space-y-2 text-left">
            {["Mapa muscular frente e costas", "+330 exercícios com filtros", "Registro de séries, reps, carga e RPE", "Histórico completo de evolução", "Atualizações futuras inclusas"].map((x) => (
              <li key={x} className="flex gap-3"><span className="text-primary">✓</span>{x}</li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground line-through">De R$ 97,00</p>
          <p className="font-display text-6xl font-black text-primary md:text-7xl">R$ 23,90</p>
          <p className="mt-2 text-sm text-muted-foreground">pagamento único · oferta acaba em <b className="text-foreground">{time}</b></p>
          <div className="mt-8"><Cta big /></div>
          <p className="mt-5 text-xs text-muted-foreground">🔒 Compra 100% segura</p>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 MUSCLE RECOVERY</footer>
      <Notifications />
    </div>
  );
}

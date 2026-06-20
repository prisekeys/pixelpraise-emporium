import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Download, Zap, ShieldCheck, Sparkles, BadgeCheck, CheckCircle2, Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import office2019Pro from "@/assets/products/Office_2019_Professional_Plus_Key_1_PC.png.asset.json";
import win11Pro from "@/assets/products/Windows_11_Professional_Key_1_PC.png.asset.json";
import office2021Pro from "@/assets/products/Office_2021_Professional_Plus_Key_1_PC.png.asset.json";
import office2024Pro from "@/assets/products/Office_2024_Professional_Plus_Key_1_PC.png.asset.json";
import projectPro2024 from "@/assets/products/Project_Professional_2024_Key_1_PC.png.asset.json";
import visioPro2024 from "@/assets/products/Visio_Professional_2024_Key_1_PC.png.asset.json";
import office2019Mac from "@/assets/products/Office_2019_Home_Business_for_Mac_1_Mac_Key.png.asset.json";
import office2021Mac from "@/assets/products/Office_2021_Home_Business_for_Mac_1_Mac_Key.png.asset.json";
import office2024Mac from "@/assets/products/Office_2024_Home_Business_for_Mac_1_Mac_Key.png.asset.json";
import esetPremium from "@/assets/products/ESET_Smart_Security_Premium_1_Device_1_Year_Key.png.asset.json";
import m365Family from "@/assets/products/Microsoft_365_Family_6_Users_6TB_1_Year_Key.png.asset.json";
import office365Pro from "@/assets/products/Office_365_Professional_Plus_5_Devices_100GB_Cloud_1_Year.png.asset.json";
import outlook2024 from "@/assets/products/outlook-2024.webp.asset.json";
import access2024 from "@/assets/products/access-2024.webp.asset.json";
import powerpoint2024 from "@/assets/products/powerpoint-2024.webp.asset.json";
import excel2024 from "@/assets/products/excel-2024.webp.asset.json";

const PAGE_TITLE = "Comprar Clave Microsoft Office y Windows 11 Pro | KeyGG";
const PAGE_DESC = "Claves originales de Microsoft Office 2019, 2021, 2024 y Windows 11 Pro. Licencia de por vida, entrega instantánea por correo y soporte 24/7.";

export const Route = createFileRoute("/es")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "clave microsoft office, clave windows 11 pro, comprar office 2021, office 2024 professional plus, licencia office de por vida, microsoft 365 familia, office para mac clave" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/es" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { httpEquiv: "content-language", content: "es" },
    ],
    links: [
      { rel: "canonical", href: "/es" },
      { rel: "alternate", hrefLang: "es", href: "/es" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
      { rel: "alternate", hrefLang: "de", href: "/de" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: PAGE_TITLE,
              description: PAGE_DESC,
              inLanguage: "es-ES",
              url: "/es",
            },
            {
              "@type": "Store",
              name: "KeyGG",
              description: "Tienda de claves originales de Microsoft Office y Windows con entrega instantánea.",
              inLanguage: "es-ES",
              url: "/es",
            },
            {
              "@type": "FAQPage",
              inLanguage: "es-ES",
              mainEntity: [
                { "@type": "Question", name: "¿Las claves de Microsoft de KeyGG son originales?", acceptedAnswer: { "@type": "Answer", text: "Sí. Cada clave de Microsoft Office y Windows 11 que se vende en KeyGG es 100 % original, se activa directamente en los servidores de Microsoft y cuenta con garantía de licencia de por vida." } },
                { "@type": "Question", name: "¿La entrega es rápida?", acceptedAnswer: { "@type": "Answer", text: "Tu clave de producto se envía por correo electrónico inmediatamente después de la compra, normalmente en menos de 30 segundos, junto con las instrucciones de descarga y activación." } },
                { "@type": "Question", name: "¿Es licencia de por vida o por suscripción?", acceptedAnswer: { "@type": "Answer", text: "Las claves de Office 2019, 2021, 2024 y Windows 11 Pro son licencias de por vida vinculadas a un solo PC. Microsoft 365 Familia es una suscripción anual para 6 usuarios." } },
                { "@type": "Question", name: "¿Por qué vuestros precios son mucho más bajos que los de Microsoft?", acceptedAnswer: { "@type": "Answer", text: "Nos abastecemos directamente de licencias por volumen y OEM originales, eliminando el margen del minorista. Recibes exactamente el mismo producto que vende Microsoft, a una fracción del precio." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomeES,
});

const products = [
  { img: office2019Pro.url, tag: "Office",       title: "Office 2019 Professional Plus – Clave 1 PC",            price: 13, original: 45,  to: "/product/office-2019-professional-plus", whop: "https://whop.com/checkout/plan_9SCu81I3Rd5Sl" },
  { img: win11Pro.url,      tag: "Windows",      title: "Windows 11 Professional – Clave 1 PC",                  price: 13, original: 50,  to: "/product/windows-11-professional-key-1-pc", whop: "https://whop.com/checkout/plan_oDPDDAU0cg3Lf" },
  { img: office2021Pro.url, tag: "Office",       title: "Office 2021 Professional Plus – Clave 1 PC",            price: 15, original: 55,  to: "/product/office-2021-professional-plus", whop: "https://whop.com/checkout/plan_cXRmNGflpuN4c" },
  { img: projectPro2024.url, tag: "Business",    title: "Project Professional 2024 – Clave 1 PC",                price: 17, original: 120, to: "/product/project-professional-2024-key-1-pc", whop: "https://whop.com/checkout/plan_E667X7ZZLRvMj" },
  { img: visioPro2024.url,  tag: "Business",     title: "Visio Professional 2024 – Clave 1 PC",                  price: 17, original: 120, to: "/product/visio-professional-2024-key-1-pc", whop: "https://whop.com/checkout/plan_pcZakGTskqbmb" },
  { img: office2024Pro.url, tag: "Office",       title: "Office 2024 Professional Plus LTSC – Clave 1 PC",       price: 20, original: 65,  to: "/product/office-2024-professional-plus-ltsc-key-1-pc", whop: "https://whop.com/checkout/plan_FkmvpRpakB5ld" },
  { img: office2019Mac.url, tag: "Mac",          title: "Office 2019 Hogar y Empresas para Mac – Clave 1 Mac",   price: 32, original: 120, to: "/product/office-2019-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_eDGTcPRB6DiyP" },
  { img: esetPremium.url,   tag: "Seguridad",    title: "ESET Smart Security Premium – 1 Dispositivo | Clave 1 año", price: 32, original: 80,  to: "/product/eset-smart-security-premium-1-device-1-year-key", whop: "https://whop.com/checkout/plan_rCZIOlElFaDd2" },
  { img: office2021Mac.url, tag: "Mac",          title: "Office 2021 Hogar y Empresas para Mac – Clave 1 Mac",   price: 38, original: 140, to: "/product/office-2021-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_Hr9I3rbmMaIij" },
  { img: m365Family.url,    tag: "Suscripción",  title: "Microsoft 365 Familia – 6 Usuarios | 6 TB | Clave 1 año", price: 78, original: 130, to: "/product/microsoft-365-family-6-users-6-tb-1-year-key", whop: "https://whop.com/checkout/plan_8yC2bC1nvRG4Y" },
  { img: office2024Mac.url, tag: "Mac",          title: "Office 2024 Hogar y Empresas para Mac – Clave 1 Mac",   price: 93, original: 180, to: "/product/office-2024-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_ohtX2pZDYAK6K" },
  { img: office365Pro.url,  tag: "Office",       title: "Office 365 Professional Plus – 5 Dispositivos | 100 GB Cloud | 1 año", price: 13, original: 60, to: "/product/office-365-professional-plus-5-devices-100gb-1-year-key", whop: "https://whop.com/checkout/plan_GDDIytjYJffS0" },
];

const openCheckout = (url: string) => (e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window !== "undefined") {
    window.open(url, "keygg-checkout", "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no");
  }
};

const heroSlides = [
  { href: "/product/windows-11-professional-key-1-pc", product: win11Pro.url, eyebrow: "Windows 11 Pro", title: "Software original.", highlight: "Precios imbatibles.", desc: "Licencia de por vida, entrega instantánea por correo y soporte amable cuando lo necesites.", cta: "Ver Windows 11", price: 13, original: 50 },
  { href: "/product/office-2024-professional-plus-ltsc-key-1-pc", product: office2024Pro.url, eyebrow: "Office 2024 Pro Plus", title: "El último Office.", highlight: "Activado en minutos.", desc: "Word, Excel, PowerPoint y Outlook — una clave, un PC, para siempre.", cta: "Conseguir Office 2024", price: 20, original: 65 },
  { href: "/product/microsoft-365-family-6-users-6-tb-1-year-key", product: m365Family.url, eyebrow: "Microsoft 365 Familia", title: "Apps premium para 6.", highlight: "6 TB en la nube incluidos.", desc: "Comparte Microsoft 365 con hasta seis personas, con 1 TB de OneDrive para cada una.", cta: "Ver 365 Familia", price: 78, original: 130 },
  { href: "/product/office-2021-professional-plus", product: office2021Pro.url, eyebrow: "Office 2021 Pro Plus", title: "Todo lo esencial.", highlight: "A una fracción del precio.", desc: "Suite Office completa con licencia de por vida y entrega digital instantánea.", cta: "Conseguir Office 2021", price: 15, original: 55 },
];

function HomeES() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="min-h-screen bg-secondary/30">
      <h1 className="sr-only">
        Comprar claves originales de Microsoft Office y Windows 11 Pro — Licencia de por vida, entrega instantánea
      </h1>
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 pt-3 sm:pt-4 pb-2">
          <div className="relative overflow-hidden rounded-2xl bg-transparent min-h-[440px] sm:min-h-0 sm:aspect-[16/9] md:aspect-[3/1]">
            {heroSlides.map((s, i) => (
              <div key={s.eyebrow} className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full items-center gap-3 sm:gap-4 px-4 pt-4 pb-16 sm:px-8 sm:py-0 md:px-14">
                  <div className="max-w-xl text-center sm:text-left order-2 sm:order-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background border border-border text-[10px] sm:text-xs font-medium text-muted-foreground mb-2 sm:mb-3">
                      <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" /> {s.eyebrow}
                    </div>
                    <h2 className="font-display font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.1] text-foreground">
                      {s.title}{" "}
                      <span className="text-primary">{s.highlight}</span>
                    </h2>
                    <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">{s.desc}</p>
                    <div className="mt-3 sm:mt-4 flex items-center justify-center sm:justify-start gap-3">
                      <a href={s.href} className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-primary-foreground transition hover:opacity-90" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}>
                        {s.cta} <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                    <div className="mt-3 flex sm:hidden items-center justify-center gap-2">
                      <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="Diapositiva anterior" className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "Reproducir presentación" : "Pausar"} className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="Diapositiva siguiente" className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="relative h-36 sm:h-full order-1 sm:order-2">
                    <div aria-hidden className="absolute top-1/2 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-primary)" }} />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] sm:h-[78%] aspect-square rounded-2xl bg-background border border-border overflow-hidden shadow-2xl">
                      <img src={s.product} alt={s.eyebrow} className="w-full h-full object-contain p-3 sm:p-5" />
                    </div>
                    <div className="hidden sm:block absolute top-3 right-2 md:right-6 h-[40%] aspect-square rounded-xl bg-background border border-border overflow-hidden shadow-xl rotate-[6deg]">
                      <img src={heroSlides[(i + 1) % heroSlides.length].product} alt="" className="w-full h-full object-contain p-2" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 hidden sm:flex items-center gap-2 z-10">
              <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="Diapositiva anterior" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "Reproducir presentación" : "Pausar"} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="Diapositiva siguiente" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Ir a la diapositiva ${i + 1}`} className={`h-1 rounded-full transition-all ${i === active ? "w-6 sm:w-8 bg-primary" : "w-1.5 bg-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="mx-auto max-w-7xl px-6 pt-6 pb-20">
        <div className="mb-10">
          <div className="text-sm font-medium text-primary mb-2">Destacados</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">Mejores productos de Microsoft</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <Link to={p.to} className="block">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain" />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-snug">{p.title}</h3>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display font-bold text-base md:text-lg">${p.price}</span>
                      <span className="text-xs text-muted-foreground line-through">${p.original}</span>
                    </div>
                    <button type="button" onClick={openCheckout(p.whop)} className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer" style={{ background: "var(--gradient-primary)" }}>
                      <Download className="w-3 h-3" /> Comprar
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Zap, t: "Entrega instantánea", d: "Claves de activación y enlaces de descarga enviados por correo en cuanto se completa el pago." },
            { i: ShieldCheck, t: "Licencias originales", d: "Licencias de Microsoft 100 % originales, totalmente aptas para actualizaciones y soporte." },
            { i: Sparkles, t: "Mejor precio garantizado", d: "¿Lo encontraste más barato? Lo igualamos en un plazo de 7 días, sin condiciones." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-3xl p-8 border border-border bg-card">
              <div className="w-11 h-11 rounded-xl grid place-items-center mb-5" style={{ background: "var(--gradient-lime)" }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary dark:text-primary/80" />
            <span className="text-sm font-medium text-primary dark:text-primary/70">Reseñas verificadas</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-3">Lo que dicen nuestros clientes</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className={`w-6 h-6 ${s <= 4 ? "fill-primary text-primary" : "fill-none text-muted-foreground/50"}`} strokeWidth={s <= 4 ? 0 : 1.5} />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">de 5 • 12 847 reseñas</span>
          </div>
          <p className="text-primary dark:text-primary/80 font-semibold text-lg mt-1">Excelente</p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {[
              { name: "Lucía Fernández", date: "hace 2 días", rating: 5, title: "Entrega instantánea, clave original", body: "Pedí Office 2019 y recibí la clave en 2 minutos. Se activó a la primera. ¡Volveré a comprar sin duda!", verified: true },
              { name: "Mateo Álvarez", date: "hace 1 semana", rating: 5, title: "El mejor precio que encontré", body: "Ahorré más de 100 € comparado con Microsoft directo. La clave funcionó perfecto y el enlace fue inmediato.", verified: true },
              { name: "Diego Romero", date: "hace 3 días", rating: 5, title: "Soporte excelente", body: "Tuve un pequeño problema de activación. Soporte lo resolvió en 15 minutos. ¡Muy recomendable!", verified: true },
              { name: "Carla Méndez", date: "hace 5 días", rating: 4, title: "Rápido y fiable", body: "La clave de Windows 11 Pro llegó al instante. Todo funciona. Me gustaría más opciones de pago.", verified: true },
              { name: "Andrés Vega", date: "hace 2 semanas", rating: 5, title: "Tercera compra, siempre perfecto", body: "Office 2021, luego M365 Familia, ahora Visio 2024. Cada clave original y funcional.", verified: true },
              { name: "Ren Tanaka", date: "hace 4 días", rating: 5, title: "Office Mac excelente", body: "Office 2021 para Mac. Instalación fácil, todas las apps funcionan. Instrucciones muy claras.", verified: true },
              { name: "Gustav Lindqvist", date: "hace 1 semana", rating: 5, title: "Licencias business al tope", body: "10 claves de Project Pro 2024 para nuestro equipo. Descuento por volumen excelente, todas activadas sin problemas.", verified: true },
              { name: "Sofía Castaño", date: "hace 3 días", rating: 4, title: "Experiencia sólida", body: "Licencia de ESET activada al momento. Precio competitivo y entrega instantánea. Muy contenta.", verified: true },
            ].map((r, i) => (
              <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                <div className="rounded-xl border border-border bg-card p-5 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className={`w-4 h-4 ${s <= r.rating ? "fill-primary text-primary" : "fill-none text-muted-foreground/50"}`} strokeWidth={s <= r.rating ? 0 : 1.5} />
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{r.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.body}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center text-primary dark:text-primary/80 text-xs font-bold">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-medium">{r.name}</p>
                        <p className="text-[10px] text-muted-foreground">{r.date}</p>
                      </div>
                    </div>
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-primary dark:text-primary/80">
                        <CheckCircle2 className="w-3 h-3" /> Verificado
                      </span>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </section>

      {/* Individual Office 2024 Apps */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10">
          <div className="text-sm font-medium text-primary mb-2">Office 2024</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">Aplicaciones individuales</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Outlook 2024 – Clave 1 PC", img: outlook2024.url, to: "/product/outlook-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_hLUpquD3dwJkZ" },
            { title: "Access 2024 – Clave 1 PC", img: access2024.url, to: "/product/access-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_RY3qEBO6CBQrM" },
            { title: "PowerPoint 2024 – Clave 1 PC", img: powerpoint2024.url, to: "/product/powerpoint-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_Nse08h3qGlKcB" },
            { title: "Excel 2024 – Clave 1 PC", img: excel2024.url, to: "/product/excel-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_pOfQfJAk0xrAX" },
          ].map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <Link to={p.to} className="block">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain" />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-snug">{p.title}</h3>
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display font-bold text-base md:text-lg">$18</span>
                      <span className="text-xs text-muted-foreground line-through">$65</span>
                    </div>
                    <button type="button" onClick={openCheckout(p.whop)} className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer" style={{ background: "var(--gradient-primary)" }}>
                      <Download className="w-3 h-3" /> Comprar
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

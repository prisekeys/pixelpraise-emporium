import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Star, Download, Zap, ShieldCheck, Sparkles, BadgeCheck, CheckCircle2, Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import office2019Pro from "@/assets/products/Office_2019_Professional_Plus_Key_1_PC.webp";
import win11Pro from "@/assets/products/Windows_11_Professional_Key_1_PC.webp";
import office2021Pro from "@/assets/products/Office_2021_Professional_Plus_Key_1_PC.webp";
import office2024Pro from "@/assets/products/Office_2024_Professional_Plus_Key_1_PC.webp";
import projectPro2024 from "@/assets/products/Project_Professional_2024_Key_1_PC.webp";
import visioPro2024 from "@/assets/products/Visio_Professional_2024_Key_1_PC.webp";
import office2019Mac from "@/assets/products/Office_2019_Home_Business_for_Mac_1_Mac_Key.webp";
import office2021Mac from "@/assets/products/Office_2021_Home_Business_for_Mac_1_Mac_Key.webp";
import office2024Mac from "@/assets/products/Office_2024_Home_Business_for_Mac_1_Mac_Key.webp";
import esetPremium from "@/assets/products/ESET_Smart_Security_Premium_1_Device_1_Year_Key.webp";
import m365Family from "@/assets/products/Microsoft_365_Family_6_Users_6TB_1_Year_Key.webp";
import office365Pro from "@/assets/products/Office_365_Professional_Plus_5_Devices_100GB_Cloud_1_Year.webp";
import outlook2024 from "@/assets/products/outlook-2024.webp";
import access2024 from "@/assets/products/access-2024.webp";
import powerpoint2024 from "@/assets/products/powerpoint-2024.webp";
import excel2024 from "@/assets/products/excel-2024.webp";

const PAGE_TITLE = "شراء مفاتيح Microsoft Office و Windows 11 Pro الأصلية | KeyGG";
const PAGE_DESC = "مفاتيح أصلية لـ Microsoft Office 2019 و2021 و2024 و Windows 11 Pro. ترخيص مدى الحياة، تسليم فوري عبر البريد الإلكتروني، ودعم على مدار الساعة.";

export const Route = createFileRoute("/ar")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "مفتاح مايكروسوفت أوفيس, مفتاح ويندوز 11 برو, شراء اوفيس 2021, اوفيس 2024 برو بلس, ترخيص اوفيس دائم, مايكروسوفت 365 العائلة, مفتاح اوفيس للماك" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ar" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:image", content: "https://keygg.com/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "https://keygg.com/og-default.jpg" },
      { property: "og:locale", content: "ar_AR" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "de_DE" },
      { property: "og:locale:alternate", content: "es_ES" },
      { property: "og:locale:alternate", content: "pt_PT" },
      { property: "og:locale:alternate", content: "ja_JP" },
      { property: "og:locale:alternate", content: "ru_RU" },
      { property: "og:locale:alternate", content: "zh_CN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { httpEquiv: "content-language", content: "ar" },
    ],
    links: [
      { rel: "canonical", href: "/ar" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "ar-SA", href: "/ar" },
      { rel: "alternate", hrefLang: "ar-AE", href: "/ar" },
      { rel: "alternate", hrefLang: "ar-EG", href: "/ar" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
      { rel: "alternate", hrefLang: "de", href: "/de" },
      { rel: "alternate", hrefLang: "es", href: "/es" },
      { rel: "alternate", hrefLang: "pt", href: "/pt" },
      { rel: "alternate", hrefLang: "ja", href: "/jp" },
      { rel: "alternate", hrefLang: "ru", href: "/ru" },
      { rel: "alternate", hrefLang: "zh", href: "/cn" },
      { rel: "alternate", hrefLang: "zh-CN", href: "/cn" },
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
              inLanguage: "ar",
              url: "/ar",
            },
            {
              "@type": "Store",
              name: "KeyGG",
              description: "متجر لمفاتيح Microsoft Office و Windows الأصلية مع تسليم فوري.",
              inLanguage: "ar",
              url: "/ar",
            },
            {
              "@type": "FAQPage",
              inLanguage: "ar",
              mainEntity: [
                { "@type": "Question", name: "هل مفاتيح Microsoft على KeyGG أصلية؟", acceptedAnswer: { "@type": "Answer", text: "نعم. جميع مفاتيح Microsoft Office و Windows 11 المباعة على KeyGG أصلية 100%، يتم تفعيلها مباشرة على خوادم Microsoft وتتمتع بضمان ترخيص مدى الحياة." } },
                { "@type": "Question", name: "هل التسليم فوري حقًا؟", acceptedAnswer: { "@type": "Answer", text: "يتم إرسال مفتاح المنتج إلى بريدك الإلكتروني فور إتمام الدفع، عادةً في أقل من 30 ثانية، مع تعليمات التنزيل والتفعيل." } },
                { "@type": "Question", name: "هل هذا ترخيص دائم أم اشتراك؟", acceptedAnswer: { "@type": "Answer", text: "مفاتيح Office 2019 و2021 و2024 و Windows 11 Pro هي تراخيص دائمة مرتبطة بجهاز كمبيوتر واحد. أما Microsoft 365 العائلة فهو اشتراك سنوي لـ 6 مستخدمين." } },
                { "@type": "Question", name: "لماذا أسعاركم أقل بكثير من Microsoft؟", acceptedAnswer: { "@type": "Answer", text: "نحن نشتري تراخيص أصلية بالجملة و OEM مباشرة، ونلغي هامش البيع بالتجزئة. تحصل على نفس المنتج الذي تبيعه Microsoft بجزء بسيط من السعر." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomeAR,
});

const products = [
  { img: office2019Pro, tag: "Office",     title: "Office 2019 Professional Plus – مفتاح جهاز واحد",       price: 13, original: 45,  to: "/product/office-2019-professional-plus", whop: "https://whop.com/checkout/plan_9SCu81I3Rd5Sl" },
  { img: win11Pro,      tag: "Windows",    title: "Windows 11 Professional – مفتاح جهاز واحد",              price: 13, original: 50,  to: "/product/windows-11-professional-key-1-pc", whop: "https://whop.com/checkout/plan_oDPDDAU0cg3Lf" },
  { img: office2021Pro, tag: "Office",     title: "Office 2021 Professional Plus – مفتاح جهاز واحد",       price: 15, original: 55,  to: "/product/office-2021-professional-plus", whop: "https://whop.com/checkout/plan_cXRmNGflpuN4c" },
  { img: projectPro2024, tag: "أعمال",     title: "Project Professional 2024 – مفتاح جهاز واحد",            price: 17, original: 120, to: "/product/project-professional-2024-key-1-pc", whop: "https://whop.com/checkout/plan_E667X7ZZLRvMj" },
  { img: visioPro2024,  tag: "أعمال",      title: "Visio Professional 2024 – مفتاح جهاز واحد",              price: 17, original: 120, to: "/product/visio-professional-2024-key-1-pc", whop: "https://whop.com/checkout/plan_pcZakGTskqbmb" },
  { img: office2024Pro, tag: "Office",     title: "Office 2024 Professional Plus LTSC – مفتاح جهاز واحد",   price: 20, original: 65,  to: "/product/office-2024-professional-plus-ltsc-key-1-pc", whop: "https://whop.com/checkout/plan_FkmvpRpakB5ld" },
  { img: office2019Mac, tag: "Mac",        title: "Office 2019 Home & Business لنظام Mac – مفتاح جهاز Mac", price: 32, original: 120, to: "/product/office-2019-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_eDGTcPRB6DiyP" },
  { img: esetPremium,   tag: "حماية",      title: "ESET Smart Security Premium – جهاز واحد | مفتاح سنة",    price: 32, original: 80,  to: "/product/eset-smart-security-premium-1-device-1-year-key", whop: "https://whop.com/checkout/plan_rCZIOlElFaDd2" },
  { img: office2021Mac, tag: "Mac",        title: "Office 2021 Home & Business لنظام Mac – مفتاح جهاز Mac", price: 38, original: 140, to: "/product/office-2021-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_Hr9I3rbmMaIij" },
  { img: m365Family,    tag: "اشتراك",     title: "Microsoft 365 العائلة – 6 مستخدمين | 6 تيرابايت | سنة",  price: 78, original: 130, to: "/product/microsoft-365-family-6-users-6-tb-1-year-key", whop: "https://whop.com/checkout/plan_8yC2bC1nvRG4Y" },
  { img: office2024Mac, tag: "Mac",        title: "Office 2024 Home & Business لنظام Mac – مفتاح جهاز Mac", price: 93, original: 180, to: "/product/office-2024-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_ohtX2pZDYAK6K" },
  { img: office365Pro,  tag: "Office",     title: "Office 365 Professional Plus – 5 أجهزة | 100GB | سنة",   price: 13, original: 60, to: "/product/office-365-professional-plus-5-devices-100gb-1-year-key", whop: "https://whop.com/checkout/plan_GDDIytjYJffS0" },
];

const openCheckout = (url: string) => (e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window !== "undefined") {
    window.open(url, "keygg-checkout", "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no");
  }
};

const heroSlides = [
  { href: "/product/windows-11-professional-key-1-pc", product: win11Pro, eyebrow: "Windows 11 Pro", title: "برامج أصلية.", highlight: "بأفضل الأسعار.", desc: "ترخيص مدى الحياة، تسليم فوري عبر البريد الإلكتروني، ودعم ودود عند الحاجة.", cta: "عرض Windows 11", price: 13, original: 50 },
  { href: "/product/office-2024-professional-plus-ltsc-key-1-pc", product: office2024Pro, eyebrow: "Office 2024 Pro Plus", title: "أحدث إصدار من Office.", highlight: "تفعيل خلال دقائق.", desc: "Word و Excel و PowerPoint و Outlook — مفتاح واحد، جهاز واحد، إلى الأبد.", cta: "احصل على Office 2024", price: 20, original: 65 },
  { href: "/product/microsoft-365-family-6-users-6-tb-1-year-key", product: m365Family, eyebrow: "Microsoft 365 العائلة", title: "تطبيقات متميزة لـ 6 أشخاص.", highlight: "6 تيرابايت سحابي.", desc: "شارك Microsoft 365 مع ستة أشخاص واحصل على 1 تيرابايت OneDrive لكل منهم.", cta: "عرض 365 العائلة", price: 78, original: 130 },
  { href: "/product/office-2021-professional-plus", product: office2021Pro, eyebrow: "Office 2021 Pro Plus", title: "كل ما تحتاجه.", highlight: "بسعر مخفض.", desc: "حزمة Office كاملة مع ترخيص مدى الحياة وتسليم رقمي فوري.", cta: "احصل على Office 2021", price: 15, original: 55 },
];

function HomeAR() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div dir="rtl" className="min-h-screen bg-secondary/30">
      <h1 className="sr-only">
        شراء مفاتيح Microsoft Office و Windows 11 Pro الأصلية — ترخيص مدى الحياة، تسليم فوري
      </h1>
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 pt-3 sm:pt-4 pb-2">
          <div className="relative overflow-hidden rounded-2xl bg-transparent min-h-[440px] sm:min-h-0 sm:aspect-[16/9] md:aspect-[3/1]">
            {heroSlides.map((s, i) => (
              <div key={s.eyebrow} className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full items-center gap-3 sm:gap-4 px-4 pt-4 pb-16 sm:px-8 sm:py-0 md:px-14">
                  <div className="max-w-xl text-center sm:text-right order-2 sm:order-1">
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
                        {s.cta} <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                    <div className="mt-3 flex sm:hidden items-center justify-center gap-2">
                      <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="الشريحة السابقة" className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "تشغيل" : "إيقاف مؤقت"} className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="الشريحة التالية" className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        <ChevronLeft className="w-4 h-4" />
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
              <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="الشريحة السابقة" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "تشغيل" : "إيقاف مؤقت"} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="الشريحة التالية" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`الانتقال إلى الشريحة ${i + 1}`} className={`h-1 rounded-full transition-all ${i === active ? "w-6 sm:w-8 bg-primary" : "w-1.5 bg-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="mx-auto max-w-7xl px-6 pt-6 pb-20">
        <div className="mb-10">
          <div className="text-sm font-medium text-primary mb-2">الأكثر مبيعًا</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">أفضل منتجات Microsoft</h2>
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
                      <Download className="w-3 h-3" /> شراء
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
            { i: Zap, t: "تسليم فوري", d: "مفاتيح التفعيل وروابط التنزيل تصل إلى بريدك الإلكتروني فور إتمام الدفع." },
            { i: ShieldCheck, t: "تراخيص أصلية", d: "تراخيص Microsoft أصلية 100% مع حق التحديثات والدعم." },
            { i: Sparkles, t: "ضمان أفضل سعر", d: "هل وجدته بسعر أرخص؟ نوازي السعر خلال 7 أيام دون أي شروط." },
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
            <span className="text-sm font-medium text-primary dark:text-primary/70">تقييمات موثقة</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-3">ماذا يقول عملاؤنا</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className={`w-6 h-6 ${s <= 4 ? "fill-primary text-primary" : "fill-none text-muted-foreground/50"}`} strokeWidth={s <= 4 ? 0 : 1.5} />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">من 5 • 12,847 تقييم</span>
          </div>
          <p className="text-primary dark:text-primary/80 font-semibold text-lg mt-1">ممتاز</p>
        </div>

        <Carousel opts={{ align: "start", loop: true, direction: "rtl" }} className="w-full">
          <CarouselContent className="-ml-4">
            {[
              { name: "أحمد المصري", date: "قبل يومين", rating: 5, title: "تسليم فوري ومفتاح أصلي", body: "طلبت Office 2019 ووصلني المفتاح خلال دقيقتين. تم التفعيل من أول محاولة. سأشتري مرة أخرى بالتأكيد!", verified: true },
              { name: "فاطمة الزهراء", date: "قبل أسبوع", rating: 5, title: "أفضل سعر وجدته", body: "وفرت أكثر من 100 دولار مقارنة بشراء المنتج مباشرة من Microsoft. المفتاح يعمل بشكل ممتاز والرابط وصل فورًا.", verified: true },
              { name: "محمد العتيبي", date: "قبل 3 أيام", rating: 5, title: "دعم رائع", body: "واجهت مشكلة بسيطة في التفعيل. حل الدعم المشكلة خلال 15 دقيقة. أوصي به بشدة!", verified: true },
              { name: "سارة الحسيني", date: "قبل 5 أيام", rating: 4, title: "سريع وموثوق", body: "مفتاح Windows 11 Pro وصل فورًا وكل شيء يعمل. أتمنى لو كانت هناك المزيد من طرق الدفع.", verified: true },
              { name: "خالد القحطاني", date: "قبل أسبوعين", rating: 5, title: "ثالث عملية شراء، كلها مثالية", body: "أولاً Office 2021، ثم M365 العائلة، والآن Visio 2024. كل مفتاح أصلي ويعمل.", verified: true },
              { name: "Ren Tanaka", date: "قبل 4 أيام", rating: 5, title: "Office للماك ممتاز", body: "Office 2021 للماك. التثبيت سهل وجميع التطبيقات تعمل. التعليمات واضحة جدًا.", verified: true },
              { name: "Gustav Lindqvist", date: "قبل أسبوع", rating: 5, title: "تراخيص الأعمال متفوقة", body: "10 مفاتيح Project Pro 2024 لفريقنا. خصم جملة رائع وتم التفعيل دون مشاكل.", verified: true },
              { name: "ليلى الكويتية", date: "قبل 3 أيام", rating: 4, title: "تجربة ثابتة", body: "تم تفعيل ترخيص ESET على الفور. سعر تنافسي وتسليم فوري. راضية جدًا.", verified: true },
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
                        <CheckCircle2 className="w-3 h-3" /> موثق
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
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">التطبيقات الفردية</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Outlook 2024 – مفتاح جهاز واحد", img: outlook2024, to: "/product/outlook-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_hLUpquD3dwJkZ" },
            { title: "Access 2024 – مفتاح جهاز واحد", img: access2024, to: "/product/access-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_RY3qEBO6CBQrM" },
            { title: "PowerPoint 2024 – مفتاح جهاز واحد", img: powerpoint2024, to: "/product/powerpoint-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_Nse08h3qGlKcB" },
            { title: "Excel 2024 – مفتاح جهاز واحد", img: excel2024, to: "/product/excel-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_pOfQfJAk0xrAX" },
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
                      <Download className="w-3 h-3" /> شراء
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

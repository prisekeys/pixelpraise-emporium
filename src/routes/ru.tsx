import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Download, Zap, ShieldCheck, Sparkles, BadgeCheck, CheckCircle2, Pause, Play } from "lucide-react";
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

const PAGE_TITLE = "Купить ключ Microsoft Office и Windows 11 Pro | KeyGG";
const PAGE_DESC = "Подлинные ключи Microsoft Office 2019, 2021, 2024 и Windows 11 Pro. Бессрочная лицензия, мгновенная доставка на e-mail, поддержка 24/7.";

export const Route = createFileRoute("/ru")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "ключ microsoft office, ключ windows 11 pro, купить office 2021, office 2024 professional plus, бессрочная лицензия office, microsoft 365 семейный, office для mac ключ" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ru" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "de_DE" },
      { property: "og:locale:alternate", content: "es_ES" },
      { property: "og:locale:alternate", content: "pt_PT" },
      { property: "og:locale:alternate", content: "ja_JP" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { httpEquiv: "content-language", content: "ru" },
    ],
    links: [
      { rel: "canonical", href: "/ru" },
      { rel: "alternate", hrefLang: "ru", href: "/ru" },
      { rel: "alternate", hrefLang: "zh", href: "/cn" },
      { rel: "alternate", hrefLang: "zh-CN", href: "/cn" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "ru-RU", href: "/ru" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
      { rel: "alternate", hrefLang: "de", href: "/de" },
      { rel: "alternate", hrefLang: "es", href: "/es" },
      { rel: "alternate", hrefLang: "pt", href: "/pt" },
      { rel: "alternate", hrefLang: "ja", href: "/jp" },
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
              inLanguage: "ru-RU",
              url: "/ru",
            },
            {
              "@type": "Store",
              name: "KeyGG",
              description: "Магазин подлинных ключей Microsoft Office и Windows с мгновенной доставкой.",
              inLanguage: "ru-RU",
              url: "/ru",
            },
            {
              "@type": "FAQPage",
              inLanguage: "ru-RU",
              mainEntity: [
                { "@type": "Question", name: "Ключи Microsoft на KeyGG подлинные?", acceptedAnswer: { "@type": "Answer", text: "Да. Все ключи Microsoft Office и Windows 11, которые продаются на KeyGG, на 100% подлинные, активируются напрямую на серверах Microsoft и имеют бессрочную гарантию лицензии." } },
                { "@type": "Question", name: "Доставка действительно мгновенная?", acceptedAnswer: { "@type": "Answer", text: "Ключ продукта отправляется на вашу почту сразу после оплаты, обычно менее чем за 30 секунд, вместе с инструкциями по загрузке и активации." } },
                { "@type": "Question", name: "Это бессрочная лицензия или подписка?", acceptedAnswer: { "@type": "Answer", text: "Ключи Office 2019, 2021, 2024 и Windows 11 Pro — это бессрочные лицензии, привязанные к одному ПК. Microsoft 365 Семейный — это годовая подписка для 6 пользователей." } },
                { "@type": "Question", name: "Почему ваши цены намного ниже, чем у Microsoft?", acceptedAnswer: { "@type": "Answer", text: "Мы закупаем подлинные объёмные и OEM-лицензии напрямую, исключая розничную наценку. Вы получаете тот же продукт, что продаёт Microsoft, но за малую часть цены." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomeRU,
});

const products = [
  { img: office2019Pro, tag: "Office",     title: "Office 2019 Professional Plus – Ключ 1 ПК",            price: 13, original: 45,  to: "/product/office-2019-professional-plus", whop: "https://whop.com/checkout/plan_9SCu81I3Rd5Sl" },
  { img: win11Pro,      tag: "Windows",    title: "Windows 11 Professional – Ключ 1 ПК",                  price: 13, original: 50,  to: "/product/windows-11-professional-key-1-pc", whop: "https://whop.com/checkout/plan_oDPDDAU0cg3Lf" },
  { img: office2021Pro, tag: "Office",     title: "Office 2021 Professional Plus – Ключ 1 ПК",            price: 15, original: 55,  to: "/product/office-2021-professional-plus", whop: "https://whop.com/checkout/plan_cXRmNGflpuN4c" },
  { img: projectPro2024, tag: "Бизнес",    title: "Project Professional 2024 – Ключ 1 ПК",                price: 17, original: 120, to: "/product/project-professional-2024-key-1-pc", whop: "https://whop.com/checkout/plan_E667X7ZZLRvMj" },
  { img: visioPro2024,  tag: "Бизнес",     title: "Visio Professional 2024 – Ключ 1 ПК",                  price: 17, original: 120, to: "/product/visio-professional-2024-key-1-pc", whop: "https://whop.com/checkout/plan_pcZakGTskqbmb" },
  { img: office2024Pro, tag: "Office",     title: "Office 2024 Professional Plus LTSC – Ключ 1 ПК",       price: 20, original: 65,  to: "/product/office-2024-professional-plus-ltsc-key-1-pc", whop: "https://whop.com/checkout/plan_FkmvpRpakB5ld" },
  { img: office2019Mac, tag: "Mac",        title: "Office 2019 для дома и бизнеса для Mac – Ключ 1 Mac",  price: 32, original: 120, to: "/product/office-2019-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_eDGTcPRB6DiyP" },
  { img: esetPremium,   tag: "Безопасность", title: "ESET Smart Security Premium – 1 устройство | Ключ 1 год", price: 32, original: 80,  to: "/product/eset-smart-security-premium-1-device-1-year-key", whop: "https://whop.com/checkout/plan_rCZIOlElFaDd2" },
  { img: office2021Mac, tag: "Mac",        title: "Office 2021 для дома и бизнеса для Mac – Ключ 1 Mac",  price: 38, original: 140, to: "/product/office-2021-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_Hr9I3rbmMaIij" },
  { img: m365Family,    tag: "Подписка",   title: "Microsoft 365 Семейный – 6 пользователей | 6 ТБ | Ключ 1 год", price: 78, original: 130, to: "/product/microsoft-365-family-6-users-6-tb-1-year-key", whop: "https://whop.com/checkout/plan_8yC2bC1nvRG4Y" },
  { img: office2024Mac, tag: "Mac",        title: "Office 2024 для дома и бизнеса для Mac – Ключ 1 Mac",  price: 93, original: 180, to: "/product/office-2024-home-business-for-mac-1-mac-key", whop: "https://whop.com/checkout/plan_ohtX2pZDYAK6K" },
  { img: office365Pro,  tag: "Office",     title: "Office 365 Professional Plus – 5 устройств | 100 ГБ Cloud | 1 год", price: 13, original: 60, to: "/product/office-365-professional-plus-5-devices-100gb-1-year-key", whop: "https://whop.com/checkout/plan_GDDIytjYJffS0" },
];

const openCheckout = (url: string) => (e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window !== "undefined") {
    window.open(url, "keygg-checkout", "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no");
  }
};

const heroSlides = [
  { href: "/product/windows-11-professional-key-1-pc", product: win11Pro, eyebrow: "Windows 11 Pro", title: "Подлинный софт.", highlight: "Лучшие цены.", desc: "Бессрочная лицензия, мгновенная доставка на e-mail и дружелюбная поддержка, когда она нужна.", cta: "Смотреть Windows 11", price: 13, original: 50 },
  { href: "/product/office-2024-professional-plus-ltsc-key-1-pc", product: office2024Pro, eyebrow: "Office 2024 Pro Plus", title: "Самый новый Office.", highlight: "Активация за минуты.", desc: "Word, Excel, PowerPoint и Outlook — один ключ, один ПК, навсегда.", cta: "Получить Office 2024", price: 20, original: 65 },
  { href: "/product/microsoft-365-family-6-users-6-tb-1-year-key", product: m365Family, eyebrow: "Microsoft 365 Семейный", title: "Премиум-приложения для 6.", highlight: "6 ТБ в облаке.", desc: "Поделитесь Microsoft 365 с шестью людьми и получите по 1 ТБ OneDrive каждому.", cta: "Смотреть 365 Семейный", price: 78, original: 130 },
  { href: "/product/office-2021-professional-plus", product: office2021Pro, eyebrow: "Office 2021 Pro Plus", title: "Всё необходимое.", highlight: "За долю цены.", desc: "Полный пакет Office с бессрочной лицензией и мгновенной цифровой доставкой.", cta: "Получить Office 2021", price: 15, original: 55 },
];

function HomeRU() {
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
        Купить подлинные ключи Microsoft Office и Windows 11 Pro — Бессрочная лицензия, мгновенная доставка
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
                      <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="Предыдущий слайд" className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "Воспроизвести" : "Пауза"} className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="Следующий слайд" className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
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
              <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="Предыдущий слайд" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "Воспроизвести" : "Пауза"} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="Следующий слайд" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Перейти к слайду ${i + 1}`} className={`h-1 rounded-full transition-all ${i === active ? "w-6 sm:w-8 bg-primary" : "w-1.5 bg-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="mx-auto max-w-7xl px-6 pt-6 pb-20">
        <div className="mb-10">
          <div className="text-sm font-medium text-primary mb-2">Хиты продаж</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">Лучшие продукты Microsoft</h2>
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
                      <Download className="w-3 h-3" /> Купить
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
            { i: Zap, t: "Мгновенная доставка", d: "Ключи активации и ссылки для скачивания приходят на e-mail сразу после оплаты." },
            { i: ShieldCheck, t: "Подлинные лицензии", d: "100% подлинные лицензии Microsoft с правом на обновления и поддержку." },
            { i: Sparkles, t: "Гарантия лучшей цены", d: "Нашли дешевле? Подгоним цену в течение 7 дней без условий." },
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
            <span className="text-sm font-medium text-primary dark:text-primary/70">Проверенные отзывы</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-3">Что говорят наши клиенты</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className={`w-6 h-6 ${s <= 4 ? "fill-primary text-primary" : "fill-none text-muted-foreground/50"}`} strokeWidth={s <= 4 ? 0 : 1.5} />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">из 5 • 12 847 отзывов</span>
          </div>
          <p className="text-primary dark:text-primary/80 font-semibold text-lg mt-1">Отлично</p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">
            {[
              { name: "Анна Иванова", date: "2 дня назад", rating: 5, title: "Мгновенная доставка, подлинный ключ", body: "Заказала Office 2019 и получила ключ за 2 минуты. Активировался с первого раза. Обязательно куплю ещё!", verified: true },
              { name: "Дмитрий Петров", date: "1 неделю назад", rating: 5, title: "Лучшая цена, что я нашёл", body: "Сэкономил больше 100 $ по сравнению с Microsoft напрямую. Ключ сработал идеально, ссылка пришла мгновенно.", verified: true },
              { name: "Игорь Соколов", date: "3 дня назад", rating: 5, title: "Отличная поддержка", body: "Возникла небольшая проблема с активацией. Поддержка решила за 15 минут. Очень рекомендую!", verified: true },
              { name: "Мария Кузнецова", date: "5 дней назад", rating: 4, title: "Быстро и надёжно", body: "Ключ Windows 11 Pro пришёл мгновенно. Всё работает. Хотелось бы больше способов оплаты.", verified: true },
              { name: "Алексей Смирнов", date: "2 недели назад", rating: 5, title: "Третья покупка, всё идеально", body: "Сначала Office 2021, затем M365 Семейный, теперь Visio 2024. Каждый ключ подлинный и рабочий.", verified: true },
              { name: "Ren Tanaka", date: "4 дня назад", rating: 5, title: "Office для Mac на отлично", body: "Office 2021 для Mac. Установка простая, все приложения работают. Инструкции очень понятные.", verified: true },
              { name: "Gustav Lindqvist", date: "1 неделю назад", rating: 5, title: "Бизнес-лицензии на высоте", body: "10 ключей Project Pro 2024 для нашей команды. Отличная оптовая скидка, все активированы без проблем.", verified: true },
              { name: "Ольга Новикова", date: "3 дня назад", rating: 4, title: "Стабильный опыт", body: "Лицензия ESET активировалась сразу. Конкурентная цена и мгновенная доставка. Очень довольна.", verified: true },
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
                        <CheckCircle2 className="w-3 h-3" /> Проверено
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
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">Отдельные приложения</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Outlook 2024 – Ключ 1 ПК", img: outlook2024, to: "/product/outlook-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_hLUpquD3dwJkZ" },
            { title: "Access 2024 – Ключ 1 ПК", img: access2024, to: "/product/access-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_RY3qEBO6CBQrM" },
            { title: "PowerPoint 2024 – Ключ 1 ПК", img: powerpoint2024, to: "/product/powerpoint-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_Nse08h3qGlKcB" },
            { title: "Excel 2024 – Ключ 1 ПК", img: excel2024, to: "/product/excel-2024-product-key-1-pc", whop: "https://whop.com/checkout/plan_pOfQfJAk0xrAX" },
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
                      <Download className="w-3 h-3" /> Купить
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

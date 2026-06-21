import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
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

const WHOP = {
  office2019: "https://whop.com/checkout/plan_9SCu81I3Rd5Sl",
  win11: "https://whop.com/checkout/plan_oDPDDAU0cg3Lf",
  office2021: "https://whop.com/checkout/plan_cXRmNGflpuN4c",
  project2024: "https://whop.com/checkout/plan_E667X7ZZLRvMj",
  visio2024: "https://whop.com/checkout/plan_pcZakGTskqbmb",
  office2024: "https://whop.com/checkout/plan_FkmvpRpakB5ld",
  office2019Mac: "https://whop.com/checkout/plan_eDGTcPRB6DiyP",
  eset: "https://whop.com/checkout/plan_rCZIOlElFaDd2",
  office2021Mac: "https://whop.com/checkout/plan_Hr9I3rbmMaIij",
  m365Family: "https://whop.com/checkout/plan_8yC2bC1nvRG4Y",
  office2024Mac: "https://whop.com/checkout/plan_ohtX2pZDYAK6K",
  office365Pro: "https://whop.com/checkout/plan_GDDIytjYJffS0",
  outlook2024: "https://whop.com/checkout/plan_hLUpquD3dwJkZ",
  access2024: "https://whop.com/checkout/plan_RY3qEBO6CBQrM",
  powerpoint2024: "https://whop.com/checkout/plan_Nse08h3qGlKcB",
  excel2024: "https://whop.com/checkout/plan_pOfQfJAk0xrAX",
};

type Product = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  price: number;
  original: number;
  rating: number;
  reviews: number;
  whop: string;
};

const PRODUCTS: Product[] = [
  { slug: "office-2019-professional-plus", title: "Office 2019 Professional Plus Key – 1 PC", desc: "Lifetime license for 1 PC. Word, Excel, PowerPoint, Outlook & more.", img: office2019Pro, price: 13, original: 45, rating: 4.9, reviews: 24500, whop: WHOP.office2019 },
  { slug: "windows-11-professional-key-1-pc", title: "Windows 11 Professional Key – 1 PC", desc: "Lifetime license. Pro features, BitLocker & business security.", img: win11Pro, price: 13, original: 50, rating: 4.8, reviews: 31200, whop: WHOP.win11 },
  { slug: "office-365-professional-plus-5-devices-100gb-1-year-key", title: "Office 365 Professional Plus – 5 Devices | 100 GB Cloud Storage | 1 Year", desc: "Full Office suite with cloud storage for 5 devices.", img: office365Pro, price: 13, original: 60, rating: 4.8, reviews: 11100, whop: WHOP.office365Pro },
  { slug: "office-2021-professional-plus", title: "Office 2021 Professional Plus Key – 1 PC", desc: "Lifetime license. Latest Office suite with all premium apps.", img: office2021Pro, price: 15, original: 55, rating: 4.9, reviews: 18700, whop: WHOP.office2021 },
  { slug: "project-professional-2024-key-1-pc", title: "Project Professional 2024 Key – 1 PC", desc: "Advanced project management & planning tools.", img: projectPro2024, price: 17, original: 120, rating: 4.8, reviews: 5400, whop: WHOP.project2024 },
  { slug: "visio-professional-2024-key-1-pc", title: "Visio Professional 2024 Key – 1 PC", desc: "Professional diagramming & data visualization.", img: visioPro2024, price: 17, original: 120, rating: 4.7, reviews: 4100, whop: WHOP.visio2024 },
  { slug: "office-2024-professional-plus-ltsc-key-1-pc", title: "Office 2024 Professional Plus LTSC Key – 1 PC", desc: "Lifetime license. Long-term service channel with latest features.", img: office2024Pro, price: 20, original: 65, rating: 4.9, reviews: 9300, whop: WHOP.office2024 },
  { slug: "outlook-2024-product-key-1-pc", title: "Outlook 2024 Product Key – 1 PC", desc: "Standalone Outlook 2024 with a lifetime license.", img: outlook2024, price: 15, original: 55, rating: 4.8, reviews: 3200, whop: WHOP.outlook2024 },
  { slug: "excel-2024-product-key-1-pc", title: "Excel 2024 Product Key – 1 PC", desc: "Standalone Excel 2024 with a lifetime license.", img: excel2024, price: 15, original: 55, rating: 4.9, reviews: 4100, whop: WHOP.excel2024 },
  { slug: "powerpoint-2024-product-key-1-pc", title: "PowerPoint 2024 Product Key – 1 PC", desc: "Standalone PowerPoint 2024 with a lifetime license.", img: powerpoint2024, price: 15, original: 55, rating: 4.8, reviews: 2900, whop: WHOP.powerpoint2024 },
  { slug: "access-2024-product-key-1-pc", title: "Access 2024 Product Key – 1 PC", desc: "Standalone Access 2024 with a lifetime license.", img: access2024, price: 15, original: 55, rating: 4.7, reviews: 2100, whop: WHOP.access2024 },
  { slug: "office-2019-home-business-for-mac-1-mac-key", title: "Office 2019 Home & Business for Mac – Key for 1 Mac", desc: "Word, Excel, PowerPoint & Outlook for macOS.", img: office2019Mac, price: 32, original: 120, rating: 4.8, reviews: 7800, whop: WHOP.office2019Mac },
  { slug: "office-2021-home-business-for-mac-1-mac-key", title: "Office 2021 Home & Business for Mac – Key for 1 Mac", desc: "Updated Office apps with improved collaboration.", img: office2021Mac, price: 38, original: 140, rating: 4.8, reviews: 5600, whop: WHOP.office2021Mac },
  { slug: "office-2024-home-business-for-mac-1-mac-key", title: "Office 2024 Home & Business for Mac – Key for 1 Mac", desc: "Latest Office suite optimized for Apple Silicon.", img: office2024Mac, price: 93, original: 180, rating: 4.9, reviews: 3400, whop: WHOP.office2024Mac },
  { slug: "eset-smart-security-premium-1-device-1-year-key", title: "ESET Smart Security Premium – 1 Device | 1-Year Key", desc: "Advanced antivirus, firewall & privacy protection.", img: esetPremium, price: 32, original: 80, rating: 4.7, reviews: 6200, whop: WHOP.eset },
  { slug: "microsoft-365-family-6-users-6-tb-1-year-key", title: "Microsoft 365 Family – 6 Users | 6 TB | 1-Year Key", desc: "Premium apps, 1 TB cloud storage per user.", img: m365Family, price: 78, original: 130, rating: 4.9, reviews: 15900, whop: WHOP.m365Family },
];

const openCheckout = (url: string) => (e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window !== "undefined") {
    window.open(
      url,
      "keygg-checkout",
      "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no"
    );
  }
};

const PAGE_TITLE = "Shop All Microsoft Product Keys | Office, Windows 11 & 365 | KeyGG";
const PAGE_DESC = "Shop genuine Microsoft Office, Windows 11 Pro, Microsoft 365, Office for Mac and security keys. Lifetime licenses, instant digital delivery and 24/7 support.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "shop microsoft product keys, buy office key, windows 11 pro key, microsoft 365 family, office for mac, office 2024, office 2021, office 2019, eset key" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shop" },
      { property: "og:site_name", content: "KeyGG" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Shop All Products",
          description: PAGE_DESC,
          url: "/shop",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Shop", item: "/shop" },
            ],
          },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: PRODUCTS.length,
            itemListElement: PRODUCTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `/product/${p.slug}`,
              name: p.title,
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": PRODUCTS.map((p) => ({
            "@type": "Product",
            name: p.title,
            description: p.desc,
            image: p.img,
            brand: { "@type": "Brand", name: "Microsoft" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: p.rating.toString(),
              reviewCount: p.reviews.toString(),
            },
            offers: {
              "@type": "Offer",
              url: `/product/${p.slug}`,
              priceCurrency: "USD",
              price: p.price.toString(),
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
            },
          })),
        }),
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-3">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-1.5">/</span>
              <span className="text-foreground">Shop</span>
            </nav>
            <div className="text-sm font-medium text-primary mb-2">All products</div>
            <h1 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">
              Shop all Microsoft product keys
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground text-sm md:text-base">
              Browse our full catalog of genuine Microsoft Office, Windows 11, Microsoft 365 and
              Office for Mac keys. Lifetime licenses, instant digital delivery and friendly support
              at a fraction of retail price.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pt-8 pb-20">
          <h2 className="sr-only">All products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-border bg-card overflow-hidden">
                <Link to={`/product/${p.slug}` as any} className="block">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-snug">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex flex-col gap-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display font-bold text-base md:text-lg">${p.price}</span>
                        <span className="text-xs text-muted-foreground line-through">${p.original}</span>
                      </div>
                      <button
                        type="button"
                        onClick={openCheckout(p.whop)}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        <Download className="w-3 h-3" /> Buy now
                      </button>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

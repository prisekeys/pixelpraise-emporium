import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
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

type Product = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  price: number;
  original: number;
  rating: number;
  reviews: number;
  category: "Office" | "Windows" | "Mac" | "Business" | "Security" | "Subscription";
};

const PRODUCTS: Product[] = [
  { slug: "office-2019-professional-plus", title: "Office 2019 Professional Plus Key – 1 PC", desc: "Lifetime license for 1 PC. Word, Excel, PowerPoint, Outlook & more.", img: office2019Pro.url, price: 13, original: 45, rating: 4.9, reviews: 24500, category: "Office" },
  { slug: "windows-11-professional-key-1-pc", title: "Windows 11 Professional Key – 1 PC", desc: "Lifetime license. Pro features, BitLocker & business security.", img: win11Pro.url, price: 13, original: 50, rating: 4.8, reviews: 31200, category: "Windows" },
  { slug: "office-365-professional-plus-5-devices-100gb-1-year-key", title: "Office 365 Professional Plus – 5 Devices | 100 GB | 1 Year", desc: "Full Office suite with cloud storage for 5 devices.", img: office365Pro.url, price: 13, original: 60, rating: 4.8, reviews: 11100, category: "Office" },
  { slug: "office-2021-professional-plus", title: "Office 2021 Professional Plus Key – 1 PC", desc: "Lifetime license. Latest Office suite with all premium apps.", img: office2021Pro.url, price: 15, original: 55, rating: 4.9, reviews: 18700, category: "Office" },
  { slug: "project-professional-2024-key-1-pc", title: "Project Professional 2024 Key – 1 PC", desc: "Advanced project management & planning tools.", img: projectPro2024.url, price: 17, original: 120, rating: 4.8, reviews: 5400, category: "Business" },
  { slug: "visio-professional-2024-key-1-pc", title: "Visio Professional 2024 Key – 1 PC", desc: "Professional diagramming & data visualization.", img: visioPro2024.url, price: 17, original: 120, rating: 4.7, reviews: 4100, category: "Business" },
  { slug: "office-2024-professional-plus-ltsc-key-1-pc", title: "Office 2024 Professional Plus LTSC Key – 1 PC", desc: "Lifetime license. Long-term service channel with latest features.", img: office2024Pro.url, price: 20, original: 65, rating: 4.9, reviews: 9300, category: "Office" },
  { slug: "outlook-2024-product-key-1-pc", title: "Outlook 2024 Product Key – 1 PC", desc: "Standalone Outlook 2024 with a lifetime license.", img: outlook2024.url, price: 15, original: 55, rating: 4.8, reviews: 3200, category: "Office" },
  { slug: "excel-2024-product-key-1-pc", title: "Excel 2024 Product Key – 1 PC", desc: "Standalone Excel 2024 with a lifetime license.", img: excel2024.url, price: 15, original: 55, rating: 4.9, reviews: 4100, category: "Office" },
  { slug: "powerpoint-2024-product-key-1-pc", title: "PowerPoint 2024 Product Key – 1 PC", desc: "Standalone PowerPoint 2024 with a lifetime license.", img: powerpoint2024.url, price: 15, original: 55, rating: 4.8, reviews: 2900, category: "Office" },
  { slug: "access-2024-product-key-1-pc", title: "Access 2024 Product Key – 1 PC", desc: "Standalone Access 2024 with a lifetime license.", img: access2024.url, price: 15, original: 55, rating: 4.7, reviews: 2100, category: "Office" },
  { slug: "office-2019-home-business-for-mac-1-mac-key", title: "Office 2019 Home & Business for Mac – 1 Mac Key", desc: "Word, Excel, PowerPoint & Outlook for macOS.", img: office2019Mac.url, price: 32, original: 120, rating: 4.8, reviews: 7800, category: "Mac" },
  { slug: "office-2021-home-business-for-mac-1-mac-key", title: "Office 2021 Home & Business for Mac – 1 Mac Key", desc: "Updated Office apps with improved collaboration.", img: office2021Mac.url, price: 38, original: 140, rating: 4.8, reviews: 5600, category: "Mac" },
  { slug: "office-2024-home-business-for-mac-1-mac-key", title: "Office 2024 Home & Business for Mac – 1 Mac Key", desc: "Latest Office suite optimized for Apple Silicon.", img: office2024Mac.url, price: 93, original: 180, rating: 4.9, reviews: 3400, category: "Mac" },
  { slug: "eset-smart-security-premium-1-device-1-year-key", title: "ESET Smart Security Premium – 1 Device | 1 Year", desc: "Advanced antivirus, firewall & privacy protection.", img: esetPremium.url, price: 32, original: 80, rating: 4.7, reviews: 6200, category: "Security" },
  { slug: "microsoft-365-family-6-users-6-tb-1-year-key", title: "Microsoft 365 Family – 6 Users | 6 TB | 1 Year", desc: "Premium apps, 1 TB cloud storage per user.", img: m365Family.url, price: 78, original: 130, rating: 4.9, reviews: 15900, category: "Subscription" },
];

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
          name: "Shop — All Products",
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
            <h1 className="font-display font-bold text-3xl md:text-5xl tracking-tight">
              Shop all Microsoft product keys
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground text-sm md:text-base">
              Browse our full catalog of genuine Microsoft Office, Windows 11, Microsoft 365 and Office for Mac keys.
              Lifetime licenses, instant digital delivery and friendly support — at a fraction of retail price.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <h2 className="sr-only">All products</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <article className="h-full rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
                  <Link
                    to={`/product/${p.slug}` as any}
                    className="block"
                  >
                    <div className="aspect-square bg-white">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                  <div className="p-3 md:p-4 flex flex-col gap-2 flex-1">
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground">{p.category}</span>
                    <h3 className="font-display font-semibold text-sm md:text-base leading-snug">
                      <Link to={`/product/${p.slug}` as any} className="hover:underline">
                        {p.title}
                      </Link>
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3.5 h-3.5 fill-current text-amber-500" aria-hidden />
                      <span>{p.rating.toFixed(1)}</span>
                      <span>·</span>
                      <span>{p.reviews.toLocaleString()} reviews</span>
                    </div>
                    <div className="mt-auto flex items-baseline gap-2">
                      <span className="font-display font-bold text-base md:text-lg">${p.price}</span>
                      <span className="text-xs text-muted-foreground line-through">${p.original}</span>
                    </div>
                    <Link
                      to={`/product/${p.slug}` as any}
                      className="mt-1 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-medium px-4 py-2 hover:opacity-90 transition"
                    >
                      View product
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

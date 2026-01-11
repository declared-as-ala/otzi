import { Button } from "@/components/ui/button";
import Link from "next/link";
import { storeData } from "@/lib/data";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  // Get some featured products for the hero section
  const featuredProducts = storeData.posts.slice(0, 3);

  return (
    <>
      {/* Hero Section with Large Background Image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={storeData.posts[0]?.image_url || storeData.profile_image}
            alt="Ötzi Boutique"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-4 py-24 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <Image
                  src={storeData.profile_image}
                  alt="Ötzi Boutique"
                  width={150}
                  height={150}
                  className="rounded-full object-cover shadow-2xl ring-4 ring-white/30"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary ring-4 ring-background" />
              </div>
            </div>
            <div className="text-center text-white">
              <h1 className="mb-6 text-5xl font-bold tracking-tight drop-shadow-2xl md:text-7xl lg:text-8xl">
                Bienvenue chez{" "}
                <span className="bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent">
                  Ötzi Boutique
                </span>
              </h1>
              <p className="mb-4 text-xl font-light text-white/90 md:text-2xl">
                Poitiers Centre Ville
              </p>
              <p className="mb-8 text-lg text-white/80 md:text-xl">
                Mode & Accessoires
              </p>
              <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                Découvrez notre sélection soignée de mode et d'accessoires pour hommes et femmes. 
                Des marques renommées dans une ambiance accueillante au cœur de Poitiers.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-base shadow-xl">
                  <Link href="/shop">Découvrir la boutique</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/10 text-base text-white backdrop-blur hover:bg-white/20">
                  <Link href="/about">En savoir plus</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <svg
            className="h-8 w-8 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative border-b bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Notre Histoire
              </h2>
              <div className="mx-auto h-1 w-24 bg-primary" />
            </div>
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={storeData.posts[5]?.image_url || storeData.profile_image}
                  alt="Notre boutique"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  <span className="text-2xl font-bold text-primary">Ötzi</span> est le nom qui a été donné au premier homme retrouvé avec des chaussures. 
                  Chez Ötzi, nous chérissons cette histoire et nous nous engageons à offrir le meilleur 
                  en matière de mode et d'accessoires pour hommes et femmes.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Notre boutique propose une sélection soignée de marques renommées telles que New Balance, 
                  Vanessa Bruno, Paraboot, Dr. Martens, Barbour, American Vintage, et bien d'autres. 
                  Nous créons une ambiance accueillante où vous pouvez découvrir des pièces uniques qui 
                  reflètent votre style personnel.
                </p>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Lire notre histoire</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Enhanced */}
      <section className="border-b bg-muted/30 py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Pourquoi Choisir Ötzi ?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Une expérience de shopping unique au cœur de Poitiers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 7h-4M4 7h4m16 0v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7m16 0V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Marques Sélectionnées</h3>
                <p className="text-muted-foreground">
                  Une curation soignée des meilleures marques de mode et d'accessoires. 
                  Chaque pièce est choisie pour sa qualité et son style unique.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Conseil Personnalisé</h3>
                <p className="text-muted-foreground">
                  Une équipe passionnée à votre écoute pour vous aider à trouver votre style. 
                  Nous vous accompagnons dans chaque choix pour créer une garde-robe qui vous ressemble.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold">Centre-Ville</h3>
                <p className="text-muted-foreground">
                  Situé au cœur de Poitiers, facilement accessible. 
                  Un emplacement privilégié pour une expérience de shopping agréable et pratique.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Gallery */}
      <section className="border-b bg-gradient-to-b from-muted/30 to-background py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Produits en Vedette
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Découvrez quelques-uns de nos produits phares
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:shadow-2xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={product.image_url}
                    alt={product.caption.substring(0, 50) || `Produit ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button asChild className="w-full">
                      <Link href="/shop">Voir le produit</Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {product.caption.split("\n").filter((line) => line.trim() && !line.startsWith("#")).slice(0, 1).join(" ").substring(0, 100)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

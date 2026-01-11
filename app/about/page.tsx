import { storeInfo } from "@/lib/data";
import Image from "next/image";
import { storeData } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">À propos de {storeInfo.name}</h1>
        
        <div className="mb-8 flex justify-center">
          <Image
            src={storeData.profile_image}
            alt={storeInfo.name}
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {storeInfo.description}
          </p>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Ötzi est le nom qui a été donné au premier homme retrouvé avec des chaussures. 
            Chez Ötzi, nous chérissons cette histoire et nous nous engageons à offrir le meilleur 
            en matière de mode et d'accessoires pour hommes et femmes.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Notre boutique propose une sélection soignée de marques renommées telles que New Balance, 
            Vanessa Bruno, Paraboot, Dr. Martens, Barbour, American Vintage, et bien d'autres. 
            Nous créons une ambiance accueillante où vous pouvez découvrir des pièces uniques qui 
            reflètent votre style personnel.
          </p>

          <div className="mt-8 rounded-lg border bg-muted/50 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Informations de la boutique</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong className="text-foreground">📍 Adresse :</strong> {storeInfo.address}
              </p>
              <p>
                <strong className="text-foreground">🕒 Horaires :</strong> {storeInfo.hours}
              </p>
              <p>
                <strong className="text-foreground">📧 Email :</strong>{" "}
                <a
                  href={`mailto:${storeInfo.email}`}
                  className="text-primary hover:underline"
                >
                  {storeInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


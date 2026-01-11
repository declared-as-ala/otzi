import Image from "next/image";
import { storeData, storeInfo } from "@/lib/data";

export default function ProfileSection() {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-16">
      <div className="flex flex-col items-center text-center md:flex-row md:text-left md:space-x-8">
        <div className="mb-6 md:mb-0">
          <Image
            src={storeData.profile_image}
            alt={`${storeInfo.name} profile`}
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {storeInfo.name}
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">
            {storeInfo.description}
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">📍 Adresse :</strong>{" "}
              {storeInfo.address}
            </p>
            <p>
              <strong className="text-foreground">🕒 Horaires :</strong>{" "}
              {storeInfo.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


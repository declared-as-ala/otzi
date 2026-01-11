"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Extract a shorter description from caption
  const shortDescription = product.caption
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"))
    .slice(0, 2)
    .join(" ")
    .substring(0, 100);

  return (
    <>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <div className="relative aspect-square overflow-hidden bg-muted">
          {!imageError ? (
            <Image
              src={product.image_url}
              alt={product.caption || `Product ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
              <span className="text-sm">Image not available</span>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {shortDescription || product.caption.substring(0, 100)}
          </p>
        </CardContent>
        <CardFooter className="flex gap-2 p-4 pt-0">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setIsOpen(true)}
          >
            Voir les détails
          </Button>
          <Button className="flex-1">Acheter</Button>
        </CardFooter>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Détails du produit</DialogTitle>
            <DialogDescription>Voir toutes les informations du produit</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
              {!imageError ? (
                <Image
                  src={product.image_url}
                  alt={product.caption || `Product ${index + 1}`}
                  fill
                  className="object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                  <span>Image not available</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {product.caption}
              </p>
            </div>
            <div className="flex gap-2 pt-4">
              <Button className="flex-1">Ajouter au panier</Button>
              <Button variant="outline" className="flex-1">
                Partager
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}


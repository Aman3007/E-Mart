// components/product-card.js
'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useApp } from '@/context/AppContext';

export default function ProductCard({ product }) {
  const router = useRouter();
  const { addToCart } = useApp();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card
      className="w-64 flex-shrink-0 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => router.push(`/product/${product._id}`)}
    >
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 truncate">
          {product.brand} • {product.category}
        </p>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        <p className="text-xl font-bold text-green-600">${product.price}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
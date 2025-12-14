// app/(shop)/home/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card/page';
import { getLatestProducts } from '@/lib/api';

export default function HomePage() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getLatestProducts(10);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
 <section className="relative overflow-hidden py-20">
  {/* Green gradient base */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200" />

  {/* Background image from Pexels */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-25"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    }}
  />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 text-center text-black">
    <h1 className="text-5xl font-bold mb-6">
      Welcome to FreshMart
    </h1>

    <p className="text-xl mb-4 text-gray-800">
      Your trusted partner for fresh groceries
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="bg-white/70 backdrop-blur p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-2">🌱 100% Fresh</h3>
        <p className="text-gray-700">
          Farm-fresh produce delivered daily
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-2">🚚 Fast Delivery</h3>
        <p className="text-gray-700">
          Same-day delivery to your doorstep
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur p-6 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-2">💰 Best Prices</h3>
        <p className="text-gray-700">
          Unbeatable prices guaranteed
        </p>
      </div>
    </div>

    <Button
      size="lg"
      onClick={() => router.push('/about')}
      className="mt-12 bg-green-600 text-white hover:bg-green-700"
    >
      Explore Products
    </Button>
  </div>
</section>




      {/* Latest Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Products</h2>

          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : (
            <>
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6" style={{ width: 'max-content' }}>
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={() => router.push('/about')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  View More Products
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
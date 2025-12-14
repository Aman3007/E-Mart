'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-green-700 mb-4">
            FreshMart
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6">
            Your One-Stop Grocery Destination
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fresh produce, quality products, and unbeatable prices delivered right to your doorstep.
            Experience the convenience of online grocery shopping with FreshMart.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white shadow-2xl">
          <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=400&fit=crop"
              alt="Fresh Groceries"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-green-700 mb-1">
                  Fresh Products
                </h3>
                <p className="text-gray-600">Farm-fresh produce delivered daily</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-green-700 mb-1">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">Same-day delivery available</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-green-700 mb-1">
                  Best Prices
                </h3>
                <p className="text-gray-600">Competitive pricing guaranteed</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => router.push('/register')}
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl"
            >
              Browse More <ChevronRight className="ml-2" size={24} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
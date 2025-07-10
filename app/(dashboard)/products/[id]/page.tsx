"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";

// Dummy data again (di real-world, ini bisa fetch dari API/database)
const products = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  description: `Description for Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
}));

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id));

  if (!product) return notFound();

  return (
    <main>
      <h1 className="text-2xl font-bold">Product Detail</h1>
      <div className="mt-4 border p-4 rounded">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
        <p className="mt-2 font-bold text-green-700">${product.price}</p>
        <Link
          href="/products"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    </main>
  );
}

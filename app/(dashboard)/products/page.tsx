import Link from "next/link";

export const metadata = {
  title: "Products Page",
};

// generate dummy data for the products page
const products = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  description: `Description for Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
}));

// add button show data product in the products page
export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Products Page</h1>
      <p className="mt-4">This is the Products page.</p>
      <ul className="mt-4">
        {products.map((product) => (
          <li key={product.id} className="border-b py-2">
            <h2 className="font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="text-blue-600 hover:underline"
            >
              Show
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

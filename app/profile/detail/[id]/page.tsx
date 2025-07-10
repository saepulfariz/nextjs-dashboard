"use client";

// File: app/profile/detail/[id]/page.tsx
// This file is used to display the details of a profile based on the ID passed in the URL.';
import Link from "next/link";


import { use, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1 className="text-2xl font-bold">Profile Detail Page</h1>
      <p className="mt-4">
        This is the profile detail page member with ID: {id}
      </p>
      <p>Count : {count}</p>
      <button
        className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <br />
      <Link className="text-blue-500 hover:underline" href="/profile/detail">
        Back
      </Link>
      <br />
      <Link className="text-blue-500 hover:underline" href="/profile">
        Profile Page
      </Link>
      <br />
    </main>
  );
}

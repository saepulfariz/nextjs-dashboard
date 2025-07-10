import Link from "next/dist/client/link";

export const metadata = {
  title: "Profile Detail",
};

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();

  return (
    <main>
      <h1 className="text-2xl font-bold">Profile Detail Page</h1>
      <p className="mt-4">This is the profile detail page.</p>

      <br />
      <Link className="text-blue-500 hover:underline" href="/profile/detail/1">
        View Profile Details ID 1
      </Link>
      <br />
      <Link className="text-blue-500 hover:underline" href="/profile/detail/2">
        View Profile Details ID 2
      </Link>
      <br />
      <Link className="text-blue-500 hover:underline" href="/profile">
        Back to Profile
      </Link>
    </main>
  );
}

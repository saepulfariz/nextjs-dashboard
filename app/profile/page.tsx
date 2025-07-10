import Link from "next/link";

export const metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <p className="mt-4">This is the profile page.</p>
      <br />
      <Link className="text-blue-500 hover:underline" href="/profile/detail">
        View Profile Details
      </Link>
    </main>
  );
}

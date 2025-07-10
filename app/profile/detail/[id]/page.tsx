import Link from "next/link";

export const metadata = {
  title: "Profile Detail",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1 className="text-2xl font-bold">Profile Detail Page</h1>
      <p className="mt-4">
        This is the profile detail page member with ID: {params.id}
      </p>

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

import Link from "next/link"
import { currentUser } from "@clerk/nextjs"

export default async function Home() {
  const user = await currentUser()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to SportsDuniya</h1>
      {user ? (
        <Link
          href="/dashboard"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Dashboard
        </Link>
      ) : (
        <Link
          href="/sign-in"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      )}
    </main>
  )
}


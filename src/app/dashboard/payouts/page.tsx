"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const authors = [
  { id: 1, name: "John Doe", articleCount: 15 },
  { id: 2, name: "Jane Smith", articleCount: 23 },
  // Add more authors
]

export default function PayoutsPage() {
  const [payoutRate, setPayoutRate] = useState(50)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Payout Calculator</h1>
          <div className="rounded-lg border p-4">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium">
                Payout Rate per Article ($)
              </label>
              <Input
                type="number"
                value={payoutRate}
                onChange={(e) => setPayoutRate(Number(e.target.value))}
                className="max-w-xs"
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Author</TableHead>
                  <TableHead>Article Count</TableHead>
                  <TableHead>Total Payout</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {authors.map((author) => (
                  <TableRow key={author.id}>
                    <TableCell>{author.name}</TableCell>
                    <TableCell>{author.articleCount}</TableCell>
                    <TableCell>${author.articleCount * payoutRate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}


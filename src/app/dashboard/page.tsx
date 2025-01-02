import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { Header } from "@/components/header"
import { OverviewCards } from "@/components/overview-cards"
import { ArticlesTable } from "@/components/articles-table"
import { AnalyticsChart } from "@/components/analytics-chart"
import { fetchNews } from "@/lib/fetch-news"

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  const newsData = await fetchNews()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome {user.firstName ?? 'back'}
          </h1>
        </div>
        <div className="space-y-4">
          <OverviewCards articles={newsData.articles} totalArticles={newsData.totalResults} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4">
              <AnalyticsChart />
            </div>
            <div className="col-span-3">
              <ArticlesTable articles={newsData.articles} />
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              SportsDuniya
            </a>
            . The source code is available on{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}


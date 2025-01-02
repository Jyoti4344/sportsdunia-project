import { FileText, TrendingUp, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NewsArticle } from "@/types/news"

interface ArticlesOverviewProps {
  articles: NewsArticle[],
  totalArticles: NewsArticle[]
}

export function OverviewCards({ articles }: ArticlesOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Total Articles</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-card-foreground">{articles.length}</div>
          <div className="text-xs text-muted-foreground">
            +20.1% from last month
          </div>
          <div className="mt-4 h-1 w-full rounded-full bg-secondary">
            <div className="h-1 w-[75%] rounded-full bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Total Blogs</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-card-foreground">{Math.floor(articles.length * 0.6)}</div>
          <div className="text-xs text-muted-foreground">
            +12.5% from last month
          </div>
          <div className="mt-4 h-1 w-full rounded-full bg-secondary">
            <div className="h-1 w-[60%] rounded-full bg-primary" />
          </div>
        </CardContent>
      </Card>
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-card-foreground">Total Payout</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-card-foreground">$12,450</div>
          <div className="text-xs text-muted-foreground">
            +8.2% from last month
          </div>
          <div className="mt-4 h-1 w-full rounded-full bg-secondary">
            <div className="h-1 w-[45%] rounded-full bg-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


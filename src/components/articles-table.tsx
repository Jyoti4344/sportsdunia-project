import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { NewsArticle } from "@/types/news"

interface ArticlesTableProps {
  articles: NewsArticle[]
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Articles</CardTitle>
        <CardDescription className="text-muted-foreground">
          Latest sports articles from various sources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-card-foreground">Title</TableHead>
              <TableHead className="text-card-foreground">Source</TableHead>
              <TableHead className="text-card-foreground">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.url} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {article.title}
                  </a>
                </TableCell>
                <TableCell>{article.source.name}</TableCell>
                <TableCell>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


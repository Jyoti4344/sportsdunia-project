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
      <Card>
        <CardHeader>
          <CardTitle>Recent Articles</CardTitle>
          <CardDescription>
            Latest sports articles from various sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((article) => (
                <TableRow key={article.url}>
                  <TableCell className="font-medium">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
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
  
  
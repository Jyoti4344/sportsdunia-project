import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const authors = [
  {
    name: "John Doe",
    articles: 45,
    engagement: 85,
    avatar: "/placeholder.svg"
  },
  {
    name: "Jane Smith",
    articles: 38,
    engagement: 78,
    avatar: "/placeholder.svg"
  },
  {
    name: "Mike Johnson",
    articles: 32,
    engagement: 92,
    avatar: "/placeholder.svg"
  }
]

export function TopAuthors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Authors</CardTitle>
        <CardDescription>
          Authors with highest engagement rates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {authors.map((author, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">{author.name}</p>
                  <p className="text-sm text-muted-foreground">{author.articles} articles</p>
                </div>
                <Progress value={author.engagement} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {author.engagement}% engagement rate
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


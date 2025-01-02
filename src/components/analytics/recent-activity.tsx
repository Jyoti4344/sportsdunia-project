import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: "John Doe",
    action: "published",
    content: "Getting Started with Next.js",
    time: "2 hours ago",
    avatar: "/placeholder.svg"
  },
  {
    user: "Jane Smith",
    action: "updated",
    content: "Advanced React Patterns",
    time: "4 hours ago",
    avatar: "/placeholder.svg"
  },
  {
    user: "Mike Johnson",
    action: "commented on",
    content: "Understanding TypeScript",
    time: "6 hours ago",
    avatar: "/placeholder.svg"
  }
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions from authors and users
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.avatar} alt={activity.user} />
                <AvatarFallback>{activity.user[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user}
                  <span className="text-muted-foreground"> {activity.action} </span>
                  {activity.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


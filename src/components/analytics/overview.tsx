"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", pageViews: 1200, uniqueVisitors: 800 },
  { name: "Feb", pageViews: 1500, uniqueVisitors: 1000 },
  { name: "Mar", pageViews: 1800, uniqueVisitors: 1200 },
  { name: "Apr", pageViews: 2200, uniqueVisitors: 1500 },
  { name: "May", pageViews: 2500, uniqueVisitors: 1800 },
  { name: "Jun", pageViews: 3000, uniqueVisitors: 2000 },
]

export function Overview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Page Views</CardTitle>
          <CardDescription>
            Daily page views and unique visitors over time
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pageViews"
                stroke="#0ea5e9"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="uniqueVisitors"
                stroke="#84cc16"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Content Performance</CardTitle>
          <CardDescription>
            Distribution of content types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip />
              <Bar
                dataKey="pageViews"
                fill="currentColor"
                radius={[4, 4, 0, 0]}
                className="fill-primary"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}


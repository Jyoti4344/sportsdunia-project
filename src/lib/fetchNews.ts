import { NewsArticle } from "../types/news"

const API_KEY = process.env.NEWS_API_KEY
const API_URL = "https://newsapi.org/v2/top-headlines"

export async function fetchNews(category: string = "sports", pageSize: number = 10): Promise<NewsArticle[]> {
  if (!API_KEY) {
    throw new Error("News API key is not set")
  }

  const response = await fetch(`${API_URL}?category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`)
  
  if (!response.ok) {
    throw new Error("Failed to fetch news")
  }

  const data = await response.json()
  return data.articles
}


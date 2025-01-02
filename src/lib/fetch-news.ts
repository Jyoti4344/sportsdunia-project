const API_KEY = process.env.NEWS_API_KEY
const API_URL = "https://newsapi.org/v2/top-headlines"

export async function fetchNews(category: string = "sports", pageSize: number = 10) {
  if (!API_KEY) {
    throw new Error("News API key is not set")
  }

  const response = await fetch(
    `${API_URL}?country=in&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`,
    { next: { revalidate: 3600 } }
  )
  
  if (!response.ok) {
    throw new Error("Failed to fetch news")
  }

  return response.json()
}


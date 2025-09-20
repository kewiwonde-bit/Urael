"use client"

import { useState } from "react"
import { Calendar, User, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const newsArticles = [
  {
    id: 1,
    title: "ዜና ቤተክርስቲያን",
    englishTitle: "Church News",
    excerpt:
      "በዛሬው ዕለት በሊቨርፑል መካነ ቅዱሳን አቡነ ተክለሃይማኖት ቤተክርስቲያንየመጭውን የጻድቁ አባታችንን ዓመታዊ ክብረ በዓል በማስመልከት ለሚደረገው ዝግጅት በተለይ ቤተክርስቲያን ለመግዛት በሚደረገው ጥረት የህንጻ ግዢ የገቢ አሰባሳቢክፍሉ በደብሩ ያሉትን የአገልግሎት ክፍሎች በጋራ ሊያሳካ ስለሚችለው ውይይት አድርጏል...",
    englishExcerpt:
      "Today at Liverpool Mekane Kidusan Abune Teklehaymanot Church, discussions were held regarding preparations for the upcoming annual feast of our righteous father, particularly focusing on efforts to purchase a church building...",
    author: "Admin",
    date: "Aug 25, 2025",
    image: "/church-meeting-discussion.jpg",
    category: "ወቅታዊ",
    englishCategory: "Current",
  },
  {
    id: 2,
    title: "አዲስ አባል መቀበል",
    englishTitle: "New Member Reception",
    excerpt:
      "በትናንትናው ዕለት ማለትም በ17/12/2017 ዓም (August 23/2025) በሊቨርፑል መካነ ቅዱሳን አቡነ ተክለሃይማኖት ቤተክርስቲያን አንድ አዲስ ነገር ተፈፅሟል ይኸውም ጀማል የተባለ ከእስልምና ወደ ክርስትና በመምጣት መስረታዊ የክርስትና ትምህርቱን በተገቢ መንገድ አጠናቅቆ የሥላሴ ልጅነቱን አግኝቷል...",
    englishExcerpt:
      "Yesterday, August 23, 2025, something new happened at Liverpool Mekane Kidusan Abune Teklehaymanot Church. A person named Jamal, coming from Islam to Christianity, completed his basic Christian education and received his Trinity sonship...",
    author: "Admin",
    date: "Aug 23, 2025",
    image: "/baptism-ceremony.jpg",
    category: "ወቅታዊ",
    englishCategory: "Current",
  },
  {
    id: 3,
    title: "የሰንበት ትምህርት ቤት ጅምር",
    englishTitle: "Sunday School Opening",
    excerpt:
      "አዲሱ የትምህርት ዓመት ጅምር በማስመልከት የሰንበት ትምህርት ቤታችን በአዲስ መርሐ ግብር እና ተማሪዎች ይጀምራል። ሁሉም ወላጆች ልጆቻቸውን እንዲመዘግቡ ጥሪ ቀርቧል።",
    englishExcerpt:
      "With the beginning of the new academic year, our Sunday school will start with a new curriculum and students. All parents are invited to register their children.",
    author: "Deacon Zemariam",
    date: "Sep 1, 2025",
    image: "/sunday-school-children.jpg",
    category: "ትምህርት",
    englishCategory: "Education",
  },
  {
    id: 4,
    title: "የአቡነ ተክለሃይማኖት በዓል ዝግጅት",
    englishTitle: "Abune Teklehaymanot Feast Preparation",
    excerpt: "የጻድቁ አባታችን አቡነ ተክለሃይማኖት ዓመታዊ ክብረ በዓል በሚቀጥለው ወር ይከበራል። ሁሉም ምእመናን በዝግጅቱ እንዲሳተፉ ጥሪ ቀርቧል።",
    englishExcerpt:
      "The annual feast of our righteous father Abune Teklehaymanot will be celebrated next month. All faithful are invited to participate in the preparations.",
    author: "Church Committee",
    date: "Aug 20, 2025",
    image: "/feast-preparation.jpg",
    category: "በዓላት",
    englishCategory: "Festivals",
  },
]

export function NewsSection() {
  const [visibleArticles, setVisibleArticles] = useState(2)
  const [showAll, setShowAll] = useState(false)

  const handleLoadMore = () => {
    if (showAll) {
      setVisibleArticles(2)
      setShowAll(false)
    } else {
      setVisibleArticles(newsArticles.length)
      setShowAll(true)
    }
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">ወቅታዊ መረጃዎች</h2>
          <p className="text-lg text-muted-foreground">Current News & Updates</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {newsArticles.slice(0, visibleArticles).map((article) => (
            <Card
              key={article.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-border hover:border-primary/50"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${article.image})`,
                  }}
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 font-serif">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-muted-foreground">
                  {article.englishTitle}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-3 font-serif line-clamp-3">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{article.englishExcerpt}</p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 p-0 h-auto font-medium"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {newsArticles.length > 2 && (
          <div className="text-center">
            <Button
              onClick={handleLoadMore}
              variant="outline"
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronDown className="ml-2 h-4 w-4 rotate-180" />
                </>
              ) : (
                <>
                  Load More Posts
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-lg bg-background border border-border">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter to receive the latest church news and announcements
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

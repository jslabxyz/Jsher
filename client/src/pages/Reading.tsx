import { BookOpen, ExternalLink, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import DottedBackground from "@/components/DottedBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getReadingItems } from "@/lib/api";
import type { ReadingItem } from "@/lib/supabase";
import { toast } from "sonner";

export default function Reading() {
  const [items, setItems] = useState<ReadingItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await getReadingItems();
        setItems(data);
      } catch (error) {
        console.error("Error loading reading items:", error);
        toast.error("Failed to load reading list");
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reading':
        return 'bg-green-500/20 text-green-400 border-green-500';
      case 'completed':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      case 'want_to_read':
        return 'bg-orange-500/20 text-orange-400 border-orange-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'reading':
        return 'Currently Reading';
      case 'completed':
        return 'Completed';
      case 'want_to_read':
        return 'Want to Read';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen">
      <DottedBackground />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:text-green-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12 text-green-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Reading<span className="text-green-400">_</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Books, articles, and resources I'm currently reading or have found valuable.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-muted rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-muted rounded mb-2 w-1/2"></div>
                <div className="h-20 bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No items yet</h3>
            <p className="text-muted-foreground">Check back soon for reading recommendations!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg p-6 hover:border-green-400 transition-colors bg-card/50 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                      title="View external link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-3 font-semibold">{item.author}</p>

                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className={getStatusColor(item.status)}>
                    {getStatusLabel(item.status)}
                  </Badge>
                  {item.category && (
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      {item.category}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

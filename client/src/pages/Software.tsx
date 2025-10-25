import { Terminal, ExternalLink, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import DottedBackground from "@/components/DottedBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSoftwareItems } from "@/lib/api";
import type { SoftwareItem } from "@/lib/supabase";
import { toast } from "sonner";

export default function Software() {
  const [items, setItems] = useState<SoftwareItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await getSoftwareItems();
        setItems(data);
      } catch (error) {
        console.error("Error loading software items:", error);
        toast.error("Unable to load software list. Refreshing the page might help.");
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  const getPricingColor = (pricing: string | null) => {
    if (!pricing) return 'bg-gray-500/20 text-gray-400 border-gray-500';

    switch (pricing.toLowerCase()) {
      case 'free':
        return 'bg-green-500/20 text-green-400 border-green-500';
      case 'paid':
        return 'bg-orange-500/20 text-orange-400 border-orange-500';
      case 'freemium':
        return 'bg-blue-500/20 text-blue-400 border-blue-500';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  return (
    <div className="min-h-screen">
      <DottedBackground />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:text-blue-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Terminal className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Software<span className="text-blue-400">_</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            The tools I actually use every day—no bloat, just productivity essentials.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-muted rounded mb-4 w-3/4"></div>
                <div className="h-20 bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <Terminal className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No tools listed yet</h3>
            <p className="text-muted-foreground">Jason's favorite productivity tools will appear here once added.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg p-6 hover:border-blue-400 transition-colors bg-card/50 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      title="Visit website"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.pricing && (
                    <Badge variant="outline" className={getPricingColor(item.pricing)}>
                      {item.pricing}
                    </Badge>
                  )}
                  {item.category && (
                    <Badge variant="outline" className="border-blue-500/50 text-blue-400">
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

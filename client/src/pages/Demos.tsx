import { MonitorPlay, ExternalLink, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import DottedBackground from "@/components/DottedBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDemosItems } from "@/lib/api";
import type { DemosItem } from "@/lib/supabase";
import { toast } from "sonner";

export default function Demos() {
  const [items, setItems] = useState<DemosItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await getDemosItems();
        setItems(data);
      } catch (error) {
        console.error("Error loading demos items:", error);
        toast.error("Failed to load demos list");
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  return (
    <div className="min-h-screen">
      <DottedBackground />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:text-pink-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <MonitorPlay className="w-12 h-12 text-pink-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Demos<span className="text-pink-400">_</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Projects I've built to explore new ideas and solve real problems.
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
            <MonitorPlay className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No demos to show yet</h3>
            <p className="text-muted-foreground">Project showcases will appear here once Jason adds them.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg overflow-hidden hover:border-pink-400 transition-colors bg-card/50 backdrop-blur-sm"
              >
                {item.thumbnail_url && (
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={item.thumbnail_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-pink-300 transition-colors"
                        title="Open demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.category && (
                      <Badge variant="outline" className="border-pink-500/50 text-pink-400">
                        {item.category}
                      </Badge>
                    )}
                    {item.technologies && item.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-muted-foreground/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

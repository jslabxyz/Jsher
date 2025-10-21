import { Sparkles, Copy, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import DottedBackground from "@/components/DottedBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPromptsItems } from "@/lib/api";
import type { PromptsItem } from "@/lib/supabase";
import { toast } from "sonner";

export default function Prompts() {
  const [items, setItems] = useState<PromptsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    async function loadItems() {
      try {
        const data = await getPromptsItems();
        setItems(data);
      } catch (error) {
        console.error("Error loading prompts items:", error);
        toast.error("Failed to load prompts list");
      } finally {
        setLoading(false);
      }
    }
    loadItems();
  }, []);

  const copyPrompt = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`"${title}" copied to clipboard!`);
  };

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <DottedBackground />

      <div className="max-w-6xl mx-auto px-4 py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:text-orange-400">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="w-12 h-12 text-orange-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Prompts<span className="text-orange-400">_</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            AI prompts and templates I've crafted for various use cases.
          </p>
        </div>

        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-border rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-muted rounded mb-4 w-3/4"></div>
                <div className="h-20 bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">No prompts yet</h3>
            <p className="text-muted-foreground">Check back soon for AI prompts and templates!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {items.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="border border-border rounded-lg p-6 hover:border-orange-400 transition-colors bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyPrompt(item.prompt_text, item.title)}
                      className="hover:text-orange-400"
                      title="Copy prompt to clipboard"
                    >
                      <Copy className="w-5 h-5" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  {item.use_case && (
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="text-orange-400 font-semibold">Use case:</span> {item.use_case}
                    </p>
                  )}

                  <div className="mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExpanded(item.id)}
                      className="hover:text-orange-400 hover:border-orange-400"
                    >
                      {isExpanded ? (
                        <>
                          Hide Prompt <ChevronUp className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          View Prompt <ChevronDown className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>

                  {isExpanded && (
                    <div className="bg-muted/50 rounded-lg p-4 mb-4 border border-border">
                      <pre className="text-sm text-foreground whitespace-pre-wrap font-mono">
                        {item.prompt_text}
                      </pre>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {item.category && (
                      <Badge variant="outline" className="border-orange-500/50 text-orange-400">
                        {item.category}
                      </Badge>
                    )}
                    {item.tags && item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-muted-foreground/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

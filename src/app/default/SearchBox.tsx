"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function SearchBox({
  toggleSearch,
}: {
  toggleSearch: () => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sample search results - replace with your actual data
  const searchResults = [
    { id: 1, title: "Web Development Services", category: "Services" },
    { id: 2, title: "Mobile App Solutions", category: "Services" },
    { id: 3, title: "Cloud Architecture", category: "Solutions" },
    { id: 4, title: "AI Integration", category: "Solutions" },
    { id: 5, title: "Contact Support", category: "Pages" },
  ];

  // Filter results based on search query
  const filteredResults = searchResults.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSearch]);

  return (
    <div
      onClick={toggleSearch}
      className="fixed inset-0 z-[999999] bg-background/80 backdrop-blur-sm flex justify-center items-start pt-20 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-background rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
      >
        {/* Search Header */}
        <div className="flex items-center px-4 border-b border-gray-200 dark:border-gray-800">
          <Search className="h-5 w-5 text-muted-foreground mr-2" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search services, solutions, articles..."
            className="flex-1 border-0 shadow-none focus-visible:ring-0 h-14 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSearch}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Results */}
        <div>
          {(searchQuery || isFocused) && (
            <div className="overflow-hidden">
              <div className="p-4 border-t border-gray-200 dark:border-gray-800  h-full sm:max-h-[60vh] overflow-y-auto">
                {filteredResults.length > 0 ? (
                  <div className="space-y-2">
                    {filteredResults.map((item) => (
                      <div key={item.id}>
                        <Card className="hover:bg-accent transition-colors cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium">{item.title}</h3>
                              <Badge variant="outline">{item.category}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Search className="h-8 w-8 mx-auto mb-2" />
                    <p>
                      No results found for {`"`}
                      {searchQuery}
                      {`"`}
                    </p>
                    <p className="text-sm mt-1">Try different keywords</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Recent Searches (when search is empty) */}
        <div>
          {!searchQuery && !isFocused && (
            <div className="overflow-hidden">
              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Recent searches
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => setSearchQuery("Web Development")}
                  >
                    Web Development
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => setSearchQuery("Cloud Solutions")}
                  >
                    Cloud Solutions
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => setSearchQuery("AI Integration")}
                  >
                    AI Integration
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

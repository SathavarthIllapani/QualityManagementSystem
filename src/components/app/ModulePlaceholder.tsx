import { Link } from "@tanstack/react-router";
import { Construction } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ModulePlaceholder({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>
      <Card className="mt-8 border-border/80">
        <CardContent className="p-6">
          <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary">
            <Construction className="size-5" />
          </span>
          <h2 className="mt-5 text-base font-semibold">Coming up in this module</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/dashboard">Back to dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

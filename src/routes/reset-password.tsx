import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import { BrandMark } from "@/components/marketing/MarketingChrome";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a new password — QualitySphere QMS" },
      { name: "description", content: "Choose a new password for your QualitySphere QMS account." },
      { property: "og:title", content: "Set a new password — QualitySphere QMS" },
      { property: "og:description", content: "Choose a new password for your account." },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const password = String(new FormData(event.currentTarget).get("password"));
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password updated");
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-md">
        <BrandMark />
        <h1 className="mt-6 text-2xl font-semibold">Set a new password</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose a password of at least 8 characters. The change is audit-trailed.
        </p>
        <Card className="mt-8 border-border/80">
          <CardContent className="p-6">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="new-password">New password</Label>
                <Input
                  id="new-password"
                  name="password"
                  type="password"
                  minLength={8}
                  autoComplete="new-password"
                  required
                />
              </div>
              <Button type="submit">Update password</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

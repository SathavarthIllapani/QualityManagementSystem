import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

import { BrandMark } from "@/components/marketing/MarketingChrome";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your password — QualitySphere QMS" },
      { name: "description", content: "Request a password reset link for your QualitySphere QMS account." },
      { property: "og:title", content: "Reset your password — QualitySphere QMS" },
      { property: "og:description", content: "Request a password reset link." },
    ],
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = String(new FormData(event.currentTarget).get("email"));
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    setSent(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="p-5">
        <Button asChild variant="ghost" size="sm">
          <Link to="/auth">
            <ArrowLeft className="mr-1.5 size-4" /> Back to sign in
          </Link>
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center px-5 pb-16">
        <div className="w-full max-w-md">
          <BrandMark />
          <h1 className="mt-6 text-2xl font-semibold">Reset your password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll email a secure link to set a new password. The request is recorded in the audit
            trail.
          </p>
          <Card className="mt-8 border-border/80">
            <CardContent className="p-6">
              {sent ? (
                <p className="text-sm text-muted-foreground">
                  If an account exists for that address, a reset link is on its way. Check your inbox
                  and spam folder.
                </p>
              ) : (
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="forgot-email">Work email</Label>
                    <Input id="forgot-email" name="email" type="email" required />
                  </div>
                  <Button type="submit">Send reset link</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

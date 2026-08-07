import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowLeft, Loader2, ShieldCheck } from "lucide-react";
import { z } from "zod";

import { BrandMark, ThemeToggle } from "@/components/marketing/MarketingChrome";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { auth } from "@/integrations/client/index";

const searchSchema = z.object({
  mode: z.enum(["signin", "signup"]).optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign in — QualitySphere QMS" },
      {
        name: "description",
        content:
          "Sign in or request access to QualitySphere QMS, the AI-powered quality management platform for regulated industries.",
      },
      { property: "og:title", content: "Sign in — QualitySphere QMS" },
      { property: "og:description", content: "Access your quality management workspace." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { mode } = Route.useSearch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: String(form.get("email")),
      password: String(form.get("password")),
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Signed in");
    navigate({ to: "/dashboard" });
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: String(form.get("email")),
      password: String(form.get("password")),
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          full_name: String(form.get("full_name")),
          job_title: String(form.get("job_title") ?? ""),
          department: String(form.get("department") ?? ""),
        },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (data.session) {
      toast.success("Account created");
      navigate({ to: "/dashboard" });
      return;
    }
    toast.success("Check your email to confirm your account before signing in.");
  };

  const handleGoogle = async () => {
    const result = await auth.signInWithOAuth("google", {
      redirectTo: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-sidebar p-12 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative">
          <Link to="/" className="text-sidebar-foreground">
            <BrandMark />
          </Link>
        </div>
        <div className="relative max-w-md">
          <h2 className="font-display text-3xl leading-tight font-semibold">
            Every signature, revision and decision — reconstructable.
          </h2>
          <p className="mt-5 text-sm text-sidebar-foreground/70">
            QualitySphere keeps an immutable audit trail behind every quality record, so inspection
            readiness is a state you're already in, not a project you start.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-sidebar-foreground/80">
            {["21 CFR Part 11 aligned electronic records", "Role and permission based access", "AI drafting with human approval"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <ShieldCheck className="size-4 text-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        <p className="relative text-xs text-sidebar-foreground/50">
          © 2026 QualitySphere QMS — original platform, purpose-built for regulated quality.
        </p>
      </aside>

      <main className="flex flex-col bg-background">
        <div className="flex items-center justify-between p-5">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-1.5 size-4" /> Back
            </Link>
          </Button>
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center px-5 pb-12">
          <div className="w-full max-w-md">
            <div className="lg:hidden">
              <BrandMark />
            </div>
            <h1 className="mt-6 text-2xl font-semibold">Welcome to your quality workspace</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Use your organisation account. All access is logged.
            </p>

            <Tabs defaultValue={mode === "signup" ? "signup" : "signin"} className="mt-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign in</TabsTrigger>
                <TabsTrigger value="signup">Request access</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <Card className="border-border/80">
                  <CardContent className="p-6">
                    <form className="grid gap-4" onSubmit={handleSignIn}>
                      <div className="grid gap-2">
                        <Label htmlFor="signin-email">Work email</Label>
                        <Input id="signin-email" name="email" type="email" autoComplete="email" required />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="signin-password">Password</Label>
                          <Link
                            to="/forgot-password"
                            className="text-xs text-primary hover:underline"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <Input
                          id="signin-password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                        />
                      </div>
                      <Button type="submit" disabled={loading}>
                        {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
                        Sign in
                      </Button>
                    </form>
                    <GoogleButton onClick={handleGoogle} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="signup">
                <Card className="border-border/80">
                  <CardContent className="p-6">
                    <form className="grid gap-4" onSubmit={handleSignUp}>
                      <div className="grid gap-2">
                        <Label htmlFor="signup-name">Full name</Label>
                        <Input id="signup-name" name="full_name" required />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="signup-title">Job title</Label>
                          <Input id="signup-title" name="job_title" placeholder="QA Executive" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="signup-dept">Department</Label>
                          <Input id="signup-dept" name="department" placeholder="Quality Assurance" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="signup-email">Work email</Label>
                        <Input id="signup-email" name="email" type="email" autoComplete="email" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input
                          id="signup-password"
                          name="password"
                          type="password"
                          autoComplete="new-password"
                          minLength={8}
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          Minimum 8 characters. New accounts start with the Employee role until an
                          administrator assigns permissions.
                        </p>
                      </div>
                      <Button type="submit" disabled={loading}>
                        {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
                        Create account
                      </Button>
                    </form>
                    <GoogleButton onClick={handleGoogle} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

function GoogleButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="text-xs text-muted-foreground">or</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <Button variant="outline" className="w-full" onClick={onClick} type="button">
        <svg className="mr-2 size-4" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21.35 11.1H12v2.9h5.35c-.25 1.5-1.85 4.4-5.35 4.4a5.9 5.9 0 0 1 0-11.8c1.5 0 2.8.55 3.8 1.5l2.1-2.1A8.7 8.7 0 0 0 12 3.3a8.7 8.7 0 0 0 0 17.4c5 0 8.35-3.5 8.35-8.45 0-.55-.05-.85-.1-1.15z"
          />
        </svg>
        Continue with Google
      </Button>
    </>
  );
}

import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  Bell,
  ChevronsUpDown,
  LogOut,
  Search,
  Sparkles,
  User as UserIcon,
} from "lucide-react";

import { BrandMark, ThemeToggle } from "@/components/marketing/MarketingChrome";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { navGroups, roleLabels } from "@/lib/qms-nav";
import { notifications, searchIndex } from "@/lib/mock-data";
import { supabase } from "@/integrations/supabase/client";

type Profile = { full_name: string | null; job_title: string | null; department: string | null };

function useSessionProfile() {
  const [email, setEmail] = useState<string>("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [role, setRole] = useState<string>("employee");

  useEffect(() => {
    let active = true;
    void (async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!user || !active) return;
      setEmail(user.email ?? "");
      const [{ data: prof }, { data: roles }] = await Promise.all([
        supabase.from("profiles").select("full_name, job_title, department").eq("id", user.id).maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", user.id),
      ]);
      if (!active) return;
      if (prof) setProfile(prof as Profile);
      if (roles && roles.length > 0) setRole(String(roles[0]!.role));
    })();
    return () => {
      active = false;
    };
  }, []);

  return { email, profile, role };
}

function AppSidebar({ role, name }: { role: string; name: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border px-3 py-4 group-data-[collapsible=icon]:px-1.5">
        <Link to="/dashboard" className="text-sidebar-foreground">
          <span className="group-data-[collapsible=icon]:hidden">
            <BrandMark />
          </span>
          <span className="hidden group-data-[collapsible=icon]:block">
            <BrandMark compact />
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                      <Link to={item.url as "/dashboard"}>
                        <item.icon />
                        <span>{item.title}</span>
                        {item.badge ? (
                          <Badge
                            variant="secondary"
                            className="ml-auto h-5 px-1.5 text-[11px] group-data-[collapsible=icon]:hidden"
                          >
                            {item.badge}
                          </Badge>
                        ) : null}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex items-center gap-2.5 px-1 py-1.5 group-data-[collapsible=icon]:hidden">
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-primary/15 text-xs font-semibold text-primary">
            {initials(name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{name}</p>
            <p className="truncate text-xs text-sidebar-foreground/60">{roleLabels[role] ?? "Employee"}</p>
          </div>
          <ChevronsUpDown className="size-3.5 text-sidebar-foreground/40" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { email, profile, role } = useSessionProfile();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [query, setQuery] = useState("");
  const name = profile?.full_name || email.split("@")[0] || "User";
  const unread = notifications.filter((item) => item.unread).length;

  const results = query
    ? searchIndex.filter((item) =>
        `${item.id} ${item.title} ${item.type}`.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar role={role} name={name} />
        <SidebarInset className="min-w-0">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur">
            <SidebarTrigger />
            <div className="relative hidden max-w-sm flex-1 md:block">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search records, documents, people…"
                className="h-9 pl-9"
              />
              {results.length > 0 && (
                <div className="absolute top-11 left-0 w-full overflow-hidden rounded-md border border-border bg-popover shadow-lg">
                  {results.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-accent"
                    >
                      <span className="truncate">{item.title}</span>
                      <span className="shrink-0 text-xs text-muted-foreground">{item.id}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <Button variant="ghost" size="sm" className="gap-1.5 text-primary">
                <Sparkles className="size-4" />
                <span className="hidden sm:inline">AI Assistant</span>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="size-4" />
                    {unread > 0 && (
                      <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-primary" />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-80 p-0">
                  <div className="border-b border-border px-4 py-3 text-sm font-semibold">
                    Notifications
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((item) => (
                      <div key={item.title} className="border-b border-border px-4 py-3 last:border-0">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{item.meta}</p>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <span className="inline-flex size-7 items-center justify-center rounded-md bg-primary/15 text-[11px] font-semibold text-primary">
                      {initials(name)}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="truncate text-xs font-normal text-muted-foreground">{email}</p>
                    <p className="mt-1 text-xs font-normal text-primary">
                      {roleLabels[role] ?? "Employee"}
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      <UserIcon className="mr-2 size-4" /> Profile & settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 size-4" /> Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="min-w-0 flex-1 p-5">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

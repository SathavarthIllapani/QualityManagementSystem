import { createFileRoute } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowDownRight, ArrowUpRight, CalendarDays, Megaphone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  activity,
  announcements,
  auditFindings,
  calendarEvents,
  capaTrend,
  deviationTrend,
  kpis,
  moduleStatus,
  myTasks,
  pendingApprovals,
  probabilityLabels,
  riskMatrix,
  trainingCompletion,
} from "@/lib/mock-data";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Quality Dashboard — QualitySphere QMS" },
      {
        name: "description",
        content:
          "Live quality metrics: compliance score, open CAPAs, pending approvals, deviation trends, risk heatmap and training status.",
      },
      { property: "og:title", content: "Quality Dashboard — QualitySphere QMS" },
      { property: "og:description", content: "Your organisation's quality posture at a glance." },
    ],
  }),
  component: Dashboard,
});

const pieColors = [
  "oklch(0.596 0.145 163.2)",
  "oklch(0.72 0.11 200)",
  "oklch(0.65 0.19 30)",
];

const priorityVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Critical: "destructive",
  High: "default",
  Medium: "secondary",
};

function riskTone(count: number, rowIndex: number, colIndex: number) {
  const weight = (4 - rowIndex) * 0 + rowIndex + colIndex;
  if (count === 0) return "bg-muted text-muted-foreground";
  if (rowIndex <= 1 && colIndex >= 2) return "bg-destructive/25 text-foreground";
  if (weight <= 3) return "bg-primary/20 text-foreground";
  return "bg-chart-4/25 text-foreground";
}

function Dashboard() {
  const trainingTotal = trainingCompletion.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Quality dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Consolidated view across all quality processes · Site: Bengaluru Plant 1
          </p>
        </div>
        <Button variant="outline" size="sm">Export management review pack</Button>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="border-border/80">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
              <div className="mt-2 flex items-end justify-between">
                <span className="font-display text-3xl font-semibold">{kpi.value}</span>
                <span
                  className={
                    kpi.trend === "up"
                      ? "flex items-center gap-1 text-xs font-medium text-primary"
                      : "flex items-center gap-1 text-xs font-medium text-muted-foreground"
                  }
                >
                  {kpi.trend === "up" ? (
                    <ArrowUpRight className="size-3.5" />
                  ) : (
                    <ArrowDownRight className="size-3.5" />
                  )}
                  {kpi.delta}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="border-border/80 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">CAPA throughput — last 6 months</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={capaTrend}>
                <defs>
                  <linearGradient id="opened" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.596 0.145 163.2)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="oklch(0.596 0.145 163.2)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Area
                  type="monotone"
                  dataKey="opened"
                  stroke="oklch(0.596 0.145 163.2)"
                  fill="url(#opened)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="closed"
                  stroke="oklch(0.72 0.11 200)"
                  fill="transparent"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="overdue"
                  stroke="oklch(0.65 0.19 30)"
                  fill="transparent"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-base">Training status</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trainingCompletion}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={58}
                  outerRadius={86}
                  paddingAngle={2}
                >
                  {trainingCompletion.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <p className="-mt-4 text-center text-xs text-muted-foreground">
              {trainingTotal} assignments tracked
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-base">Deviations by severity</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deviationTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="critical" stackId="a" fill="oklch(0.65 0.19 30)" />
                <Bar dataKey="major" stackId="a" fill="oklch(0.8 0.15 80)" />
                <Bar dataKey="minor" stackId="a" fill="oklch(0.596 0.145 163.2)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-base">Audit findings by area</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={auditFindings} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
                <XAxis type="number" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis dataKey="area" type="category" stroke="var(--muted-foreground)" fontSize={12} width={80} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="major" stackId="a" fill="oklch(0.65 0.19 30)" />
                <Bar dataKey="minor" stackId="a" fill="oklch(0.596 0.145 163.2)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-base">Risk heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1.5">
              {riskMatrix.map((row, rowIndex) => (
                <div key={row.severity} className="flex items-center gap-1.5">
                  <span className="w-24 shrink-0 truncate text-[11px] text-muted-foreground">
                    {row.severity}
                  </span>
                  {row.cells.map((count, colIndex) => (
                    <span
                      key={colIndex}
                      className={`flex h-8 flex-1 items-center justify-center rounded text-xs font-medium ${riskTone(count, rowIndex, colIndex)}`}
                    >
                      {count}
                    </span>
                  ))}
                </div>
              ))}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="w-24 shrink-0" />
                {probabilityLabels.map((label) => (
                  <span key={label} className="flex-1 text-center text-[10px] text-muted-foreground">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approvals + tasks */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="border-border/80 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Pending my approval</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Record</TableHead>
                  <TableHead className="hidden sm:table-cell">Workflow stage</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead className="text-right">Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingApprovals.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.id} · {item.type}
                      </p>
                    </TableCell>
                    <TableCell className="hidden text-sm text-muted-foreground sm:table-cell">
                      {item.stage}
                    </TableCell>
                    <TableCell className="text-sm">{item.due}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={priorityVariant[item.priority] ?? "outline"}>
                        {item.priority}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-base">My tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {myTasks.map((task) => (
              <div key={task.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
                <p className="text-sm font-medium">{task.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {task.module} · due {task.due}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Module status + activity + calendar */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-base">Module workload</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {moduleStatus.map((item) => (
              <div key={item.module}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.module}</span>
                  <span className="text-muted-foreground">
                    {item.open} open · {item.overdue} overdue
                  </span>
                </div>
                <Progress
                  value={(item.closedThisMonth / (item.closedThisMonth + item.open)) * 100}
                  className="mt-2 h-1.5"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-base">Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3.5">
            {activity.map((item) => (
              <div key={`${item.actor}-${item.target}`} className="text-sm">
                <p>
                  <span className="font-medium">{item.actor}</span>{" "}
                  <span className="text-muted-foreground">{item.action}</span>{" "}
                  <span className="font-medium">{item.target}</span>
                </p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-border/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <CalendarDays className="size-4 text-primary" /> Quality calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {calendarEvents.map((event) => (
                <div key={event.label} className="flex items-center gap-3 text-sm">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold">
                    {event.day}
                  </span>
                  <span className="truncate">{event.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/80">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Megaphone className="size-4 text-primary" /> Announcements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.body}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{item.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

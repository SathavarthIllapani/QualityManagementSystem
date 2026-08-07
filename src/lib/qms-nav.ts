import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  GitCompareArrows,
  AlertTriangle,
  ShieldCheck,
  Radar,
  GraduationCap,
  Factory,
  MessageSquareWarning,
  Wrench,
  Gauge,
  FlaskConical,
  Users,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  badge?: number;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Overview",
    items: [{ title: "Dashboard", url: "/dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Quality Processes",
    items: [
      { title: "Documents", url: "/documents", icon: FileText, badge: 12 },
      { title: "CAPA", url: "/capa", icon: ClipboardCheck, badge: 7 },
      { title: "Change Control", url: "/change-control", icon: GitCompareArrows, badge: 4 },
      { title: "Deviations", url: "/deviations", icon: AlertTriangle, badge: 5 },
    ],
  },
  {
    label: "Assurance",
    items: [
      { title: "Audits", url: "/audits", icon: ShieldCheck },
      { title: "Risk", url: "/risk", icon: Radar },
      { title: "Training", url: "/training", icon: GraduationCap },
      { title: "Suppliers", url: "/suppliers", icon: Factory },
      { title: "Complaints", url: "/complaints", icon: MessageSquareWarning },
    ],
  },
  {
    label: "Operations",
    items: [
      { title: "Equipment", url: "/equipment", icon: Wrench },
      { title: "Calibration", url: "/calibration", icon: Gauge },
      { title: "Validation", url: "/validation", icon: FlaskConical },
    ],
  },
  {
    label: "Administration",
    items: [
      { title: "Reports & Analytics", url: "/reports", icon: BarChart3 },
      { title: "User Management", url: "/users", icon: Users },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
];

export const roleLabels: Record<string, string> = {
  super_admin: "Super Admin",
  quality_head: "Quality Head",
  qa_manager: "QA Manager",
  qa_executive: "QA Executive",
  production_manager: "Production Manager",
  department_head: "Department Head",
  auditor: "Auditor",
  trainer: "Trainer",
  employee: "Employee",
  supplier: "Supplier",
  customer: "Customer",
};

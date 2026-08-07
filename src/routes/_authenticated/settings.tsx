import { createFileRoute } from "@tanstack/react-router";

import { ModulePlaceholder } from "@/components/app/ModulePlaceholder";

export const Route = createFileRoute("/_authenticated/settings")({
  head: () => ({
    meta: [
      { title: "Settings — QualitySphere QMS" },
      { name: "description", content: "Manage your profile, notifications and organisation configuration." },
      { property: "og:title", content: "Settings — QualitySphere QMS" },
      { property: "og:description", content: "Profile and organisation configuration." },
    ],
  }),
  component: () => (
    <ModulePlaceholder
      title="Settings"
      description="Profile, organisation, workflow and compliance configuration."
      bullets={[
        "Profile, signature PIN and notification preferences",
        "Organisation, sites, departments and numbering formats",
        "Workflow designer per record type",
        "Audit trail retention and Part 11 controls",
      ]}
    />
  ),
});

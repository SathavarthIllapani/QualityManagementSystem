import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-DjOZMqFS.mjs";
import { C as Card, a as CardContent } from "./card-CVDnmg2p.mjs";
import { J as Construction } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function ModulePlaceholder({
  title,
  description,
  bullets
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm text-muted-foreground", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-8 border-border/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Construction, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-base font-semibold", children: "Coming up in this module" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "• ",
        bullet
      ] }, bullet)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: "Back to dashboard" }) })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(ModulePlaceholder, { title: "Settings", description: "Profile, organisation, workflow and compliance configuration.", bullets: ["Profile, signature PIN and notification preferences", "Organisation, sites, departments and numbering formats", "Workflow designer per record type", "Audit trail retention and Part 11 controls"] });
export {
  SplitComponent as component
};

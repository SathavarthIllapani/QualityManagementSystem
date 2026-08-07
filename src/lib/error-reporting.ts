type ErrorSeverity = "error" | "warning" | "info";

type ErrorMechanism = "manual" | "onerror" | "unhandledrejection" | "boundary";

type ErrorReportOptions = {
  mechanism?: ErrorMechanism;
  handled?: boolean;
  severity?: ErrorSeverity;
};

type ErrorReport = {
  message: string;
  stack?: string | undefined;
  route: string;
  mechanism: ErrorMechanism;
  handled: boolean;
  severity: ErrorSeverity;
  context: Record<string, unknown>;
  timestamp: string;
};

export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ErrorReportOptions = {},
) {
  if (typeof window === "undefined") return;

  const report: ErrorReport = {
    message: extractMessage(error),
    stack: error instanceof Error ? error.stack : undefined,
    route: window.location.pathname,
    mechanism: options.mechanism ?? "manual",
    handled: options.handled ?? true,
    severity: options.severity ?? "error",
    context,
    timestamp: new Date().toISOString(),
  };

  send(report);
}

function extractMessage(error: unknown): string {
  if (error instanceof Response) {
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

function send(report: ErrorReport) {
  console.error("[reportError]", report);
}
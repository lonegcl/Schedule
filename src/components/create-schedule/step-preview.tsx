import type { ReactNode } from "react";
import { AlertTriangle, CalendarDays, CheckCircle2, Clock, FileSpreadsheet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PREVIEW_ROWS = [
  {
    month: "Jan 2026",
    benchmark: "Jan 20, 2026",
    placing: "Jan 14, 2026 14:00",
    firstTask: "Jan 16, 2026",
    benchmarkTask: "Jan 20, 2026",
    finalTask: "Jan 21, 2026",
    status: "Ready",
  },
  {
    month: "Feb 2026",
    benchmark: "Feb 20, 2026",
    placing: "Feb 16, 2026 14:00",
    firstTask: "Feb 18, 2026",
    benchmarkTask: "Feb 20, 2026",
    finalTask: "Feb 23, 2026",
    status: "Weekend adjusted",
  },
  {
    month: "Apr 2026",
    benchmark: "Apr 20, 2026",
    placing: "Apr 14, 2026 14:00",
    firstTask: "Apr 16, 2026",
    benchmarkTask: "Apr 20, 2026",
    finalTask: "Apr 21, 2026",
    status: "Ready",
  },
  {
    month: "Jul 2026",
    benchmark: "Jul 17, 2026",
    placing: "Jul 13, 2026 14:00",
    firstTask: "Jul 15, 2026",
    benchmarkTask: "Jul 17, 2026",
    finalTask: "Jul 20, 2026",
    status: "Holiday checked",
  },
  {
    month: "Oct 2026",
    benchmark: "Oct 20, 2026",
    placing: "Oct 14, 2026 14:00",
    firstTask: "Oct 16, 2026",
    benchmarkTask: "Oct 20, 2026",
    finalTask: "Oct 21, 2026",
    status: "Ready",
  },
];

const SKIPPED_MONTHS = ["Mar", "May", "Jun", "Aug", "Sep", "Nov", "Dec", "Next Jan"];

export function SchedulePreviewStep({
  showHeader = true,
  onEditPaymentDates,
  onEditTaskRules,
}: {
  showHeader?: boolean;
  onEditPaymentDates?: () => void;
  onEditTaskRules?: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {showHeader && <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Expected Schedule Preview</h2>
          <p className="text-[14px] text-slate-500 font-medium">
            Preview expected Monthly Payment dates before creating the schedule configuration.
          </p>
        </div>
        <Button variant="outline" className="border-slate-300 text-slate-700 font-semibold text-[13px] h-9 gap-2">
          <FileSpreadsheet className="w-4 h-4" />
          Export Preview
        </Button>
      </div>}

      <section className="w-full rounded-xl border border-amber-200 bg-amber-50/70 px-5 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-amber-600 ring-1 ring-amber-200">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[14px] font-bold text-amber-950">Can create with warnings</div>
              <p className="mt-1 max-w-[760px] text-[13px] leading-relaxed text-amber-900">
                This creates a schedule configuration only. Task occurrences will be generated later when the schedule runs.
              </p>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <ReviewItem
              title="8 months will be skipped"
              description="No benchmark date is set for these months."
              action="Edit Payment Dates"
              onAction={onEditPaymentDates}
            >
              <div className="mt-2 flex flex-wrap gap-1.5">
                {SKIPPED_MONTHS.map((month) => (
                  <span
                    key={month}
                    className="rounded-full border border-amber-200 bg-white/70 px-2 py-0.5 text-[11px] font-semibold text-amber-800"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </ReviewItem>
            <ReviewItem
              title="1 task uses default due date"
              description="Send Invoice has no custom date rule configured."
              action="Edit Task Rules"
              onAction={onEditTaskRules}
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <Fact icon={<CalendarDays className="h-4 w-4" />} label="Configured Months" value="5 / 13" />
        <Fact icon={<CheckCircle2 className="h-4 w-4" />} label="Calendar" value="Business default" />
        <Fact icon={<CheckCircle2 className="h-4 w-4" />} label="Workflow Tasks" value="5" />
        <Fact icon={<Clock className="h-4 w-4" />} label="Date Rules" value="4 / 5" />
      </div>

      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-[16px]">Expected Monthly Schedule</h3>
            <p className="text-[13px] text-slate-500 mt-1">
              Only configured months are shown below. Dates are calculated from benchmark dates and task rules.
            </p>
          </div>
          <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 border border-blue-100 shadow-none">Preview only</Badge>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <Table className="min-w-[1100px]">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-6 text-[13px] font-semibold text-slate-900">Month</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-900">Benchmark Date</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-900">Auto Placing Request</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-900">First Task Due</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-900">Benchmark Task</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-900">Final Task Due</TableHead>
                <TableHead className="text-[13px] font-semibold text-slate-900">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PREVIEW_ROWS.map((row) => (
                <TableRow key={row.month} className="hover:bg-slate-50/60">
                  <TableCell className="pl-6 font-semibold text-slate-900 text-[13px]">{row.month}</TableCell>
                  <TableCell className="text-[13px] text-slate-700">{row.benchmark}</TableCell>
                  <TableCell className="text-[13px] text-slate-700">{row.placing}</TableCell>
                  <TableCell className="text-[13px] text-slate-700">{row.firstTask}</TableCell>
                  <TableCell className="text-[13px] text-slate-700">{row.benchmarkTask}</TableCell>
                  <TableCell className="text-[13px] text-slate-700">{row.finalTask}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        row.status === "Ready"
                          ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border border-emerald-100 shadow-none"
                          : "bg-amber-50 text-amber-700 hover:bg-amber-50 border border-amber-100 shadow-none"
                      }
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

    </div>
  );
}

function Fact({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-blue-600">{icon}</span>
        <span className="text-[12px] font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      </div>
      <div className="mt-1 text-[16px] font-bold text-slate-900">{value}</div>
    </div>
  );
}

function ReviewItem({
  title,
  description,
  action,
  onAction,
  children,
}: {
  title: string;
  description: string;
  action: string;
  onAction?: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-amber-200 bg-white/70 p-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[13px] font-bold text-amber-950">{title}</div>
          <div className="mt-0.5 text-[12px] leading-relaxed text-amber-800">{description}</div>
        </div>
        {onAction && (
          <button
            type="button"
            onClick={onAction}
            className="shrink-0 text-[12px] font-semibold text-blue-700 hover:underline"
          >
            {action}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

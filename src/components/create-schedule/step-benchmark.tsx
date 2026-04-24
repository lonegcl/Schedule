import type { ReactNode } from "react";
import { AlertTriangle, CalendarIcon, CheckCircle2, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MONTHS = [
  { name: "Jan 2026", date: "Jan 20, 2026" },
  { name: "Feb 2026", date: "Feb 20, 2026" },
  { name: "Mar 2026", date: null },
  { name: "Apr 2026", date: "Apr 20, 2026" },
  { name: "May 2026", date: null },
  { name: "Jun 2026", date: null },
  { name: "Jul 2026", date: "Jul 17, 2026" },
  { name: "Aug 2026", date: null },
  { name: "Sep 2026", date: null },
  { name: "Oct 2026", date: "Oct 20, 2026" },
  { name: "Nov 2026", date: null },
  { name: "Dec 2026", date: null },
  { name: "Next Jan 2027", date: null },
];

const configuredCount = MONTHS.filter((month) => month.date).length;
const skippedCount = MONTHS.length - configuredCount;

export function BenchmarkDatesStep() {
  return (
    <div className="flex max-w-[1120px] flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="mb-2 text-[24px] font-bold tracking-tight text-slate-900">Monthly Payment Dates</h2>
          <p className="max-w-[760px] text-[14px] font-medium leading-relaxed text-slate-500">
            Set benchmark dates for the months that should be included in this schedule. Months without a benchmark date will be skipped.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Button variant="outline" className="h-9 border-slate-300 bg-white text-[13px] font-semibold text-slate-700">
            Clear Dates
          </Button>
          <Button variant="outline" className="h-9 border-blue-200 bg-white text-[13px] font-semibold text-blue-600 hover:bg-blue-50 hover:text-blue-700">
            Add Payment Date
          </Button>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <StatusCard
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Included Months"
          value={`${configuredCount} / ${MONTHS.length}`}
          description="Will appear in preview"
          tone="success"
        />
        <StatusCard
          icon={<AlertTriangle className="h-4 w-4" />}
          label="Skipped Months"
          value={`${skippedCount}`}
          description="No benchmark date set"
          tone="warning"
        />
        <StatusCard
          icon={<Clock3 className="h-4 w-4" />}
          label="Next Benchmark"
          value="Jul 17, 2026"
          description="Based on configured dates"
          tone="default"
        />
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          <div>
            <div className="text-[13px] font-bold text-amber-950">Only configured months will be scheduled</div>
            <p className="mt-1 text-[13px] leading-relaxed text-amber-900">
              Leave a month empty only when Monthly Payment should not run for that month. You can add missing dates before creating the schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-1 border-b border-slate-100 px-6 py-4">
          <h3 className="text-[16px] font-bold text-slate-900">Payment Month Setup</h3>
          <p className="text-[13px] text-slate-500">Review each month and set the benchmark date when the month should be included.</p>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <Table className="min-w-[860px]">
            <TableHeader className="bg-slate-50/70">
              <TableRow className="border-b border-slate-200 hover:bg-transparent">
                <TableHead className="w-[220px] py-4 pl-6 text-[13px] font-semibold text-slate-900">Payment Month</TableHead>
                <TableHead className="w-[260px] py-4 text-[13px] font-semibold text-slate-900">Benchmark Date</TableHead>
                <TableHead className="w-[180px] py-4 text-[13px] font-semibold text-slate-900">Schedule Impact</TableHead>
                <TableHead className="w-[180px] py-4 pr-6 text-right text-[13px] font-semibold text-slate-900">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MONTHS.map((month) => {
                const isConfigured = Boolean(month.date);

                return (
                  <TableRow
                    key={month.name}
                    className={
                      isConfigured
                        ? "border-b border-slate-100 last:border-0 hover:bg-slate-50/60"
                        : "border-b border-amber-100 bg-amber-50/30 last:border-0 hover:bg-amber-50/60"
                    }
                  >
                    <TableCell className="py-4 pl-6 text-[13px] font-semibold text-slate-900">{month.name}</TableCell>
                    <TableCell className="py-4">
                      {isConfigured ? (
                        <div className="inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[13px] font-semibold text-emerald-700">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          {month.date}
                        </div>
                      ) : (
                        <span className="inline-flex items-center rounded-md border border-amber-200 bg-white px-2.5 py-1 text-[13px] font-semibold text-amber-700">
                          No date set
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="py-4">
                      {isConfigured ? (
                        <Badge className="border border-emerald-100 bg-emerald-50 text-emerald-700 shadow-none hover:bg-emerald-50">
                          Included
                        </Badge>
                      ) : (
                        <Badge className="border border-amber-100 bg-amber-50 text-amber-700 shadow-none hover:bg-amber-50">
                          Skipped
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="py-4 pr-6 text-right">
                      {isConfigured ? (
                        <div className="flex justify-end gap-3">
                          <button type="button" className="text-[13px] font-semibold text-blue-600 hover:underline">
                            Change
                          </button>
                          <button type="button" className="text-[13px] font-semibold text-slate-500 hover:text-slate-700 hover:underline">
                            Clear
                          </button>
                        </div>
                      ) : (
                        <button type="button" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 hover:underline">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          Set Date
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}

function StatusCard({
  icon,
  label,
  value,
  description,
  tone,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
  tone: "default" | "success" | "warning";
}) {
  const toneClass = {
    default: "text-blue-600 bg-blue-50 border-blue-100",
    success: "text-emerald-700 bg-emerald-50 border-emerald-100",
    warning: "text-amber-700 bg-amber-50 border-amber-100",
  }[tone];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${toneClass}`}>{icon}</span>
        <span className="text-[12px] font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      </div>
      <div className="mt-2 text-[22px] font-bold text-slate-900">{value}</div>
      <div className="mt-0.5 text-[12px] font-medium text-slate-500">{description}</div>
    </div>
  );
}

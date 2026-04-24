import type { ReactNode } from "react";
import {
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  Download,
  Edit2,
  Eye,
  FileText,
  MapPin,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TASK_RULES = [
  { task: "Collect & Confirm Contractor Invoice", owner: "Client", due: "4 working days before benchmark", remind: "1 working day before due" },
  { task: "Review Contractor Invoice", owner: "SD", due: "2 working days before benchmark", remind: "1 working day before due" },
  { task: "Review Invoice", owner: "Client", due: "Benchmark date", remind: "1 working day before due" },
  { task: "Confirm Payment to Contractor", owner: "SD", due: "1 working day after benchmark", remind: "1 working day before due" },
];

const MONTH_WARNINGS = ["Mar", "May", "Jun", "Aug", "Sep", "Nov", "Dec", "Next Jan"];

export function ReviewConfirmStep({ onEdit, compact = false }: { onEdit: (step: number) => void; compact?: boolean }) {
  return (
    <div className={compact ? "flex flex-col gap-5" : "flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500"}>
      {!compact && <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Review & Confirm</h2>
          <p className="text-[14px] text-slate-500 font-medium">
            Confirm the Monthly Payment schedule configuration before it is used to create task occurrences.
          </p>
        </div>
        <Button variant="outline" className="border-slate-300 text-slate-700 font-medium gap-2 hover:bg-slate-50 text-[13px] h-9">
          <Download className="w-4 h-4" /> Download Summary
        </Button>
      </div>}

      <section className="bg-white rounded-xl border border-slate-200 shadow-sm max-w-[1200px] overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-[16px]">Configuration Summary</h3>
            <p className="text-[13px] text-slate-500 mt-1">
              Create this schedule configuration. Task occurrences will be created according to configured payment dates and task rules when the schedule runs.
            </p>
          </div>
          <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-none w-fit">Draft</Badge>
        </div>
        <div className="p-6">
      <div className={compact ? "grid grid-cols-1 xl:grid-cols-3 gap-4 max-w-[1200px]" : "grid grid-cols-1 xl:grid-cols-2 gap-5 max-w-[1200px]"}>
        <ReviewSection title="Basic Settings" icon={<FileText className="w-4 h-4" />} onEdit={() => onEdit(1)}>
          <ReviewGrid
            rows={[
              ["Schedule Name", "Stüssy - Contractor Service Monthly Payment 2026"],
              ["Service Module", "Contractor / Monthly Payment"],
              ["Time Zone", "(GMT+07:00) Asia/Jakarta"],
              ["Service Status", "Active"],
              ["Client Processor", "Client-Nancy小号"],
              ["BIPO SD Processor", "SD-Nancy Pan"],
            ]}
          />
        </ReviewSection>

        <ReviewSection title="Scope & Calendar" icon={<Users className="w-4 h-4" />} onEdit={() => onEdit(2)}>
          <ReviewGrid
            rows={[
              ["Automated Collection", "Enabled"],
              ["Applicable Contractors", "2 active contractors"],
              ["Countries/Regions", "Singapore, Australia"],
              ["Currencies", "SGD, AUD"],
              ["Pay Period Rule", "Monthly"],
              ["Remarks", "Not provided"],
            ]}
          />
        </ReviewSection>

        <ReviewSection title="Calendar Rules" icon={<MapPin className="w-4 h-4" />} onEdit={() => onEdit(2)}>
          <ReviewGrid
            rows={[
              ["Rule Type", "Business default rule"],
              ["Applied Locations", "Project Location; Client Contact Location; BIPO SD Location"],
              ["Holiday Preview", "2 holidays in 2026"],
              ["Weekend Rule", "Fixed by business calendar"],
            ]}
          />
        </ReviewSection>

        <ReviewSection title="Payment Dates" icon={<CalendarIcon className="w-4 h-4" />} onEdit={() => onEdit(3)}>
          <ReviewGrid
            rows={[
              ["Configured Months", "Jan, Feb, Apr, Jul, Oct"],
              ["Missing Months", "8 months"],
              ["Next Benchmark Date", "Jul 17, 2026"],
              ["Cross-year Month", "Next Jan 2027 not set"],
            ]}
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {MONTH_WARNINGS.map((month) => (
              <span key={month} className="px-2 py-1 rounded bg-amber-50 border border-amber-100 text-amber-700 text-[12px] font-semibold">
                {month} missing
              </span>
            ))}
          </div>
        </ReviewSection>

        <ReviewSection title="Task Rules" icon={<Clock className="w-4 h-4" />} onEdit={() => onEdit(4)} wide={compact}>
          <div className="border border-slate-200 rounded-lg overflow-x-auto custom-scrollbar">
            <div className="min-w-[680px]">
            <div className="grid grid-cols-[1fr_90px_170px_170px] bg-slate-50 border-b border-slate-200 text-[12px] font-bold text-slate-600">
              <div className="px-3 py-2">Task</div>
              <div className="px-3 py-2">Owner</div>
              <div className="px-3 py-2">Due Rule</div>
              <div className="px-3 py-2">Reminder</div>
            </div>
            {TASK_RULES.map((rule) => (
              <div key={rule.task} className="grid grid-cols-[1fr_90px_170px_170px] border-b border-slate-100 last:border-0 text-[12px] text-slate-700">
                <div className="px-3 py-2 font-semibold text-slate-900">{rule.task}</div>
                <div className="px-3 py-2">{rule.owner}</div>
                <div className="px-3 py-2">{rule.due}</div>
                <div className="px-3 py-2">{rule.remind}</div>
              </div>
            ))}
            </div>
          </div>
          <div className="mt-4 text-[13px] text-slate-600">
            Auto placing request: 2 working days before first task due date at 14:00.
          </div>
        </ReviewSection>

        <ReviewSection title="Expected Schedule Preview" icon={<Eye className="w-4 h-4" />} onEdit={() => onEdit(5)}>
          <ReviewGrid
            rows={[
              ["Configured Months", "5 months"],
              ["Workflow Tasks", "5 task types"],
              ["Date Rules", "4 of 5 tasks configured"],
              ["Auto Request Rule", "Enabled"],
              ["Date Adjustments", "Weekend/holiday checked"],
            ]}
          />
          <button onClick={() => onEdit(5)} className="text-blue-600 font-semibold text-[13px] flex items-center gap-1 hover:underline mt-4">
            View expected schedule <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </ReviewSection>
      </div>
        </div>
      </section>
    </div>
  );
}

function ReviewSection({
  title,
  icon,
  onEdit,
  children,
  wide = false,
}: {
  title: string;
  icon: ReactNode;
  onEdit: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={wide ? "bg-white rounded-xl border border-slate-200 p-6 shadow-sm xl:col-span-2" : "bg-white rounded-xl border border-slate-200 p-6 shadow-sm"}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-[15px]">
          <div className="p-1.5 bg-blue-50 text-blue-600 rounded flex items-center justify-center">{icon}</div>
          {title}
        </div>
        <button onClick={onEdit} className="text-blue-600 text-[13px] font-semibold flex items-center gap-1.5 hover:underline">
          <Edit2 className="w-3.5 h-3.5" /> Edit
        </button>
      </div>
      {children}
    </section>
  );
}

function ReviewGrid({ rows }: { rows: Array<[string, string]> }) {
  return (
    <div className="grid grid-cols-[150px_1fr] gap-y-3 text-[13px]">
      {rows.map(([label, value]) => (
        <div key={label} className="contents">
          <div className="text-slate-500 font-medium">{label}</div>
          <div className="text-slate-900 font-semibold leading-relaxed">{value}</div>
        </div>
      ))}
    </div>
  );
}

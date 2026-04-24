import type { ReactNode } from "react";
import { CalendarDays, CheckCircle2, Users } from "lucide-react";
import { BusinessSettingsStep } from "./step-business";
import { PhWkndRulesStep } from "./step-ph-wknd";

export function ScopeCalendarStep() {
  return (
    <div className="flex max-w-[1280px] flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Scope & Calendar</h2>
        <p className="text-[14px] text-slate-500 font-medium">
          Confirm who this schedule applies to and which calendar rules will calculate Monthly Payment task dates.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <OverviewCard icon={<Users className="h-4 w-4" />} label="Contractors" value="3 in service" />
        <OverviewCard icon={<CalendarDays className="h-4 w-4" />} label="Calendar" value="Business default" />
      </section>

      <div className="sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b border-slate-200 bg-white/95 py-2 backdrop-blur">
        <SectionAnchor href="#contractors" icon={<Users className="w-3.5 h-3.5" />} label="Contractors" />
        <SectionAnchor href="#calendar" icon={<CalendarDays className="w-3.5 h-3.5" />} label="Calendar" />
      </div>

      <BusinessSettingsStep showHeader={false} />
      <div id="calendar">
        <PhWkndRulesStep showHeader={false} compact />
      </div>
    </div>
  );
}

function OverviewCard({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-blue-600">
        {icon}
        <span className="text-[12px] font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      </div>
      <div className="mt-1 flex items-center gap-2 text-[15px] font-bold text-slate-900">
        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
        {value}
      </div>
    </div>
  );
}

function SectionAnchor({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-[13px] font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
    >
      {icon}
      {label}
    </a>
  );
}

import { useState } from "react";
import { Info, Settings2, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function BasicSettingsStep() {
  const [scheduleName, setScheduleName] = useState("Stüssy - Contractor Monthly Payment Schedule 2026");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAutoGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setScheduleName("Stüssy - Contractor Monthly Payment Schedule 2026");
      setIsGenerating(false);
    }, 400);
  };

  return (
    <div className="flex max-w-[980px] flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="mb-2 text-[24px] font-bold tracking-tight text-slate-900">Basic Information</h2>
        <p className="text-[14px] font-medium text-slate-500">
          Name the schedule and confirm the module, time zone, and default processors used by later steps.
        </p>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h3 className="text-[16px] font-bold text-slate-900">Schedule Identity</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
            This name appears in schedule lists, drafts, and review pages.
          </p>
        </div>

        <div className="p-6">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between gap-4">
              <Label className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-900">
                <span className="text-rose-500">*</span>
                Schedule Name
                <Info className="h-4 w-4 text-slate-400" />
              </Label>
              <button
                type="button"
                onClick={handleAutoGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-600 transition-opacity hover:underline disabled:opacity-50 disabled:no-underline"
              >
                <Settings2 className={cn("h-3.5 w-3.5", isGenerating && "animate-spin")} />
                {isGenerating ? "Generating..." : "Auto Generate"}
              </button>
            </div>
            <Input
              value={scheduleName}
              onChange={(event) => setScheduleName(event.target.value)}
              className="h-[42px] border-slate-200 bg-white text-[14px] font-medium text-slate-900 shadow-sm transition-all focus-visible:ring-blue-500"
            />
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h3 className="text-[16px] font-bold text-slate-900">Schedule Setup</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
            Module and time zone determine the available rules, workflow tasks, and date calculations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <Label className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-900">
              <span className="text-rose-500">*</span>
              Service Module
            </Label>
            <Select defaultValue="contractor">
              <SelectTrigger className="h-[42px] border-slate-200 bg-white text-[14px] font-medium text-slate-900 shadow-sm">
                <SelectValue placeholder="Select Module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contractor">Contractor / Monthly Payment</SelectItem>
                <SelectItem value="payroll">Payroll Service</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-[12px] leading-relaxed text-slate-500">
              The selected module determines available schedule rules and task workflow.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <Label className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-900">
              <span className="text-rose-500">*</span>
              Time Zone
            </Label>
            <Select defaultValue="jakarta">
              <SelectTrigger className="h-[42px] border-slate-200 bg-white text-[14px] font-medium text-slate-900 shadow-sm">
                <SelectValue placeholder="Select Timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">(GMT+07:00) Asia/Jakarta</SelectItem>
                <SelectItem value="singapore">(GMT+08:00) Asia/Singapore</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-[12px] leading-relaxed text-slate-500">
              Used for request time and task due date calculation.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-6 py-5">
          <h3 className="text-[16px] font-bold text-slate-900">Default Processors</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
            Processors are used as default assignees for client and SD tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
          <ProcessorField label="Client Contact (Local/Processor)" value="Client-Nancy小号" />
          <ProcessorField label="BIPO SD (Local/Processor)" value="SD-Nancy Pan" />
        </div>
      </section>
    </div>
  );
}

function ProcessorField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-slate-500">
        <UserRound className="h-3.5 w-3.5 text-blue-600" />
        {label}
      </div>
      <div className="mt-2 text-[14px] font-bold text-slate-900">{value}</div>
    </div>
  );
}

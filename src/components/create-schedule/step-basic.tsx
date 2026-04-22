import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Settings2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function BasicSettingsStep({ onNext, currentStep, totalSteps }: { onNext: () => void, currentStep: number, totalSteps: number }) {
  const [scheduleName, setScheduleName] = useState("Stüssy - Contractor Service Monthly Payment 2026");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAutoGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation network delay
    setTimeout(() => {
      const month = new Date().toLocaleString('en-US', { month: 'short' });
      setScheduleName(`Stüssy - Contractor Service ${month} Payment 2026`);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
         <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Basic Settings</h2>
         <p className="text-[14px] text-slate-500 font-medium">Configure the basic information for this schedule.</p>
       </div>

       {/* Form Card */}
       <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col gap-8 max-w-4xl mt-2">
           {/* Top Row Inputs */}
           <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                 <Label className="text-[13px] font-semibold text-slate-900 flex items-center gap-1.5"><span className="text-rose-500">*</span> Schedule Name <Info className="w-4 h-4 text-slate-400" /></Label>
                 <button 
                   onClick={handleAutoGenerate} 
                   disabled={isGenerating} 
                   className="text-blue-600 text-[13px] font-semibold flex items-center gap-1.5 hover:underline disabled:opacity-50 disabled:no-underline transition-opacity"
                 >
                    <Settings2 className={cn("w-3.5 h-3.5", isGenerating && "animate-spin")} /> 
                    {isGenerating ? "Generating..." : "Auto Generate"}
                 </button>
              </div>
              <Input 
                 value={scheduleName}
                 onChange={(e) => setScheduleName(e.target.value)}
                 className="h-[42px] bg-white border-slate-200 focus-visible:ring-blue-500 shadow-sm text-[14px] font-medium text-slate-900 transition-all" 
              />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2.5">
                 <Label className="text-[13px] font-semibold text-slate-900 flex items-center gap-1.5"><span className="text-rose-500">*</span> Service Module</Label>
                 <Select defaultValue="contractor">
                    <SelectTrigger className="h-[42px] bg-white border-slate-200 shadow-sm text-[14px] font-medium text-slate-900">
                        <SelectValue placeholder="Select Module" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="contractor">Contractor / Monthly Payment</SelectItem>
                        <SelectItem value="payroll">Payroll Service</SelectItem>
                    </SelectContent>
                 </Select>
              </div>
              <div className="flex flex-col gap-2.5">
                 <Label className="text-[13px] font-semibold text-slate-900 flex items-center gap-1.5"><span className="text-rose-500">*</span> Time Zone</Label>
                 <Select defaultValue="jakarta">
                    <SelectTrigger className="h-[42px] bg-white border-slate-200 shadow-sm text-[14px] font-medium text-slate-900">
                        <SelectValue placeholder="Select Timezone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="jakarta">(GMT+07:00) Asia/Jakarta</SelectItem>
                        <SelectItem value="singapore">(GMT+08:00) Asia/Singapore</SelectItem>
                    </SelectContent>
                 </Select>
              </div>
           </div>

           <div className="flex flex-col gap-4 mt-2">
              <Label className="text-[13px] font-semibold text-slate-900">Service Status</Label>
              <div className="flex items-center gap-3">
                  <Switch id="active-status" defaultChecked className="data-[state=checked]:bg-slate-900" />
                  <Label htmlFor="active-status" className="text-[14px] text-slate-900 font-medium cursor-pointer">Active</Label>
              </div>
           </div>
       </div>

    </div>
  )
}

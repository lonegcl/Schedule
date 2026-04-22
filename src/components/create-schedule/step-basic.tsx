import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Settings2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BasicSettingsStep({ onNext, currentStep, totalSteps }: { onNext: () => void, currentStep: number, totalSteps: number }) {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
         <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1.5">Basic Settings</h2>
         <p className="text-[14px] text-slate-500">Configure the basic information for this schedule.</p>
       </div>

       {/* Form Card */}
       <div className="bg-white rounded-lg border border-slate-200 p-7 shadow-sm flex flex-col gap-7 max-w-4xl">
           {/* Top Row Inputs */}
           <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                 <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5"><span className="text-rose-500">*</span> Schedule Name <Info className="w-4 h-4 text-slate-400" /></Label>
                 <button className="text-blue-600 text-[13px] font-medium flex items-center gap-1.5 hover:underline"><Settings2 className="w-3.5 h-3.5" /> Auto Generate</button>
              </div>
              <Input defaultValue="Stüssy - Contractor Service Monthly Payment 2026" className="h-[42px] bg-white border-slate-300 focus-visible:ring-blue-500 shadow-sm text-[14px]" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="flex flex-col gap-2.5">
                 <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5"><span className="text-rose-500">*</span> Service Module</Label>
                 <Select defaultValue="contractor">
                    <SelectTrigger className="h-[42px] bg-white border-slate-300 shadow-sm text-[14px]">
                        <SelectValue placeholder="Select Module" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="contractor">Contractor / Monthly Payment</SelectItem>
                        <SelectItem value="payroll">Payroll Service</SelectItem>
                    </SelectContent>
                 </Select>
              </div>
              <div className="flex flex-col gap-2.5">
                 <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5"><span className="text-rose-500">*</span> Time Zone</Label>
                 <Select defaultValue="jakarta">
                    <SelectTrigger className="h-[42px] bg-white border-slate-300 shadow-sm text-[14px]">
                        <SelectValue placeholder="Select Timezone" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="jakarta">(GMT+07:00) Asia/Jakarta</SelectItem>
                        <SelectItem value="singapore">(GMT+08:00) Asia/Singapore</SelectItem>
                    </SelectContent>
                 </Select>
              </div>
           </div>

           <div className="flex flex-col gap-3">
              <Label className="text-[13px] font-semibold text-slate-700">Service Status</Label>
              <div className="flex items-center gap-3">
                  <Switch id="active-status" defaultChecked className="data-[state=checked]:bg-blue-600" />
                  <Label htmlFor="active-status" className="text-[14px] text-slate-700 font-medium cursor-pointer">Active</Label>
              </div>
           </div>
       </div>

    </div>
  )
}

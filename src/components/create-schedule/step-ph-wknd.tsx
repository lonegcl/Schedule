import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, ChevronDown, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PhWkndRulesStep({ showHeader = true, compact = false }: { showHeader?: boolean; compact?: boolean }) {
  const [configType, setConfigType] = useState<"default" | "custom">("default");
  const selectedLocations = ["BIPO SD (Processor) Location", "Client Company Location"];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
       {/* PH & WKND Rules Card */}
       <div className="flex flex-col bg-white border border-slate-200 shadow-sm rounded-xl p-6 scroll-mt-20">
           {/* Header */}
           <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-start lg:justify-between">
             <div>
               <h2 className={showHeader ? "text-[24px] font-bold text-slate-700 tracking-tight" : "text-[18px] font-bold text-slate-800 tracking-tight"}>Calendar Rules</h2>
               <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                 Public holidays and weekend rules affect calculated due dates in the preview.
               </p>
             </div>
               <div className="flex flex-wrap items-center gap-3">
                   <div className="h-[34px] px-3.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-md flex items-center justify-center text-[13px] font-semibold">
                       3 contractor locations checked
                   </div>
                   <Button variant="outline" className="h-[34px] border-slate-200 text-slate-800 font-semibold gap-2 text-[13px] shadow-sm hover:bg-slate-50">
                       <CalendarIcon className="w-4 h-4" /> Preview Holidays
                   </Button>
               </div>
           </div>

           {/* Radio Toggle */}
           <div className="mb-6 flex items-center gap-8">
              <div 
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setConfigType("default")}
              >
                 <div className={cn(
                     "w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center transition-colors shadow-sm",
                     configType === "default" ? "border-blue-600" : "border-slate-300 group-hover:border-blue-400"
                 )}>
                     {configType === "default" && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                 </div>
                 <span className={cn("text-[14px]", configType === "default" ? "text-blue-600 mb-0.5" : "text-slate-500 mb-0.5")}>Use Business Default Rule</span>
              </div>
              
              <div 
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setConfigType("custom")}
              >
                 <div className={cn(
                     "w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center transition-colors shadow-sm",
                     configType === "custom" ? "border-blue-600" : "border-slate-300 group-hover:border-blue-400"
                 )}>
                     {configType === "custom" && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                 </div>
                 <span className={cn("text-[14px]", configType === "custom" ? "text-blue-600 mb-0.5" : "text-slate-500 mb-0.5")}>Custom Configuration</span>
              </div>
           </div>

           {/* Content Area */}
           <div className="flex flex-col w-full">
               {configType === "default" ? (
                   <div className="bg-slate-50/80 rounded-lg px-4 py-3 flex flex-col gap-2">
                       <div className="flex items-start gap-2.5">
                           <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                           <div className="flex flex-col gap-1.5">
                               <span className="font-medium text-slate-800 text-[13px]">Current Business Default</span>
                               <span className="text-[13px] text-slate-500">The following locations are automatically applied based on your Service Module selection.</span>
                           </div>
                       </div>
                       <div className="flex flex-wrap gap-2 pl-[26px]">
                           <div className="rounded border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[12px] text-blue-600">Project Location</div>
                           <div className="rounded border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[12px] text-blue-600">Client Contact(Processor) Location</div>
                           <div className="rounded border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[12px] text-blue-600">BIPO SD (Processor) Location</div>
                       </div>
                   </div>
               ) : (
                   <div className="flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300">
                       {/* Custom Locations Selector */}
                       <div className="flex flex-col gap-2.5">
                           <Label className="text-[14px] font-medium text-slate-900 flex items-center gap-1.5">
                               Use PH & WKND for the following locations
                               <div className="w-3.5 h-3.5 bg-blue-600 rounded-full flex items-center justify-center text-white font-serif italic text-[9px] shrink-0 shadow-sm">
                                   i
                               </div>
                           </Label>
                           <div className="min-h-[44px] flex items-center flex-wrap gap-2 p-1.5 border border-slate-200 rounded-md bg-white relative pr-10 shadow-sm w-full">
                               {selectedLocations.map(loc => (
                                  <div key={loc} className="flex items-center gap-1.5 bg-slate-100 text-slate-400 text-[13px] px-3 py-1.5 rounded font-medium">
                                     {loc}
                                  </div>
                               ))}
                               {selectedLocations.length === 0 && <span className="text-[13px] text-slate-400 pl-2">Select locations...</span>}
                               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                           </div>
                       </div>
                   </div>
               )}
           </div>
       </div>
    </div>
  )
}

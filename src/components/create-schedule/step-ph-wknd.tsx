import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Info, Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ALL_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function PhWkndRulesStep() {
  const [configType, setConfigType] = useState<"default" | "custom">("default");
  const [selectedLocations, setSelectedLocations] = useState(["BIPO SD (Processor) Location", "Client Company Location"]);
  const [workingDays, setWorkingDays] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);

  const toggleDay = (day: string) => {
    if (workingDays.includes(day)) {
      setWorkingDays(workingDays.filter(d => d !== day));
    } else {
      setWorkingDays([...workingDays, day].sort((a, b) => ALL_DAYS.indexOf(a) - ALL_DAYS.indexOf(b)));
    }
  };

  const weekendDays = ALL_DAYS.filter(d => !workingDays.includes(d));

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
       {/* PH & WKND Rules Card */}
       <div className="flex flex-col bg-white border border-slate-100 shadow-sm rounded-xl p-8">
           {/* Header */}
           <div className="flex items-center justify-between mb-8">
               <h2 className="text-[24px] font-bold text-slate-700 tracking-tight">PH & WKND Rules</h2>
               <div className="flex items-center gap-3">
                   <div className="h-[34px] px-3.5 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-md flex items-center justify-center text-[13px] font-medium">
                       Matches 2 Locations
                   </div>
                   <Button variant="outline" className="h-[34px] border-slate-200 text-slate-800 font-bold gap-2 text-[13px] shadow-sm hover:bg-slate-50">
                       <CalendarIcon className="w-4 h-4" /> Preview Holidays
                   </Button>
               </div>
           </div>

           {/* Radio Toggle */}
           <div className="flex items-center gap-8 mb-8">
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
                 <span className={cn("text-[14px]", configType === "default" ? "text-slate-600 mb-0.5" : "text-slate-500 mb-0.5")}>Use Business Default Rule</span>
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
                   <div className="bg-slate-50/80 rounded-lg p-6 flex flex-col gap-3">
                       <div className="flex items-start gap-2.5">
                           <div className="w-[18px] h-[18px] bg-blue-600 rounded-full flex items-center justify-center text-white font-serif italic text-[12px] shrink-0 mt-0.5 shadow-sm">
                               i
                           </div>
                           <div className="flex flex-col gap-1.5">
                               <span className="font-medium text-slate-800 text-[14px]">Current Business Default</span>
                               <span className="text-[13px] text-slate-500">The following locations are automatically applied based on your Service Module selection.</span>
                           </div>
                       </div>
                       <div className="flex flex-wrap gap-2 pl-[28px] mt-1">
                           <div className="bg-blue-50 border border-blue-100 text-blue-600 text-[13px] px-3 py-1 rounded bg-opacity-70">Project Location</div>
                           <div className="bg-blue-50 border border-blue-100 text-blue-600 text-[13px] px-3 py-1 rounded bg-opacity-70">Client Contact(Processor) Location</div>
                           <div className="bg-blue-50 border border-blue-100 text-blue-600 text-[13px] px-3 py-1 rounded bg-opacity-70">BIPO SD (Processor) Location</div>
                       </div>
                   </div>
               ) : (
                   <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
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

                       {/* Custom Working Days */}
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-slate-100 mt-2">
                         <div className="flex flex-col gap-3.5">
                            <div className="flex items-baseline gap-2">
                                <Label className="text-[15px] font-bold text-[#334155]">Working Days</Label>
                                <span className="text-[14px] text-[#94a3b8]">(Click to adjust)</span>
                            </div>
                            <div className="flex items-center gap-2">
                               {workingDays.map(day => (
                                  <div 
                                     key={day} 
                                     onClick={() => toggleDay(day)}
                                     className="w-[52px] h-[36px] rounded bg-[#2563eb] text-white flex items-center justify-center text-[14px] font-semibold shadow-sm cursor-pointer hover:bg-blue-700 transition-colors"
                                  >
                                     {day}
                                  </div>
                               ))}
                               {workingDays.length === 0 && <span className="text-[13px] text-slate-400 italic">No working days</span>}
                            </div>
                         </div>
                         <div className="flex flex-col gap-3.5">
                            <div className="flex items-baseline gap-2">
                                <Label className="text-[15px] font-bold text-[#334155]">Weekend Days</Label>
                            </div>
                            <div className="flex items-center gap-2">
                               {weekendDays.map(day => (
                                  <div 
                                     key={day} 
                                     onClick={() => toggleDay(day)}
                                     className="w-[52px] h-[36px] rounded bg-[#f1f5f9] border border-slate-200 text-[#475569] flex items-center justify-center text-[14px] font-semibold cursor-pointer hover:bg-slate-200 transition-colors"
                                  >
                                     {day}
                                  </div>
                               ))}
                               {weekendDays.length === 0 && <span className="text-[13px] text-slate-400 italic">No weekend days</span>}
                            </div>
                         </div>
                       </div>
                   </div>
               )}
           </div>
       </div>

       {/* Processor Section */}
       <div className="flex flex-col bg-white border border-slate-100 shadow-sm rounded-xl p-8 w-full animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">
           <div className="flex flex-col gap-1.5 mb-6">
               <h3 className="text-[18px] font-bold text-slate-800">Processor</h3>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {/* Client Contact Processor */}
               <div className="flex flex-col gap-2.5">
                   <Label className="text-[13px] font-semibold text-slate-700">Client Contact (Local/Processor)</Label>
                   <div className="h-[42px] bg-[#fafafa] border border-slate-200/80 rounded-md px-3.5 flex items-center text-[13px] text-slate-500 font-medium cursor-not-allowed">
                       Client-Nancy小号
                   </div>
               </div>

               {/* BIPO SD Processor */}
               <div className="flex flex-col gap-2.5">
                   <Label className="text-[13px] font-semibold text-slate-700">BIPO SD (Local/Processor)</Label>
                   <div className="h-[42px] bg-[#fafafa] border border-slate-200/80 rounded-md px-3.5 flex items-center text-[13px] text-slate-500 font-medium cursor-not-allowed">
                       SD-Nancy Pan
                   </div>
               </div>
           </div>
       </div>

    </div>
  )
}

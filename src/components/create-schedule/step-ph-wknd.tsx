import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Info, Calendar as CalendarIcon, X, ChevronDown, ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export function PhWkndRulesStep() {
  const [configType, setConfigType] = useState<"default" | "custom">("custom");
  const [selectedLocations, setSelectedLocations] = useState(["BIPO SD (Processor) Location", "Client Company Location"]);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
         <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1.5">PH & WKND Rules</h2>
         <p className="text-[14px] text-slate-500">Define working days, weekend, and holidays for this schedule.</p>
       </div>

       {/* Configuration Type Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
           {/* Default Rule Card */}
           <div 
             className={cn(
                "p-5 rounded-lg border cursor-pointer transition-all flex items-start gap-3",
                configType === "default" ? "border-blue-600 ring-1 ring-blue-600 bg-blue-50/30" : "border-slate-200 hover:border-slate-300 bg-white shadow-sm"
             )}
             onClick={() => setConfigType("default")}
           >
              <div className="pt-[3px]">
                  <div className={cn(
                      "w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-colors",
                      configType === "default" ? "border-blue-600" : "border-slate-300"
                  )}>
                      {configType === "default" && <div className="w-[8px] h-[8px] bg-blue-600 rounded-full" />}
                  </div>
              </div>
              <div className="flex flex-col">
                  <span className={cn("font-bold text-[14px] mb-1", configType === "default" ? "text-slate-900" : "text-slate-700")}>Use Business Default Rule</span>
                  <span className="text-[13px] text-slate-500 leading-relaxed">Apply system default working days and holidays</span>
              </div>
           </div>

           {/* Custom Configuration Card */}
           <div 
             className={cn(
                "p-5 rounded-lg border cursor-pointer transition-all flex items-start gap-3",
                configType === "custom" ? "border-blue-600 ring-1 ring-blue-600 bg-blue-50/30" : "border-slate-200 hover:border-slate-300 bg-white shadow-sm"
             )}
             onClick={() => setConfigType("custom")}
           >
              <div className="pt-[3px]">
                  <div className={cn(
                      "w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-colors",
                      configType === "custom" ? "border-blue-600" : "border-slate-300"
                  )}>
                      {configType === "custom" && <div className="w-[8px] h-[8px] bg-blue-600 rounded-full" />}
                  </div>
              </div>
              <div className="flex flex-col">
                  <span className={cn("font-bold text-[14px] mb-1", configType === "custom" ? "text-blue-700" : "text-slate-700")}>Custom Configuration</span>
                  <span className="text-[13px] text-slate-500 leading-relaxed">Define custom PH & WKND rules for this schedule</span>
              </div>
           </div>
       </div>

       {configType === "custom" && (
         <div className="flex flex-col gap-8 bg-white border border-slate-200 shadow-sm rounded-lg p-7 max-w-4xl">
            {/* Locations */}
            <div className="flex flex-col gap-3">
                <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5">
                    Use PH & WKND for the following location(s) <Info className="w-4 h-4 text-slate-400" />
                </Label>
                <div className="min-h-[42px] flex items-center flex-wrap gap-2 p-1.5 border border-slate-300 rounded-md bg-white relative pr-10 shadow-sm">
                    {selectedLocations.map(loc => (
                       <div key={loc} className="flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[13px] px-2.5 py-1 rounded border border-slate-200/60 font-medium">
                          {loc}
                          <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 cursor-pointer" />
                       </div>
                    ))}
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Working Days */}
                <div className="flex flex-col gap-3">
                    <Label className="text-[13px] font-semibold text-slate-700">Working Days</Label>
                    <div className="flex items-center gap-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                            <div key={day} className="w-[42px] h-[34px] rounded bg-blue-600 text-white flex items-center justify-center text-[13px] font-medium shadow-sm">
                               {day}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weekend Days */}
                <div className="flex flex-col gap-3">
                    <Label className="text-[13px] font-semibold text-slate-700">Weekend Days</Label>
                    <div className="flex items-center gap-2">
                        {['Sat', 'Sun'].map(day => (
                            <div key={day} className="w-[42px] h-[34px] rounded bg-slate-100 text-slate-500 flex items-center justify-center text-[13px] font-medium border border-slate-200">
                               {day}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Holidays Table */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 mt-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-col">
                       <Label className="font-semibold text-slate-900 text-[15px]">Holidays</Label>
                       <div className="flex items-center gap-1.5 text-[13px] text-blue-600 font-medium mt-1">
                           <CalendarIcon className="w-3.5 h-3.5" />
                           2 holidays configured for 2026
                       </div>
                    </div>
                    <Button variant="outline" className="h-9 border-slate-300 text-slate-700 font-medium gap-2 text-[13px] shadow-sm">
                        <CalendarIcon className="w-4 h-4" /> Manage Holidays
                    </Button>
                </div>
                
                <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                    <Table>
                        <TableHeader className="bg-slate-50 border-b border-slate-200">
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="w-[300px] font-semibold text-slate-700 text-[13px] h-10">Date</TableHead>
                                <TableHead className="font-semibold text-slate-700 text-[13px] h-10">Holiday Name</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="border-b border-slate-100">
                                <TableCell className="font-medium text-slate-800 text-[13px] py-3">Jan 1, 2026</TableCell>
                                <TableCell className="text-slate-600 text-[13px] py-3">New Year's Day</TableCell>
                            </TableRow>
                            <TableRow className="border-none">
                                <TableCell className="font-medium text-slate-800 text-[13px] py-3">Feb 17, 2026</TableCell>
                                <TableCell className="text-slate-600 text-[13px] py-3">Hari Raya Nyepi</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div className="p-2 border-t border-slate-100 text-center bg-slate-50/50">
                        <button className="text-blue-600 text-[13px] font-medium inline-flex items-center gap-1 hover:underline">
                            View All <ArrowRight className="w-3h-3" />
                        </button>
                    </div>
                </div>
            </div>
         </div>
       )}
    </div>
  )
}

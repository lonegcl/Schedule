import { Search, Filter, MoreHorizontal, ChevronRight, FileSpreadsheet } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const MONTHS = ["Last Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec", "Next Jan"];

export function YearlyGrid() {
  return (
    <div className="flex w-full h-full text-slate-800 text-sm bg-white">
      {/* Left Sidebar: Schedule List */}
      <div className="w-80 border-r bg-slate-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 flex flex-col shrink-0">
        <div className="p-4 flex flex-col gap-4 border-b shrink-0 bg-white">
          <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input className="h-10 pl-10 bg-slate-50 border-slate-200 focus-visible:ring-blue-500 rounded-xl" placeholder="Search Name..." />
              </div>
              <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 bg-slate-50 border-slate-200 rounded-xl">
                <Filter className="h-4 w-4 text-slate-600" />
              </Button>
          </div>
        </div>
        <div className="px-4 flex items-center justify-between py-3 border-b bg-slate-100/50">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">All Schedules</span>
            <span className="text-xs font-medium text-slate-400 bg-slate-200/50 px-2.5 py-0.5 rounded-full">2</span>
        </div>
        <ScrollArea className="flex-1 px-3 py-3">
          <div className="flex flex-col gap-1.5">
            <ScheduleItem name="10311700_Stüssy-Contractor Service 2026" active />
            <ScheduleItem name="10311634_Stüssy-Contractor Test Data" />
          </div>
        </ScrollArea>
      </div>

      {/* Main Grid Matrix */}
      <div className="flex-1 bg-slate-50/30 relative custom-scrollbar flex flex-col h-full overflow-hidden">
        <ScrollArea className="flex-1 custom-scrollbar w-full" type="auto">
          <div className="inline-block min-w-full pb-8">
            {/* Header: Months */}
            <div className="flex sticky top-0 bg-white z-20 shadow-sm border-b">
              <div className="w-14 shrink-0 border-r bg-slate-50/80 backdrop-blur sticky left-0 z-30 flex items-center justify-center">
                 {/* Empty corner cell */}
              </div>
              {MONTHS.map(month => (
                  <div key={month} className="w-[180px] shrink-0 text-center py-3 font-semibold text-slate-700 border-r border-slate-200 bg-white/95 backdrop-blur text-sm tracking-wide">
                    {month}
                  </div>
              ))}
            </div>
            
            {/* Body: Days */}
            <div className="flex flex-col relative z-0">
                {DAYS.map(day => (
                  <div key={day} className="flex border-b border-dashed border-slate-200 hover:bg-slate-50 transition-colors group">
                      {/* Day index sticky */}
                      <div className="w-14 shrink-0 border-r border-solid border-slate-200 bg-white/95 backdrop-blur sticky left-0 z-10 flex items-center justify-center font-semibold text-slate-500 text-sm group-hover:text-blue-600 transition-colors shadow-[4px_0_12px_rgba(0,0,0,0.02)]">
                        {day}
                      </div>
                      {/* Month cells */}
                      {MONTHS.map(month => (
                        <div key={`${day}-${month}`} className="w-[180px] shrink-0 border-r border-dashed border-slate-200 min-h-[52px] p-2 relative group/cell hover:bg-black/[0.02]">
                            <CellContent day={day} month={month} />
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

function ScheduleItem({ name, active }: { name: string, active?: boolean }) {
    return (
        <div className={cn(
            "p-3 text-sm flex items-center justify-between cursor-pointer rounded-xl transition-all border",
            active 
               ? "bg-white border-blue-200 shadow-sm ring-1 ring-blue-500/20" 
               : "bg-transparent border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm"
        )}>
            <div className="flex items-center gap-3 overflow-hidden">
                <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    active ? "bg-blue-100" : "bg-slate-100"
                )}>
                    <FileSpreadsheet className={cn(
                        "w-4 h-4",
                        active ? "text-blue-600" : "text-slate-400"
                    )} />
                </div>
                <span className="truncate font-medium text-slate-700 block max-w-[180px]" title={name}>{name}</span>
            </div>
            <ChevronRight className={cn(
                "h-4 w-4 shrink-0 opacity-0 transition-opacity",
                active ? "opacity-100 text-blue-500" : "group-hover:opacity-100 text-slate-400"
            )} />
        </div>
    )
}

// Emulate a more structured task rendering
function CellContent({ day, month }: { day: string, month: string }) {
    const isWeekend = (parseInt(day) + MONTHS.indexOf(month) * 2) % 7 === 0 || (parseInt(day) + MONTHS.indexOf(month) * 2) % 7 === 6;
    const isHoliday = (parseInt(day) + MONTHS.indexOf(month)) % 15 === 0;
    
    const hasTask1 = day === "14" && month === "Jan";
    const hasTask2 = day === "20" && month === "Jan";
    const hasAutoSubmit = day === "09" && month === "July";

    if (isHoliday) {
        return <div className="w-full flex justify-center py-1"><span className="px-2.5 py-0.5 rounded-full text-[11px] bg-rose-50 text-rose-500 font-semibold border border-rose-100">Holiday</span></div>
    }
    if (isWeekend) {
        return <div className="w-full h-full flex justify-center items-center opacity-30 bg-stripes pointer-events-none" />
    }

    return (
        <div className="flex flex-col gap-1 w-full relative z-0">
            {hasTask1 && (
                <div className="bg-sky-50 text-sky-700 border border-sky-200 text-[11px] px-2 py-1.5 rounded-md truncate shadow-sm font-medium hover:bg-sky-100 cursor-pointer transition-colors" title="[Client] Collect & Confirm">
                    <span className="font-bold mr-1">C</span> Collect & Confirm...
                </div>
            )}
            {hasTask2 && (
                <div className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px] px-2 py-1.5 rounded-md truncate shadow-sm font-medium hover:bg-indigo-100 cursor-pointer transition-colors">
                   <span className="font-bold mr-1">SD</span> Review Invoice
                </div>
            )}
            {hasAutoSubmit && (
                <div className="bg-slate-800 text-white text-[11px] px-2 py-1.5 rounded-md truncate shadow-md font-medium cursor-pointer">
                   Auto Submit Request
                </div>
            )}
        </div>
    )
}

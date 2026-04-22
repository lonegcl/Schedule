import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CalendarIcon } from "lucide-react";

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
]

export function BenchmarkDatesStep() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex items-start justify-between">
           <div>
             <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Benchmark Dates</h2>
             <p className="text-[14px] text-slate-500 font-medium">Set the monthly benchmark dates for this schedule.</p>
           </div>
           <div className="flex items-center gap-3">
               <Button variant="outline" className="border-slate-300 text-slate-700 font-semibold text-[13px] h-9">Clear All</Button>
               <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-semibold bg-white text-[13px] h-9">Add Benchmark Date</Button>
           </div>
       </div>

       <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm mt-2 max-w-4xl">
            <Table className="min-w-max">
                <TableHeader className="bg-white">
                    <TableRow className="border-b border-slate-200 hover:bg-transparent">
                        <TableHead className="w-[350px] font-semibold text-slate-900 py-4 text-[13px] pl-8">Benchmark Month</TableHead>
                        <TableHead className="font-semibold text-slate-900 py-4 text-[13px]">Benchmark Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {MONTHS.map((col, idx) => (
                        <TableRow key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                            <TableCell className="font-semibold text-slate-900 py-4 pl-8 text-[13px]">
                                {col.name}
                            </TableCell>
                            <TableCell className="py-4">
                                <div className="flex justify-between items-center pr-6">
                                    {col.date ? (
                                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-medium text-[13px] border border-emerald-200 shadow-sm">
                                            {col.date}
                                        </div>
                                    ) : (
                                        <span className="text-slate-400 text-[13px]">Not Set</span>
                                    )}
                                    
                                    {!col.date && (
                                        <button className="text-blue-600 text-[13px] font-medium inline-flex items-center gap-1.5 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                                            <CalendarIcon className="w-3.5 h-3.5" /> Set Date
                                        </button>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
       </div>
    </div>
  )
}

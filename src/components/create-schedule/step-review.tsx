import { Button } from "@/components/ui/button";
import { Download, Edit2, FileText, Calendar as CalendarIcon, Clock, Share2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ReviewConfirmStep() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex items-start justify-between">
         <div>
           <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Review & Confirm</h2>
           <p className="text-[14px] text-slate-500 font-medium">Please review all settings below. You can go back to any step to make changes.</p>
         </div>
         <Button variant="outline" className="border-slate-300 text-slate-700 font-medium gap-2 hover:bg-slate-50 text-[13px] h-9">
             <Download className="w-4 h-4" /> Download Summary
         </Button>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2 max-w-[1200px]">
           
           {/* Basic Settings */}
           <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col relative group">
               <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2 font-bold text-slate-900 text-[15px]">
                      <div className="p-1.5 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><FileText className="w-4 h-4" /></div>
                      Basic Settings
                   </div>
                   <button className="text-blue-600 text-[13px] font-semibold flex items-center gap-1.5 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                   </button>
               </div>
               <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                   <div className="text-slate-500 font-medium">Schedule Name</div>
                   <div className="text-slate-900 font-semibold">Stüssy - Contractor Service Monthly<br/>Payment 2026</div>
                   <div className="text-slate-500 font-medium pt-1">Service Module</div>
                   <div className="text-slate-900 font-semibold pt-1">Contractor / Monthly Payment</div>
                   <div className="text-slate-500 font-medium pt-1">Time Zone</div>
                   <div className="text-slate-900 font-semibold pt-1">(GMT+07:00) Asia/Jakarta</div>
                   <div className="text-slate-500 font-medium pt-1">Status</div>
                   <div className="pt-1"><Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 shadow-sm px-2 py-0 text-[11px] font-bold">Active</Badge></div>
               </div>
           </div>

           {/* PH & WKND Rules */}
           <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col relative group">
               <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2 font-bold text-slate-900 text-[15px]">
                      <div className="p-1.5 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><CalendarIcon className="w-4 h-4" /></div>
                      PH & WKND Rules
                   </div>
                   <button className="text-blue-600 text-[13px] font-semibold flex items-center gap-1.5 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                   </button>
               </div>
               <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                   <div className="text-slate-500 font-medium">Applied To</div>
                   <div className="text-slate-900 font-semibold leading-relaxed">BIPO SD (Processor) Location,<br/>Client Company Location</div>
                   <div className="text-slate-500 font-medium pt-1">Working Days</div>
                   <div className="text-slate-900 font-semibold pt-1">Mon, Tue, Wed, Thu, Fri</div>
                   <div className="text-slate-500 font-medium pt-1">Weekend Days</div>
                   <div className="text-slate-900 font-semibold pt-1">Saturday, Sunday</div>
                   <div className="text-slate-500 font-medium pt-1">Holidays</div>
                   <div className="flex flex-col gap-1 items-start pt-1">
                      <span className="text-slate-900 font-semibold">2 holidays in 2026</span>
                      <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-1">View Holidays <ArrowRight className="w-3.5 h-3.5" /></button>
                   </div>
               </div>
           </div>

           {/* Benchmark Dates */}
           <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col relative group">
               <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2 font-bold text-slate-900 text-[15px]">
                      <div className="p-1.5 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><CalendarIcon className="w-4 h-4" /></div>
                      Benchmark Dates
                   </div>
                   <button className="text-blue-600 text-[13px] font-semibold flex items-center gap-1.5 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                   </button>
               </div>
               <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                   <div className="text-slate-500 font-medium">Total Months</div>
                   <div className="text-slate-900 font-semibold">12 months</div>
                   <div className="text-slate-500 font-medium pt-1">Configured</div>
                   <div className="text-slate-900 font-semibold pt-1">4 months</div>
                   <div className="text-slate-500 font-medium pt-1">Next Benchmark Date</div>
                   <div className="pt-1"><Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 shadow-sm px-2 py-0 font-bold text-[11px]">Jul 17, 2026</Badge></div>
               </div>
           </div>

           {/* Offset Due Date Settings */}
           <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col relative group">
               <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2 font-bold text-slate-900 text-[15px]">
                      <div className="p-1.5 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><Clock className="w-4 h-4" /></div>
                      Offset Due Date Settings
                   </div>
                   <button className="text-blue-600 text-[13px] font-semibold flex items-center gap-1.5 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                   </button>
               </div>
               <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                   <div className="text-slate-500 font-medium">Total Tasks Configured</div>
                   <div className="text-slate-900 font-semibold">4 of 5 tasks</div>
                   <div className="text-slate-500 font-medium pt-1">Auto Placing Request</div>
                   <div className="text-slate-900 font-semibold pt-1">Base on the First Task Due Date</div>
                   <div className="text-slate-500 font-medium pt-1">Placing Request Date</div>
                   <div className="text-slate-900 font-semibold pt-1 leading-relaxed">2 working days before first task due<br/>date at 14:00</div>
               </div>
           </div>

           {/* Business Settings */}
           <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col relative group">
               <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2 font-bold text-slate-900 text-[15px]">
                      <div className="p-1.5 bg-blue-50 text-blue-600 rounded flex items-center justify-center"><FileText className="w-4 h-4" /></div>
                      Business Settings
                   </div>
                   <button className="text-blue-600 text-[13px] font-semibold flex items-center gap-1.5 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                   </button>
               </div>
               <div className="grid grid-cols-[140px_1fr] gap-y-4 text-[13px]">
                   <div className="text-slate-500 font-medium">Automated Collection</div>
                   <div className="text-slate-900 font-semibold">Enabled</div>
                   <div className="text-slate-500 font-medium pt-1">Total Contractors</div>
                   <div className="text-slate-900 font-semibold pt-1">2 contractors</div>
                   <div className="text-slate-500 font-medium pt-1">Fee Currency</div>
                   <div className="text-slate-900 font-semibold pt-1">Mixed (SGD, AUD)</div>
               </div>
           </div>

       </div>
    </div>
  )
}

import { Label } from "@/components/ui/label";
import { Info, Edit, Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CONTRACTORS = [
  {
    name: "ABC Construction Ltd.",
    email: "abc@construction.com",
    country: "Singapore",
    paymentDate: "5th",
    currency: "SGD",
    fee: "120",
    rate: "1.30%",
    status: "Active",
    rule: "Monthly"
  },
  {
    name: "BuildWell Pte Ltd.",
    email: "finance@buildwell.com",
    country: "Australia",
    paymentDate: "7th",
    currency: "AUD",
    fee: "70",
    rate: "1.50%",
    status: "Active",
    rule: "Monthly"
  }
];

export function BusinessSettingsStep() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
         <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1.5">Business Settings</h2>
         <p className="text-[14px] text-slate-500">Configure contractor and invoice related settings.</p>
       </div>

       {/* Invoice Settings Section */}
       <section className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mt-2">
         <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 text-[14px]">Collect Contractor Invoice Settings</h3>
         </div>
         <div className="p-6 space-y-6">
            <div className="flex items-center gap-3">
               <Switch defaultChecked className="data-[state=checked]:bg-blue-600 shadow-sm" id="automated" />
               <Label htmlFor="automated" className="flex items-center gap-1.5 text-slate-700 font-semibold cursor-pointer text-[13px]">
                  Automated collection of contractor invoices <Info className="w-4 h-4 text-blue-600" />
               </Label>
            </div>

            <div className="space-y-2.5">
               <Label className="text-slate-600 text-[13px]">Remarks (Optional)</Label>
               <div className="relative">
                 <textarea 
                    placeholder="Enter remarks..."
                    className="w-full min-h-[100px] p-3 border border-slate-200 rounded-md text-[13px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-y bg-slate-50/50 placeholder:text-slate-400"
                 />
                 <span className="absolute bottom-3 right-3 text-[11px] font-medium text-slate-400">0 / 2000</span>
                 {/* Decorative resize handle */}
                 <svg className="absolute bottom-1 right-1 w-2.5 h-2.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 20h16a2 2 0 002-2V6L4 20z" /></svg>
               </div>
            </div>
         </div>
       </section>

       {/* Contractors Section */}
       <section className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-8">
         <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-bold text-slate-800 text-[14px] flex items-center gap-1.5">
                Applicable Contractors Setting <Info className="w-4 h-4 text-blue-600" />
            </h3>
         </div>
         <div className="p-6 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2.5 pb-2">
                    <Switch id="show-terminated" className="shadow-sm" />
                    <Label htmlFor="show-terminated" className="text-slate-600 font-medium cursor-pointer text-[13px]">Show Terminated</Label>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="bg-white border-slate-300 text-slate-700 font-medium text-[13px] h-9">Import</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-medium text-[13px] h-9">Add Contractor</Button>
                </div>
            </div>

            <div className="border border-slate-200 rounded-lg overflow-x-auto bg-white custom-scrollbar">
                <Table className="min-w-full lg:min-w-[1000px]">
                    <TableHeader className="bg-slate-50 border-b border-slate-200">
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="py-3 font-semibold text-slate-700 pl-4 w-[18%] text-[13px]">Contractor Name</TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 w-[18%] text-[13px]">Email Address</TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 w-[12%] text-[13px]">Landing Service<br/>Country/Region</TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 w-[10%] text-[13px]">Payment Date</TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 w-[8%] text-[13px]">Currency</TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 w-[10%] text-[13px]">Fee Rate</TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 w-[8%] text-[13px]">Status</TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 w-[8%] text-[13px]">
                                <div className="flex items-center gap-1.5">
                                    Rule <Info className="w-3.5 h-3.5 text-blue-500" />
                                </div>
                            </TableHead>
                            <TableHead className="py-3 font-semibold text-slate-700 text-right pr-4 w-[8%] text-[13px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {CONTRACTORS.map((c, i) => (
                           <TableRow key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                               <TableCell className="py-4 pl-4 font-medium text-slate-800 text-[13px]">{c.name}</TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.email}</TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.country}</TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.paymentDate}</TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.currency}</TableCell>
                               <TableCell className="py-4 font-semibold text-green-600 text-[13px]">{c.rate}</TableCell>
                               <TableCell className="py-4">
                                   <span className="inline-flex px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider border border-emerald-100 shadow-sm">
                                       {c.status}
                                   </span>
                               </TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.rule}</TableCell>
                               <TableCell className="py-4 text-right pr-4">
                                   <div className="flex items-center justify-end gap-4 text-slate-400">
                                       <button className="hover:text-blue-600 transition-colors"><Edit className="w-4 h-4" /></button>
                                       <button className="hover:text-rose-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                                   </div>
                               </TableCell>
                           </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                {/* Pagination fake footer */}
                <div className="px-4 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-6 text-[13px] text-slate-600">
                    <span className="font-medium text-slate-500">Total 2</span>
                    <div className="flex items-center gap-2">
                        <Select defaultValue="30">
                            <SelectTrigger className="h-[30px] w-[90px] bg-white border-slate-300 text-[12px] shadow-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="30">30 / page</SelectItem>
                                <SelectItem value="50">50 / page</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-50">&lt;</button>
                        <button className="w-6 h-6 flex items-center justify-center rounded bg-white border border-blue-600 text-blue-600 font-bold text-[12px] shadow-sm">1</button>
                        <button className="p-1 text-slate-400 hover:text-slate-800 disabled:opacity-50">&gt;</button>
                    </div>
                </div>
            </div>
         </div>
       </section>
    </div>
  )
}

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const INITIAL_CONTRACTORS = [
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
  const [contractors, setContractors] = useState(INITIAL_CONTRACTORS);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    setDeletingId(index);
    setTimeout(() => {
       setContractors(contractors.filter((_, i) => i !== index));
       setDeletingId(null);
    }, 300);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
         <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Business Settings</h2>
         <p className="text-[14px] text-slate-500 font-medium">Configure contractor and invoice related settings.</p>
       </div>

       {/* Invoice Settings Section */}
       <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mt-2">
         <div className="px-6 py-5 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-[16px]">Collect Contractor Invoice Settings</h3>
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
       <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
         <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-bold text-slate-900 text-[16px] flex items-center gap-1.5">
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

            <div className="border border-slate-200 rounded-xl overflow-x-auto bg-white custom-scrollbar">
                <Table className="min-w-max">
                    <TableHeader className="bg-white">
                        <TableRow className="border-b border-slate-200 hover:bg-transparent">
                            <TableHead className="py-4 font-semibold text-slate-900 pl-6 w-[250px] text-[13px]">Contractor Name</TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 w-[250px] text-[13px]">Email Address</TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 w-[200px] text-[13px]">Landing Service<br/>Country/Region</TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 w-[150px] text-[13px]">Payment Date</TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 w-[120px] text-[13px]">Currency</TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 w-[120px] text-[13px]">Fee Rate</TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 w-[120px] text-[13px]">Status</TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 w-[150px] text-[13px]">
                                <div className="flex items-center gap-1.5">
                                    Rule <Info className="w-3.5 h-3.5 text-slate-400" />
                                </div>
                            </TableHead>
                            <TableHead className="py-4 font-semibold text-slate-900 text-right pr-6 w-[120px] text-[13px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {contractors.map((c, i) => (
                           <TableRow key={i} className={cn("border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-300", deletingId === i && "opacity-0 -translate-x-4 bg-red-50/50")}>
                               <TableCell className="py-4 pl-6 font-semibold text-slate-900 text-[13px]">{c.name}</TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.email}</TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.country}</TableCell>
                               <TableCell className="py-4 text-slate-900 font-medium text-[13px]">{c.paymentDate}</TableCell>
                               <TableCell className="py-4 text-slate-600 text-[13px]">{c.currency}</TableCell>
                               <TableCell className="py-4 font-semibold text-slate-900 text-[13px]">{c.rate}</TableCell>
                               <TableCell className="py-4">
                                   <span className="inline-flex px-2 py-0.5 rounded bg-[#f0fdf4] text-[#15803d] text-[12px] font-medium border border-emerald-100">
                                       {c.status}
                                   </span>
                               </TableCell>
                               <TableCell className="py-4 font-medium text-slate-900 text-[13px]">{c.rule}</TableCell>
                               <TableCell className="py-4 text-right pr-6">
                                   <div className="flex items-center justify-end gap-3 text-blue-600 font-medium text-[13px]">
                                       <button className="hover:underline">Edit</button>
                                       <span className="w-px h-3 bg-slate-300" />
                                       <button onClick={() => handleDelete(i)} className="hover:underline text-rose-500 transition-colors">Delete</button>
                                   </div>
                               </TableCell>
                           </TableRow>
                        ))}
                        {contractors.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={9} className="py-12 text-center">
                                     <div className="flex justify-center mb-3">
                                         <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full border border-slate-200">
                                            <Info className="w-5 h-5 text-slate-400" />
                                         </div>
                                     </div>
                                     <h3 className="text-[14px] font-semibold text-slate-900 mb-1">No Contractors Found</h3>
                                     <p className="text-[13px] text-slate-500">Add or import contractors to configure their payment rules.</p>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                
                {/* Pagination */}
                <div className="px-6 py-3 border-t border-slate-100 bg-white flex items-center justify-between text-[13px] text-slate-500">
                    <div>Total {contractors.length}</div>
                    <div className="flex items-center gap-4">
                        <Select defaultValue="30">
                            <SelectTrigger className="h-[30px] w-[100px] border-slate-200 text-[13px] text-slate-600 shadow-sm focus:ring-blue-500">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="30">30 / page</SelectItem>
                                <SelectItem value="50">50 / page</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex items-center gap-1.5">
                            <button className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-50 transition-colors">&lt;</button>
                            <button className="w-7 h-7 flex items-center justify-center rounded bg-blue-50 text-blue-700 font-semibold text-[13px]">1</button>
                            <button className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-50 transition-colors">&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </section>
    </div>
  )
}

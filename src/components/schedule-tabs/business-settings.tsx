import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function BusinessSettings() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Invoice Settings Section */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
         <div className="px-6 py-4 border-b bg-slate-50/50">
            <h3 className="font-semibold text-slate-800 text-base">Collect Contractor Invoice Settings</h3>
         </div>
         <div className="p-6 space-y-6">
            <div className="space-y-3">
               <Label className="flex items-center gap-1.5 text-slate-600">
                  Automated collection of contractor invoices <Info className="w-4 h-4 text-blue-500" />
               </Label>
               <Switch />
            </div>

            <div className="space-y-2">
               <Label className="flex items-center gap-1.5 text-slate-600">
                  Remarks <Info className="w-4 h-4 text-blue-500" />
               </Label>
               <div className="relative">
                 <textarea 
                    className="w-full min-h-[100px] p-3 border rounded-md text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-y bg-slate-50/50"
                 />
                 <span className="absolute bottom-2 right-2 text-xs text-slate-400">0 / 2000</span>
                 {/* Decorative resize handle */}
                 <svg className="absolute bottom-1 right-1 w-2.5 h-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h16a2 2 0 002-2V6L4 20z" /></svg>
               </div>
            </div>
         </div>
      </section>

      {/* Contractors Section */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden mb-8">
         <div className="px-6 py-4 border-b bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="font-semibold text-slate-800 text-base flex items-center gap-1.5">
                Applicable Contractors Setting <Info className="w-4 h-4 text-blue-500" />
            </h3>
         </div>
         <div className="p-6 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                    <Switch id="show-terminated" />
                    <Label htmlFor="show-terminated" className="text-slate-600 cursor-pointer">Show Terminated</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200">Remove All</Button>
                    <Button variant="outline" className="bg-white">Import</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white min-w-[80px]">Add</Button>
                </div>
            </div>

            <div className="border rounded-md overflow-x-auto bg-slate-50/30 custom-scrollbar">
                <Table className="min-w-[1200px]">
                    <TableHeader className="bg-slate-50 text-slate-600">
                        <TableRow>
                            <TableHead>Contractor Name</TableHead>
                            <TableHead>Email Address</TableHead>
                            <TableHead>Landing Service Country/Region</TableHead>
                            <TableHead>BIPO Payment Date</TableHead>
                            <TableHead>Fee Currency</TableHead>
                            <TableHead>Contractor Fee</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>
                                <div className="flex items-center gap-1.5">
                                    Pay Period Rule <Info className="w-3.5 h-3.5 text-blue-500" />
                                </div>
                            </TableHead>
                            <TableHead className="text-right">Operation</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={9} className="h-32 text-center text-slate-400">
                                No Data
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
         </div>
      </section>

    </div>
  )
}

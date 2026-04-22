import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Info, Clock } from "lucide-react"

export function OffsetSettings() {
  return (
    <div className="flex flex-col gap-6">
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b bg-slate-50/50">
          <h3 className="font-semibold text-slate-800 text-base">Task Settings</h3>
        </div>
        <div className="overflow-x-auto custom-scrollbar border rounded-md">
          <Table className="min-w-[1100px]">
            <TableHeader className="bg-slate-50 text-slate-600">
              <TableRow>
                <TableHead className="w-[200px]">Task Name</TableHead>
                <TableHead>Task Assignee Role</TableHead>
                <TableHead>Task Assignee</TableHead>
                <TableHead className="text-center">Benchmark</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1.5">
                    Offset Due Date Setting <Info className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </TableHead>
                <TableHead>Remind Before Task Due Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Row 1 */}
              <TableRow className="hover:bg-slate-50/50">
                <TableCell className="font-medium text-slate-700">
                   [Client] Collect & Confirm Contractor Invoice
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 font-medium">Client Contact(Local/Processor)</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center border rounded-md px-2 py-1 bg-white">
                     <span className="text-xs text-slate-600 truncate max-w-[100px]">Client-Nancy/小...</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                   <input type="radio" name="benchmark" className="w-4 h-4 text-blue-600" />
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                       <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                       <div className="flex items-center">
                          <span className="px-2 py-1.5 border border-r-0 rounded-l-md bg-slate-50 text-slate-500 font-medium">-</span>
                          <Input className="w-14 rounded-none text-center h-8" defaultValue="4" />
                       </div>
                       <Select defaultValue="working">
                          <SelectTrigger className="w-28 h-8">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent><SelectItem value="working">Working Day</SelectItem></SelectContent>
                       </Select>
                       <div className="flex items-center gap-1.5 border rounded-md px-2 h-8 bg-white">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-sm">09:00</span>
                       </div>
                   </div>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                       <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                       <Input className="w-14 text-center h-8" defaultValue="1" />
                       <Select defaultValue="working">
                          <SelectTrigger className="w-28 h-8">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent><SelectItem value="working">Working Day</SelectItem></SelectContent>
                       </Select>
                   </div>
                </TableCell>
              </TableRow>

              {/* Row 2 */}
              <TableRow className="hover:bg-slate-50/50">
                <TableCell className="font-medium text-slate-700">
                   [SD] Review Contractor Invoice
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-[#4f5ee3] text-white hover:bg-[#4f5ee3] font-medium border-transparent shadow-sm">BIPO SD(Local/Processor)</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center border rounded-md px-2 py-1 bg-slate-50/50 opacity-70">
                     <span className="text-xs text-slate-500 truncate max-w-[100px]">SD-Nancy...</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                   <input type="radio" name="benchmark" className="w-4 h-4 text-blue-600" />
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                       <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                       <div className="flex items-center">
                          <span className="px-2 py-1.5 border border-r-0 rounded-l-md bg-slate-50 text-slate-500 font-medium">-</span>
                          <Input className="w-14 rounded-none text-center h-8" defaultValue="2" />
                       </div>
                       <Select defaultValue="working">
                          <SelectTrigger className="w-28 h-8">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent><SelectItem value="working">Working Day</SelectItem></SelectContent>
                       </Select>
                       <div className="flex items-center gap-1.5 border rounded-md px-2 h-8 bg-white">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-sm">09:00</span>
                       </div>
                   </div>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                       <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                       <Input className="w-14 text-center h-8" defaultValue="1" />
                       <Select defaultValue="working">
                          <SelectTrigger className="w-28 h-8">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent><SelectItem value="working">Working Day</SelectItem></SelectContent>
                       </Select>
                   </div>
                </TableCell>
              </TableRow>

              {/* Row 3 (Inactive Offset) */}
               <TableRow className="hover:bg-slate-50/50">
                <TableCell className="font-medium text-slate-700">
                   [SD] Send Invoice
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-[#4f5ee3] text-white hover:bg-[#4f5ee3] font-medium border-transparent shadow-sm">BIPO SD(Local/Processor)</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center border rounded-md px-2 py-1 bg-slate-50/50 opacity-70">
                     <span className="text-xs text-slate-500 truncate">SD-Nancy...</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                   <input type="radio" name="benchmark" className="w-4 h-4 text-blue-600" />
                </TableCell>
                <TableCell>
                   <Switch />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              
               {/* Row 4 (Benchmark Selected) */}
               <TableRow className="hover:bg-slate-50/50 bg-blue-50/30">
                <TableCell className="font-medium text-slate-900 border-l-2 border-l-blue-500">
                   [Client] Review Invoice
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100 font-medium">Client Contact(Local/Processor)</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center border rounded-md px-2 py-1 bg-white">
                     <span className="text-xs text-slate-600 truncate max-w-[100px]">Client-Nancy/小...</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                   <input type="radio" name="benchmark" defaultChecked className="w-4 h-4 text-blue-600" />
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                       <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                       <div className="flex items-center">
                          <span className="px-2 py-1.5 border border-r-0 rounded-l-md bg-slate-50 text-slate-500 font-medium">+</span>
                          <Input className="w-14 rounded-none text-center h-8" defaultValue="0" />
                       </div>
                       <Select defaultValue="working">
                          <SelectTrigger className="w-28 h-8">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent><SelectItem value="working">Working Day</SelectItem></SelectContent>
                       </Select>
                       <div className="flex items-center gap-1.5 border rounded-md px-2 h-8 bg-white">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-sm">09:00</span>
                       </div>
                   </div>
                </TableCell>
                <TableCell>
                   <div className="flex items-center gap-2">
                       <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                       <Input className="w-14 text-center h-8" defaultValue="1" />
                       <Select defaultValue="working">
                          <SelectTrigger className="w-28 h-8">
                             <SelectValue />
                          </SelectTrigger>
                          <SelectContent><SelectItem value="working">Working Day</SelectItem></SelectContent>
                       </Select>
                   </div>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </div>
      </section>

      {/* Auto Placing Request Settings */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden mb-8">
        <div className="px-6 py-4 border-b bg-slate-50/50">
          <h3 className="font-semibold text-slate-800 text-base">Auto Placing Request Settings</h3>
        </div>
        <div className="p-6 space-y-6">
           <div className="space-y-4">
               <Label className="flex items-center gap-1.5 text-slate-600">
                  <span className="text-red-500">*</span> Base Task Type
               </Label>
               <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" checked readOnly className="w-4 h-4 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-slate-800 font-medium">Base on the First Task Due Date</span>
               </label>
               
               <div className="bg-slate-50/50 border rounded-lg p-4 space-y-1 ml-6 max-w-xl">
                  <div className="text-xs text-slate-500 font-medium">First Task:</div>
                  <div className="text-sm text-slate-800">[Client] Collect & Confirm Contractor Invoice</div>
               </div>
           </div>

           <div className="space-y-3">
              <Label className="flex items-center gap-1.5 text-slate-600">
                  <span className="text-red-500">*</span> Auto Placing Request Date
              </Label>
              <div className="flex items-center gap-2 max-w-xl">
                  <div className="flex items-center">
                    <span className="px-3 py-2 border border-r-0 rounded-l-md bg-slate-50 text-slate-500 font-medium">-</span>
                    <Input className="w-20 rounded-none text-center" defaultValue="2" />
                  </div>
                  <Select defaultValue="working">
                    <SelectTrigger className="w-36">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent><SelectItem value="working">Working Day</SelectItem></SelectContent>
                  </Select>
                  <div className="flex items-center gap-2 border rounded-md px-3 h-10 bg-white">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium">14:14</span>
                  </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  )
}

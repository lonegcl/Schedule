import { Info, Calendar as CalendarIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const TASKS = [
  {
    name: "Collect & Confirm Contractor Invoice",
    role: "Client",
    roleTag: "Client Contact (Local/Processor)",
    roleBg: "bg-blue-50 text-blue-700 border-blue-100",
    assignee: "Client - Nancy小号",
    benchmark: false,
    offset: { active: true, sign: "-", value: 4, unit: "Working Days" },
    remind: { active: true, value: 1, unit: "Working Day" }
  },
  {
    name: "Review Contractor Invoice",
    role: "SD",
    roleTag: "BIPO SD (Local/Processor)",
    roleBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    assignee: "SD - Nancy Pan",
    benchmark: false,
    offset: { active: true, sign: "-", value: 2, unit: "Working Days" },
    remind: { active: true, value: 1, unit: "Working Day" }
  },
  {
    name: "Send Invoice",
    role: "SD",
    roleTag: "BIPO SD (Local/Processor)",
    roleBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    assignee: "SD - Nancy Pan",
    benchmark: false,
    offset: { active: false, sign: "-", value: 0, unit: "Working Days" },
    remind: { active: false, value: 0, unit: "Working Day" }
  },
  {
    name: "Review Invoice",
    role: "Client",
    roleTag: "Client Contact (Local/Processor)",
    roleBg: "bg-blue-50 text-blue-700 border-blue-100",
    assignee: "Client - Nancy小号",
    benchmark: true,
    offset: { active: true, sign: "+", value: 0, unit: "Working Days" },
    remind: { active: true, value: 1, unit: "Working Day" }
  },
  {
    name: "Confirm Payment to Contractor",
    role: "SD",
    roleTag: "BIPO SD (Local/Processor)",
    roleBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    assignee: "SD - Nancy Pan",
    benchmark: false,
    offset: { active: true, sign: "+", value: 1, unit: "Working Days" },
    remind: { active: true, value: 1, unit: "Working Day" }
  }
];

export function OffsetSettingsStep() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
         <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-1.5">Offset Due Date Settings</h2>
         <p className="text-[14px] text-slate-500">Configure the due date rules for each task in this schedule.</p>
       </div>

       {/* Task Settings Card */}
       <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col mt-2 overflow-hidden">
          <div className="px-6 py-4 border-b bg-slate-50/50">
             <h3 className="font-bold text-slate-800 text-[14px]">Task Settings</h3>
          </div>
          
          <div className="overflow-x-auto custom-scrollbar">
             <Table className="min-w-full lg:min-w-[1000px]">
                <TableHeader className="bg-white">
                   <TableRow className="border-b border-slate-200 hover:bg-transparent">
                      <TableHead className="font-semibold text-slate-700 py-3 w-[22%] pl-6 text-[13px]">
                         Task Name
                         <div className="text-[11px] text-slate-400 font-normal mt-0.5">Task Detail</div>
                      </TableHead>
                      <TableHead className="font-semibold text-slate-700 py-3 w-[15%] text-[13px]">Task Assignee Role</TableHead>
                      <TableHead className="font-semibold text-slate-700 py-3 w-[18%] text-[13px]">Task Assignee</TableHead>
                      <TableHead className="font-semibold text-slate-700 py-3 w-[8%] text-center text-[13px]">Benchmark</TableHead>
                      <TableHead className="font-semibold text-slate-700 py-3 w-[25%] text-[13px]">
                         <div className="flex items-center gap-1.5">
                            Offset Due Date <Info className="w-3.5 h-3.5 text-blue-500" />
                         </div>
                      </TableHead>
                      <TableHead className="font-semibold text-slate-700 py-3 w-[12%] text-[13px]">
                         Remind Before
                         <div className="text-[11px] text-slate-400 font-normal mt-0.5">Task Due Date</div>
                      </TableHead>
                   </TableRow>
                </TableHeader>
                <TableBody>
                   {TASKS.map((task, i) => (
                      <TableRow key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                         <TableCell className="py-4 font-medium text-slate-800 pl-6 text-[13px]">
                            [{task.role}] {task.name}
                         </TableCell>
                         <TableCell className="py-4">
                            <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-semibold border ${task.roleBg} whitespace-nowrap`}>
                                {task.roleTag}
                            </span>
                         </TableCell>
                         <TableCell className="py-4">
                            <Select defaultValue="1">
                               <SelectTrigger className="h-[34px] w-[180px] bg-white border-slate-200 shadow-sm text-[13px]">
                                  <SelectValue placeholder="Assignee" />
                               </SelectTrigger>
                               <SelectContent>
                                  <SelectItem value="1">{task.assignee}</SelectItem>
                               </SelectContent>
                            </Select>
                         </TableCell>
                         <TableCell className="py-4 text-center">
                            <div className="flex justify-center">
                               <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${task.benchmark ? 'border-blue-600' : 'border-slate-300'}`}>
                                  {task.benchmark && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                               </div>
                            </div>
                         </TableCell>
                         <TableCell className="py-4">
                            <div className={`flex items-center gap-2 transition-opacity ${!task.offset.active && 'opacity-50 grayscale'}`}>
                               <Switch checked={task.offset.active} className="data-[state=checked]:bg-blue-600 shadow-sm" />
                               <div className="flex h-[34px] border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm w-[180px]">
                                  <button className="w-8 shrink-0 bg-slate-50 border-r flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100">{task.offset.sign}</button>
                                  <input type="text" className="w-10 text-center text-[13px] focus:outline-none border-r font-medium text-slate-700" defaultValue={task.offset.value} />
                                  <select className="flex-1 text-[13px] bg-transparent focus:outline-none px-2 text-slate-600 cursor-pointer">
                                     <option>{task.offset.unit}</option>
                                  </select>
                               </div>
                            </div>
                         </TableCell>
                         <TableCell className="py-4">
                            <div className={`flex items-center gap-2 transition-opacity ${!task.remind.active && 'opacity-50 grayscale'}`}>
                               <Switch checked={task.remind.active} className="data-[state=checked]:bg-blue-600 shadow-sm" />
                               <div className="flex h-[34px] border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm w-[130px]">
                                  <input type="text" className="w-10 text-center text-[13px] focus:outline-none border-r font-medium text-slate-700" defaultValue={task.remind.value} />
                                  <select className="flex-1 text-[13px] bg-transparent focus:outline-none px-2 text-slate-600 cursor-pointer">
                                     <option>{task.remind.unit}</option>
                                  </select>
                               </div>
                            </div>
                         </TableCell>
                      </TableRow>
                   ))}
                </TableBody>
             </Table>
          </div>
       </div>

       {/* Auto Placing Request Settings */}
       <div className="bg-white rounded-lg border border-blue-100 shadow-[0_4px_20px_rgba(37,99,235,0.03)] flex flex-col overflow-hidden relative">
           <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
           <div className="px-6 py-4 border-b border-blue-50 bg-blue-50/30">
              <h3 className="font-bold text-slate-800 flex items-center gap-1.5 text-[14px]">Auto Placing Request Settings <Info className="w-4 h-4 text-blue-500" /></h3>
           </div>
           
           <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-50/10">
               <div className="flex flex-col gap-3">
                  <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5"><span className="text-rose-500">*</span> Base Task Type <Info className="w-4 h-4 text-slate-400" /></Label>
                  <div className="flex items-start gap-3">
                     <div className="w-[18px] h-[18px] rounded-full border-2 border-blue-600 mt-[3px] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                     </div>
                     <div className="flex flex-col gap-2 flex-1">
                        <span className="font-semibold text-slate-800 text-[13px]">Base on the First Task Due Date</span>
                        <div className="bg-slate-50 rounded-md p-2.5 text-[13px] text-slate-700 flex flex-col gap-1 border border-slate-200">
                           <div className="flex items-center gap-1.5 text-blue-700 font-bold text-[12px]"><Info className="w-3.5 h-3.5" /> First Task:</div>
                           <div className="truncate font-medium text-slate-600 pl-5">[Client] Collect & Confirm Contractor Invoice</div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-3">
                  <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5"><span className="text-rose-500">*</span> Auto Placing Request Date <Info className="w-4 h-4 text-slate-400" /></Label>
                  <div className="flex h-[42px] border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm w-full max-w-[320px]">
                      <button className="w-10 shrink-0 bg-slate-50 border-r flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100 h-full">-</button>
                      <input type="text" className="w-12 text-center text-[13px] focus:outline-none border-r font-medium text-slate-700 h-full" defaultValue="2" />
                      <select className="flex-1 text-[13px] bg-transparent focus:outline-none px-3 text-slate-700 cursor-pointer border-r font-medium h-full">
                         <option>Working Days</option>
                      </select>
                      <div className="flex items-center justify-center min-w-[70px] gap-1.5 px-3 bg-slate-50 text-slate-600 font-medium text-[13px] h-full shrink-0">
                         <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
                         14:00
                      </div>
                  </div>
               </div>
           </div>
       </div>

    </div>
  )
}

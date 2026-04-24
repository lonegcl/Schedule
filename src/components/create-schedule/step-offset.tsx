import { useState } from "react";
import type { ReactNode } from "react";
import { Info, Calendar as CalendarIcon, ClipboardList, FileText, Send } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const INITIAL_TASKS = [
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
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleBenchmarkSelect = (index: number) => {
    setTasks(tasks.map((task, i) => ({
      ...task,
      benchmark: i === index
    })));
  };

  const toggleSwitch = (index: number, type: 'offset' | 'remind') => {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          [type]: { ...task[type], active: !task[type].active }
        };
      }
      return task;
    }));
  };

  const updateSign = (index: number) => {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          offset: { ...task.offset, sign: task.offset.sign === "-" ? "+" : "-" }
        };
      }
      return task;
    }));
  };

  const handleValueChange = (index: number, type: 'offset' | 'remind', newValue: string) => {
    const parsed = parseInt(newValue, 10);
    if (!isNaN(parsed)) {
      setTasks(tasks.map((task, i) => {
        if (i === index) {
          return {
            ...task,
            [type]: { ...task[type], value: parsed }
          };
        }
        return task;
      }));
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div>
         <h2 className="text-[24px] font-bold text-slate-900 tracking-tight mb-2">Task Rules</h2>
         <p className="text-[14px] text-slate-500 font-medium">Configure invoice collection, due dates, and reminders for tasks created by this schedule.</p>
       </div>

       <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <RuleOverview href="#task-settings" icon={<ClipboardList className="h-4 w-4" />} title="Task Settings" description="5 workflow tasks with due date and reminder rules" />
          <RuleOverview href="#auto-request" icon={<Send className="h-4 w-4" />} title="Auto Placing Request" description="Request timing based on first task due date" />
          <RuleOverview href="#invoice-collection" icon={<FileText className="h-4 w-4" />} title="Invoice Collection" description="Automated collection enabled" />
       </section>

       {/* Task Settings Card */}
       <div id="task-settings" className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col mt-2 overflow-hidden scroll-mt-24">
           <div className="px-6 py-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-[16px]">Task Settings</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                 Benchmark task is the anchor date. Other task due dates are calculated from offset rules.
              </p>
           </div>
           
           <div className="overflow-x-auto custom-scrollbar">
              <Table className="min-w-max">
                 <TableHeader className="bg-white">
                    <TableRow className="border-b border-slate-200 hover:bg-transparent">
                       <TableHead className="font-semibold text-slate-900 py-4 w-[280px] pl-6 text-[13px] align-top">
                          Task Name
                          <div className="text-[12px] text-slate-500 font-normal mt-0.5">Task Detail</div>
                       </TableHead>
                       <TableHead className="font-semibold text-slate-900 py-4 w-[220px] text-[13px] align-top">Task Assignee Role</TableHead>
                       <TableHead className="font-semibold text-slate-900 py-4 w-[220px] text-[13px] align-top">Task Assignee</TableHead>
                       <TableHead className="font-semibold text-slate-900 py-4 w-[120px] text-center text-[13px] align-top">Benchmark</TableHead>
                       <TableHead className="font-semibold text-slate-900 py-4 min-w-[320px] text-[13px] align-top">
                          <div className="flex items-center gap-1.5 leading-none mt-1">
                             Offset Due Date <Info className="w-3.5 h-3.5 text-slate-400" />
                          </div>
                       </TableHead>
                       <TableHead className="font-semibold text-slate-900 py-4 w-[200px] text-[13px] align-top whitespace-nowrap">
                          Remind Before
                          <div className="text-[12px] text-slate-500 font-normal mt-0.5">Task Due Date</div>
                       </TableHead>
                    </TableRow>
                 </TableHeader>
                 <TableBody>
                    {tasks.map((task, i) => (
                       <TableRow key={i} className={cn("border-b border-slate-100 transition-colors", task.benchmark ? "bg-blue-50/20" : "hover:bg-slate-50/50")}>
                          <TableCell className="py-4 font-semibold text-slate-900 pl-6 text-[13px]">
                             [{task.role}] {task.name}
                          </TableCell>
                          <TableCell className="py-4">
                             <span className={cn(
                                "inline-flex px-2 py-1 rounded-md text-[12px] font-medium whitespace-nowrap",
                                task.role === 'Client' ? "bg-[#eef2ff] text-blue-600" : "bg-[#f5f3ff] text-indigo-600"
                             )}>
                                 {task.roleTag}
                             </span>
                          </TableCell>
                          <TableCell className="py-4">
                             <Select defaultValue="1">
                                <SelectTrigger className="h-9 w-[180px] bg-white border-slate-200 shadow-sm text-[13px] text-slate-700 font-medium">
                                   <SelectValue placeholder="Assignee" />
                                </SelectTrigger>
                                <SelectContent>
                                   <SelectItem value="1">{task.assignee}</SelectItem>
                                </SelectContent>
                             </Select>
                          </TableCell>
                          <TableCell className="py-4 text-center">
                             <div className="flex justify-center">
                                <div 
                                  onClick={() => handleBenchmarkSelect(i)}
                                  className={cn(
                                   "w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors active:scale-90",
                                   task.benchmark ? 'border-blue-600' : 'border-slate-300 hover:border-blue-400'
                                )}>
                                   {task.benchmark && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                                </div>
                             </div>
                          </TableCell>
                          <TableCell className="py-4">
                             <div className={cn("flex items-center gap-3 transition-opacity", !task.offset.active && 'opacity-40 grayscale')}>
                                <Switch checked={task.offset.active} onCheckedChange={() => toggleSwitch(i, 'offset')} className="data-[state=checked]:bg-slate-900 shadow-sm" />
                                <div className={cn("flex h-9 border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm w-[180px] focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all", task.offset.active ? "opacity-100" : "pointer-events-none")}>
                                   <button onClick={() => updateSign(i)} className="w-8 shrink-0 bg-slate-50 border-r border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100 active:bg-slate-200 transition-colors">
                                      {task.offset.sign}
                                   </button>
                                   <input type="text" onChange={(e) => handleValueChange(i, 'offset', e.target.value)} className="w-10 text-center text-[13px] focus:outline-none border-r border-slate-200 font-medium text-slate-900" value={task.offset.value} />
                                   <select className="flex-1 text-[13px] bg-white focus:outline-none px-2 text-slate-700 cursor-pointer font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394A3B8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_8px_center] bg-[length:8px] pr-6">
                                      <option>{task.offset.unit}</option>
                                   </select>
                                </div>
                             </div>
                          </TableCell>
                          <TableCell className="py-4">
                             <div className={cn("flex items-center gap-3 transition-opacity", !task.remind.active && 'opacity-40 grayscale')}>
                                <Switch checked={task.remind.active} onCheckedChange={() => toggleSwitch(i, 'remind')} className="data-[state=checked]:bg-slate-900 shadow-sm" />
                                <div className={cn("flex h-9 border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm w-[130px] focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all", task.remind.active ? "opacity-100" : "pointer-events-none")}>
                                   <input type="text" onChange={(e) => handleValueChange(i, 'remind', e.target.value)} className="w-10 text-center text-[13px] focus:outline-none border-r border-slate-200 font-medium text-slate-900" value={task.remind.value} />
                                   <select className="flex-1 text-[13px] bg-white focus:outline-none px-2 text-slate-700 cursor-pointer font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394A3B8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_8px_center] bg-[length:8px] pr-6">
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
       <div id="auto-request" className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden scroll-mt-24">
           <div className="px-6 py-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-[16px]">Auto Placing Request Settings <Info className="w-4 h-4 text-blue-500" /></h3>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                 This request date is calculated from the first task due date.
              </p>
           </div>
           
           <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col gap-3">
                  <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5"><span className="text-rose-500">*</span> Base Task Type <Info className="w-4 h-4 text-slate-400" /></Label>
                  <div className="flex items-start gap-3 px-1 mt-1">
                     <div className="w-[18px] h-[18px] rounded-full border-[5px] border-blue-600 mt-0.5 flex items-center justify-center shrink-0 cursor-pointer active:scale-95 transition-transform" />
                     <div className="flex flex-col gap-1.5 flex-1">
                        <span className="font-semibold text-slate-900 text-[14px] cursor-pointer leading-none">Base on the First Task Due Date</span>
                        <div className="text-[13px] text-slate-500 flex flex-wrap items-center gap-2 mt-1">
                           <span className="font-medium text-slate-400">Currently bound to:</span> 
                           <span className="bg-slate-100 border border-slate-200/60 text-slate-700 px-2 py-0.5 rounded-md font-medium text-[12px] truncate max-w-[220px]" title={`[${tasks[0].role}] ${tasks[0].name}`}>
                              [{tasks[0].role}] {tasks[0].name}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-3">
                  <Label className="text-[13px] font-semibold text-slate-700 flex items-center gap-1.5"><span className="text-rose-500">*</span> Auto Placing Request Date <Info className="w-4 h-4 text-slate-400" /></Label>
                  <div className="flex h-[42px] mt-0.5 ring-1 ring-slate-200 rounded-md overflow-hidden bg-white shadow-sm w-full max-w-[340px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                      <button className="w-10 shrink-0 bg-slate-50 border-r border-slate-200 flex items-center justify-center text-slate-600 font-bold hover:bg-slate-100 active:bg-slate-200 transition-colors">-</button>
                      <input type="text" className="w-12 text-center text-[13px] focus:outline-none border-r border-slate-200 font-semibold text-slate-900 bg-transparent" defaultValue="2" />
                      <select className="flex-1 text-[13px] bg-transparent focus:outline-none px-3 text-slate-800 cursor-pointer border-r border-slate-200 font-medium hover:bg-slate-50 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394A3B8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center] bg-[length:8px] pr-8">
                         <option>Working Days</option>
                      </select>
                      <div className="flex items-center justify-center min-w-[80px] gap-1.5 px-3 bg-slate-50 text-slate-700 font-semibold text-[13px] shrink-0 cursor-pointer hover:bg-slate-100 transition-colors border-l border-white">
                         <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                         14:00
                      </div>
                  </div>
               </div>
           </div>
       </div>

       <div id="invoice-collection" className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-24">
           <div className="px-6 py-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-[16px]">Invoice Collection <Info className="w-4 h-4 text-blue-500" /></h3>
              <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                 Decide whether this schedule should create invoice collection requests before payment review tasks.
              </p>
           </div>

           <div className="p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                 <div>
                    <div className="text-[13px] font-bold text-slate-900">Automated collection</div>
                    <p className="mt-1 max-w-[760px] text-[13px] leading-relaxed text-slate-600">
                       Include invoice collection requests for included contractors when task rules run.
                    </p>
                 </div>
                 <Switch defaultChecked className="data-[state=checked]:bg-blue-600 shrink-0" id="invoice-automated" />
              </div>

              <div className="space-y-2.5">
                 <Label className="text-[13px] font-semibold text-slate-600">Internal Remarks (Optional)</Label>
                 <div className="relative">
                    <textarea
                       placeholder="Add notes for the schedule owner..."
                       className="min-h-[88px] w-full resize-y rounded-md border border-slate-200 bg-slate-50/50 p-3 text-[13px] text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                    <span className="absolute bottom-3 right-3 text-[11px] font-medium text-slate-400">0 / 2000</span>
                 </div>
              </div>
           </div>
       </div>

    </div>
  )
}

function RuleOverview({ href, icon, title, description }: { href: string; icon: ReactNode; title: string; description: string }) {
  return (
    <a href={href} className="rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 transition-colors hover:border-blue-200 hover:bg-blue-50/70">
      <div className="flex items-center gap-2 text-[13px] font-bold text-slate-900">
        <span className="text-blue-600">{icon}</span>
        {title}
      </div>
      <p className="mt-1 text-[12px] leading-relaxed text-slate-500">{description}</p>
    </a>
  );
}

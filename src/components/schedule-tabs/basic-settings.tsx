import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Info, CalendarDays } from "lucide-react"

export function BasicSettings() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Basic Info Section */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
         <div className="px-6 py-4 border-b bg-slate-50/50">
            <h3 className="font-semibold text-slate-800 text-base">Basic Info</h3>
         </div>
         <div className="p-6 flex flex-col gap-6">
            <div className="space-y-2 relative">
               <Label className="flex items-center gap-1.5 text-slate-600">
                  <span className="text-red-500">*</span> Schedule Name
                  <Info className="w-4 h-4 text-slate-400" />
               </Label>
               <Input defaultValue="10311700_Stüssy-Contractor Service 2026" className="bg-slate-50/50" />
               <Button variant="link" className="absolute right-0 top-0 h-auto p-0 text-blue-600 text-sm">Auto Generate</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <Label className="flex items-center gap-1.5 text-slate-600">
                    <span className="text-red-500">*</span> Service Module
                 </Label>
                 <Select defaultValue="contractor">
                   <SelectTrigger className="bg-slate-50/50">
                     <SelectValue placeholder="Select module" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="contractor">Contractor / Monthly Payment</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
               <div className="space-y-2">
                 <Label className="flex items-center gap-1.5 text-slate-600">
                    <span className="text-red-500">*</span> Time Zone
                 </Label>
                 <Select defaultValue="jakarta">
                   <SelectTrigger className="bg-slate-50/50">
                     <SelectValue placeholder="Select timezone" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="jakarta">(GMT+07:00) Asia/Jakarta</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
            </div>

            <div className="space-y-3">
               <Label className="text-slate-600">Service Status</Label>
               <div className="flex items-center space-x-2">
                 <Switch id="service-status" defaultChecked className="data-[state=checked]:bg-blue-600" />
               </div>
            </div>
         </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
         <div className="px-6 py-4 border-b bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-semibold text-slate-800 text-base">Workflow</h3>
         </div>
         <div className="p-6">
            <div className="space-y-2 relative">
               <Label className="flex items-center gap-1.5 text-slate-600">
                  <span className="text-red-500">*</span> Service Flow
               </Label>
               <Select defaultValue="main">
                 <SelectTrigger disabled className="bg-slate-100 text-slate-500 opacity-100 border-slate-200">
                   <SelectValue placeholder="Select flow" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="main">NancyPOBMonthlyPayment-主流程</SelectItem>
                 </SelectContent>
               </Select>
               <Button variant="link" className="absolute right-0 top-0 h-auto p-0 text-blue-600 text-sm">Sync Settings</Button>
            </div>
         </div>
      </section>

       {/* PH & WKND Rules Section */}
       <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
         <div className="px-6 py-4 border-b bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-semibold text-slate-800 text-base">PH & WKND Rules</h3>
            <div className="flex items-center gap-3">
               <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Matches 2 Locations</span>
               <Button variant="outline" size="sm" className="h-8">
                  <CalendarDays className="w-4 h-4 mr-2 text-slate-500" /> Preview Holidays
               </Button>
            </div>
         </div>
         <div className="p-6 space-y-6">
             <div className="flex gap-6 items-center">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="ph-rule" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <span className="text-sm text-slate-700">Use Business Default Rule</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="ph-rule" defaultChecked className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <span className="text-sm font-medium text-slate-900">Custom Configuration</span>
                </label>
             </div>

             <div className="space-y-2">
                 <Label className="flex items-center gap-1.5 text-slate-600">
                    Use PH & WKND for the following locations <Info className="w-4 h-4 text-slate-400" />
                 </Label>
                 <div className="min-h-[40px] px-3 py-2 rounded-md border bg-slate-50/50 flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-slate-200 hover:bg-slate-300 transition-colors text-slate-700 font-normal">BIPO SD (Processor) Location</Badge>
                    <Badge variant="secondary" className="bg-slate-200 hover:bg-slate-300 transition-colors text-slate-700 font-normal">Client Company Location</Badge>
                 </div>
             </div>
         </div>
      </section>

      {/* Processor Section */}
      <section className="bg-white rounded-xl border shadow-sm overflow-hidden">
         <div className="px-6 py-4 border-b bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-semibold text-slate-800 text-base">Processor</h3>
         </div>
         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                 <Label className="text-slate-600">Client Contact (Local/Processor)</Label>
                 <Input disabled defaultValue="Client-Nancy/小号" className="bg-slate-50 border-slate-200 text-slate-500 opacity-100" />
             </div>
             <div className="space-y-2">
                 <Label className="text-slate-600">BIPO SD (Local/Processor)</Label>
                 <Input disabled defaultValue="SD-Nancy Pan" className="bg-slate-50 border-slate-200 text-slate-500 opacity-100" />
             </div>
         </div>
      </section>

    </div>
  )
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Calendar as CalendarIcon, CheckCircle2, X } from "lucide-react";

import { BasicSettings } from "./schedule-tabs/basic-settings";
import { OffsetSettings } from "./schedule-tabs/offset-settings";
import { BenchmarkSettings } from "./schedule-tabs/benchmark-settings";
import { BusinessSettings } from "./schedule-tabs/business-settings";

export function ScheduleModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full max-w-[1200px] h-[95vh] sm:h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header Section */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-slate-800 font-sans tracking-tight">Edit Schedule</h2>
            <Badge variant="secondary" className="font-mono text-xs bg-slate-100 text-slate-500 hover:bg-slate-100 font-normal shadow-none">
              ID: 202510311724425870
            </Badge>
          </div>
          <button 
            onClick={() => onOpenChange(false)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Context Bar */}
        <div className="bg-slate-50 px-6 py-3 flex flex-wrap items-center gap-x-12 gap-y-3 border-b shrink-0 text-sm">
           <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-md shadow-sm border border-slate-100"><FileText className="w-4 h-4 text-blue-500" /></div>
              <span className="text-slate-500 font-medium">Client Name:</span>
              <span className="font-semibold text-slate-800">Stüssy</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-md shadow-sm border border-slate-100"><CalendarIcon className="w-4 h-4 text-amber-500" /></div>
              <span className="text-slate-500 font-medium">Year:</span>
              <span className="font-semibold text-slate-800">2026</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-md shadow-sm border border-slate-100"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
              <span className="text-slate-500 font-medium">Status:</span>
              <Badge className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200 shadow-none px-2 py-0">Client Confirmed</Badge>
           </div>
        </div>

        {/* Form Body with Tabs */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-50/50">
          <Tabs defaultValue="basic" className="flex-1 flex flex-col min-h-0 w-full">
              <div className="px-6 border-b bg-white shrink-0 pt-2 overflow-x-auto custom-scrollbar">
                  <TabsList className="bg-transparent h-12 p-0 gap-8 min-w-max flex justify-start">
                      <TabsTrigger 
                        value="basic" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent px-1 pb-3 pt-2 text-sm font-semibold text-slate-500 data-[state=active]:text-blue-700"
                      >
                          Basic Settings
                      </TabsTrigger>
                      <TabsTrigger 
                        value="offset" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent px-1 pb-3 pt-2 text-sm font-semibold text-slate-500 data-[state=active]:text-blue-700"
                      >
                         Offset Due Date Settings
                      </TabsTrigger>
                      <TabsTrigger 
                        value="benchmark" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent px-1 pb-3 pt-2 text-sm font-semibold text-slate-500 data-[state=active]:text-blue-700"
                      >
                         Benchmark Date Settings
                      </TabsTrigger>
                      <TabsTrigger 
                        value="business" 
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:shadow-none bg-transparent data-[state=active]:bg-transparent px-1 pb-3 pt-2 text-sm font-semibold text-slate-500 data-[state=active]:text-blue-700"
                      >
                         Business Settings
                      </TabsTrigger>
                  </TabsList>
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                  <div className="max-w-5xl mx-auto">
                      <TabsContent value="basic" className="m-0 focus-visible:outline-none"><BasicSettings /></TabsContent>
                      <TabsContent value="offset" className="m-0 focus-visible:outline-none"><OffsetSettings /></TabsContent>
                      <TabsContent value="benchmark" className="m-0 focus-visible:outline-none"><BenchmarkSettings /></TabsContent>
                      <TabsContent value="business" className="m-0 focus-visible:outline-none"><BusinessSettings /></TabsContent>
                  </div>
              </div>
          </Tabs>
        </div>
        
        {/* Footer actions */}
        <div className="bg-white border-t px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="text-xs text-slate-400 font-medium">
               Latest Upgrade Workflow Version Time: <span className="text-slate-500">2025-08-27 11:15:49</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
               <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1 sm:flex-none">Cancel</Button>
               <Button variant="outline" className="font-semibold text-slate-700 bg-slate-50 flex-1 sm:flex-none">Upgrade Workflow</Button>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white min-w-[120px] flex-1 sm:flex-none shadow-md">Confirm</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

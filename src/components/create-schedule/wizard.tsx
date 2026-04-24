import { useState } from "react";
import { AlertTriangle, ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { BasicSettingsStep } from "./step-basic";
import { BenchmarkDatesStep } from "./step-benchmark";
import { OffsetSettingsStep } from "./step-offset";
import { ScopeCalendarStep } from "./step-scope-calendar";
import { PreviewConfirmStep } from "./step-preview-confirm";

const STEPS = [
  { id: 1, title: 'Basic Information', desc: 'Schedule setup' },
  { id: 2, title: 'Scope & Calendar', desc: 'Contractors and calendar' },
  { id: 3, title: 'Monthly Payment Dates', desc: 'Monthly benchmark dates' },
  { id: 4, title: 'Task Rules', desc: 'Due dates and reminders' },
  { id: 5, title: 'Preview & Confirm', desc: 'Expected dates and summary' },
];

const TOTAL_STEPS = STEPS.length;

export function CreateScheduleWizard({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#f8fafc] font-sans">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-200 shrink-0 h-[60px]">
        <div className="flex items-center gap-5">
          <button onClick={onBack} className="text-slate-500 hover:text-slate-800 flex items-center gap-2 text-[14px] font-medium transition-colors">
            <X className="w-4 h-4" />
          </button>
          <div className="h-5 w-px bg-slate-200" />
          <h1 className="text-[16px] font-bold text-slate-900 tracking-tight">Create Schedule</h1>
          <Badge variant="secondary" className="text-blue-700 bg-blue-50 hover:bg-blue-50 border-transparent shadow-none font-medium text-[11px] px-2 py-0.5 rounded-sm">Draft</Badge>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onBack} className="text-slate-600 font-medium hover:bg-slate-100 text-[13px] h-9">Cancel</Button>
          <Button variant="outline" className="bg-white border-slate-300 text-slate-700 font-medium text-[13px] h-9">Save as Draft</Button>
        </div>
      </div>

      {/* Context Bar */}
      <div className="flex items-center gap-4 px-8 py-2.5 bg-slate-50/80 border-b border-slate-200 shrink-0 text-sm shadow-sm z-10 w-full overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          <span className="text-slate-500 text-[12px] font-semibold uppercase tracking-wider">Client:</span>
          <span className="font-bold text-slate-900 text-[13px]">Stüssy</span>
        </div>
        <div className="w-[3px] h-[3px] rounded-full bg-slate-300 mx-2" />
        <div className="flex items-center gap-1.5 min-w-max">
          <span className="text-slate-500 text-[12px] font-semibold uppercase tracking-wider">Year:</span>
          <span className="font-bold text-slate-900 text-[13px]">2026</span>
        </div>
      </div>

      {/* Main Layout (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Steps */}
        <div className="w-[280px] bg-[#f8fafc] border-r border-slate-200 py-8 px-6 overflow-y-auto custom-scrollbar shrink-0 flex flex-col">
          <div className="flex flex-col flex-1 relative z-0 pl-2">
             {/* Vertical connecting line */}
             <div className="absolute left-[15px] top-6 bottom-10 w-[2px] bg-slate-200 -z-10" />

             {STEPS.map((step) => {
               const isActive = currentStep === step.id;
               const isCompleted = currentStep > step.id;
               const hasWarning = step.id === 5;
               
               return (
                 <button
                   key={step.id}
                   type="button"
                   onClick={() => setCurrentStep(step.id)}
                   className="relative pb-[38px] last:pb-0 group w-full text-left"
                 >
                   <div className="flex items-start gap-4">
                      {/* Circle Indicator */}
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[13px] font-bold transition-all relative z-10",
                        isCompleted ? "bg-[#0052cc] text-white shadow-sm ring-8 ring-[#f8fafc]" :
                        isActive ? "bg-white border-2 border-[#0052cc] text-[#0052cc] shadow-sm ring-8 ring-[#f8fafc]" : 
                        "bg-[#f0f3f6] text-slate-500 ring-8 ring-[#f8fafc] group-hover:bg-white group-hover:text-[#0052cc]"
                      )}>
                         {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                      </div>

                      {/* Text */}
                      <div className="flex flex-col pt-1.5">
                         <span className={cn(
                            "text-[14px] font-bold transition-colors leading-none tracking-tight", 
                            isActive ? "text-slate-900" : isCompleted ? "text-slate-700" : "text-slate-400 group-hover:text-slate-500"
                         )}>
                            {step.title}
                         </span>
                         <span className={cn(
                            "text-[12px] mt-1.5 transition-colors leading-snug font-medium flex items-center gap-1.5",
                            isActive ? "text-slate-500" : isCompleted ? "text-slate-400" : "text-slate-400 opacity-70"
                         )}>
                            {hasWarning && <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />}
                            {step.desc}
                         </span>
                      </div>
                   </div>
                 </button>
               );
             })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white custom-scrollbar flex flex-col relative w-full">
           <div className="flex-1 px-6 md:px-10 py-8 w-full 2xl:max-w-[1500px] xl:max-w-[1300px] mx-auto pb-32">
              {currentStep === 1 && <BasicSettingsStep />}
              {currentStep === 2 && <ScopeCalendarStep />}
              {currentStep === 3 && <BenchmarkDatesStep />}
              {currentStep === 4 && <OffsetSettingsStep />}
              {currentStep === 5 && <PreviewConfirmStep onEdit={setCurrentStep} />}
           </div>
           
           {/* Bottom Action Bar */}
           <div className="fixed bottom-0 right-0 left-[280px] bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 sm:px-12 flex items-center justify-between z-10">
              <Button 
                 variant="outline" 
                 onClick={handlePrev} 
                 disabled={currentStep === 1}
                 className={cn(
                    "px-6 border-slate-300 font-medium text-[13px] h-9",
                    currentStep === 1 ? "opacity-0 pointer-events-none" : "text-slate-700 hover:bg-slate-50"
                 )}
              >
                 Back
              </Button>
              <div className="flex-1" />
              {currentStep === TOTAL_STEPS ? (
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 font-medium shadow-sm text-[13px] h-9">
                     Create Schedule
                  </Button>
              ) : (
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 font-medium shadow-sm gap-2 text-[13px] h-9" onClick={handleNext}>
                     Next Step <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
              )}
           </div>
        </div>
      </div>
    </div>
  )
}

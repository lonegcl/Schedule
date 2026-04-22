import { useState } from "react";
import { ArrowLeft, FileText, Calendar as CalendarIcon, CheckCircle2, MessageCircleQuestion, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { BasicSettingsStep } from "./step-basic";
import { PhWkndRulesStep } from "./step-ph-wknd";
import { BenchmarkDatesStep } from "./step-benchmark";
import { OffsetSettingsStep } from "./step-offset";
import { BusinessSettingsStep } from "./step-business";
import { ReviewConfirmStep } from "./step-review";

const STEPS = [
  { id: 1, title: 'Basic Settings', desc: 'Schedule setup' },
  { id: 2, title: 'PH & WKND Rules', desc: 'Working days & holidays' },
  { id: 3, title: 'Benchmark Dates', desc: 'Monthly benchmark dates' },
  { id: 4, title: 'Offset Due Date', desc: 'Task due dates' },
  { id: 5, title: 'Business Settings', desc: 'Contractor & invoices' },
  { id: 6, title: 'Review & Confirm', desc: 'Verify all settings' },
];

export function CreateScheduleWizard({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
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
          {currentStep === 6 ? (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-medium text-[13px] h-9">Create Schedule</Button>
          ) : (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-medium text-[13px] h-9" onClick={handleNext}>
                Next Step <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
          )}
        </div>
      </div>

      {/* Context Bar */}
      <div className="flex items-center gap-10 px-8 py-2.5 bg-white border-b border-slate-100 shrink-0 text-sm shadow-sm z-10 w-full overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Client:</span>
          <span className="font-semibold text-slate-800 text-[13px]">Stüssy</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-200" />
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Year:</span>
          <span className="font-semibold text-slate-800 text-[13px]">2026</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-200" />
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Module:</span>
          <span className="font-semibold text-slate-800 text-[13px]">Contractor / Monthly Payment</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-slate-200" />
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Time Zone:</span>
          <span className="font-semibold text-slate-800 text-[13px]">(GMT+07:00) Asia/Jakarta</span>
        </div>
      </div>

      {/* Main Layout (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Steps */}
        <div className="w-[280px] bg-[#f8fafc] border-r border-slate-200 py-8 px-6 overflow-y-auto custom-scrollbar shrink-0 flex flex-col">
          <div className="flex flex-col flex-1 relative z-0 pl-2">
             {/* Vertical connecting line */}
             <div className="absolute left-[17px] top-6 bottom-10 w-[2px] bg-slate-200 -z-10" />

             {STEPS.map((step) => {
               const isActive = currentStep === step.id;
               const isCompleted = currentStep > step.id;
               
               return (
                 <div key={step.id} className="relative pb-8 last:pb-0 group">
                   <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-[22px] h-[22px] mt-0.5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold transition-all relative z-10",
                        isCompleted ? "bg-blue-600 text-white shadow-sm ring-4 ring-[#f8fafc]" : 
                        isActive ? "bg-white border-2 border-blue-600 text-blue-600 shadow-sm ring-4 ring-[#f8fafc]" : 
                        "bg-white border-2 border-slate-200 text-slate-400 ring-4 ring-[#f8fafc]"
                      )}>
                         {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : step.id}
                      </div>
                      <div className="flex flex-col pt-0.5 cursor-default">
                         <span className={cn(
                            "text-[13.5px] font-semibold transition-colors", 
                            isActive ? "text-slate-900" : isCompleted ? "text-slate-700" : "text-slate-400 group-hover:text-slate-600"
                         )}>
                            {step.title}
                         </span>
                         <span className={cn(
                            "text-[12px] mt-1 transition-colors leading-snug",
                            isActive ? "text-slate-500" : "text-slate-400 opacity-60"
                         )}>{step.desc}</span>
                      </div>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-white custom-scrollbar flex flex-col relative w-full">
           <div className="flex-1 px-6 md:px-10 py-8 w-full 2xl:max-w-[1500px] xl:max-w-[1300px] mx-auto pb-32">
              {currentStep === 1 && <BasicSettingsStep onNext={handleNext} currentStep={1} totalSteps={6} />}
              {currentStep === 2 && <PhWkndRulesStep />}
              {currentStep === 3 && <BenchmarkDatesStep />}
              {currentStep === 4 && <OffsetSettingsStep />}
              {currentStep === 5 && <BusinessSettingsStep />}
              {currentStep === 6 && <ReviewConfirmStep />}
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
              {currentStep === 6 ? (
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

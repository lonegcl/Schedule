import { Button } from "@/components/ui/button";
import { CopyPlus, Plus, ChevronLeft } from "lucide-react";
import { YearlyGrid } from "./yearly-grid";

export function YearlyScheduling({ onCreateClick }: { onCreateClick?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* View Header */}
      <div className="h-14 flex items-center justify-between px-4 sm:px-6 bg-[#4f5ee3] text-white shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h1 className="font-semibold">Yearly Scheduling (2026)</h1>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-9">
             <CopyPlus className="w-4 h-4 mr-2" />
             Duplicate Last Year Schedule
           </Button>
           <div className="flex bg-white/10 rounded-md p-1">
             <Button variant="ghost" className="h-7 text-white hover:bg-white/20 px-3 text-sm">Import Schedule</Button>
             <div className="w-px bg-white/20 mx-1" />
             <Button 
                variant="ghost" 
                className="h-7 text-white hover:bg-white/20 px-3 text-sm font-medium"
                onClick={onCreateClick}
             >
                <Plus className="w-4 h-4 mr-1" /> Create Schedule
             </Button>
           </div>
        </div>
      </div>

      {/* Main Grid Area */}
      <div className="flex-1 overflow-hidden flex bg-white relative">
         <YearlyGrid />
      </div>
    </div>
  )
}

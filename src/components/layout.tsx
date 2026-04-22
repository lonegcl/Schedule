import React from 'react';
import { Calendar, CalendarCheck, CalendarDays, CheckSquare, CreditCard, Home, MessageSquare, Settings, Users, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
    <div className="flex bg-slate-50 min-h-screen text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white shrink-0 hidden lg:flex flex-col">
        <div className="h-14 flex items-center px-6 border-b shrink-0 bg-amber-400">
           <span className="font-bold text-xl tracking-tight text-white dark:text-slate-900">butter</span>
        </div>
        <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-1 px-3">
          <NavItem icon={<Home className="w-4 h-4" />} label="Home" />
          <NavItem icon={<MessageSquare className="w-4 h-4" />} label="ChatRooms" />
          <NavItem icon={<CheckSquare className="w-4 h-4" />} label="Approvals" />
          <NavItem icon={<CheckSquare className="w-4 h-4" />} label="Tasks" />
          <NavItem icon={<FolderOpen className="w-4 h-4" />} label="Requests" />
          <NavItem icon={<Calendar className="w-4 h-4" />} label="Calendar" />
          
          <div className="pt-4 pb-1">
             <div className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>Calendar Schedule</span>
             </div>
             <NavItem icon={<CalendarDays className="w-4 h-4" />} label="My Calendar Schedule" />
             <NavItem icon={<CalendarDays className="w-4 h-4" />} label="All Calendar Schedule" />
             <NavItem icon={<CalendarCheck className="w-4 h-4" />} label="My Cal Sched Report" active />
             <NavItem icon={<CalendarCheck className="w-4 h-4" />} label="All Cal Sched Report" />
          </div>

          <NavItem icon={<CreditCard className="w-4 h-4" />} label="Billing & Invoices" />
          <NavItem icon={<Users className="w-4 h-4" />} label="People" />
          <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
        </div>
      </aside>

      {/* Main Column */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
        <header className="h-14 border-b bg-white flex items-center px-4 justify-between shrink-0 shadow-sm z-10 relative">
          <div className="flex items-center gap-4">
             <span className="font-semibold text-slate-800 text-lg">My Cal Sched Report</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border">
                <Users className="w-4 h-4" />
                <span className="font-medium">BIPO · Kevin_SD</span>
             </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-hidden relative flex flex-col">
           {children}
        </main>
      </div>
    </div>
    </TooltipProvider>
  )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={cn(
            "flex items-center w-full gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left font-medium",
            active 
                ? "bg-slate-100 text-slate-900" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        )}>
            {icon}
            <span className="truncate">{label}</span>
        </button>
    )
}

import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CONTRACTORS = [
  {
    name: "Carlos Mendez",
    email: "Carlos Mendez",
    country: "Mexico",
    paymentDate: "last day of the month",
    currency: "USD",
    fee: "Fixed/ Per day 1950",
    status: "In Service",
    payPeriodOffset: 0,
  },
  {
    name: "James Wilson",
    email: "James Wilson",
    country: "Australia",
    paymentDate: "last day of the month",
    currency: "AUD",
    fee: "Flexible/ Per month",
    status: "In Service",
    payPeriodOffset: 0,
  },
  {
    name: "Olivia Brown",
    email: "Olivia Brown",
    country: "United States of America (the)",
    paymentDate: "last day of the month",
    currency: "TWD",
    fee: "Fixed/ Per month 3200",
    status: "In Service",
    payPeriodOffset: 0,
  },
];

export function BusinessSettingsStep({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {showHeader && (
        <div>
          <h2 className="mb-2 text-[24px] font-bold tracking-tight text-slate-900">Scope & Invoice Settings</h2>
          <p className="text-[14px] font-medium text-slate-500">Confirm who this schedule applies to.</p>
        </div>
      )}

      <section id="contractors" className="scroll-mt-20 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3 className="flex items-center gap-1.5 text-[16px] font-bold text-slate-900">
              Applicable Contractors Setting
              <Info className="h-4 w-4 text-blue-600" />
            </h3>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
              Add contractors from the project and confirm the payment fields used by this schedule.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge className="border border-emerald-100 bg-emerald-50 text-emerald-700 shadow-none hover:bg-emerald-50">
              3 in service
            </Badge>
            <Badge className="border border-blue-100 bg-blue-50 text-blue-700 shadow-none hover:bg-blue-50">
              Monthly payment
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5 text-[13px] font-medium text-slate-600">
            <Switch id="show-terminated" className="shadow-sm" />
            <label htmlFor="show-terminated" className="cursor-pointer">
              Show Terminated
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-9 border-red-200 bg-white text-[13px] font-semibold text-red-500 hover:bg-red-50 hover:text-red-600">
              Remove All
            </Button>
            <Button variant="outline" className="h-9 border-slate-300 bg-white text-[13px] font-semibold text-slate-800 hover:bg-slate-50">
              Import
            </Button>
            <Button className="h-9 bg-blue-600 px-5 text-[13px] font-semibold text-white shadow-sm hover:bg-blue-700">
              Add
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <Table className="min-w-[1180px]">
            <TableHeader className="bg-slate-50/80">
              <TableRow className="border-b border-slate-200 hover:bg-transparent">
                <TableHead className="w-[170px] py-4 pl-6 text-[13px] font-semibold text-slate-900">Contractor Name</TableHead>
                <TableHead className="w-[170px] py-4 text-[13px] font-semibold text-slate-900">Email Address</TableHead>
                <TableHead className="w-[220px] py-4 text-[13px] font-semibold text-slate-900">Landing Service Country/Region</TableHead>
                <TableHead className="w-[160px] py-4 text-[13px] font-semibold text-slate-900">BIPO Payment Date</TableHead>
                <TableHead className="w-[110px] py-4 text-[13px] font-semibold text-slate-900">Fee Currency</TableHead>
                <TableHead className="w-[180px] py-4 text-[13px] font-semibold text-slate-900">Contractor Fee</TableHead>
                <TableHead className="w-[120px] py-4 text-[13px] font-semibold text-slate-900">Status</TableHead>
                <TableHead className="w-[180px] py-4 text-[13px] font-semibold text-slate-900">
                  <div className="flex items-center gap-1.5">
                    Pay Period Rule
                    <Info className="h-3.5 w-3.5 text-blue-600" />
                  </div>
                </TableHead>
                <TableHead className="w-[100px] py-4 pr-6 text-[13px] font-semibold text-slate-900">Operation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {CONTRACTORS.map((contractor) => (
                <TableRow key={contractor.name} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60">
                  <TableCell className="py-4 pl-6 text-[13px] font-semibold text-slate-900">{contractor.name}</TableCell>
                  <TableCell className="py-4 text-[13px] text-slate-600">{contractor.email}</TableCell>
                  <TableCell className="py-4 text-[13px] text-slate-600">{contractor.country}</TableCell>
                  <TableCell className="py-4 text-[13px] text-slate-700">{contractor.paymentDate}</TableCell>
                  <TableCell className="py-4 text-[13px] text-slate-700">{contractor.currency}</TableCell>
                  <TableCell className="py-4 text-[13px] text-slate-700">{contractor.fee}</TableCell>
                  <TableCell className="py-4">
                    <Badge className="border border-green-100 bg-green-50 text-green-700 shadow-none hover:bg-green-50">
                      {contractor.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="inline-flex h-8 overflow-hidden rounded-md border border-slate-200 bg-white text-[13px]">
                      <button type="button" className="w-9 border-r border-slate-200 bg-slate-50 text-slate-400">
                        -
                      </button>
                      <div className="flex w-9 items-center justify-center border-r border-slate-200 text-slate-900">
                        {contractor.payPeriodOffset}
                      </div>
                      <div className="flex w-20 items-center justify-center bg-slate-50 text-slate-400">
                        months
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 pr-6">
                    <button type="button" className="text-[13px] font-semibold text-red-500 hover:text-red-600 hover:underline">
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}

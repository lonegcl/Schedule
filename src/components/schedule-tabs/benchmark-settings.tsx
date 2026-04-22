import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Next Jan"];
const DATA: Record<string, string | null> = {
    "Jan": "2026-01-20",
    "Apr": "2026-04-20",
    "Jul": "2026-07-17",
    "Oct": "2026-10-20",
};

export function BenchmarkSettings() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-3 mb-2">
         <Button variant="outline" className="text-slate-700 bg-white">Clear</Button>
         <Button className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-none shadow-none font-medium">Add Benchmark Date</Button>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-8">
        <Table>
            <TableHeader className="bg-slate-50 text-slate-600">
                <TableRow>
                <TableHead className="w-1/2">Benchmark Month</TableHead>
                <TableHead className="w-1/2">Benchmark Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {MONTHS.map(month => (
                    <TableRow key={month} className="hover:bg-slate-50/50">
                        <TableCell className="font-medium text-slate-700 py-3">{month}</TableCell>
                        <TableCell className="py-3">
                            {DATA[month] ? (
                                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-green-50 text-green-700 border border-green-100">
                                    {DATA[month]}
                                </span>
                            ) : (
                                <span className="text-sm text-slate-400 font-medium">Not Set</span>
                            )}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </div>
    </div>
  )
}

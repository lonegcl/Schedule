import { SchedulePreviewStep } from "./step-preview";

export function PreviewConfirmStep({ onEdit }: { onEdit: (step: number) => void }) {
  return (
    <div className="flex max-w-[1320px] flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="mb-2 text-[24px] font-bold tracking-tight text-slate-900">Preview & Confirm</h2>
        <p className="text-[14px] font-medium text-slate-500">
          Review what will be included in the schedule before creating the configuration.
        </p>
      </div>

      <SchedulePreviewStep
        showHeader={false}
        onEditPaymentDates={() => onEdit(3)}
        onEditTaskRules={() => onEdit(4)}
      />
    </div>
  );
}

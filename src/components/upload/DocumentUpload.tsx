import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { PERMITS } from "@/data/permits";
import { cn } from "@/lib/utils";
import { calculateNextRenewalDate } from "@/lib/permit-utils";

const DocumentUpload = () => {
  const [selectedPermit, setSelectedPermit] = useState("");
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const selectedPermitData = PERMITS.find(p => p.id === selectedPermit);

  const handleUpload = () => {
    if (!selectedPermit || !date) {
      toast.error("Please select a permit and date");
      return;
    }

    const nextRenewal = calculateNextRenewalDate(date, selectedPermitData?.renewalPeriod || "");
    
    toast.success(
      <div className="space-y-2">
        <p>Document uploaded successfully!</p>
        {nextRenewal && (
          <p className="text-sm text-muted-foreground">
            Next renewal due: {format(nextRenewal, 'PPP')}
          </p>
        )}
      </div>
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UploadCloud className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Permit</label>
            <Select value={selectedPermit} onValueChange={setSelectedPermit}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a permit" />
              </SelectTrigger>
              <SelectContent>
                {PERMITS.map((permit) => (
                  <SelectItem key={permit.id} value={permit.id}>
                    {permit.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Document Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="rounded-lg border-2 border-dashed p-8">
            <div className="flex flex-col items-center">
              <UploadCloud className="mb-4 h-8 w-8 text-gray-400" />
              <p className="mb-2 text-sm font-medium">Drag & drop files here</p>
              <p className="text-xs text-gray-500">or click to browse files</p>
            </div>
          </div>

          <Button className="w-full" onClick={handleUpload}>
            Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentUpload;
import { Document } from "@/types/permits";
import { Button } from "@/components/ui/button";
import { FileIcon, UploadIcon, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface DocumentItemProps {
  document: Document;
}

const DocumentItem = ({ document }: DocumentItemProps) => {
  const handleUpload = () => {
    toast.info(`Upload functionality for ${document.name} will be implemented soon`);
  };

  const getStatusIcon = (status: Document["status"]) => {
    switch (status) {
      case "uploaded":
        return <FileIcon className="h-5 w-5 text-success" />;
      case "missing":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "expired":
        return <AlertCircle className="h-5 w-5 text-danger" />;
    }
  };

  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center space-x-3">
        {getStatusIcon(document.status)}
        <div>
          <p className="font-medium">{document.name}</p>
          {document.uploadDate && (
            <p className="text-sm text-gray-500">
              Uploaded: {new Date(document.uploadDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
      {document.status !== "uploaded" && (
        <Button
          variant="outline"
          size="sm"
          onClick={handleUpload}
        >
          <UploadIcon className="mr-2 h-4 w-4" />
          Upload
        </Button>
      )}
    </div>
  );
};

export default DocumentItem;
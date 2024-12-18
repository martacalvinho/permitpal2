import { Document } from "../types/permits";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, UploadIcon, AlertCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DocumentListProps {
  documents: Document[];
  permitName: string;
}

const DocumentList = ({ documents, permitName }: DocumentListProps) => {
  const handleUpload = (documentName: string) => {
    // In a real application, this would trigger a file upload dialog
    toast.info(`Upload functionality for ${documentName} will be implemented soon`);
  };

  const getStatusIcon = (status: Document["status"]) => {
    switch (status) {
      case "uploaded":
        return <FileIcon className="h-5 w-5 text-success" />;
      case "missing":
        return <AlertCircleIcon className="h-5 w-5 text-warning" />;
      case "expired":
        return <AlertCircleIcon className="h-5 w-5 text-danger" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Required Documents for {permitName}</CardTitle>
      </CardHeader>
      <CardContent>
        {documents.length === 0 ? (
          <p className="text-sm text-gray-500">No documents required</p>
        ) : (
          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center space-x-3">
                  {getStatusIcon(doc.status)}
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    {doc.uploadDate && (
                      <p className="text-sm text-gray-500">
                        Uploaded: {new Date(doc.uploadDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                {doc.status !== "uploaded" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUpload(doc.name)}
                  >
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentList;
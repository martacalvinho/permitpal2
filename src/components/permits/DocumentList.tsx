import { Document } from "@/types/permits";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, UploadIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DocumentItem from "./DocumentItem";

interface DocumentListProps {
  documents: Document[];
  permitName: string;
}

const DocumentList = ({ documents, permitName }: DocumentListProps) => {
  if (documents.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Required Documents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((doc) => (
            <DocumentItem key={doc.id} document={doc} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentList;
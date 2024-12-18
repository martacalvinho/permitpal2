export type PermitStatus = "active" | "expiring" | "expired" | "pending";

export type DocumentStatus = "uploaded" | "missing" | "expired";

export interface Document {
  id: string;
  name: string;
  status: DocumentStatus;
  uploadDate?: string;
  expirationDate?: string;
  fileUrl?: string;
}

export interface Permit {
  id: string;
  name: string;
  issuingAgency: string;
  description: string;
  applicationUrl: string;
  renewalPeriod: string;
  cost: string;
  prerequisites: string[];
  status: PermitStatus;
  expirationDate: string;
  lastRenewalDate: string;
  nextRenewalDate: string;
  requiredDocuments: Document[];
}

export interface Business {
  id: string;
  name: string;
  address: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
}
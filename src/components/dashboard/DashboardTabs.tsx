import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList, Shield, Calendar } from "lucide-react";

interface DashboardTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const DashboardTabs = ({ activeTab, onTabChange }: DashboardTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="permits" className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4" />
          Permits
        </TabsTrigger>
        <TabsTrigger value="foodSafety" className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          Food Safety
        </TabsTrigger>
        <TabsTrigger value="localEvents" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Local Events
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default DashboardTabs;
import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import PermitsSection from "@/components/dashboard/sections/PermitsSection";
import FoodSafetySection from "@/components/dashboard/sections/FoodSafetySection";
import LocalEventsSection from "@/components/dashboard/sections/LocalEventsSection";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("permits");

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <DashboardHeader
          title="NYC Cafe Permit Manager"
          description="Track and manage your cafe's essential permits and licenses"
        />

        <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-8">
          {activeTab === "permits" && <PermitsSection />}
          {activeTab === "foodSafety" && <FoodSafetySection />}
          {activeTab === "localEvents" && <LocalEventsSection />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
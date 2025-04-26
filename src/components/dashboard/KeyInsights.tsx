"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDashboard } from "@/context/DashboardContext";
import { Separator } from "@/components/ui/separator";
import { memo } from "react";

const KeyInsights = () => {
  const { dashboardData } = useDashboard();
  const { salesGrowth, performer } = dashboardData.feedback;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm w-full h-auto min-h-[240px] max-h-[263px] overflow-hidden">
      <div className="flex justify-between items-start mb-3 pt-1">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">Key Insights & Feedback</h2>
      </div>

      <div className="flex items-center mb-3">
        <div className="flex-1">
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">{salesGrowth}%</div>
          <div className="text-xs sm:text-sm text-gray-600">Sales Growth</div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Avatar className="w-8 h-8 sm:w-9 sm:h-9">
            <AvatarImage src={performer} alt="Top Performer Badge" />
            <AvatarFallback>TP</AvatarFallback>
          </Avatar>
          <div className="ml-1 px-2 py-0.5 text-xs text-[#279dd4] font-medium rounded-full bg-[#d5f2ff80] border-[#bae9ff] border-[1.5px]">
            Top Performer
          </div>
        </div>
      </div>

      <Separator className="h-1.5 bg-[#eaecf0] mb-3" />

      <div className="bg-gray-50 p-2.5 rounded-lg">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1.5">Feedback</h3>
        <div className="flex items-start">
          <span className="w-2 h-2 rounded-full bg-gray-300 mr-2 mt-1"></span>
          <p className="text-xs text-gray-600">
            Franchisees are requesting more detailed training materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(KeyInsights);
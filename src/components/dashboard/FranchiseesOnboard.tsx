"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp } from "lucide-react";
import { useDashboard } from "@/context/DashboardContext";
import { memo } from "react";

const FranchiseesOnboard = () => {
  const { dashboardData } = useDashboard();
  const { franchiseesOnboardAvatars, stages, total, growth } = dashboardData.franchisees;

  const avatarCount = franchiseesOnboardAvatars.length;
  const remainingAvatars = total - avatarCount;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full h-auto min-h-[240px] max-h-[263px] overflow-hidden">
      <h2 className="text-base sm:text-lg font-semibold mb-1 leading-tight text-gray-900">
        Total Franchisees Onboard
      </h2>

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-2 pt-0.5">
        <div className="flex items-center mb-1 xl:mb-0">
          <span className="text-2xl sm:text-3xl font-bold text-gray-900 mr-2">{total}</span>
          <div className="flex items-center text-green-600 text-xs border-green-600 border-[1.5px] px-1.5 py-0.5 rounded-full font-semibold">
            <TrendingUp size={10} className="mr-0.5" />
            <span>{growth}%</span>
          </div>
        </div>

        <div className="flex -space-x-2">
          {franchiseesOnboardAvatars.map((user, i) => (
            <Avatar key={i} className="w-6 h-6 sm:w-7 sm:h-7 border-2 border-white">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
          ))}
          {remainingAvatars > 0 && (
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-200 text-gray-700 text-xs flex items-center justify-center font-medium border-2 border-white">
              +{remainingAvatars}
            </div>
          )}
        </div>
      </div>

      <div className="flex h-[10px] mb-3">
        {stages.map((stage, index) => {
          const width = (stage.count / total) * 100;
          return (
            <div
              key={index}
              className={`${stage.color} ${index !== 0 ? "ml-1" : ""} rounded-sm`}
              style={{ width: `${width}%` }}
            />
          );
        })}
      </div>

      <div className="space-y-1 md:space-y-2">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-2.5 h-2.5 rounded-full ${stage.color} mr-1.5`}></div>
              <span className="text-xs sm:text-sm text-gray-600">{stage.name}</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-800">
              {stage.count.toString().padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(FranchiseesOnboard);
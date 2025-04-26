"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileSidebarTrigger } from "@/components/MobileSidebarTrigger";

import AccountProgress from "@/components/dashboard/AccountProgress";
import KeyInsights from "@/components/dashboard/KeyInsights";

const FranchiseesOnboard = dynamic(() => import("@/components/dashboard/FranchiseesOnboard"), {
  ssr: false,
});
const FinancialWellbeing = dynamic(() => import("@/components/dashboard/FinancialWellbeing"), {
  ssr: false,
});
const ProspectLeads = dynamic(() => import("@/components/dashboard/ProspectLeads"), {
  ssr: false,
});
const PendingQuestions = dynamic(() => import("@/components/dashboard/PendingQuestions"), {
  ssr: false,
});
const AIChat = dynamic(() => import("@/components/dashboard/AIChat"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-white text-gray-900">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <AppSidebar />
        </aside>

        {/* Mobile sidebar trigger */}
        <div className="lg:hidden fixed top-3 left-3 z-50">
          <MobileSidebarTrigger />
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <Header />
          <main className="p-4 overflow-y-auto border-b border-[#eaecf0]" aria-label="Dashboard Main Content">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
              <motion.div
                className="space-y-4 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AccountProgress />
              </motion.div>

              <motion.div
                className="space-y-4 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FranchiseesOnboard />
                <FinancialWellbeing />
              </motion.div>

              <motion.div
                className="space-y-4 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <KeyInsights />
                <ProspectLeads />
              </motion.div>
            </section>
          </main>

          {/* Bottom Section: Pending Questions & AI Chat */}
          <section className="flex flex-col lg:flex-row w-full bg-gray-50" aria-label="Support Chat and Pending Questions">
            <motion.div
              className="w-full lg:w-1/3 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <PendingQuestions />
            </motion.div>
            <motion.div
              className="w-full lg:w-2/3 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <AIChat />
            </motion.div>
          </section>
        </div>
      </div>
    </SidebarProvider>
  );
}

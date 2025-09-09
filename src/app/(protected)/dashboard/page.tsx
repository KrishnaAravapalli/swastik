// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Search } from "lucide-react";
import React from "react";
import dynamic from "next/dynamic";
import MoodTracker from "@/components/ui/MoodTracker";


const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className="flex min-h-screen bg-[#222222] p-6">
      <div className="flex-3 pr-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {session.user?.name || 'User'}! 👋
          </h1>

          {/* Search Bar */}
          <div className="mt-4 relative w-3/4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search activities, events..."
              className="w-full bg-[#2A2A2A] text-white placeholder-gray-500 rounded-lg pl-10 pr-4 py-2 border border-gray-300/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all rounded-xl"
            />
          </div>
        </div>

        {/* Other dashboard content can go here */}

      </div>

      <div className="flex-1">
     <MoodTracker
      imageUrl={session.user?.image ?? null}
      email={session.user?.email ?? null}
     />

      </div>
    </div>
  );
};

export default DashboardPage;

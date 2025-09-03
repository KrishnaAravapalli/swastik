'use client'

import { SplineScene } from "@/components/splite";
import { Card } from "@/components/card";
import { Navbar } from "@/components/Navbar";

export function SplineSceneBasic() {
  return (
    <div className="w-full min-h-screen bg-[#181B1C] relative overflow-hidden">
      {/* Navbar fixed at top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <Card className="w-full h-screen bg-transparent relative overflow-hidden flex pt-20">
        {/* Left content */}
        <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Your Mental Wellness Matters
          </h1>
          <p className="mt-6 text-white/80 max-w-xl text-lg">
            Find guidance, support, and tools to improve your mental health and
            build resilience. Discover calming resources that help you thrive.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="px-8 py-4 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition text-lg">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full object-contain"
          />
        </div>
      </Card>
    </div>
  )
}

'use client'

import { SplineScene } from "@/components/splite";
import { Card } from "@/components/card";
import { Navbar } from "@/components/Navbar";
import  RadialOrbitalTimeline  from "@/components/radial-orbital-timeline";
import RadialOrbitalTimelineDemo from "@/components/radial-timeline-demo";
import { cn } from "@/lib/utils"

export default function DemoPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#A8DADC] via-[#EAEAEA] to-[#B0B0B0] bg-clip-text text-transparent">
            Your Mental Wellness Matters
          </h1>
          <p className="mt-5 text-white/50 max-w-xl text-lg">
            Find guidance, support, and tools to improve your mental health and
            build resilience. Discover calming resources that help you thrive.
          </p>

          <div className="mt-8 flex gap-6">
            <button
              className="relative px-8 py-4 rounded-xl text-lg font-semibold text-[#181B1C] 
                         bg-gradient-to-r from-[#A8DADC] to-[#457B9D] 
                         shadow-[0_0_20px_rgba(168,218,220,0.5)] 
                         transition-all duration-500 
                         hover:shadow-[0_0_30px_rgba(168,218,220,0.8)] 
                         hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 text-white">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
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

     
  <div className="relative h-screen bg-[#18181C] flex justify-center">
  {/* Radial Component */}
  <div className="relative w-[500px] h-[400px] z-10 translate-y-4">
    <RadialOrbitalTimelineDemo />
  </div>

  {/* Left Text */}
  <div className="absolute left-8 top-1/2 transform -translate-y-3 translate-y-[-10px] max-w-[300px]">
    <p className="text-2xl font-semibold text-white mb-2">
      Every small step counts toward a calmer mind.
    </p>
    <p className="text-xl text-gray-400">
      Your mind deserves the same care you give your body.
    </p>
  </div>

  {/* Right Text */}
  <div className="absolute right-8 top-1/2 transform -translate-y-3 translate-y-[-10px] max-w-[250px]">
    <p className="text-2xl font-semibold text-white">
      Empower yourself with mindfulness and clarity.
    </p>
  </div>
</div>


    </div>
  )
}

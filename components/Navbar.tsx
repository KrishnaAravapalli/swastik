"use client"

import MegaMenu, { MegaMenuItem } from "@/components/mega-menu"
import { Brain, Users, MessageCircle, Music, Heart, BookOpen } from "lucide-react"

const navItems: MegaMenuItem[] = [
  {
    id: 1,
    label: "Therapy",
    subMenus: [
      {
        title: "Modes",
        items: [
          { label: "AI Chat", description: "Talk with an AI therapist", icon: Brain },
          { label: "Video Therapy", description: "Connect with professionals", icon: MessageCircle },
          { label: "Group Support", description: "Share and heal together", icon: Users },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Resources",
    subMenus: [
      {
        title: "Guides",
        items: [
          { label: "Stress Relief", description: "Exercises to relax", icon: Music },
          { label: "Mindfulness", description: "Meditation practices", icon: Heart },
          { label: "Self-Learning", description: "Books & articles", icon: BookOpen },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Community",
    subMenus: [
      {
        title: "Engage",
        items: [
          { label: "Forums", description: "Connect with others", icon: Users },
          { label: "Peer Support", description: "1-to-1 help", icon: Heart },
          { label: "Events", description: "Workshops & meetups", icon: Music },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Wellness Tools",
    subMenus: [
      {
        title: "Daily Use",
        items: [
          { label: "Mood Tracker", description: "Track emotions daily", icon: Heart },
          { label: "Breathing Coach", description: "Calm your mind", icon: Music },
          { label: "Journaling", description: "Reflect & grow", icon: BookOpen },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "About Us",
    subMenus: [
      {
        title: "Info",
        items: [
          { label: "Our Mission", description: "Why we exist", icon: Heart },
          { label: "Team", description: "Meet the experts", icon: Users },
          { label: "Contact", description: "Get in touch", icon: MessageCircle },
        ],
      },
    ],
  },
]

export function Navbar() {
  return (
    <nav className="absolute top-6 left-8 z-20">
      <div className="flex items-center space-x-12 text-xl">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">MindCare</h1>

        {/* Menu */}
        <MegaMenu items={navItems} className="text-white text-xl" />
      </div>
    </nav>
  )
}

"use client";

import { useState } from "react";
import {
  AlertCircle,
  Activity,
  Eye,
  Gauge,
  Brain,
  Shield,
  TrendingUp,
  Users,
  Smartphone,
  Cloud,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function DrivWellLanding() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-slate-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-slate-100">
              DrivWell AI
            </span>
          </div>
          <button
            onClick={() => router.push("/pages/dashboard")}
            className="px-6 py-2.5 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg font-semibold hover:shadow-lg hover:shadow-black/60 transition-all duration-300 hover:scale-105"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 border border-blue-400/30">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300">
                i.Mobilothon 5.0 by Team CodeMechanix
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-slate-100">Drive Safer</span>
              <br />
              <span className="text-slate-300">With AI Wellness</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Real-time AI monitoring that detects fatigue and stress before
              accidents happen. Proactive driver wellness for safer roads.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() =>
                  router.push("/pages/dashboard")
                }
                className="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get Started
              </button>
              <button
                onClick={() =>
                  router.push("https://todo-app-omega-six-61.vercel.app")
                }
                className="px-8 py-4 bg-slate-900/60 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-800/60 transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: Eye, label: "Visual Monitoring", value: "Real-Time" },
              {
                icon: Activity,
                label: "Physiological Tracking",
                value: "Multi-Modal",
              },
              { icon: Brain, label: "AI Predictions", value: "Proactive" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gray-900/70 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-sky-400 mb-3" />
                <div className="text-3xl font-bold text-slate-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-slate-100">Smart Features</span>
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">
            Multi-modal AI monitoring for comprehensive driver safety
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Visual Detection",
                desc: "Monitors yawning, eye closure, and facial stress through cabin video",
              },
              {
                icon: Gauge,
                title: "Steering Analysis",
                desc: "Tracks erratic steering patterns and lane deviations",
              },
              {
                icon: Activity,
                title: "Wearable Integration",
                desc: "Optional heart rate and physiological stress monitoring",
              },
              {
                icon: AlertCircle,
                title: "Smart Alerts",
                desc: "Non-distracting audio, visual, and haptic notifications",
              },
              {
                icon: TrendingUp,
                title: "Personalized AI",
                desc: "Learns individual patterns for optimized interventions",
              },
              {
                icon: Cloud,
                title: "Cloud Dashboard",
                desc: "Fleet monitoring, insights, and OTA model updates",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-900/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50"
              >
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center mb-4 border border-slate-700">
                  <feature.icon className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-slate-100">How It Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Monitor",
                desc: "Multi-modal sensors capture visual, behavioral, and physiological data in real-time",
              },
              {
                num: "02",
                title: "Analyze",
                desc: "Edge AI processes data locally to detect fatigue and stress patterns instantly",
              },
              {
                num: "03",
                title: "Intervene",
                desc: "Gentle alerts and break suggestions prevent accidents before they happen",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-slate-800/20 mb-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-100">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 right-[-2rem] w-16 h-0.5 bg-gradient-to-r from-slate-600 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-black/40 to-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Driver Safety?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join the future of proactive driver wellness monitoring
          </p>
          <button
            onClick={() =>
              router.push("/pages/dashboard")
            }
            className="px-10 py-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 hover:scale-105"
          >
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-slate-100" />
            </div>
            <span className="font-bold text-lg text-slate-100">
              DrivWell AI
            </span>
          </div>
          <div className="text-slate-400 text-sm">
            © 2024 Team CodeMechanix. Built for i.Mobilothon 5.0
          </div>
        </div>
      </footer>
    </div>
  );
}

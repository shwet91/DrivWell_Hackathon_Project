"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard(): React.ReactElement {
  const router = useRouter();
  return (
    <div className="min-h-screen lg:h-screen overflow-hidden bg-gradient-to-b from-[#e6f3ff] to-[#f7fbff] p-4 sm:p-8 font-sans text-slate-800">
      <div className="max-w-[1200px] mx-auto h-full bg-white/60 backdrop-blur rounded-[18px] border border-white/[.6] shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Desktop sidebar */}
          <aside className="hidden md:flex md:w-20 bg-[#0f4c6b] text-white flex-col items-center py-6 space-y-6">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              🔷
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center space-y-6">
              <button className="w-10 h-10 text-white/80 hover:text-white">
                🏠
              </button>
              <button className="w-10 h-10 text-white/80 hover:text-white">
                🧬
              </button>
              <button className="w-10 h-10 text-white/80 hover:text-white">
                💊
              </button>
              <button className="w-10 h-10 text-white/80 hover:text-white">
                ⚙️
              </button>
            </nav>
            <div className="w-10 h-10 bg-white/8 rounded-full" />
          </aside>

          <div className="flex-1">
            {/* Mobile topbar */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white/50 border-b">
              <div className="flex items-center gap-3">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="w-9 h-9 rounded-lg object-cover"
                />
                <div className="text-sm font-semibold">Dashboard</div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-slate-600">🔔</button>
                <div className="w-8 h-8 bg-slate-200 rounded-full" />
              </div>
            </div>

            <main className="p-4 h-full grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
              <section className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="w-full lg:w-[320px] h-auto bg-white/70 rounded-2xl border border-white/[.6] shadow-inner flex items-center justify-center p-3">
                    {/* Responsive video wrapper: keeps aspect ratio and fills available width */}
                    <div className="w-full max-w-[240px]">
                      <div className="relative pb-[56.25%] md:pb-[56.25%] lg:pb-[56.25%] h-0 rounded-lg overflow-hidden bg-black">
                        <video
                          className="absolute inset-0 w-full h-full object-contain"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          poster="/video-poster.jpg"
                        >
                          <source src="/body.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-3 w-full">
                    <div className="mt-3">
                      <SteeringWheelCard />
                    </div>

                    <div className="bg-white/70 rounded-2xl p-3 md:p-4 border border-white/[.6] shadow-sm">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg md:text-xl font-semibold">
                          Heart
                        </h2>
                        <div className="text-xs md:text-sm text-slate-500">
                          19 September, 2023 | 3:45 PM
                        </div>
                      </div>

                      <div className="mt-3 md:mt-4 grid grid-cols-2 gap-3 md:gap-4">
                        <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-[11px] md:text-xs text-slate-500">
                            Blood Pressure
                          </div>
                          <div className="text-sm md:text-lg font-semibold">
                            120/80 mmHG
                          </div>
                        </div>
                        <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm">
                          <div className="text-[11px] md:text-xs text-slate-500">
                            Heart Rate
                          </div>
                          <div className="text-sm md:text-lg font-semibold text-rose-600">
                            80 BPM
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-6">
                        <div className="text-[11px] md:text-xs text-slate-500 mb-2">
                          Heart Rate (BPM)
                        </div>
                        {/* Replace chart placeholder with responsive video from provided URL */}
                        <div className="w-full h-40 md:h-44 bg-gradient-to-r from-[#fff] to-[#f3fbff] rounded-lg overflow-hidden">
                          <video
                            className="w-full h-full object-cover"
                            src="https://www.pexels.com/download/video/855944/"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            preload="auto"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                      <div className="p-2 bg-white/70 rounded-2xl border border-white/[.6]">
                        My Heart
                      </div>
                      <div className="p-2 bg-white/70 rounded-2xl border border-white/[.6]">
                        Lungs
                      </div>
                      <div className="p-2 bg-white/70 rounded-2xl border border-white/[.6]">
                        Stomach
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <aside className="w-full lg:w-[360px]">
                <div className="bg-white/70 rounded-2xl p-4 md:p-6 border border-white/[.6] mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm text-slate-500">Peter James</h3>
                      <div className="text-xs text-slate-600">
                        Blood: O+ • Male • 28 years
                      </div>
                    </div>
                    <img
                      src="/profile.jpg"
                      alt="profile"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs md:text-sm text-slate-600">
                    <div>Height: 163cm</div>
                    <div>Weight: 68kg</div>
                    <div>BMI: 25.6</div>
                    <div>—</div>
                  </div>
                </div>

                {/* Consulting Doctor section removed as requested */}

                <div className="bg-white/60 rounded-2xl p-4 md:p-6 border border-white/[.6]">
                  <SteeringMonitor />
                </div>
              </aside>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
// stray button removed

function SteeringMonitor(): React.ReactElement {
  const [angle, setAngle] = useState<number>(0); // degrees
  const [rate, setRate] = useState<number>(0); // deg/s
  const [laneOffset, setLaneOffset] = useState<number>(0); // meters
  const [history, setHistory] = useState<
    Array<{ t: string; angle: number; rate: number; lane: number }>
  >([]);

  useEffect(() => {
    // Simulate incoming telemetry every 1s
    const iv = setInterval(() => {
      // Create small random walk for angle
      setAngle((prev) => {
        const next = Math.max(
          -45,
          Math.min(45, prev + (Math.random() - 0.5) * 6)
        );
        return Number(next.toFixed(1));
      });

      // Rate is derivative-ish
      setRate(() => Number((Math.random() * 10 - 5).toFixed(1)));

      // Lane offset small variation
      setLaneOffset((prev) =>
        Number((prev + (Math.random() - 0.5) * 0.1).toFixed(2))
      );
    }, 1000);

    return () => clearInterval(iv);
  }, []);

  // push to history whenever telemetry changes
  useEffect(() => {
    const ts = new Date().toLocaleTimeString();
    setHistory((h) => {
      const next = [{ t: ts, angle, rate, lane: laneOffset }, ...h];
      return next.slice(0, 8); // keep last 8
    });
  }, [angle, rate, laneOffset]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Steering Monitoring</h4>
        <div className="text-xs text-slate-500">Real-time (simulated)</div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3 text-center">
        <div className="p-3 bg-white rounded-lg">
          <div className="text-xs text-slate-500">Steering Angle</div>
          <div className="text-lg font-semibold">{angle}°</div>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <div className="text-xs text-slate-500">Angular Rate</div>
          <div className="text-lg font-semibold">{rate} °/s</div>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <div className="text-xs text-slate-500">Lane Offset</div>
          <div className="text-lg font-semibold">{laneOffset} m</div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-xs text-slate-500 mb-2">Recent readings</div>
        <div className="bg-white rounded-lg p-2 max-h-48 overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500">
                <th>Time</th>
                <th>Angle</th>
                <th>Rate</th>
                <th>Lane</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-1 text-xs text-slate-600">{h.t}</td>
                  <td className="py-1">{h.angle}°</td>
                  <td className="py-1">{h.rate}°/s</td>
                  <td className="py-1">{h.lane} m</td>
                </tr>
              ))}
              {history.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="py-2 text-center text-slate-500 text-xs"
                  >
                    No data yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SteeringWheelCard(): React.ReactElement {
  const [angle, setAngle] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  // Start empty to keep server/client render identical. Fill on mount.
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    // Smooth updates every 120ms to animate rotation; small random walk
    // Set an initial timestamp on mount (client-only) to avoid SSR/CSR mismatch
    setLastUpdate(new Date().toLocaleTimeString());

    let prev = 0;
    const iv = setInterval(() => {
      const next = Math.max(
        -540,
        Math.min(540, prev + (Math.random() - 0.5) * 12)
      );
      setAngle(Number(next.toFixed(1)));
      setRate(Number((next - prev).toFixed(1)));
      prev = next;
      setLastUpdate(new Date().toLocaleTimeString());
    }, 120);

    return () => clearInterval(iv);
  }, []);

  return (
    <div className="p-4 bg-white/70 rounded-2xl border border-white/[.6]">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Steering Wheel Analytics</h4>
        <div className="text-xs text-slate-500">Live</div>
      </div>

      <div className="mt-3 flex flex-col lg:flex-row items-center gap-4">
        <div className="w-40 h-40 flex items-center justify-center bg-slate-50 rounded-full shadow-inner">
          {/* Replace SVG with user-provided image in /public/wheel.jpg and rotate it */}
          <div
            className="w-32 h-32 transform transition-transform duration-150 ease-linear overflow-hidden rounded-full"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <img
              src="/wheel.jpg"
              alt="steering wheel"
              className="w-32 h-32 object-cover"
            />
          </div>
        </div>

        <div className="flex-1 w-full min-w-0">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-white rounded-lg">
              <div className="text-xs text-slate-500">Angle</div>
              <div className="text-lg font-semibold">{angle}°</div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="text-xs text-slate-500">Rate</div>
              <div className="text-lg font-semibold whitespace-nowrap">
                {rate}°/s
              </div>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="text-xs text-slate-500">Last</div>
              <div className="text-lg font-semibold">{lastUpdate}</div>
            </div>
          </div>

          <div className="mt-3 bg-gradient-to-r from-[#fff] to-[#f3fbff] rounded-lg p-3 text-slate-600">
            <div className="text-xs mb-1">Analytics</div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex-1">
                <div className="text-xs text-slate-500">Stability</div>
                <div className="font-medium">
                  {Math.max(0, 100 - Math.abs(angle)).toFixed(0)}%
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs text-slate-500">Aggression</div>
                <div className="font-medium">
                  {Math.min(100, Math.abs(rate) * 2).toFixed(0)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Home(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f3ff] to-[#f7fbff] p-4 sm:p-10 font-sans text-slate-800">
      <div className="max-w-[1200px] mx-auto bg-white/60 backdrop-blur rounded-[18px] border border-white/[.6] shadow-lg overflow-hidden">
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
                <div className="w-9 h-9 bg-[#0f4c6b] text-white rounded-lg flex items-center justify-center">
                  🔷
                </div>
                <div className="text-sm font-semibold">Dashboard</div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-slate-600">🔔</button>
                <div className="w-8 h-8 bg-slate-200 rounded-full" />
              </div>
            </div>

            <main className="p-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
              <section className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="w-full lg:w-[360px] h-auto bg-white/70 rounded-2xl border border-white/[.6] shadow-inner flex items-center justify-center p-4">
                    <svg
                      className="w-full max-w-[300px] h-auto"
                      viewBox="0 0 280 480"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity={0.95}>
                        <rect
                          x="0"
                          y="0"
                          width="280"
                          height="480"
                          rx="20"
                          fill="transparent"
                        />
                        <g transform="translate(40,20) scale(0.8)">
                          <ellipse
                            cx="100"
                            cy="240"
                            rx="70"
                            ry="120"
                            fill="#f8d7da"
                            stroke="#e06b6b"
                            strokeWidth={2}
                          />
                          <rect
                            x="70"
                            y="110"
                            width="60"
                            height="80"
                            rx="30"
                            fill="#f8d7da"
                          />
                          <path
                            d="M80 30 C90 10, 110 10, 120 30 L120 60 C110 80, 90 80, 80 60 Z"
                            fill="#f4b0b0"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div className="flex-1 flex flex-col gap-4 w-full">
                    <div className="bg-white/70 rounded-2xl p-4 md:p-6 border border-white/[.6] shadow-sm">
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
                        <div className="w-full h-20 md:h-24 bg-gradient-to-r from-[#fff] to-[#f3fbff] rounded-lg flex items-center justify-center text-slate-400">
                          [Chart]
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                      <div className="p-3 bg-white/70 rounded-2xl border border-white/[.6]">
                        My Heart
                      </div>
                      <div className="p-3 bg-white/70 rounded-2xl border border-white/[.6]">
                        Lungs
                      </div>
                      <div className="p-3 bg-white/70 rounded-2xl border border-white/[.6]">
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
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-200 rounded-full" />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs md:text-sm text-slate-600">
                    <div>Height: 163cm</div>
                    <div>Weight: 68kg</div>
                    <div>BMI: 25.6</div>
                    <div>—</div>
                  </div>
                </div>

                <div className="bg-white/60 rounded-2xl p-4 md:p-6 border border-white/[.6] mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Consulting Doctor</h4>
                    <a className="text-xs text-sky-600">See all</a>
                  </div>

                  <ul className="mt-3 space-y-3">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200" />
                        <div>
                          <div className="text-sm font-medium">
                            Dr. Adward Pitter
                          </div>
                          <div className="text-xs text-slate-500">
                            Cardiac Surgeon
                          </div>
                        </div>
                      </div>
                      <button className="text-sm bg-sky-600 text-white px-3 py-1 rounded-full">
                        Book
                      </button>
                    </li>

                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200" />
                        <div>
                          <div className="text-sm font-medium">
                            Dr. Liza Paul
                          </div>
                          <div className="text-xs text-slate-500">
                            Consultant Cardiologist
                          </div>
                        </div>
                      </div>
                      <button className="text-sm bg-sky-600 text-white px-3 py-1 rounded-full">
                        Book
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-2xl p-4 md:p-6 border border-white/[.6]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Medication</h4>
                    <a className="text-xs text-slate-600">See all</a>
                  </div>

                  <div className="mt-3 space-y-3 text-sm">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div>
                        <div className="font-medium">v-C 123 Foretin</div>
                        <div className="text-xs text-slate-500">125mg</div>
                      </div>
                      <div className="text-xs text-slate-500">x2</div>
                    </div>

                    <div className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div>
                        <div className="font-medium">Biotin</div>
                        <div className="text-xs text-slate-500">15mg</div>
                      </div>
                      <div className="text-xs text-slate-500">x1</div>
                    </div>
                  </div>
                </div>
              </aside>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
<button className="text-sm bg-sky-600 text-white px-3 py-1 rounded-full">
  Book
</button>;

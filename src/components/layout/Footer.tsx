import React from "react";
import { Heart, GraduationCap, Building, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent" />

      <div className="relative px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center space-y-8">
            {/* Logo/Title area */}
        
            {/* Academic context */}
            <div className="flex items-center justify-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/90 font-medium">
                  Academic Project for NEOMA Business School
                </p>
                <p className="text-blue-200 text-sm">
                  GBBA Year 3 • Professional Experience Report
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20" />
              <Globe className="w-4 h-4 text-white/40" />
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20" />
            </div>

            {/* Copyright and credits */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-white/70">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>for academic excellence</span>
              </div>

              <div className="text-white/60 text-sm space-y-2">
                <p>© {new Date().getFullYear()} Internship Feedback Website</p>
                <p className="text-xs">
                  Created on request of NEOMA Business School • All rights
                  reserved
                </p>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="pt-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
    </footer>
  );
}

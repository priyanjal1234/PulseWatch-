import { Activity, ArrowRight, Clock, Globe, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Uptime", value: "99.99%", icon: Activity },
    { label: "Response Time", value: "127ms", icon: Clock },
    { label: "Monitoring Sites", value: "12,847", icon: Globe },
    { label: "Happy Users", value: "5,291", icon: Users },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Monitor Your Website Uptime
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get instant alerts when your websites go down. Monitor performance,
            track uptime, and keep your users happy with 24/7 monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center group text-white shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-lg text-lg font-semibold transition-colors text-gray-700 hover:bg-gray-50">
              View Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg transition-all duration-500 ${
                  currentStat === index
                    ? "bg-emerald-50 border-emerald-200"
                    : ""
                }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;

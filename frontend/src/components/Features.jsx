import { Bell, Lock, Monitor, Shield, Smartphone, TrendingUp } from "lucide-react";
import React from "react";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description:
        "Monitor your websites, APIs, and servers from multiple locations worldwide with 30-second intervals.",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description:
        "Get notified immediately via email, SMS, Slack, or webhook when your services go down.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description:
        "Track response times, uptime statistics, and performance trends with detailed reports.",
    },
    {
      icon: Shield,
      title: "SSL Certificate Monitoring",
      description:
        "Monitor SSL certificates and get alerts before they expire to prevent security issues.",
    },
    {
      icon: Smartphone,
      title: "Status Pages",
      description:
        "Create beautiful status pages to keep your customers informed about service availability.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "Bank-level security with SOC 2 compliance and data encryption at rest and in transit.",
    },
  ];
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Everything You Need to Monitor Your Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive monitoring tools designed to keep your services
            running smoothly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

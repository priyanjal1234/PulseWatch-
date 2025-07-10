import React, { useState, useEffect } from "react";
import {
  Monitor,
  Shield,
  Zap,
  Globe,
  AlertTriangle,
  Check,
  ArrowRight,
  Menu,
  X,
  Activity,
  Clock,
  Users,
  TrendingUp,
  Bell,
  Lock,
  Smartphone,
  Mail,
} from "lucide-react";
import LandingNav from "../components/LandingNav";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

const Landing = () => {
  

  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <LandingNav />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      

      {/* Footer */}
      
    </div>
  );
};

export default Landing;

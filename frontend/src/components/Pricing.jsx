import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for small projects",
      features: [
        "5 monitors",
        "1-minute checks",
        "Email alerts",
        "Basic reports",
        "1 status page",
      ],
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Best for growing businesses",
      features: [
        "50 monitors",
        "30-second checks",
        "All alert channels",
        "Advanced analytics",
        "5 status pages",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited monitors",
        "10-second checks",
        "Custom integrations",
        "White-label reports",
        "Unlimited status pages",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300 scale-105 shadow-xl"
                  : "bg-white border-gray-200 hover:border-gray-300 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

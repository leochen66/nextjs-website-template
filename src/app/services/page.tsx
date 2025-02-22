"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Template Service 1",
      description:
        "This is a template service description. Explain your service's main features and benefits here. Focus on what makes this service unique and valuable to your customers.",
      image: "/images/service1.jpg",
      features: [
        "Template feature description 1",
        "Template feature description 2",
        "Template feature description 3",
        "Template feature description 4",
      ],
    },
    {
      title: "Template Service 2",
      description:
        "This is a template service description. Explain your service's main features and benefits here. Focus on what makes this service unique and valuable to your customers.",
      image: "/images/service2.jpg",
      features: [
        "Template feature description 1",
        "Template feature description 2",
        "Template feature description 3",
        "Template feature description 4",
      ],
    },
    {
      title: "Template Service 3",
      description:
        "This is a template service description. Explain your service's main features and benefits here. Focus on what makes this service unique and valuable to your customers.",
      image: "/images/service3.jpg",
      features: [
        "Template feature description 1",
        "Template feature description 2",
        "Template feature description 3",
        "Template feature description 4",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            This is a template introduction for your services page. Describe
            your company's service offerings and what makes them special.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div
                  className={`relative h-[400px] ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-teal-600">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">
                  Template Benefit 1
                </h3>
                <p className="text-gray-600">
                  This is a template benefit description. Explain why customers
                  should choose your services.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">
                  Template Benefit 2
                </h3>
                <p className="text-gray-600">
                  This is a template benefit description. Explain why customers
                  should choose your services.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">
                  Template Benefit 3
                </h3>
                <p className="text-gray-600">
                  This is a template benefit description. Explain why customers
                  should choose your services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

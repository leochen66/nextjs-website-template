"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Template Name 1",
      role: "Template Role 1",
      bio: "This is a template biography. You can describe the team member experience, achievements, and expertise here. Include relevant qualifications and notable contributions.",
      image: "/images/team1.jpg",
    },
    {
      name: "Template Name 2",
      role: "Template Role 2",
      bio: "This is a template biography. You can describe the team member experience, achievements, and expertise here. Include relevant qualifications and notable contributions.",
      image: "/images/team2.jpg",
    },
  ];

  const values = [
    {
      title: "Template Value 1",
      description:
        "This is a template value description. Describe your company core values and principles here.",
    },
    {
      title: "Template Value 2",
      description:
        "This is a template value description. Describe your company core values and principles here.",
    },
    {
      title: "Template Value 3",
      description:
        "This is a template value description. Describe your company core values and principles here.",
    },
    {
      title: "Template Value 4",
      description:
        "This is a template value description. Describe your company core values and principles here.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Template</h1>
          <p className="text-xl max-w-3xl">
            This is a template description. Write a brief introduction about
            your company and its main focus areas.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              This is a template company history section. Describe your company
              founding story, growth journey, and major milestones here. Include
              relevant details about your company development and achievements
              over the years.
            </p>
            <p className="text-gray-600">
              This is a template paragraph about your company mission and
              vision. Describe what makes your company unique and what you
              strive to achieve for your clients and stakeholders.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/images/hero-image.jpg"
              alt="Template Office"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-teal-600 mb-4">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-teal-600">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

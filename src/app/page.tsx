import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, Users, Heart } from "lucide-react";

export default function Home() {
  const offers = [
    {
      title: "Template Service 1",
      description:
        "This is a template service description. Replace this text with your actual service details.",
      image: "/images/service1.jpg",
    },
    {
      title: "Template Service 2",
      description:
        "This is a template service description. Replace this text with your actual service details.",
      image: "/images/service2.jpg",
    },
    {
      title: "Template Service 3",
      description:
        "This is a template service description. Replace this text with your actual service details.",
      image: "/images/service3.jpg",
    },
    {
      title: "Template Service 4",
      description:
        "This is a template service description. Replace this text with your actual service details.",
      image: "/images/service4.jpg",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Template Hero Title
              </h1>
              <p className="text-lg mb-8">
                This is a template hero description. Replace this text with your
                company's introduction. This area is perfect for your main
                business pitch or value proposition.
              </p>
              <Link href="/services">
                <Button className="bg-white text-teal-500 hover:bg-gray-100">
                  Template Button
                </Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/hero-image.jpg"
                alt="Template Hero Image"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Template Features Section
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-teal-50 rounded-lg hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <Cpu className="w-12 h-12 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-600">
                  Template Feature 1
                </h3>
                <p className="text-gray-600">
                  This is a template feature description. Replace with your
                  feature details.
                </p>
              </div>
              <div className="p-6 bg-teal-50 rounded-lg hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <Users className="w-12 h-12 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-600">
                  Template Feature 2
                </h3>
                <p className="text-gray-600">
                  This is a template feature description. Replace with your
                  feature details.
                </p>
              </div>
              <div className="p-6 bg-teal-50 rounded-lg hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <Heart className="w-12 h-12 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-600">
                  Template Feature 3
                </h3>
                <p className="text-gray-600">
                  This is a template feature description. Replace with your
                  feature details.
                </p>
              </div>
            </div>
            <Link href="/about" className="mt-8 inline-block">
              <Button className="bg-teal-500 text-white hover:bg-teal-600">
                Template About Button
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Template Services Section
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Template Contact Section
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            This is a template contact section description. Replace with your
            contact message.
          </p>
          <Link href="/contact">
            <Button className="bg-teal-500 text-white hover:bg-teal-600">
              Template Contact Button
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

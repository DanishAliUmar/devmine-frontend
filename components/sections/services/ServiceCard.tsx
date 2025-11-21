// src/components/sections/services/ServiceCard.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/services/${service.slug}`}>
        <Card className="group h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-muted hover:border-primary/50 glass-effect">
          <CardHeader>
            {/* Icon */}
            <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon className="w-7 h-7 text-white" />
            </div>

            {/* Title */}
            <CardTitle className="text-xl font-bold group-hover:gradient-text transition-colors">
              {service.title}
            </CardTitle>

            {/* Badge */}
            {service.highlighted && (
              <Badge variant="secondary" className="w-fit">
                Popular
              </Badge>
            )}
          </CardHeader>

          <CardContent>
            {/* Description */}
            <CardDescription className="text-base mb-4">
              {service.description}
            </CardDescription>

            {/* Features List */}
            {service.features && service.features.length > 0 && (
              <ul className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Learn More Link */}
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

// src/components/sections/services/Services.tsx
("use client");

import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/services.data";

export default function Services() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Heading */}
        <SectionHeading
          title="Our Services"
          subtitle="What We Offer"
          description="Using powerful, industry-specific software solutions, our team can help you achieve your business goals."
          align="center"
          className="mb-16"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

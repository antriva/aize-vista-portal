
import React from 'react';
import ServiceCard from './ServiceCard';
import { Monitor, Database, Rocket } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600">
            We provide enterprise-grade solutions tailored to your business needs
          </p>
          <Separator className="mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Observability"
            description="End-to-end monitoring solutions for your entire tech stack"
            icon={Monitor}
            features={[
              "Infrastructure monitoring (Servers, Storage, Network)",
              "Virtualization (VMware, Citrix, Openstack)",
              "Cloud providers (AWS, Azure, GCP, Oracle)",
              "Application monitoring and distributed tracing",
              "AI-assisted observability"
            ]}
          />

          <ServiceCard
            title="Data Engineering & BI"
            description="Transform your raw data into actionable insights"
            icon={Database}
            features={[
              "Comprehensive data analytics",
              "ETL and ELT pipeline development",
              "Data warehouse optimization",
              "Business intelligence dashboards",
              "Tableau and Power BI integrations"
            ]}
          />

          <ServiceCard
            title="Rapid MVP Development"
            description="Bring your software ideas to life in record time"
            icon={Rocket}
            features={[
              "Full-stack software development",
              "AI agent development",
              "2-week delivery timeline",
              "Iterative development approach",
              "Production-ready deployment"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

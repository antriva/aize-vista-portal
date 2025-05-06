
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Cloud, Server, Database, HardDrive, Router, Cpu } from 'lucide-react';

const LogoMarquee = () => {
  const logos = [
    // Infrastructure
    { name: 'Server', icon: Server, category: 'Infrastructure' },
    { name: 'Storage', icon: HardDrive, category: 'Infrastructure' },
    { name: 'Network', icon: Router, category: 'Infrastructure' },
    { name: 'Database', icon: Database, category: 'Infrastructure' },
    // Cloud
    { name: 'AWS', icon: Cloud, category: 'Cloud' },
    { name: 'Azure', icon: Cloud, category: 'Cloud' },
    { name: 'GCP', icon: Cloud, category: 'Cloud' },
    // Virtualization
    { name: 'VMware', icon: Cpu, category: 'Virtualization' },
    { name: 'Hypervisors', icon: Server, category: 'Virtualization' },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Technology Partners</h2>
          <p className="text-lg text-gray-600">
            We work with leading platforms across infrastructure, virtualization, and cloud
          </p>
          <Separator className="mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>

        <div className="space-y-8">
          {['Infrastructure', 'Cloud', 'Virtualization'].map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-center mb-6">{category}</h3>
              <div className="relative">
                <div className="flex animate-marquee">
                  {logos
                    .filter(logo => logo.category === category)
                    .map((logo, index) => {
                      const Icon = logo.icon;
                      return (
                        <div 
                          key={`${logo.name}-${index}`} 
                          className="flex flex-col items-center justify-center mx-12 w-24"
                        >
                          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                            <Icon size={32} />
                          </div>
                          <span className="text-sm font-medium">{logo.name}</span>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;

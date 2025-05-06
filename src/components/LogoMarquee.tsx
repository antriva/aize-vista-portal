
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { 
  Server, 
  Database, 
  HardDrive, 
  Network, 
  Github,
  Cloud
} from 'lucide-react';

const LogoMarquee = () => {
  const logos = [
    // Infrastructure
    { name: 'HPE', icon: Server, category: 'Infrastructure' },
    { name: 'Dell EMC', icon: HardDrive, category: 'Infrastructure' },
    { name: 'Cisco', icon: Network, category: 'Infrastructure' },
    { name: 'Oracle', icon: Database, category: 'Infrastructure' },
    { name: 'NetApp', icon: HardDrive, category: 'Infrastructure' },
    // Cloud
    { name: 'AWS', icon: Cloud, category: 'Cloud' },
    { name: 'Azure', icon: Cloud, category: 'Cloud' },
    { name: 'GCP', icon: Cloud, category: 'Cloud' },
    { name: 'IBM Cloud', icon: Cloud, category: 'Cloud' },
    { name: 'Oracle Cloud', icon: Cloud, category: 'Cloud' },
    // Virtualization
    { name: 'VMware', icon: Github, category: 'Virtualization' },
    { name: 'Citrix', icon: Server, category: 'Virtualization' },
    { name: 'Hyper-V', icon: Server, category: 'Virtualization' },
    { name: 'KVM', icon: Server, category: 'Virtualization' },
    { name: 'OpenStack', icon: Cloud, category: 'Virtualization' },
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

        <div className="space-y-12">
          {['Infrastructure', 'Cloud', 'Virtualization'].map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-center mb-6">{category}</h3>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {logos
                    .filter(logo => logo.category === category)
                    .map((logo, index) => {
                      const Icon = logo.icon;
                      return (
                        <div 
                          key={`${logo.name}-${index}-1`} 
                          className="flex flex-col items-center justify-center mx-12 min-w-24"
                        >
                          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-2">
                            <Icon size={32} />
                          </div>
                          <span className="text-sm font-medium">{logo.name}</span>
                        </div>
                      );
                    })}
                </div>
                
                {/* Duplicate for continuous scroll effect */}
                <div className="flex animate-marquee whitespace-nowrap" style={{ animationDelay: "calc(25s / 2)" }}>
                  {logos
                    .filter(logo => logo.category === category)
                    .map((logo, index) => {
                      const Icon = logo.icon;
                      return (
                        <div 
                          key={`${logo.name}-${index}-2`} 
                          className="flex flex-col items-center justify-center mx-12 min-w-24"
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

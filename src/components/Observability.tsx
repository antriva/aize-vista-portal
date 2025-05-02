
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Observability = () => {
  return (
    <section id="observability" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Observability Stack</h2>
          <p className="text-lg text-gray-600">
            Monitor and optimize your entire technology ecosystem from infrastructure to applications
          </p>
          <Separator className="mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2670" 
              alt="Observability Dashboard" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Multi-layer Monitoring</h3>
            <p className="text-lg text-gray-700">
              Our comprehensive observability solutions cover every layer of your technology stack, providing real-time insights and proactive alerts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Infrastructure</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Blade & Rack Servers</li>
                    <li>• SAN & NAS Storage</li>
                    <li>• Network Equipment</li>
                    <li>• Security Devices & Firewalls</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Virtualization</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• VMware vSphere</li>
                    <li>• Citrix Zen</li>
                    <li>• Openstack</li>
                    <li>• Containerization</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Cloud</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• AWS</li>
                    <li>• Azure</li>
                    <li>• Google Cloud</li>
                    <li>• Oracle Cloud</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Application & AI</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Distributed Tracing</li>
                    <li>• Application Performance</li>
                    <li>• AI-assisted Monitoring</li>
                    <li>• Predictive Analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Observability;

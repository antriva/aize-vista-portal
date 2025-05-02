
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ChartBar, ChartLine, ChartPie } from 'lucide-react';

const DataEngineering = () => {
  return (
    <section id="data" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Intelligence & Data Engineering</h2>
          <p className="text-lg text-gray-600">
            Transform your data into actionable insights with our comprehensive data solutions
          </p>
          <Separator className="mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Data-Driven Decision Making</h3>
            <p className="text-gray-700">
              Our data engineering team helps you build robust data pipelines, implement advanced analytics, and create 
              insightful dashboards that drive business growth and operational efficiency.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <ChartBar size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Data Analytics</h4>
                  <p className="text-sm text-gray-600">
                    Transform raw data into meaningful insights with advanced analytics tools and methodologies
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <ChartLine size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Data Engineering</h4>
                  <p className="text-sm text-gray-600">
                    Build robust ETL/ELT pipelines to consolidate and process data from multiple sources
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <ChartPie size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">BI Dashboards</h4>
                  <p className="text-sm text-gray-600">
                    Create interactive visualizations using industry-leading tools like Tableau and Power BI
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary">Data Lakes</Badge>
              <Badge variant="secondary">Data Warehousing</Badge>
              <Badge variant="secondary">Real-time Analytics</Badge>
              <Badge variant="secondary">Predictive Models</Badge>
              <Badge variant="secondary">Custom Reporting</Badge>
              <Badge variant="secondary">KPI Tracking</Badge>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-25"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2670" 
                  alt="Data Engineering Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEngineering;

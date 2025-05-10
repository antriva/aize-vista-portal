
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Clock, Calendar } from 'lucide-react';

const MVP = () => {
  const phaseData = [
    { name: 'Discovery & Planning', value: 15, color: '#0EA5E9', days: '2 days' },
    { name: 'Design & Prototyping', value: 20, color: '#8B5CF6', days: '3 days' },
    { name: 'Development', value: 40, color: '#6E59A5', days: '6 days' },
    { name: 'Testing & Refinement', value: 15, color: '#9b87f5', days: '2 days' },
    { name: 'Deployment', value: 10, color: '#D6BCFA', days: '1 day' },
  ];

  const chartConfig = phaseData.reduce((acc, item) => {
    acc[item.name] = {
      label: `${item.name} (${item.days})`,
      color: item.color,
    };
    return acc;
  }, {});

  return (
    <section id="mvp" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rapid MVP Development</h2>
          <p className="text-lg text-gray-600">
            Turn your ideas into market-ready products in just two weeks
          </p>
          <Separator className="mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1">
            <Card className="overflow-hidden border border-gray-200 shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-center mb-4">MVP Development Timeline</h3>
                <ChartContainer config={chartConfig} className="h-[320px] mt-4">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={phaseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent, days }) => {
                          const item = phaseData.find(p => p.name === name);
                          return `${name}: ${item?.days}`;
                        }}
                        labelLine={true}
                      >
                        {phaseData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip
                        content={
                          <ChartTooltipContent 
                            labelClassName="font-medium" 
                          />
                        }
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Rocket className="mr-2 text-blue-600" />
                  From Concept to Launch in 14 Days
                </h3>
                <p className="text-gray-700 mb-6">
                  Our rapid MVP development process is designed to quickly validate your ideas, 
                  minimize time-to-market, and provide you with a solid foundation for future growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Team working on MVP" 
                    className="rounded-lg shadow-lg object-cover h-full w-full"
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">Week 1</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Discovery, planning, design and initial development. We establish the core requirements and begin building your foundation.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold">Week 2</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Development completion, testing, refinement, and deployment. Your MVP is ready for market testing and user feedback.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Post-Launch</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      We provide ongoing support, analytics integration, and roadmap planning for future iterations based on real user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVP;

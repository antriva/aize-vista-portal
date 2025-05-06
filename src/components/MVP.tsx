
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const MVP = () => {
  const phaseData = [
    { name: 'Discovery & Planning', value: 15, color: '#0EA5E9' },
    { name: 'Design & Prototyping', value: 20, color: '#8B5CF6' },
    { name: 'Development', value: 40, color: '#6E59A5' },
    { name: 'Testing & Refinement', value: 15, color: '#9b87f5' },
    { name: 'Deployment', value: 10, color: '#D6BCFA' },
  ];

  const chartConfig = phaseData.reduce((acc, item) => {
    acc[item.name] = {
      label: item.name,
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
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">From Concept to Launch in 14 Days</h3>
            <p className="text-gray-700 mb-8">
              Our rapid MVP development process is designed to quickly validate your ideas, 
              minimize time-to-market, and provide you with a solid foundation for future growth.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Discovery & Planning</span>
                  <span className="text-blue-600">Day 1-2</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-sm text-gray-600 mt-1">
                  Requirements gathering, architecture planning, and scope definition
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Design & Prototyping</span>
                  <span className="text-blue-600">Day 3-5</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-sm text-gray-600 mt-1">
                  UI/UX design, interactive prototypes, and stakeholder approval
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Development</span>
                  <span className="text-blue-600">Day 6-11</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-sm text-gray-600 mt-1">
                  Core functionality implementation, backend development, and API integration
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Testing & Refinement</span>
                  <span className="text-blue-600">Day 12-13</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-sm text-gray-600 mt-1">
                  Quality assurance, bug fixing, and performance optimization
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Deployment</span>
                  <span className="text-blue-600">Day 14</span>
                </div>
                <Progress value={100} className="h-2" />
                <p className="text-sm text-gray-600 mt-1">
                  Production deployment, documentation, and handover
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-25"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden h-full">
                <div className="p-4 h-full">
                  <h3 className="text-xl font-semibold text-center mb-4">MVP Development Phases</h3>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                      <Pie
                        data={phaseData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
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
                  </ChartContainer>
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

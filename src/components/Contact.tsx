
import React from 'react';
import { Separator } from '@/components/ui/separator';
import ContactForm from './ContactForm';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Have a question or ready to start your project? Contact us today.
          </p>
          <Separator className="mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
              <ContactForm />
            </div>
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-blue-600">admin@antriva.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-blue-600">+91 7795709574</p>
                  </div>
                </div>
                
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <p className="text-gray-600 mb-1">Monday - Friday: 9 AM - 6 PM</p>
                <p className="text-gray-600">Weekend: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

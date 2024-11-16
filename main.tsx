import React, { useState, useEffect } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ChevronRight, Instagram, Star, TrendingUp, Users, Camera, Heart, Shield, ArrowRight } from 'lucide-react';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    
    const { current } = domRef;
    observer.observe(current);
    
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const LandingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-red-900/50" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-30" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-red-500 via-white to-purple-500 bg-clip-text text-transparent animate-pulse">
              TopQueens Agency
            </h1>
            <p className="text-3xl text-white/90 mb-6">Elevate Your Digital Presence</p>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your online presence with TopQueens Agency. We empower digital models to build their brand and reach new heights.
            </p>
          </div>
          
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full text-lg font-semibold animate-bounce"
          >
            Apply Now <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <FadeInSection>
        <div className="py-20 bg-gradient-to-r from-purple-900/20 to-red-900/20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-2">500+</h3>
              <p className="text-gray-300">Active Models</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-purple-500 mb-2">10M+</h3>
              <p className="text-gray-300">Combined Reach</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-300">Growth Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-2">24/7</h3>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Features Grid */}
      <div className="py-20 px-4">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            Why Choose TopQueens
          </h2>
        </FadeInSection>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInSection>
            <Card className="p-8 bg-black/50 border border-purple-500/30 hover:border-purple-500 transition-all">
              <Star className="text-red-500 mb-4 h-12 w-12" />
              <h3 className="text-2xl font-bold mb-4">Personal Branding</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Card>
          </FadeInSection>
          
          <FadeInSection>
            <Card className="p-8 bg-black/50 border border-red-500/30 hover:border-red-500 transition-all">
              <TrendingUp className="text-purple-500 mb-4 h-12 w-12" />
              <h3 className="text-2xl font-bold mb-4">Growth Strategy</h3>
              <p className="text-gray-400">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Card>
          </FadeInSection>
          
          <FadeInSection>
            <Card className="p-8 bg-black/50 border border-white/30 hover:border-white transition-all">
              <Users className="text-white mb-4 h-12 w-12" />
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-gray-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </Card>
          </FadeInSection>
        </div>
      </div>

      {/* Testimonials Section */}
      <FadeInSection>
        <div className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-black/40 p-6 rounded-lg border border-purple-500/30">
                  <img src={`/api/placeholder/80/80`} alt="Profile" className="rounded-full w-20 h-20 mb-4" />
                  <p className="text-gray-300 mb-4">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                  <p className="font-bold">@username_{i}</p>
                  <p className="text-sm text-gray-400">Digital Creator</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <div className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the most innovative digital modeling agency and take your career to the next level.
            </p>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-full text-lg font-semibold"
            >
              Apply Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TQA</h3>
              <p className="text-gray-400">Empowering digital creators since 2024</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Content Guidelines</li>
                <li>DMCA</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Instagram className="text-purple-500 h-6 w-6" />
                <Heart className="text-red-500 h-6 w-6" />
                <Camera className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-500/30 text-center text-gray-400">
            <p>© 2024 TopQueens Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Application Form Dialog */}
      <AlertDialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <AlertDialogContent className="bg-black/95 border border-purple-500/30 max-w-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl text-white">Apply to Topqueens Agency</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-400">
              Please fill out the form below to start your journey with us.
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <form className="space-y-4 my-4">
            <Input 
              placeholder="Full Name" 
              className="bg-black/50 border-purple-500/30 text-white"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input 
                type="number" 
                placeholder="Age" 
                className="bg-black/50 border-purple-500/30 text-white"
              />
              <Input 
                placeholder="Country" 
                className="bg-black/50 border-purple-500/30 text-white"
              />
            </div>
            
            <Input 
              type="email" 
              placeholder="Email" 
              className="bg-black/50 border-purple-500/30 text-white"
            />
            
            <div className="flex items-center space-x-2">
              <Instagram className="text-pink-500" />
              <Input 
                placeholder="Instagram Profile Link" 
                className="bg-black/50 border-purple-500/30 text-white"
              />
            </div>
            
            <Input 
              placeholder="Phone Model (for content creation)" 
              className="bg-black/50 border-purple-500/30 text-white"
            />
            
            <Select>
              <SelectTrigger className="bg-black/50 border-purple-500/30 text-white">
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent className="bg-black border border-purple-500/30">
                <SelectItem value="lingerie">Lingerie Only</SelectItem>
                <SelectItem value="faceless">Faceless Content</SelectItem>
                <SelectItem value="full">Full Exposure</SelectItem>
              </SelectContent>
            </Select>
          </form>
          
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-800 text-white hover:bg-gray-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700">
              Submit Application
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default LandingPage;
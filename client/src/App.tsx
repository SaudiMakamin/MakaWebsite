import { useState, useEffect } from 'react';
import { SEOPerformanceOptimizer } from '@/lib/seo-performance';
import { Switch, Route } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/components/language-provider';
import SEOHeadTags from '@/components/SEOHeadTags';
import { SEOHead } from '@/components/seo-head';
import { AdvancedSEO } from '@/components/advanced-seo';


import SplashScreen from '@/components/splash-screen';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Home from '@/pages/home';
import About from '@/pages/about';
import Services from '@/pages/services';
import Projects from '@/pages/projects-enhanced';
import Certifications from '@/pages/certifications-enhanced';
import NewsCenter from '@/pages/news-new';
import NewsArticle from '@/pages/news-article';
import Contact from '@/pages/contact';
import UpdateShareholder from '@/pages/update-shareholder';
import RoyalShareholderDashboard from '@/pages/royal-shareholder-dashboard';
import NotFound from '@/pages/not-found';
import PetroleumServices from '@/pages/petroleum-services';
import OffshoreOperations from '@/pages/offshore-operations';
import InvestorRelations from '@/pages/investor-relations';
import BahrainOperations from '@/pages/bahrain-operations';
import MediaCoverage from '@/pages/media-coverage';
import MalaysiaCinematic from '@/pages/malaysia-branch';
import RiyadhHeadquarters from '@/pages/riyadh-headquarters';
import Headquarters from '@/pages/headquarters';

import { SocialShareOptimizer } from '@/lib/social-share-optimizer';
import ShadowReaper from '@/components/shadow-reaper';
import ShadowQALayer from '@/components/shadow-qa-layer';
import ShadowProtectionLayer from '@/components/shadow-protection-layer';

import ShadowDiagnosticProbe from '@/components/shadow-diagnostic-probe';
import SupremeExecutionOrder006 from '@/components/supreme-execution-order-006';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/certifications" component={Certifications} />
      <Route path="/news" component={NewsCenter} />
      <Route path="/news/:id" component={NewsArticle} />
      <Route path="/update-shareholder" component={UpdateShareholder} />
      <Route path="/royal-dashboard" component={RoyalShareholderDashboard} />
      <Route path="/contact" component={Contact} />
      <Route path="/petroleum-services" component={PetroleumServices} />
      <Route path="/offshore-operations" component={OffshoreOperations} />
      <Route path="/investor-relations" component={InvestorRelations} />
      <Route path="/bahrain-operations" component={BahrainOperations} />
      <Route path="/media-coverage" component={MediaCoverage} />
      <Route path="/malaysia" component={MalaysiaCinematic} />
      <Route path="/riyadh-headquarters" component={RiyadhHeadquarters} />
      <Route path="/headquarters" component={Headquarters} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  
  // Initialize SEO performance optimizations
  useEffect(() => {
    SEOPerformanceOptimizer.initialize();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <ShadowProtectionLayer protectedSections={['news-center', 'about-page', 'contact-page', 'investors-section']}>
            {showSplash ? (
              <SplashScreen onComplete={() => setShowSplash(false)} />
            ) : (
              <div className="min-h-screen">
                <SEOHeadTags />
                <SEOHead />
                <AdvancedSEO />
                <Header />
                <main>
                  <Router />
                </main>
                <Footer />




                {/* Shadow systems disabled for clean news implementation */}
              </div>
            )}
          </ShadowProtectionLayer>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

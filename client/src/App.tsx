import { useState, useEffect, lazy, Suspense } from 'react';
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

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const Services = lazy(() => import('@/pages/services'));
const Projects = lazy(() => import('@/pages/projects-enhanced'));
const Certifications = lazy(() => import('@/pages/certifications-enhanced'));
const NewsIndex = lazy(() => import('./pages/news/NewsIndex'));
const NewsArticlePage = lazy(() => import('./pages/news/NewsArticle'));
const Contact = lazy(() => import('@/pages/contact'));
const UpdateShareholder = lazy(() => import('@/pages/update-shareholder'));
const ShareholderSubmit = lazy(() => import('@/pages/shareholder-submit'));
const ShareholderTrack = lazy(() => import('@/pages/shareholder-track'));
const RoyalShareholderDashboard = lazy(() => import('@/pages/royal-shareholder-dashboard'));
const NotFound = lazy(() => import('@/pages/not-found'));
const GasPocTest = lazy(() => import('@/pages/gas-poc-test'));
const GroupOverview = lazy(() => import('@/pages/group-overview'));
const MakaminHolding = lazy(() => import('@/pages/makamin-holding'));
const PetroleumServices = lazy(() => import('@/pages/petroleum-services'));
const ZencusInternational = lazy(() => import('@/pages/zencus-international'));
const OffshoreOperations = lazy(() => import('@/pages/offshore-operations'));
const PipelineIndustrialServices = lazy(() => import('@/pages/services/pipeline-industrial'));
const DrillingServices = lazy(() => import('@/pages/services/drilling'));
const GeoscienceServices = lazy(() => import('@/pages/services/geoscience'));
const IndustrialInspection = lazy(() => import('@/pages/services/industrial-inspection'));
const ZencusServices = lazy(() => import('@/pages/services/zencus'));
const OffshoreServices = lazy(() => import('@/pages/services/offshore'));
const SupplyChainServices = lazy(() => import('@/pages/services/supply-chain'));
const TechnicalStaffingServices = lazy(() => import('@/pages/services/technical-staffing'));
const AramcoProjects = lazy(() => import('@/pages/aramco-projects'));
const PipelineProjectsPage = lazy(() => import('@/pages/pipeline-projects'));
const OffshoreProjectsPage = lazy(() => import('@/pages/offshore-projects'));
const FleetAssetsPage = lazy(() => import('@/pages/fleet-assets'));
const ZencusProjectsPage = lazy(() => import('@/pages/zencus-projects'));
const InvestorRelations = lazy(() => import('@/pages/investor-relations'));
const BahrainOperations = lazy(() => import('@/pages/bahrain-operations'));
const MediaCoverage = lazy(() => import('@/pages/media-coverage'));
const MalaysiaCinematic = lazy(() => import('@/pages/malaysia-branch'));
const RiyadhHeadquarters = lazy(() => import('@/pages/riyadh-headquarters'));
const Headquarters = lazy(() => import('@/pages/headquarters'));

import { SocialShareOptimizer } from '@/lib/social-share-optimizer';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/projects/aramco" component={AramcoProjects} />
      <Route path="/projects/pipeline" component={PipelineProjectsPage} />
      <Route path="/projects/offshore" component={OffshoreProjectsPage} />
      <Route path="/projects/fleet" component={FleetAssetsPage} />
      <Route path="/projects/zencus" component={ZencusProjectsPage} />
      <Route path="/projects" component={Projects} />
      <Route path="/certifications" component={Certifications} />
      <Route path="/news" component={NewsIndex} />
      <Route path="/news/:slug" component={NewsArticlePage} />
      <Route path="/update-shareholder" component={UpdateShareholder} />
      <Route path="/shareholder/submit" component={ShareholderSubmit} />
      <Route path="/shareholder/track" component={ShareholderTrack} />
      <Route path="/dev/gas-poc" component={GasPocTest} />
      <Route path="/royal-dashboard" component={RoyalShareholderDashboard} />
      <Route path="/contact" component={Contact} />
      <Route path="/services/pipeline-industrial" component={PipelineIndustrialServices} />
      <Route path="/services/drilling" component={DrillingServices} />
      <Route path="/services/geoscience" component={GeoscienceServices} />
      <Route path="/services/industrial-inspection" component={IndustrialInspection} />
      <Route path="/services/zencus" component={ZencusServices} />
      <Route path="/services/offshore" component={OffshoreServices} />
      <Route path="/services/supply-chain" component={SupplyChainServices} />
      <Route path="/services/technical-staffing" component={TechnicalStaffingServices} />
      <Route path="/group" component={GroupOverview} />
      <Route path="/makamin-holding" component={MakaminHolding} />
      <Route path="/petroleum-services" component={PetroleumServices} />
      <Route path="/zencus-international" component={ZencusInternational} />
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
          {showSplash ? (
            <SplashScreen onComplete={() => setShowSplash(false)} />
          ) : (
            <div className="min-h-screen">
              <SEOHeadTags />
              <SEOHead />
              <AdvancedSEO />
              <Header />
              <main>
                <Suspense fallback={<div className="min-h-screen" />}>
                  <Router />
                </Suspense>
              </main>
              <Footer />
            </div>
          )}
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

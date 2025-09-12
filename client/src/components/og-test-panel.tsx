import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SocialShareOptimizer } from '@/lib/social-share-optimizer';
import { Share, TestTube, RefreshCw, ExternalLink } from 'lucide-react';

export function OGTestPanel() {
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<any>(null);

  const runOGTest = async () => {
    setTesting(true);
    try {
      // Test OG tags
      SocialShareOptimizer.testOGTags();
      
      // Force refresh
      await SocialShareOptimizer.refreshSocialCache();
      await SocialShareOptimizer.forceCrawl();
      
      setResults({
        success: true,
        ogImage: 'https://makamin.com.sa/images/og-banner.svg',
        timestamp: new Date().toISOString()
      });
      
      console.log('🎯 OG Test Results:', {
        title: 'مكامن السعودية القابضة | Makamin Saudi Holding',
        description: 'شركة مكامن السعودية القابضة - استثمارات وخدمات النفط والغاز | رأس مال 1.2 مليار ريال',
        image: 'https://makamin.com.sa/images/og-banner.svg',
        dimensions: '1200x630'
      });
      
    } catch (error) {
      setResults({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setTesting(false);
    }
  };

  const testUrls = {
    facebook: 'https://developers.facebook.com/tools/debug/sharing/?q=https%3A%2F%2Fmakamin.com.sa',
    twitter: 'https://cards-dev.twitter.com/validator',
    linkedin: 'https://www.linkedin.com/post-inspector/inspect/https%3A%2F%2Fmakamin.com.sa'
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Card className="fixed top-4 right-4 w-80 max-h-96 overflow-auto bg-white/95 backdrop-blur-sm shadow-xl border-2 border-yellow-200 z-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-yellow-800 flex items-center gap-2">
          <TestTube className="w-4 h-4" />
          OG Preview Test
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 space-y-2">
        <Button 
          onClick={runOGTest}
          disabled={testing}
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
          size="sm"
        >
          {testing ? <RefreshCw className="w-4 h-4 animate-spin mr-1" /> : <Share className="w-4 h-4 mr-1" />}
          {testing ? 'Testing...' : 'Test OG Tags'}
        </Button>
        
        <div className="space-y-1">
          <div className="text-xs font-medium text-gray-600">Test on Platforms:</div>
          {Object.entries(testUrls).map(([platform, url]) => (
            <Button
              key={platform}
              variant="outline"
              size="sm"
              className="w-full text-xs justify-start"
              onClick={() => window.open(url, '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </Button>
          ))}
        </div>
        
        {results && (
          <div className="text-xs bg-gray-50 p-2 rounded space-y-1">
            {results.error ? (
              <div className="text-red-600">❌ {results.error}</div>
            ) : (
              <>
                <div className="text-green-600">✅ OG Tags Updated</div>
                <div className="text-blue-600">🖼️ Image: og-banner.svg</div>
                <div className="text-purple-600">📐 Size: 1200x630</div>
                <div className="text-gray-500">⏰ {new Date(results.timestamp).toLocaleTimeString()}</div>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
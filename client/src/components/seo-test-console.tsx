import { useState } from 'react';
import { SEOIndexingManager } from '@/lib/seo-indexing';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SEOTestConsole() {
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const runSEOTest = async () => {
    setLoading(true);
    try {
      const indexingResults = await SEOIndexingManager.performFullIndexing();
      const statusCheck = await SEOIndexingManager.checkIndexingStatus();
      
      setResults({
        indexing: indexingResults,
        status: statusCheck,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('SEO test failed:', error);
      setResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 max-h-96 overflow-auto bg-white/90 backdrop-blur-sm shadow-lg border-2 border-blue-200 z-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-blue-700">🔍 SEO Test Console</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          onClick={runSEOTest}
          disabled={loading}
          className="w-full mb-2 bg-blue-600 hover:bg-blue-700"
        >
          {loading ? 'Testing SEO...' : 'Run SEO Test'}
        </Button>
        
        {results && (
          <div className="text-xs space-y-2">
            {results.error ? (
              <div className="text-red-600">Error: {results.error}</div>
            ) : (
              <>
                <div className="text-green-600">
                  ✅ URLs: {results.indexing?.urls?.length || 0}
                </div>
                <div className="text-blue-600">
                  📊 IndexNow: {results.indexing?.indexNowResults?.length || 0} attempts
                </div>
                <div className="text-purple-600">
                  🔗 Google: {results.indexing?.googleResult?.success ? '✅' : '❌'}
                </div>
                <div className="text-orange-600">
                  🔗 Bing: {results.indexing?.bingResult?.success ? '✅' : '❌'}
                </div>
                <div className="text-gray-600">
                  ⏰ {new Date(results.timestamp).toLocaleTimeString()}
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
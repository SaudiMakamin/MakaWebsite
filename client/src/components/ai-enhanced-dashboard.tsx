import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Users, Globe, Zap, Target, BarChart3, PieChart, LineChart, Brain, MessageSquare, Search } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import AnimatedCounter from '@/components/animated-counter';

export default function AIEnhancedDashboard() {
  const { language } = useLanguageContext();

  // Real-time operational data (future API integration)
  const operationalKPIs = [
    {
      id: 'rigs-active',
      title: language === 'ar' ? 'المنصات النشطة' : 'Active Rigs',
      value: 5,
      status: 'operational',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: language === 'ar' ? 'منصات حفر نشطة' : 'Drilling rigs in operation'
    },
    {
      id: 'vessels-deployed',
      title: language === 'ar' ? 'السفن المنتشرة' : 'Vessels Deployed',
      value: 12,
      status: 'active',
      icon: Globe,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: language === 'ar' ? 'سفن الدعم البحري' : 'Marine support vessels'
    },
    {
      id: 'contracts-active',
      title: language === 'ar' ? 'العقود النشطة' : 'Active Contracts',
      value: 28,
      status: 'ongoing',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: language === 'ar' ? 'عقود قيد التنفيذ' : 'Contracts under execution'
    },
    {
      id: 'safety-record',
      title: language === 'ar' ? 'أيام بدون حوادث' : 'Days Without Incidents',
      value: 5840,
      status: 'excellent',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: language === 'ar' ? 'سجل السلامة المتميز' : 'Outstanding safety record'
    }
  ];

  // Performance metrics for investor panel with forecasting indicators
  const performanceMetrics = [
    { label: language === 'ar' ? 'نمو الإيرادات المتوقع في 2027: +18.5%' : 'Expected Revenue Growth 2027: +18.5%', value: '+18.5%', trend: 'up', forecast: true },
    { label: language === 'ar' ? 'كفاءة التشغيل الحالية: 94.2%' : 'Current Operational Efficiency: 94.2%', value: '94.2%', trend: 'up', forecast: false },
    { label: language === 'ar' ? 'رضا العملاء المستهدف: 97.8%' : 'Target Client Satisfaction: 97.8%', value: '97.8%', trend: 'stable', forecast: true },
    { label: language === 'ar' ? 'معدل الابتكار الحالي: 8.7/10' : 'Current Innovation Index: 8.7/10', value: '8.7/10', trend: 'up', forecast: false }
  ];

  // AI-powered insights with forecasting indicators
  const aiInsights = [
    {
      type: 'prediction',
      title: language === 'ar' ? 'تنبؤ الأداء المتوقع: 89%' : 'Expected Performance Prediction: 89%',
      insight: language === 'ar' ? 'توقع نمو Q2 2025: 22%' : 'Projected Q2 2025 Growth: 22%',
      confidence: 89
    },
    {
      type: 'optimization',
      title: language === 'ar' ? 'فرصة التحسين المحتملة: 76%' : 'Potential Optimization Opportunity: 76%',
      insight: language === 'ar' ? 'تحسين كفاءة الأسطول المتوقعة: 15%' : 'Expected Fleet Efficiency Improvement: 15%',
      confidence: 76
    },
    {
      type: 'market',
      title: language === 'ar' ? 'اتجاه السوق المتوقع: 92%' : 'Expected Market Trend: 92%',
      insight: language === 'ar' ? 'زيادة الطلب على الخدمات البحرية المتوقعة: 92%' : 'Expected Offshore Services Demand Increase: 92%',
      confidence: 92
    }
  ];

  return (
    <div className="space-y-8">
      {/* AI Assistant Integration Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {language === 'ar' ? 'ذكاء مكامن الاصطناعي' : 'Makamin AI Intelligence'}
            </h2>
            <p className="text-blue-100 text-lg">
              {language === 'ar' ? 'نظام ذكي للتحليل والتنبؤ والتحسين' : 'Intelligent system for analysis, prediction, and optimization'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Brain className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'اسأل الذكاء الاصطناعي' : 'Ask Makamin AI'}
            </Button>
            <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
              <Search className="w-5 h-5 mr-2" />
              {language === 'ar' ? 'بحث ذكي' : 'Smart Search'}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Real-time Operational Dashboard */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'ar' ? 'لوحة القيادة الذكية لمتابعة المشاريع، الإنتاج، وعمليات السلامة في الوقت الحقيقي' : 'Smart Command Center for Real-time Project, Production, and Safety Operations Monitoring'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operationalKPIs.map((kpi, index) => (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${kpi.bgColor} flex items-center justify-center`}>
                      <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                    </div>
                    <Badge variant="outline" className={`${kpi.color} border-current`}>
                      {kpi.status}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter value={kpi.value} duration={2000} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{kpi.title}</h4>
                  <p className="text-sm text-gray-600">{kpi.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Smart Investor Panel */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'ar' ? 'لوحة المستثمرين الذكية' : 'Smart Investor Panel'}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                {language === 'ar' ? 'مؤشرات الأداء' : 'Performance Metrics'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{metric.value}</span>
                      {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                      {metric.trend === 'stable' && <BarChart3 className="w-4 h-4 text-blue-600" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                {language === 'ar' ? 'رؤى الذكاء الاصطناعي' : 'AI-Powered Insights'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                      <Badge className="bg-purple-100 text-purple-800">
                        {insight.confidence}% {language === 'ar' ? 'ثقة' : 'confidence'}
                      </Badge>
                    </div>
                    <p className="text-gray-700">{insight.insight}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Future API Integration Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
          <CardContent className="p-6 text-center">
            <LineChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-600 mb-2">
              {language === 'ar' ? 'تكامل أرامكو API' : 'Aramco API Integration'}
            </h4>
            <p className="text-sm text-gray-500">
              {language === 'ar' ? 'جاهز للربط المباشر' : 'Ready for direct connection'}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
          <CardContent className="p-6 text-center">
            <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-600 mb-2">
              {language === 'ar' ? 'تقارير ESG' : 'ESG Reports'}
            </h4>
            <p className="text-sm text-gray-500">
              {language === 'ar' ? 'عارض PDF مدمج' : 'Integrated PDF viewer'}
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-600 mb-2">
              {language === 'ar' ? 'مساعد الصوت' : 'Voice Assistant'}
            </h4>
            <p className="text-sm text-gray-500">
              {language === 'ar' ? 'تقنية النص إلى كلام' : 'Text-to-speech ready'}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
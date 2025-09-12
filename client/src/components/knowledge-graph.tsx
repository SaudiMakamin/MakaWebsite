import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Brain, Network, Database, ArrowRight, Zap, Eye, Ship, Drill } from 'lucide-react';
import { useLanguageContext } from './language-provider';

interface KnowledgeNode {
  id: string;
  title: string;
  titleAr: string;
  type: 'subsidiary' | 'service' | 'certification' | 'project';
  description: string;
  descriptionAr: string;
  connections: string[];
  metadata: {
    established?: string;
    value?: string;
    status?: string;
    location?: string;
  };
}

const knowledgeNodes: KnowledgeNode[] = [
  {
    id: 'petroleum-services',
    title: 'Petroleum Services',
    titleAr: 'الخدمات البترولية',
    type: 'subsidiary',
    description: 'Drilling, well services, and upstream operations',
    descriptionAr: 'خدمات الحفر والآبار والعمليات المنبعة',
    connections: ['aramco-qualification', 'drilling-projects', 'iso-certification'],
    metadata: {
      established: '2008',
      value: 'SAR 400M',
      status: 'Active',
      location: 'Eastern Province'
    }
  },
  {
    id: 'offshore-operations',
    title: 'Offshore Operations (MOS)',
    titleAr: 'العمليات البحرية (مكامن أوف شور)',
    type: 'subsidiary',
    description: 'Marine services, vessel chartering, subsea operations',
    descriptionAr: 'الخدمات البحرية وتأجير السفن والعمليات تحت الماء',
    connections: ['aramco-qualification', 'marine-fleet', 'dp2-certification'],
    metadata: {
      established: '2012',
      value: 'USD 400M+ contracts',
      status: 'Active',
      location: 'Dammam Port'
    }
  },
  {
    id: 'bahrain-operations',
    title: 'Bahrain Operations',
    titleAr: 'عمليات البحرين',
    type: 'subsidiary',
    description: 'Regional investments and strategic partnerships',
    descriptionAr: 'الاستثمارات الإقليمية والشراكات الاستراتيجية',
    connections: ['international-expansion', 'joint-ventures'],
    metadata: {
      established: '2015',
      value: 'BHD 50M',
      status: 'Active',
      location: 'Manama'
    }
  },
  {
    id: 'aramco-qualification',
    title: 'Aramco Qualification',
    titleAr: 'مؤهلات أرامكو',
    type: 'certification',
    description: 'Official qualification as Aramco approved contractor',
    descriptionAr: 'مؤهل رسمي كمقاول معتمد من أرامكو',
    connections: ['petroleum-services', 'offshore-operations', 'safety-record'],
    metadata: {
      status: 'Valid',
      value: 'Tier-1 Contractor'
    }
  }
];

export default function KnowledgeGraph() {
  const { language } = useLanguageContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const filteredNodes = knowledgeNodes.filter(node =>
    node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.titleAr.includes(searchQuery) ||
    node.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getNodeColor = (type: string) => {
    switch (type) {
      case 'subsidiary': return 'from-blue-500 to-cyan-500';
      case 'service': return 'from-green-500 to-teal-500';
      case 'certification': return 'from-yellow-500 to-orange-500';
      case 'project': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'subsidiary': return Network;
      case 'service': return Zap;
      case 'certification': return Eye;
      case 'project': return Drill;
      default: return Database;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Brain className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            {language === 'ar' ? 'خريطة المعرفة الذكية' : 'Intelligent Knowledge Graph'}
          </h2>
        </div>
        <p className="text-gray-600 mb-6">
          {language === 'ar' ? 'اكتشف شبكة الشركات والخدمات والمشاريع المترابطة' : 'Explore our interconnected network of companies, services, and projects'}
        </p>

        {/* Search Interface */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'ar' ? 'ابحث في المعرفة...' : 'Search knowledge...'}
            className="pl-10 pr-4 py-3 text-center"
          />
        </div>
      </motion.div>

      {/* Knowledge Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredNodes.map((node, index) => {
          const IconComponent = getNodeIcon(node.type);
          const isSelected = selectedNode === node.id;
          const isHovered = hoveredNode === node.id;
          
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredNode(node.id)}
              onHoverEnd={() => setHoveredNode(null)}
              onClick={() => setSelectedNode(isSelected ? null : node.id)}
              className="cursor-pointer"
            >
              <Card className={`h-full border-2 transition-all duration-300 ${
                isSelected ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-blue-300'
              } ${isHovered ? 'shadow-lg' : ''}`}>
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getNodeColor(node.type)} flex items-center justify-center mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {node.type}
                    </Badge>
                    <motion.div
                      animate={{ rotate: isSelected ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-lg">
                    {language === 'ar' ? node.titleAr : node.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {language === 'ar' ? node.descriptionAr : node.description}
                  </p>
                  
                  {/* Metadata */}
                  <div className="space-y-2">
                    {node.metadata.established && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">
                          {language === 'ar' ? 'تأسست' : 'Established'}
                        </span>
                        <span className="font-medium">{node.metadata.established}</span>
                      </div>
                    )}
                    {node.metadata.value && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">
                          {language === 'ar' ? 'القيمة' : 'Value'}
                        </span>
                        <span className="font-medium text-green-600">{node.metadata.value}</span>
                      </div>
                    )}
                    {node.metadata.status && (
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">
                          {language === 'ar' ? 'الحالة' : 'Status'}
                        </span>
                        <Badge variant="outline" className="text-xs h-5">
                          {node.metadata.status}
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Connections Preview */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isSelected ? 'auto' : 0, 
                      opacity: isSelected ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">
                        {language === 'ar' ? 'الاتصالات' : 'Connections'}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {node.connections.map((connectionId) => (
                          <Badge key={connectionId} variant="outline" className="text-xs">
                            {connectionId.replace('-', ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* AI Assistant Integration Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
      >
        <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {language === 'ar' ? 'مساعد المعرفة الذكي' : 'AI Knowledge Assistant'}
        </h3>
        <p className="text-gray-600 mb-4">
          {language === 'ar' ? 'اسأل عن أي شيء متعلق بشركات مكامن وخدماتها' : 'Ask anything about Makamin companies and services'}
        </p>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          {language === 'ar' ? 'ابدأ المحادثة' : 'Start Conversation'}
          <Brain className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}
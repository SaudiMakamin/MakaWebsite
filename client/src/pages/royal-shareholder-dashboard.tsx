import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Star, TrendingUp, FileText, CheckCircle, AlertTriangle, Clock, User, Phone, Mail, Globe, Calendar, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import makaminFlagsPath from '@assets/hero-carousel-3_1752933941946.jpg';

interface Shareholder {
  id: number;
  fullName: string;
  email: string;
  idNumber: string;
  nationality: string;
  phoneNumber: string;
  birthDate: string;
  ownershipPercentage: string;
  certificateNumber: string;
  joinDate: string;
  notes: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

// Floating particles for royal ambiance
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-60"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const configs = {
    approved: { color: 'bg-emerald-100 text-emerald-800 border-emerald-200', icon: CheckCircle, text: 'معتمد' },
    pending: { color: 'bg-amber-100 text-amber-800 border-amber-200', icon: Clock, text: 'قيد المراجعة' },
    rejected: { color: 'bg-red-100 text-red-800 border-red-200', icon: AlertTriangle, text: 'مرفوض' }
  };
  
  const config = configs[status as keyof typeof configs] || configs.pending;
  const IconComponent = config.icon;
  
  return (
    <Badge className={`${config.color} border font-medium`}>
      <IconComponent className="w-3 h-3 mr-1" />
      {config.text}
    </Badge>
  );
};

// Royal shareholder card component
const RoyalShareholderCard = ({ shareholder }: { shareholder: Shareholder }) => {
  const isRoyal = shareholder.fullName.includes('السمو') || shareholder.fullName.includes('الأمير');
  const isMinister = shareholder.fullName.includes('معالي') || shareholder.fullName.includes('الوزير');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-2xl ${
        isRoyal ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50' :
        isMinister ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50' :
        'border-gray-200 bg-white'
      }`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              {isRoyal && <Crown className="w-5 h-5 text-amber-600" />}
              {isMinister && <Shield className="w-5 h-5 text-blue-600" />}
              {!isRoyal && !isMinister && <User className="w-5 h-5 text-gray-600" />}
              <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
                {shareholder.fullName}
              </CardTitle>
            </div>
            <StatusBadge status={shareholder.status} />
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Ownership Percentage - Prominent Display */}
          <div className={`text-center py-3 rounded-lg ${
            isRoyal ? 'bg-amber-100' : 
            isMinister ? 'bg-blue-100' : 'bg-gray-100'
          }`}>
            <div className="text-2xl font-bold text-gray-800">{shareholder.ownershipPercentage}</div>
            <div className="text-sm text-gray-600">نسبة الملكية</div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              <span className="truncate">{shareholder.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2 text-gray-400" />
              <span>{shareholder.phoneNumber}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FileText className="w-4 h-4 mr-2 text-gray-400" />
              <span>رقم الشهادة: {shareholder.certificateNumber}</span>
            </div>
          </div>
          
          {/* Join Date and Status */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              انضم في {shareholder.joinDate}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {new Date(shareholder.updatedAt).toLocaleDateString('ar-SA')}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function RoyalShareholderDashboard() {
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'royal' | 'ministers' | 'approved'>('all');

  // Fetch shareholders data
  const { data: shareholders, isLoading, error } = useQuery({
    queryKey: ['/api/shareholders'],
    refetchInterval: 10000 // Refresh every 10 seconds for real-time updates
  });

  // Filter shareholders based on selected filter
  const filteredShareholders = React.useMemo(() => {
    if (!shareholders || !Array.isArray(shareholders)) return [];
    
    switch (filter) {
      case 'royal':
        return shareholders.filter((s: Shareholder) => 
          s.fullName.includes('السمو') || s.fullName.includes('الأمير')
        );
      case 'ministers':
        return shareholders.filter((s: Shareholder) => 
          s.fullName.includes('معالي') || s.fullName.includes('الوزير')
        );
      case 'approved':
        return shareholders.filter((s: Shareholder) => s.status === 'approved');
      default:
        return shareholders;
    }
  }, [shareholders, filter]);

  // Statistics
  const stats = React.useMemo(() => {
    if (!shareholders || !Array.isArray(shareholders)) return { total: 0, royal: 0, ministers: 0, approved: 0, totalOwnership: 0 };
    
    const total = shareholders.length;
    const royal = shareholders.filter((s: Shareholder) => 
      s.fullName.includes('السمو') || s.fullName.includes('الأمير')
    ).length;
    const ministers = shareholders.filter((s: Shareholder) => 
      s.fullName.includes('معالي') || s.fullName.includes('الوزير')
    ).length;
    const approved = shareholders.filter((s: Shareholder) => s.status === 'approved').length;
    const totalOwnership = shareholders.reduce((sum: number, s: Shareholder) => 
      sum + parseFloat(s.ownershipPercentage.replace('%', '')), 0
    );
    
    return { total, royal, ministers, approved, totalOwnership };
  }, [shareholders]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">خطأ في تحميل البيانات</h2>
          <p className="text-gray-300">يرجى المحاولة مرة أخرى</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section with Makamin Flags */}
      <section 
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${makaminFlagsPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-blue-900/70 to-slate-900/80" />
        <FloatingParticles />
        
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-12 h-12 text-amber-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                لوحة المساهمين الملكية
              </h1>
              <Trophy className="w-12 h-12 text-amber-400 ml-4" />
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              نظام إدارة المساهمين المخصص للملوك والأمراء والوزراء
            </p>
            
            {/* Real-time Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="text-2xl font-bold text-white">{stats.total}</div>
                <div className="text-sm text-blue-200">إجمالي المساهمين</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-amber-500/20 backdrop-blur-sm rounded-xl p-4 border border-amber-400/30"
              >
                <div className="text-2xl font-bold text-amber-300">{stats.royal}</div>
                <div className="text-sm text-amber-200">الأمراء</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-400/30"
              >
                <div className="text-2xl font-bold text-blue-300">{stats.ministers}</div>
                <div className="text-sm text-blue-200">الوزراء</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/30"
              >
                <div className="text-2xl font-bold text-emerald-300">{stats.approved}</div>
                <div className="text-sm text-emerald-200">معتمد</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="text-2xl font-bold text-white">{stats.totalOwnership.toFixed(1)}%</div>
                <div className="text-sm text-blue-200">إجمالي الملكية</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { key: 'all', label: 'جميع المساهمين', icon: Globe },
              { key: 'royal', label: 'الأمراء', icon: Crown },
              { key: 'ministers', label: 'الوزراء', icon: Shield },
              { key: 'approved', label: 'المعتمدين', icon: CheckCircle }
            ].map(({ key, label, icon: Icon }) => (
              <Button
                key={key}
                onClick={() => setFilter(key as any)}
                variant={filter === key ? "default" : "outline"}
                className={`flex items-center space-x-2 ${
                  filter === key ? 'bg-blue-600 text-white' : ''
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Button>
            ))}
          </div>

          {/* Shareholders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShareholders.map((shareholder: Shareholder, index: number) => (
              <motion.div
                key={shareholder.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RoyalShareholderCard shareholder={shareholder} />
              </motion.div>
            ))}
          </div>

          {filteredShareholders.length === 0 && (
            <div className="text-center py-12">
              <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد مساهمين</h3>
              <p className="text-gray-500">لم يتم العثور على مساهمين في هذه الفئة</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
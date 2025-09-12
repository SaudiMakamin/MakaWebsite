import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useLanguageContext } from '@/components/language-provider';
import { apiRequest } from '@/lib/queryClient';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Upload, User, FileText, Shield, CheckCircle, Star, Loader2 } from 'lucide-react';
import makaminFlagsPath from '@assets/hero-carousel-3_1752933941946.jpg';

interface ShareholderData {
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
  address: string;
  city: string;
  postalCode: string;
  sharesCount: string;
  investmentAmount: string;
}

export default function UpdateShareholder() {
  const { language } = useLanguageContext();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ShareholderData>({
    fullName: '',
    email: '',
    idNumber: '',
    nationality: '',
    phoneNumber: '',
    birthDate: '',
    ownershipPercentage: '0.00%', // Will be auto-filled later
    certificateNumber: '',
    joinDate: '2008-01-01', // Default join date
    notes: '',
    address: '',
    city: '',
    postalCode: '',
    sharesCount: '0',
    investmentAmount: ''
  });
  
  const [uploadedFiles, setUploadedFiles] = useState({
    idDocument: null as File | null,
    sharesCertificate: null as File | null,
    powerOfAttorney: null as File | null,
    bankDetails: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitShareholder = useMutation({
    mutationFn: async (data: ShareholderData) => {
      // Transform data for Google Workspace integration
      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phoneNumber,
        nationalId: data.idNumber,
        nationality: data.nationality,
        address: data.address || '',
        city: data.city || '',
        postalCode: data.postalCode || '',
        sharesCount: parseInt(data.sharesCount) || 0,
        investmentAmount: data.investmentAmount || ''
      };
      
      const response = await apiRequest("POST", "/api/shareholders/google-workspace", payload);
      return await response.json();
    },
    onSuccess: (responseData) => {
      toast({
        title: "🎉 Google Workspace Integration Success!",
        description: `Shareholder ID: ${responseData.shareholderId} - Drive Folder & Emails Created`,
        variant: "default",
      });
      setIsSubmitted(true);
    },
    onError: async (error) => {
      console.error("Google Workspace submission error:", error);
      
      // Fallback to local storage
      try {
        const payload = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          nationalId: formData.idNumber,
          nationality: formData.nationality,
          address: formData.address || '',
          city: formData.city || '',
          postalCode: formData.postalCode || '',
          sharesCount: parseInt(formData.sharesCount) || 0,
          investmentAmount: formData.investmentAmount || ''
        };
        
        const fallbackResponse = await apiRequest("POST", "/api/shareholders", payload);
        const fallbackData = await fallbackResponse.json();
        
        toast({
          title: "💾 Saved Locally",
          description: "Data saved. Google Workspace integration will retry automatically.",
          variant: "default",
        });
        setIsSubmitted(true);
      } catch (fallbackError) {
        toast({
          title: "❌ Complete System Failure",
          description: "Please contact support: +966 56 330 8727",
          variant: "destructive",
        });
      }
    },
  });



  const handleInputChange = (field: keyof ShareholderData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (type: keyof typeof uploadedFiles, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.idNumber || !formData.nationality || !formData.phoneNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitShareholder.mutate(formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white rounded-2xl p-12 shadow-2xl max-w-lg mx-4"
        >
          <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Thank You for Your Update
          </h2>
          <p className="text-gray-600 mb-6">
            Your update has been received and is now under administrative review.
            You will be notified via email once the update is approved or if any clarification is needed.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Submit Another Update
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SemanticMetadata
        title="Update Shareholder Information | Saudi Makamin Holding"
        description="Update your shareholder information to ensure your records and legal rights are always accurate and up to date."
        page="update-shareholder"
      />
      <EnhancedSecurity />

      {/* Hero Section with Premium Mobile-First Design */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 text-slate-800 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Makamin Flags Background */}
        <div className="absolute inset-0">
          <img 
            src={makaminFlagsPath} 
            alt="Makamin Corporate Flags" 
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-3000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/50 to-emerald-100/60 backdrop-blur-[2px]"></div>
          
          {/* Dynamic Particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.7, 0.3], 
                  scale: [0.8, 1.2, 0.8],
                  y: [-20, 20, -20],
                  x: [-10, 10, -10]
                }}
                transition={{ 
                  duration: 4 + i * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                className="absolute w-2 h-2 bg-emerald-400/50 rounded-full"
                style={{
                  left: `${15 + (i * 8)}%`,
                  top: `${20 + (i % 3) * 20}%`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="sm:hidden mb-6">
            <HeroLogo size="sm" />
          </div>
          <div className="hidden sm:block">
            <HeroLogo size="lg" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 sm:mt-8 md:mt-12"
          >
            <div className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/30 max-w-4xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                Update Shareholder Information
              </h1>
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium drop-shadow-lg mb-6 sm:mb-8 px-2">
                Welcome, Valued Shareholder.
                <br className="hidden sm:block" />
                <span className="block sm:inline text-base sm:text-lg text-emerald-700 mt-2 sm:mt-0">
                  Please review and update your information to ensure your records and legal rights are always accurate and up to date.
                </span>
              </p>
              
              {/* Motivational Cards - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/40"
                >
                  <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-bold text-slate-800 mb-1">Secure Records</h3>
                  <p className="text-sm text-slate-600">Keep your legal rights protected</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/40"
                >
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-slate-800 mb-1">Priority Access</h3>
                  <p className="text-sm text-slate-600">Receive updates and benefits first</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/40"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-bold text-slate-800 mb-1">Verified Status</h3>
                  <p className="text-sm text-slate-600">Maintain verified shareholder status</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Update Form Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            {/* Personal Information - Mobile Optimized */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 mr-2 sm:mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-700 font-medium text-sm sm:text-base">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500 h-12 text-base"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium text-sm sm:text-base">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500 h-12 text-base"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="idNumber" className="text-gray-700 font-medium">ID/Residence Number *</Label>
                    <Input
                      id="idNumber"
                      type="text"
                      value={formData.idNumber}
                      onChange={(e) => handleInputChange('idNumber', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500"
                      placeholder="1234567890"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="nationality" className="text-gray-700 font-medium">Nationality *</Label>
                    <Select value={formData.nationality} onValueChange={(value) => handleInputChange('nationality', value)}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-emerald-500">
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saudi">Saudi</SelectItem>
                        <SelectItem value="non-saudi">Non-Saudi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="phoneNumber" className="text-gray-700 font-medium">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500"
                      placeholder="+966 5X XXX XXXX"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="birthDate" className="text-gray-700 font-medium">Birth Date</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ownership Information - Mobile Optimized */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Ownership Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="ownershipPercentage" className="text-gray-700 font-medium">Current Ownership Percentage</Label>
                    <Input
                      id="ownershipPercentage"
                      type="text"
                      value={formData.ownershipPercentage}
                      className="mt-2 border-gray-300 bg-gray-100"
                      placeholder="Will be auto-filled"
                      readOnly
                    />
                    <p className="text-xs text-gray-500 mt-1">This will be automatically populated by the system</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="certificateNumber" className="text-gray-700 font-medium">Share Certificate Number</Label>
                    <Input
                      id="certificateNumber"
                      type="text"
                      value={formData.certificateNumber}
                      onChange={(e) => handleInputChange('certificateNumber', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500"
                      placeholder="Certificate number (if available)"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="joinDate" className="text-gray-700 font-medium">Date Joined as Shareholder</Label>
                    <Input
                      id="joinDate"
                      type="date"
                      value={formData.joinDate}
                      className="mt-2 border-gray-300 bg-gray-100"
                      readOnly
                    />
                    <p className="text-xs text-gray-500 mt-1">Fixed date, cannot be modified</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="notes" className="text-gray-700 font-medium">Notes on Rights or Powers of Attorney</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-emerald-500"
                      placeholder="Any additional notes regarding your rights or delegated powers"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Document Upload - Mobile Optimized */}
            <Card className="shadow-xl border-0">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Supporting Documents</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { key: 'idDocument', label: 'ID Card / Residence Card', icon: '🆔' },
                    { key: 'sharesCertificate', label: 'Share Ownership Certificate', icon: '📜' },
                    { key: 'powerOfAttorney', label: 'Power of Attorney (if applicable)', icon: '⚖️' },
                    { key: 'bankDetails', label: 'Bank Account Details', icon: '🏦' }
                  ].map((doc) => (
                    <div key={doc.key} className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-emerald-400 transition-colors">
                      <div className="text-2xl sm:text-3xl mb-2">{doc.icon}</div>
                      <h3 className="font-medium text-gray-800 mb-2 text-sm sm:text-base">{doc.label}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">PDF or JPG format</p>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full border-emerald-300 text-emerald-600 hover:bg-emerald-50 h-10 sm:h-auto text-sm sm:text-base"
                        disabled
                      >
                        <span className="hidden sm:inline">Upload File (Coming Soon)</span>
                        <span className="sm:hidden">Upload (Soon)</span>
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Document upload functionality will be available soon. 
                    Our AI system will automatically extract information from your documents to fill the form fields.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Digital Certificates Preview Section - Mobile Optimized */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-emerald-50">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 sm:mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Your Digital Certificates</h2>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-2 sm:px-0">
                  As a verified shareholder, you will receive these digital certificates once your information is approved:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Shareholder Certificate */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-emerald-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Digital Shareholding Certificate</h3>
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                        BLOCKCHAIN SECURED
                      </div>
                      <p className="text-sm text-gray-600">
                        Official digital proof of your ownership percentage in Saudi Makamin Holding Company
                      </p>
                    </div>
                  </motion.div>

                  {/* Voting Rights Certificate */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-blue-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Voting Rights Certificate</h3>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                        GOVERNANCE ACCESS
                      </div>
                      <p className="text-sm text-gray-600">
                        Digital certificate granting you voting rights in company general assemblies
                      </p>
                    </div>
                  </motion.div>

                  {/* Dividend Entitlement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-purple-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">Dividend Entitlement</h3>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                        PROFIT SHARING
                      </div>
                      <p className="text-sm text-gray-600">
                        Official documentation of your right to receive company profit distributions
                      </p>
                    </div>
                  </motion.div>

                  {/* Priority Access Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border-2 border-dashed border-amber-300"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-amber-600" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">VIP Shareholder Status</h3>
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                        PRIORITY ACCESS
                      </div>
                      <p className="text-sm text-gray-600">
                        Priority access to company reports, events, and investment opportunities
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200">
                  <div className="flex items-center justify-center text-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    <p className="text-sm text-gray-700">
                      <strong>Secure & Tamper-Proof:</strong> All certificates are blockchain-secured and digitally signed by Saudi Makamin Holding Company
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button - Mobile Optimized */}
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={submitShareholder.isPending}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold py-4 sm:py-4 px-8 sm:px-12 rounded-xl shadow-lg text-base sm:text-lg animate-pulse min-h-[3rem] sm:min-h-[3.5rem]"
                  style={{
                    animation: submitShareholder.isPending ? 'none' : 'pulse 2s infinite'
                  }}
                >
                  {submitShareholder.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                      <span className="hidden sm:inline">Submitting...</span>
                      <span className="sm:hidden">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="hidden sm:inline">Confirm & Submit for Review</span>
                      <span className="sm:hidden">Submit for Review</span>
                    </>
                  )}
                </Button>
              </motion.div>
              
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 px-4 sm:px-0">
                Your information will be reviewed by our administrative team within 2-3 business days.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
import { useLanguageContext } from '../components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Award, Calendar, Shield, CheckCircle, FileText, Globe, Users, Building, Star, Medal, Flag, Drill, Factory } from 'lucide-react';
import { useState } from 'react';
// الشعار متاح في Header - لا حاجة لاستيراد

// Real certificate images from company profile
const iso9001Image = '/images/iso-9001-certificate.jpg';
const iso14001Image = '/images/ISO 14001 2015 Environmental Management_1752608437738.png'; // Logo only - real certificate not found
const iso45001Image = '/images/ISO 45001 -2018 Occupational Health & Safety_1752608437739.jpg'; // Logo only - real certificate not found
const aramcoAppreciationImage = '/images/aramco-appreciation-real.jpg';
const aramcoAppreciation2Image = '/images/aramco-appreciation-2.jpg';
const aramcoAppreciation3Image = '/images/aramco-appreciation-3.jpg';
const commercialRegImage = '/images/commercial-registration-holding.jpg';
const commercialPetroleumImage = '/images/commercial-registration-petroleum.jpg';
const commercialKhobarImage = '/images/commercial-registration-khobar.jpg';
const offshoreReg1Image = '/images/offshore-registration-1.jpg';
const offshoreReg2Image = '/images/offshore-registration-2.jpg';
const offshoreReg3Image = '/images/offshore-registration-3.jpg';
const saudizationImage = '/images/saudization-certificate-real.jpg';
// New authentic certificates from 2017 company profile
const tuvNordISOImage = '/images/tuv-nord-iso-certificate.jpg';
const aramcoSracoImage = '/images/aramco-appreciation-sraco.jpg';
const aramcoShutdownImage = '/images/aramco-appreciation-shutdown.jpg';
const aramcoRTRImage = '/images/aramco-achievement-rtr-shutdown.jpg';
const aramcoPipelineImage = '/images/aramco-pipeline-services-certification.jpg';
const afghanimProjectImage = '/images/afghanim-project-completion-certificate.jpg';

interface Certificate {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  authority: string;
  authorityAr: string;
  year: string;
  status: 'VALID' | 'ACTIVE' | 'CERTIFIED';
  category: 'quality' | 'legal' | 'client' | 'national' | 'safety';
  categoryLabel: string;
  categoryLabelAr: string;
  downloadUrl?: string;
  previewImage?: string;
  validUntil?: string;
  registrationNumber?: string;
  isExpiringSoon?: boolean;
  isInternational?: boolean;
  isPremium?: boolean;
  managers?: string;
  additionalRegistrations?: Array<{
    number: string;
    status: 'PRIMARY' | 'SECONDARY' | 'LEGAL_NOTICE';
    type: string;
    image: string;
    warning?: string;
  }>;
}

export default function Certifications() {
  const { language } = useLanguageContext();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // PREMIUM CERTIFICATES - ORDERED BY IMPORTANCE FOR ROYAL VIEWING
  const certificates: Certificate[] = [
    // === TIER 1: MOST PRESTIGIOUS CERTIFICATES (TOP PRIORITY) ===
    {
      id: 'tuv-nord-iso-certificate',
      title: 'TÜV NORD ISO 9001:2008 Management System Certificate - AUTHENTIC',
      titleAr: 'شهادة توف نورد آيزو 9001:2008 نظام الإدارة - أصلية',
      description: 'Official TÜV NORD CERT certification for Quality Management System DIN EN ISO 9001:2008, covering Industrial Services (NDT, Inspections, Corrosion and Advanced NDT). Certificate Registration No. 44 100 1957 6040, valid from 2015-06-20 to 2018-06-14.',
      descriptionAr: 'شهادة توف نورد سيرت الرسمية لنظام إدارة الجودة آيزو 9001:2008، تغطي الخدمات الصناعية (الفحص غير المدمر، التفتيش، التآكل والفحص المتقدم). رقم التسجيل 44 100 1957 6040، صالحة من 2015-06-20 إلى 2018-06-14.',
      authority: 'TÜV NORD CERT GmbH',
      authorityAr: 'توف نورد سيرت المحدودة',
      year: '2015',
      validUntil: '2018',
      status: 'CERTIFIED',
      category: 'quality',
      categoryLabel: 'International Quality Standards',
      categoryLabelAr: 'معايير الجودة الدولية',
      registrationNumber: '44 100 1957 6040',
      previewImage: tuvNordISOImage,
      isInternational: true,
      isPremium: true
    },
    {
      id: 'aramco-achievement-rtr',
      title: 'Saudi Aramco Certificate of Achievement - RTR Mega Shutdown 2012',
      titleAr: 'شهادة إنجاز أرامكو السعودية - الإغلاق الضخم RTR 2012',
      description: 'Certificate of Achievement awarded to Saudi Makamin Company in recognition of Distinguished Services, Quality and Performance in supplying experienced API Inspectors for RTR\'s 2012 Mega Shutdown during the period 4th March to 30th April 2012, issued by Uthman K. Hakami, Manager Refinery Engineering Department, Ras Tanura Refinery.',
      descriptionAr: 'شهادة إنجاز ممنوحة لشركة مكامن السعودية تقديراً للخدمات المتميزة والجودة والأداء في توريد مفتشين API ذوي خبرة للإغلاق الضخم RTR 2012 خلال الفترة من 4 مارس إلى 30 أبريل 2012، صادرة من عثمان ك. حكمي، مدير قسم هندسة المصافي، مصفاة رأس تنورة.',
      authority: 'Saudi Aramco - Ras Tanura Refinery',
      authorityAr: 'أرامكو السعودية - مصفاة رأس تنورة',
      year: '2012',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Aramco Achievement Recognition',
      categoryLabelAr: 'تقدير إنجازات أرامكو',
      previewImage: aramcoRTRImage,
      isPremium: true
    },
    {
      id: 'aramco-appreciation-shutdown',
      title: 'Saudi Aramco Certificate of Appreciation - Shutdown Activity Excellence',
      titleAr: 'شهادة تقدير أرامكو السعودية - التميز في أنشطة الإغلاق',
      description: 'Certificate of Appreciation from Saudi Aramco recognizing Makamin Petroleum Services Company for invaluable task sharing as Contractor for Shutdown Activity. Completed 7 new tie-in points for MPPM at SHEDGUM GOSP-4 within T and I Shutdown from September 28-October 23, 2012, demonstrating excellent workmanship, professionalism, and project management.',
      descriptionAr: 'شهادة تقدير من أرامكو السعودية لشركة مكامن لخدمات البترول للمهام القيمة كمقاول لأنشطة الإغلاق. تم إنجاز 7 نقاط ربط جديدة لـ MPPM في محطة SHEDGUM GOSP-4 خلال إغلاق T و I من 28 سبتمبر إلى 23 أكتوبر 2012.',
      authority: 'Saudi Aramco - NGPD/NGMD/Project T&I Unit',
      authorityAr: 'أرامكو السعودية - وحدة مشاريع T&I',
      year: '2012',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Aramco Excellence Recognition',
      categoryLabelAr: 'تقدير التميز أرامكو',
      previewImage: aramcoShutdownImage,
      isPremium: true
    },
    {
      id: 'aramco-pipeline-services',
      title: 'Saudi Aramco Pipeline Services Division Certification - T&I Shutdown Excellence',
      titleAr: 'شهادة قسم خدمات خطوط الأنابيب أرامكو السعودية - تميز الإغلاق والربط',
      description: 'Official certification from Saudi Aramco Pipeline Services Division recognizing significant contribution and acknowledgement of company commitment and dedication towards performing excellent role as Contractor for T and I Shutdown Activities in finishing installation of Multi-Phase Flow Meter and Associated Piping Tie-Ins at SHEDGUM GOSP-4, awarded October 24, 2012.',
      descriptionAr: 'شهادة رسمية من قسم خدمات خطوط الأنابيب بأرامكو السعودية تقديراً للمساهمة الكبيرة والالتزام المؤسسي في أداء دور ممتاز كمقاول لأنشطة إغلاق T و I في تركيب عداد التدفق متعدد الأطوار وأنابيب الربط المرتبطة في محطة SHEDGUM GOSP-4، ممنوحة في 24 أكتوبر 2012.',
      authority: 'Saudi Aramco - Pipeline Services Division',
      authorityAr: 'أرامكو السعودية - قسم خدمات خطوط الأنابيب',
      year: '2012',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Aramco Pipeline Services',
      categoryLabelAr: 'خدمات خطوط الأنابيب أرامكو',
      previewImage: aramcoPipelineImage,
      isPremium: true
    },
    {
      id: 'aramco-appreciation-sraco',
      title: 'Saudi Aramco SRACO Appreciation Letter - Outstanding Performance 2008',
      titleAr: 'خطاب تقدير أرامكو السعودية - الأداء المتميز للشركة السعودية للتنمية 2008',
      description: 'Official appreciation letter from Saudi Aramco PMT (PPD/Oil & Gas Upstream Projects Division) dated January 8, 2008, recognizing SAEED RADAD AL ZAHRANI CORPORATION (SRACO) for outstanding performance in TIE-IN SDGM - 547AIG 6" OIL FLOWLINE TO SDGM GOSP-5 project, demonstrating dedication and accelerated schedule completion in accordance with Saudi Aramco Standards.',
      descriptionAr: 'خطاب تقدير رسمي من إدارة المشاريع النفطية والغازية المنبعة بأرامكو السعودية بتاريخ 8 يناير 2008، لتقدير الأداء المتميز لشركة سعيد رداد الزهراني في مشروع ربط خط التدفق النفطي 547AIG بقطر 6 بوصة مع محطة معالجة الغاز GOSP-5.',
      authority: 'Saudi Aramco PMT - PPD/Oil & Gas Upstream Projects Division',
      authorityAr: 'أرامكو السعودية - إدارة المشاريع النفطية والغازية المنبعة',
      year: '2008',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Aramco Historical Appreciation',
      categoryLabelAr: 'تقدير أرامكو التاريخي',
      registrationNumber: 'PPD/OG/UPD-SHU-002/08',
      previewImage: aramcoSracoImage,
      isPremium: true
    },
    {
      id: 'afghanim-project-completion',
      title: 'Afghanim International Project Completion Certificate - Gas Turbine Generator Plant',
      titleAr: 'شهادة إتمام مشروع أفغانيم الدولية - محطة مولدات التوربينات الغازية',
      description: 'Certificate of Project Completion presented to Mr. Mohammed Al-Shaye, Executive Director, on behalf of Saudi Makamin SRA Petroleum Services Company (L.L.C) for outstanding support and completion of 4th Gas Turbine Generator Plant Project in Khafji Joint Operation at Khafji, Kingdom of Saudi Arabia, in Non-Destructive Inspection (RT, MT, PT, UT), awarded January 23, 2011.',
      descriptionAr: 'شهادة إتمام المشروع المقدمة للسيد محمد الشايع، المدير التنفيذي، نيابة عن شركة مكامين السعودية لخدمات البترول المحدودة لدعمه المتميز وإتمام مشروع محطة مولدات التوربينات الغازية الرابعة في العمليات المشتركة بالخفجي، المملكة العربية السعودية، في مجال الفحص غير المدمر، ممنوحة في 23 يناير 2011.',
      authority: 'Afghanim International General Trading & Contracting Co W.L.L',
      authorityAr: 'شركة أفغانيم العالمية للتجارة العامة والمقاولات ذ.م.م',
      year: '2011',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'International Projects Excellence',
      categoryLabelAr: 'تميز المشاريع الدولية',
      registrationNumber: 'AGH/GTG/SRA/L-0611',
      previewImage: afghanimProjectImage,
      isInternational: true,
      isPremium: true
    },

    // === TIER 2: COMMERCIAL REGISTRATIONS (LEGAL FOUNDATION) ===
    {
      id: 'commercial-holding',
      title: 'Commercial Registration Certificate - Holding Company',
      titleAr: 'شهادة السجل التجاري - الشركة القابضة',
      description: 'Official commercial registration for Saudi Makamin Holding Company for Oil & Gas Services with SAR 1.2 billion authorized capital. Issued 2017, valid until 31-12-2019.',
      descriptionAr: 'التسجيل التجاري الرسمي لشركة مكامن السعودية القابضة للخدمات البترولية برأس مال مصرح 1.2 مليار ريال. صادر 2017، صالح حتى 31-12-2019.',
      authority: 'Ministry of Commerce, Kingdom of Saudi Arabia',
      authorityAr: 'وزارة التجارة، المملكة العربية السعودية',
      year: '2017',
      status: 'ACTIVE',
      category: 'legal',
      categoryLabel: 'Ministry of Commerce Registrations',
      categoryLabelAr: 'تسجيلات وزارة التجارة',
      registrationNumber: 'cr-1010251168',
      validUntil: '31-12-2019',
      previewImage: commercialRegImage,
      isPremium: true
    },
    {
      id: 'commercial-petroleum',
      title: 'Commercial Registration - Petroleum Services Company',
      titleAr: 'السجل التجاري - شركة الخدمات البترولية',
      description: 'Commercial registration for Makamin Petroleum Services Company operations in oil and gas sector. Branch manager remains responsible for operations since 2017.',
      descriptionAr: 'التسجيل التجاري لشركة مكامن للخدمات البترولية في قطاع النفط والغاز. مسؤول الفرع يبقى على رأس المسؤولية منذ 2017.',
      authority: 'Ministry of Commerce, Kingdom of Saudi Arabia',
      authorityAr: 'وزارة التجارة، المملكة العربية السعودية',
      year: '2017',
      status: 'ACTIVE',
      category: 'legal',
      categoryLabel: 'Ministry of Commerce Registrations',
      categoryLabelAr: 'تسجيلات وزارة التجارة',
      registrationNumber: 'CR-2050048513',
      previewImage: commercialPetroleumImage,
      isPremium: true
    },
    {
      id: 'commercial-khobar',
      title: 'Commercial Registration - Khobar Branch',
      titleAr: 'السجل التجاري - فرع الخبر',
      description: 'Commercial registration for Saudi Makamin Holding Company for Oil & Gas Services - Khobar Branch. Manager: Majed Abdullah Hazza Al-Shanbari remains responsible since 2017.',
      descriptionAr: 'التسجيل التجاري لفرع شركة مكامن السعودية القابضة لخدمات النفط والغاز - فرع الخبر. المدير: ماجد عبدالله هزاع الشنبري يبقى على رأس المسؤولية منذ 2017.',
      authority: 'Ministry of Commerce, Kingdom of Saudi Arabia',
      authorityAr: 'وزارة التجارة، المملكة العربية السعودية',
      year: '2017',
      status: 'ACTIVE',
      category: 'legal',
      categoryLabel: 'Ministry of Commerce Registrations',
      categoryLabelAr: 'تسجيلات وزارة التجارة',
      registrationNumber: '2051038139',
      previewImage: commercialKhobarImage,
      isPremium: true
    },
    {
      id: 'commercial-offshore',
      title: 'Commercial Registration - Offshore Operations (MOS)',
      titleAr: 'السجل التجاري - العمليات البحرية (مكامن أوف شور)',
      description: 'Triple Commercial Registration Portfolio for Makamin Offshore Saudi Ltd (MOS) - Limited Liability Mixed Company. Officially registered Saudi foreign branch entity. Managers Ali Al-Bureidi and Ahmed Al-Faleh have been responsible since establishment.',
      descriptionAr: 'محفظة السجلات التجارية الثلاثية لشركة مكامن أوف شور السعودية المحدودة - شركة ذات مسؤولية محدودة مختلطة. الكيان الفرع الأجنبي المسجل رسمياً باسم سعودي. المدراء علي البريدي وأحمد الفالح مسؤولين منذ التأسيس.',
      authority: 'Ministry of Commerce, Kingdom of Saudi Arabia',
      authorityAr: 'وزارة التجارة، المملكة العربية السعودية',
      year: 'Since Establishment',
      status: 'ACTIVE',
      category: 'legal',
      categoryLabel: 'Legal Registrations',
      categoryLabelAr: 'التسجيلات القانونية',
      registrationNumber: '2050077238',
      previewImage: offshoreReg1Image,
      isPremium: true,
      additionalRegistrations: [
        {
          number: '2050077238',
          status: 'PRIMARY',
          type: 'Original Registration',
          image: offshoreReg1Image
        },
        {
          number: 'Secondary Registration',
          status: 'SECONDARY',
          type: 'Supplementary Document',
          image: offshoreReg2Image
        },
        {
          number: '2051223939',
          status: 'LEGAL_NOTICE',
          type: 'Legal Notice Required',
          image: offshoreReg3Image,
          warning: 'Legal Affairs Department Notice - Requires Attention'
        }
      ]
    },

    // === TIER 3: STANDARD CERTIFICATIONS (SUPPORTING DOCUMENTATION) ===
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Quality Management System',
      titleAr: 'آيزو 9001:2015 نظام إدارة الجودة',
      description: 'International standard for quality management systems ensuring consistent excellence in all operations and service delivery.',
      descriptionAr: 'المعيار الدولي لأنظمة إدارة الجودة الذي يضمن التميز المتسق في جميع العمليات وتقديم الخدمات.',
      authority: 'International Certification Body',
      authorityAr: 'هيئة الاعتماد الدولية',
      year: '2015',
      status: 'VALID',
      category: 'quality',
      categoryLabel: 'Quality Standards',
      categoryLabelAr: 'معايير الجودة',
      validUntil: '2025',
      registrationNumber: '44 105 1557 6040',
      previewImage: iso9001Image,
      isInternational: true,
      isPremium: true
    },
    {
      id: 'iso-14001',
      title: 'ISO 14001:2015 Environmental Management System',
      titleAr: 'آيزو 14001:2015 نظام الإدارة البيئية',
      description: 'Environmental management systems standard demonstrating unwavering commitment to environmental stewardship and sustainability excellence.',
      descriptionAr: 'معيار أنظمة الإدارة البيئية الذي يوضح الالتزام الثابت بالإشراف البيئي والتميز في الاستدامة.',
      authority: 'International Certification Body',
      authorityAr: 'هيئة الاعتماد الدولية',
      year: '2015',
      status: 'VALID',
      category: 'quality',
      categoryLabel: 'Environmental Standards',
      categoryLabelAr: 'معايير البيئة',
      validUntil: '2025',
      registrationNumber: 'ISO-14001-2015-ENV',
      previewImage: iso14001Image,
      isInternational: true,
      isPremium: true
    },
    {
      id: 'iso-45001',
      title: 'ISO 45001:2018 Occupational Health & Safety Management',
      titleAr: 'آيزو 45001:2018 إدارة الصحة والسلامة المهنية',
      description: 'Occupational health and safety management systems certification ensuring ultimate worker protection and operational excellence.',
      descriptionAr: 'شهادة أنظمة إدارة الصحة والسلامة المهنية التي تضمن الحماية القصوى للعمال والتميز التشغيلي.',
      authority: 'International Certification Body',
      authorityAr: 'هيئة الاعتماد الدولية',
      year: '2018',
      status: 'VALID',
      category: 'safety',
      categoryLabel: 'Safety Standards',
      categoryLabelAr: 'معايير السلامة',
      validUntil: '2025',
      registrationNumber: 'ISO-45001-2018-OHS',
      previewImage: iso45001Image,
      isInternational: true,
      isPremium: true
    },
    {
      id: 'aramco-appreciation-legacy',
      title: 'Saudi Aramco SRACO Appreciation Letter - Outstanding Performance',
      titleAr: 'خطاب تقدير أرامكو السعودية - الأداء المتميز للشركة السعودية للتنمية',
      description: 'Official appreciation letter from Saudi Aramco PMT (PPD/Oil & Gas Upstream Projects Division) dated January 8, 2008, recognizing SAEED RADAD AL ZAHRANI CORPORATION (SRACO) for outstanding performance in TIE-IN SDGM - 547AIG 6" OIL FLOWLINE TO SDGM GOSP-5 project, demonstrating dedication and accelerated schedule completion in accordance with Saudi Aramco Standards.',
      descriptionAr: 'خطاب تقدير رسمي من إدارة المشاريع النفطية والغازية المنبعة بأرامكو السعودية بتاريخ 8 يناير 2008، لتقدير الأداء المتميز لشركة سعيد رداد الزهراني في مشروع ربط خط التدفق النفطي 547AIG بقطر 6 بوصة مع محطة معالجة الغاز GOSP-5.',
      authority: 'Saudi Aramco PMT - PPD/Oil & Gas Upstream Projects Division',
      authorityAr: 'أرامكو السعودية - إدارة المشاريع النفطية والغازية المنبعة',
      year: '2008',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Client Appreciation',
      categoryLabelAr: 'تقدير العملاء',
      registrationNumber: 'PPD/OG/UPD-SHU-002/08',
      previewImage: aramcoSracoImage,
      isPremium: true
    },
    {
      id: 'aramco-appreciation-shutdown',
      title: 'Saudi Aramco Certificate of Appreciation - Shutdown Activity Excellence',
      titleAr: 'شهادة تقدير أرامكو السعودية - التميز في أنشطة الإغلاق',
      description: 'Certificate of Appreciation from Saudi Aramco recognizing Makamin Petroleum Services Company for invaluable task sharing as Contractor for Shutdown Activity. Completed 7 new tie-in points for MPPM at SHEDGUM GOSP-4 within T and I Shutdown from September 28-October 23, 2012, demonstrating excellent workmanship, professionalism, and project management.',
      descriptionAr: 'شهادة تقدير من أرامكو السعودية لشركة مكامن لخدمات البترول للمهام القيمة كمقاول لأنشطة الإغلاق. تم إنجاز 7 نقاط ربط جديدة لـ MPPM في محطة SHEDGUM GOSP-4 خلال إغلاق T و I من 28 سبتمبر إلى 23 أكتوبر 2012.',
      authority: 'Saudi Aramco - NGPD/NGMD/Project T&I Unit',
      authorityAr: 'أرامكو السعودية - وحدة مشاريع T&I',
      year: '2012',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Client Recognition',
      categoryLabelAr: 'تقدير العملاء',
      previewImage: aramcoShutdownImage,
      isPremium: true
    },
    {
      id: 'aramco-achievement-rtr',
      title: 'Saudi Aramco Certificate of Achievement - RTR Mega Shutdown 2012',
      titleAr: 'شهادة إنجاز أرامكو السعودية - الإغلاق الضخم RTR 2012',
      description: 'Certificate of Achievement awarded to Saudi Makamin Company in recognition of Distinguished Services, Quality and Performance in supplying experienced API Inspectors for RTR\'s 2012 Mega Shutdown during the period 4th March to 30th April 2012, issued by Uthman K. Hakami, Manager Refinery Engineering Department, Ras Tanura Refinery.',
      descriptionAr: 'شهادة إنجاز ممنوحة لشركة مكامن السعودية تقديراً للخدمات المتميزة والجودة والأداء في توريد مفتشين API ذوي خبرة للإغلاق الضخم RTR 2012 خلال الفترة من 4 مارس إلى 30 أبريل 2012، صادرة من عثمان ك. حكمي، مدير قسم هندسة المصافي، مصفاة رأس تنورة.',
      authority: 'Saudi Aramco - Ras Tanura Refinery',
      authorityAr: 'أرامكو السعودية - مصفاة رأس تنورة',
      year: '2012',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Achievement Recognition',
      categoryLabelAr: 'تقدير الإنجازات',
      previewImage: aramcoRTRImage,
      isPremium: true
    },
    {
      id: 'aramco-pipeline-services',
      title: 'Saudi Aramco Pipeline Services Division Certification - T&I Shutdown Excellence',
      titleAr: 'شهادة قسم خدمات خطوط الأنابيب أرامكو السعودية - تميز الإغلاق والربط',
      description: 'Official certification from Saudi Aramco Pipeline Services Division recognizing significant contribution and acknowledgement of company commitment and dedication towards performing excellent role as Contractor for T and I Shutdown Activities in finishing installation of Multi-Phase Flow Meter and Associated Piping Tie-Ins at SHEDGUM GOSP-4, awarded October 24, 2012.',
      descriptionAr: 'شهادة رسمية من قسم خدمات خطوط الأنابيب بأرامكو السعودية تقديراً للمساهمة الكبيرة والالتزام المؤسسي في أداء دور ممتاز كمقاول لأنشطة إغلاق T و I في تركيب عداد التدفق متعدد الأطوار وأنابيب الربط المرتبطة في محطة SHEDGUM GOSP-4، ممنوحة في 24 أكتوبر 2012.',
      authority: 'Saudi Aramco - Pipeline Services Division',
      authorityAr: 'أرامكو السعودية - قسم خدمات خطوط الأنابيب',
      year: '2012',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Pipeline Services',
      categoryLabelAr: 'خدمات خطوط الأنابيب',
      previewImage: aramcoPipelineImage,
      isPremium: true
    },
    {
      id: 'afghanim-project-completion',
      title: 'Afghanim International Project Completion Certificate - Gas Turbine Generator Plant',
      titleAr: 'شهادة إتمام مشروع أفغانيم الدولية - محطة مولدات التوربينات الغازية',
      description: 'Certificate of Project Completion presented to Mr. Mohammed Al-Shaye, Executive Director, on behalf of Saudi Makamin SRA Petroleum Services Company (L.L.C) for outstanding support and completion of 4th Gas Turbine Generator Plant Project in Khafji Joint Operation at Khafji, Kingdom of Saudi Arabia, in Non-Destructive Inspection (RT, MT, PT, UT), awarded January 23, 2011.',
      descriptionAr: 'شهادة إتمام المشروع المقدمة للسيد محمد الشايع، المدير التنفيذي، نيابة عن شركة مكامين السعودية لخدمات البترول المحدودة لدعمه المتميز وإتمام مشروع محطة مولدات التوربينات الغازية الرابعة في العمليات المشتركة بالخفجي، المملكة العربية السعودية، في مجال الفحص غير المدمر، ممنوحة في 23 يناير 2011.',
      authority: 'Afghanim International General Trading & Contracting Co W.L.L',
      authorityAr: 'شركة أفغانيم العالمية للتجارة العامة والمقاولات ذ.م.م',
      year: '2011',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'International Projects',
      categoryLabelAr: 'المشاريع الدولية',
      registrationNumber: 'AGH/GTG/SRA/L-0611',
      previewImage: afghanimProjectImage,
      isInternational: true,
      isPremium: true
    },
    {
      id: 'saudization-certificate',
      title: 'Saudization Certificate - Workforce Development',
      titleAr: 'شهادة السعودة - تنمية القوى العاملة',
      description: 'Official certification recognizing exceptional contribution to national workforce development and Saudi Vision 2030 objectives.',
      descriptionAr: 'الشهادة الرسمية التي تقر بالمساهمة الاستثنائية في تنمية القوى العاملة الوطنية وأهداف رؤية السعودية 2030.',
      authority: 'Ministry of Human Resources and Social Development',
      authorityAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
      year: '2017',
      status: 'CERTIFIED',
      category: 'national',
      categoryLabel: 'National Workforce Development',
      categoryLabelAr: 'تنمية القوى العاملة الوطنية',
      registrationNumber: '2050048513-2017',
      previewImage: saudizationImage,
      isPremium: true
    },
    {
      id: 'aramco-appreciation-legacy',
      title: 'Saudi Aramco Legacy Appreciation Certificates',
      titleAr: 'شهادات التقدير التراثية من أرامكو السعودية',
      description: 'Historical collection of appreciation certificates from Saudi Aramco recognizing exceptional contractor performance in various T&I shutdown activities and projects.',
      descriptionAr: 'مجموعة تاريخية من شهادات التقدير من أرامكو السعودية تقديراً للأداء الاستثنائي كمقاول في أنشطة ومشاريع الإغلاق المختلفة.',
      authority: 'Saudi Aramco Company',
      authorityAr: 'شركة أرامكو السعودية',
      year: '2010-2015',
      status: 'CERTIFIED',
      category: 'client',
      categoryLabel: 'Legacy Client Recognition',
      categoryLabelAr: 'تقدير العملاء التراثي',
      registrationNumber: 'ARAMCO-LEGACY-2010-2015',
      previewImage: aramcoAppreciationImage,
      isPremium: true
    },
    {
      id: 'zero-lta',
      title: 'Zero Lost Time Accident Record - 1,980 Days',
      titleAr: 'سجل صفر حوادث الوقت المفقود - 1,980 يوم',
      description: 'Certified record of zero lost time accidents (LTA) for 1,980 consecutive days since company operations, demonstrating exceptional safety performance and commitment to worker protection.',
      descriptionAr: 'سجل معتمد لصفر حوادث الوقت المفقود لمدة 1,980 يوماً متتالياً منذ بداية عمليات الشركة، مما يدل على الأداء المتميز في السلامة والالتزام بحماية العمال.',
      authority: 'Internal HSE Department',
      authorityAr: 'قسم الصحة والسلامة والبيئة الداخلي',
      year: '2018-2024',
      status: 'ACTIVE',
      category: 'safety',
      categoryLabel: 'Outstanding Safety Performance',
      categoryLabelAr: 'الأداء المتميز في السلامة',
      registrationNumber: 'HSE-ZLT-1980-DAYS'
    },
    {
      id: 'aramco-vendor',
      title: 'Saudi Aramco Approved Vendor Status',
      titleAr: 'صفة المورد المعتمد لأرامكو السعودية',
      description: 'Approved vendor status with Saudi Aramco for multiple service categories including drilling, inspection, pipeline services, and industrial maintenance.',
      descriptionAr: 'صفة المورد المعتمد مع أرامكو السعودية لفئات خدمات متعددة تشمل الحفر والفحص وخدمات الأنابيب والصيانة الصناعية.',
      authority: 'Saudi Aramco',
      authorityAr: 'أرامكو السعودية',
      year: '2010',
      status: 'ACTIVE',
      category: 'client',
      categoryLabel: 'Vendor Qualification',
      categoryLabelAr: 'تأهيل الموردين',
      registrationNumber: 'ARAMCO-VEN-2010-001'
    }
  ];

  const categories = [
    { id: 'all', label: language === 'ar' ? 'جميع الشهادات' : 'All Certificates', icon: Award },
    { id: 'quality', label: language === 'ar' ? 'الجودة والبيئة' : 'Quality & Environmental', icon: Globe },
    { id: 'legal', label: language === 'ar' ? 'التسجيلات القانونية' : 'Legal Registrations', icon: Building },
    { id: 'client', label: language === 'ar' ? 'اعتمادات العملاء' : 'Client Approvals', icon: Star },
    { id: 'national', label: language === 'ar' ? 'التقدير الوطني' : 'National Recognition', icon: Flag },
    { id: 'safety', label: language === 'ar' ? 'سجلات السلامة' : 'Safety Records', icon: Shield }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'quality': return Globe;
      case 'legal': return Building;
      case 'client': return Star;
      case 'national': return Flag;
      case 'safety': return Shield;
      default: return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'quality': return 'from-blue-500 to-cyan-600';
      case 'legal': return 'from-green-500 to-emerald-600';
      case 'client': return 'from-yellow-500 to-orange-600';
      case 'national': return 'from-purple-500 to-pink-600';
      case 'safety': return 'from-red-500 to-rose-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'VALID': return 'bg-green-100 text-green-800 border-green-200';
      case 'ACTIVE': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'CERTIFIED': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen">
      <SemanticMetadata page="certifications" />
      <EnhancedSecurity />
      {/* Epic Industrial Certifications Hero */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Epic Industrial Background */}
        <div className="absolute inset-0">
          {/* Industrial Facility Night Hero Image */}
          <img
            src="/images/certifications-hero-industrial.jpg"
            alt="Illuminated industrial refinery complex at night with multiple towers and processing units"
            className="w-full h-full object-cover scale-105"
          />
          {/* Cinematic Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/50 to-black/70"></div>
          
          {/* Industrial Light Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.2, 0],
                  y: [0, -150],
                  x: [0, Math.random() * 80 - 40]
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 8
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `85%`
                }}
              />
            ))}
          </div>

          {/* Industrial Excellence Glow Lines */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                style={{
                  top: `${25 + (i * 6)}%`,
                  width: '100%',
                  left: 0
                }}
                animate={{ 
                  opacity: [0.1, 0.7, 0.1],
                  scaleX: [0.8, 1.4, 0.8],
                  x: ['-15px', '15px', '-15px']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.6
                }}
              />
            ))}
          </div>

          {/* Industrial Excellence Aura */}
          <div className="absolute bottom-0 left-0 right-0 h-40">
            <motion.div
              className="w-full h-full bg-gradient-to-t from-blue-500/30 to-transparent"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scaleY: [0.7, 1.3, 0.7]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              {/* شعار مكامن الرسمي في صفحة الشهادات */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                  <img 
                    src="/attached_assets/logo mkamin_1752524503536.png" 
                    alt="شعار مكامن السعودية القابضة" 
                    className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            >
              {language === 'ar' ? 'جــدار الــتــمـيــز' : 'Wall of Prestige'}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
            >
              {language === 'ar' ? 
                'شهادات ومعايير دولية ووطنية تشهد على التزامنا الراسخ بالتميز والجودة في خدمة الطاقة' :
                'International and national certifications bearing witness to our unwavering commitment to excellence and quality in energy services'
              }
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 text-xl font-bold shadow-2xl border-2 border-blue-300">
                <Globe className="w-6 h-6 mr-3" />
                {language === 'ar' ? 'معتمد آيزو دولياً' : 'ISO International Certified'}
              </Badge>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black px-8 py-4 text-xl font-bold shadow-2xl border-2 border-yellow-300">
                <Star className="w-6 h-6 mr-3" />
                {language === 'ar' ? 'مورد معتمد أرامكو' : 'Aramco Approved Vendor'}
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 text-xl font-bold shadow-2xl border-2 border-green-300">
                <Shield className="w-6 h-6 mr-3" />
                {language === 'ar' ? 'سجل سلامة مثالي' : 'Perfect Safety Record'}
              </Badge>
            </motion.div>
            
            {/* Profile Achievement 2017-2019 Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black font-bold px-12 py-6 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  // Create download link for PDF
                  const link = document.createElement('a');
                  link.href = '/documents/makamin-profile-achievement-2017-2019.pdf';
                  link.download = 'Makamin-Company-Profile-2017-2018-2019.pdf';
                  link.click();
                }}
              >
                <Download className="w-8 h-8 mr-4" />
{language === 'ar' ? 'بروفايل الشركة 2017-2018-2019 (257 صفحة)' : 'Company Profile 2017-2018-2019 (257 Pages)'}
              </Button>
              <p className="text-gray-200 mt-4 text-lg">
{language === 'ar' ? 'ملف PDF شامل - 257 صفحة من بروفايل الشركة الكامل 2017-2018-2019' : 'Comprehensive PDF File - 257 Pages of Complete Company Profile 2017-2018-2019'}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Premium Category Filter */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'فئات الشهادات' : 'Certificate Categories'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'استكشف شهاداتنا حسب الفئة والتخصص' : 'Explore our certifications by category and specialization'}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-lg">{category.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Certificates Gallery - Wall of Prestige */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Medal className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'شهادات التميز والجودة' : 'Excellence & Quality Certifications'}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {language === 'ar' ? 
                'مجموعة من الشهادات والاعتمادات الدولية والمحلية التي تؤكد مكانتنا الرائدة في صناعة الطاقة' :
                'A collection of international and local certifications confirming our leading position in the energy industry'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => {
              const IconComponent = getCategoryIcon(cert.category);
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm bg-white/95">
                    {/* Certificate Image Header */}
                    {cert.previewImage && (
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img 
                          src={cert.previewImage}
                          alt={language === 'ar' ? cert.titleAr : cert.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        
                        {/* Premium Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          {cert.isPremium && (
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 font-bold">
                              <Star className="w-4 h-4 mr-1" />
                              {language === 'ar' ? 'مميز' : 'Premium'}
                            </Badge>
                          )}
                          {cert.isInternational && (
                            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1 font-bold">
                              <Globe className="w-4 h-4 mr-1" />
                              {language === 'ar' ? 'دولي' : 'International'}
                            </Badge>
                          )}
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge className={`${getStatusBadgeColor(cert.status)} border font-bold px-3 py-1`}>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {cert.status}
                          </Badge>
                        </div>
                      </div>
                    )}

                    <CardContent className="p-8">
                      {/* Category Icon and Title */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${getCategoryColor(cert.category)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="text-gray-600 border-gray-300 px-3 py-1">
                            {language === 'ar' ? cert.categoryLabelAr : cert.categoryLabel}
                          </Badge>
                        </div>
                      </div>

                      {/* Certificate Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                        {language === 'ar' ? cert.titleAr : cert.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed text-base">
                        {language === 'ar' ? cert.descriptionAr : cert.description}
                      </p>

                      {/* Certificate Details */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-gray-700">
                          <Building className="w-5 h-5 text-blue-500" />
                          <span className="text-sm font-medium">
                            {language === 'ar' ? cert.authorityAr : cert.authority}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-gray-700">
                          <Calendar className="w-5 h-5 text-green-500" />
                          <span className="text-sm font-medium">
                            {language === 'ar' ? `إصدار ${cert.year}` : `Issued ${cert.year}`}
                            {cert.validUntil && (
                              <span className="ml-2 text-blue-600">
                                {language === 'ar' ? `- صالح حتى ${cert.validUntil}` : `- Valid until ${cert.validUntil}`}
                              </span>
                            )}
                          </span>
                        </div>
                        
                        {cert.registrationNumber && (
                          <div className="space-y-3">
                            {/* Primary Registration Number */}
                            <div className="flex items-center gap-3 text-gray-700">
                              <FileText className="w-5 h-5 text-purple-500" />
                              <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 rounded-xl border-2 border-gray-200 shadow-sm">
                                <span className="text-sm font-mono font-bold text-gray-800">
                                  {cert.registrationNumber}
                                </span>
                                {/* Ministry of Commerce Logo for Commercial Registration Certificates */}
                                {cert.category === 'legal' && (cert.registrationNumber.toLowerCase().includes('cr') || cert.registrationNumber.includes('2051038139') || cert.registrationNumber.includes('2050048513') || cert.registrationNumber.includes('1010251168') || cert.registrationNumber.includes('2050077238')) && (
                                  <div className="ml-4 flex items-center bg-white/90 px-3 py-2 rounded-lg border border-emerald-200 shadow-sm">
                                    <img 
                                      src="/images/ministry-commerce-logo.png"
                                      alt="Ministry of Commerce Logo"
                                      className="w-8 h-8 object-contain"
                                    />
                                    <div className="ml-2 text-xs text-emerald-700 font-semibold">
                                      <div>{language === 'ar' ? 'وزارة التجارة' : 'Ministry'}</div>
                                      <div>{language === 'ar' ? 'مملكة عربية سعودية' : 'Commerce'}</div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Additional Registrations for Offshore Operations - Special Case */}
                            {cert.id === 'commercial-offshore' && [
                              {
                                number: 'Secondary Registration',
                                status: 'SECONDARY',
                                type: 'Supplementary Document',
                                image: offshoreReg2Image
                              },
                              {
                                number: '2051223939',
                                status: 'LEGAL_NOTICE',
                                type: 'Legal Notice Required',
                                image: offshoreReg3Image,
                                warning: 'Legal Affairs Department Notice - Requires Attention'
                              }
                            ].map((additionalReg, index) => (
                              <div key={index} className="flex items-center gap-3 text-gray-700 ml-8">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className={`flex items-center px-4 py-3 rounded-xl border-2 shadow-sm ${
                                  additionalReg.status === 'LEGAL_NOTICE' 
                                    ? 'bg-gradient-to-r from-red-50 to-red-100 border-red-300' 
                                    : 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200'
                                }`}>
                                  <span className={`text-sm font-mono font-bold ${
                                    additionalReg.status === 'LEGAL_NOTICE' ? 'text-red-800' : 'text-blue-800'
                                  }`}>
                                    {additionalReg.number}
                                  </span>
                                  
                                  {/* Warning Icon for Legal Notice */}
                                  {additionalReg.status === 'LEGAL_NOTICE' && (
                                    <div className="ml-3 flex items-center bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                      </svg>
                                      {language === 'ar' ? 'تحذير قانوني' : 'LEGAL NOTICE'}
                                    </div>
                                  )}
                                  
                                  {/* Status Badge */}
                                  <div className={`ml-3 px-2 py-1 rounded-md text-xs font-semibold ${
                                    additionalReg.status === 'PRIMARY' ? 'bg-green-100 text-green-800' :
                                    additionalReg.status === 'SECONDARY' ? 'bg-blue-100 text-blue-800' :
                                    'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {additionalReg.type}
                                  </div>
                                </div>
                              </div>
                            ))}

                            {/* Managers Information for Offshore Operations */}
                            {cert.id === 'commercial-offshore' && (
                              <div className="flex items-center gap-3 text-gray-700 ml-8 mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                                <div>
                                  <div className="text-sm font-semibold text-blue-800">
                                    {language === 'ar' ? 'المدراء المسؤولين منذ التأسيس:' : 'Responsible Managers Since Establishment:'}
                                  </div>
                                  <div className="text-sm text-blue-700">
                                    Ali Al-Bureidi (علي البريدي) • Ahmed Al-Faleh (أحمد الفالح)
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Special Gallery for Offshore Operations - Show All 3 Registration Documents */}
                      {cert.id === 'commercial-offshore' && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border-2 border-indigo-200">
                          <h4 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            {language === 'ar' ? 'معرض السجلات الثلاثية' : 'Triple Registration Portfolio'}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Registration 1 - Primary */}
                            <div className="bg-white p-4 rounded-lg border-2 border-green-300 shadow-md">
                              <div className="flex items-center justify-between mb-3">
                                <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">1</span>
                                <Badge className="bg-green-100 text-green-800 text-xs">PRIMARY</Badge>
                              </div>
                              <img 
                                src={offshoreReg1Image} 
                                alt="Primary Registration" 
                                className="w-full h-32 object-cover rounded-md mb-3 border cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => window.open(offshoreReg1Image, '_blank')}
                              />
                              <div className="text-sm">
                                <div className="font-bold text-gray-800">2050077238</div>
                                <div className="text-gray-600">{language === 'ar' ? 'السجل الأساسي' : 'Original Registration'}</div>
                              </div>
                            </div>

                            {/* Registration 2 - Secondary */}
                            <div className="bg-white p-4 rounded-lg border-2 border-blue-300 shadow-md">
                              <div className="flex items-center justify-between mb-3">
                                <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-bold">2</span>
                                <Badge className="bg-blue-100 text-blue-800 text-xs">SECONDARY</Badge>
                              </div>
                              <img 
                                src={offshoreReg2Image} 
                                alt="Secondary Registration" 
                                className="w-full h-32 object-cover rounded-md mb-3 border cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => window.open(offshoreReg2Image, '_blank')}
                              />
                              <div className="text-sm">
                                <div className="font-bold text-gray-800">{language === 'ar' ? 'وثيقة تكميلية' : 'Supplementary Document'}</div>
                                <div className="text-gray-600">{language === 'ar' ? 'السجل الثانوي' : 'Secondary Registration'}</div>
                              </div>
                            </div>

                            {/* Registration 3 - Legal Notice */}
                            <div className="bg-white p-4 rounded-lg border-2 border-red-400 shadow-md relative">
                              <div className="flex items-center justify-between mb-3">
                                <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">3</span>
                                <Badge className="bg-red-100 text-red-800 text-xs font-bold animate-pulse">LEGAL NOTICE</Badge>
                              </div>
                              <img 
                                src={offshoreReg3Image} 
                                alt="Legal Notice Registration" 
                                className="w-full h-32 object-cover rounded-md mb-3 border cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => window.open(offshoreReg3Image, '_blank')}
                              />
                              <div className="text-sm">
                                <div className="font-bold text-red-800 bg-red-100 px-2 py-1 rounded">2051223939</div>
                                <div className="text-red-600 mt-1 font-semibold">
                                  {language === 'ar' ? 'يتطلب انتباه قانوني' : 'Requires Legal Attention'}
                                </div>
                              </div>
                              {/* Warning indicator */}
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="hover:bg-blue-50 hover:border-blue-300"
                            onClick={() => {
                              // Download certificate image
                              if (cert.previewImage) {
                                const link = document.createElement('a');
                                link.href = cert.previewImage;
                                link.download = `${cert.id}-certificate.jpg`;
                                link.click();
                              }
                            }}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            {language === 'ar' ? 'تحميل' : 'Download'}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="hover:bg-green-50 hover:border-green-300"
                            onClick={() => {
                              // Open certificate image in new tab
                              if (cert.previewImage) {
                                window.open(cert.previewImage, '_blank');
                              }
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {language === 'ar' ? 'عرض' : 'View'}
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                            {language === 'ar' ? 'معتمد رسمياً' : 'Officially Certified'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">
                {language === 'ar' ? 'إحصائيات التميز' : 'Excellence Statistics'}
              </h3>
              <p className="text-xl text-blue-100">
                {language === 'ar' ? 'أرقام تشهد على التزامنا بالجودة والتميز' : 'Numbers that testify to our commitment to quality and excellence'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-yellow-400">6</div>
                <div className="text-lg">
                  {language === 'ar' ? 'شهادة دولية' : 'International Certificates'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-green-400">100%</div>
                <div className="text-lg">
                  {language === 'ar' ? 'معدل الامتثال' : 'Compliance Rate'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-blue-400">16</div>
                <div className="text-lg">
                  {language === 'ar' ? 'سنة من التميز' : 'Years of Excellence'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-purple-400">0</div>
                <div className="text-lg">
                  {language === 'ar' ? 'حوادث الوقت المفقود' : 'Lost Time Accidents'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'التزامنا بالجودة والامتثال' : 'Our Commitment to Quality & Compliance'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === 'ar' ? 
                'نحن ملتزمون بأعلى معايير الجودة والسلامة والامتثال في جميع أنشطتنا. شهاداتنا واعتماداتنا تعكس التزامنا المستمر بالتميز وتقديم خدمات تتجاوز توقعات عملائنا.' :
                'We are committed to the highest standards of quality, safety, and compliance in all our activities. Our certifications and accreditations reflect our continuous commitment to excellence and delivering services that exceed our clients\' expectations.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Globe, label: language === 'ar' ? 'معايير دولية' : 'International Standards', count: '3' },
                { icon: Building, label: language === 'ar' ? 'تسجيلات تجارية' : 'Commercial Registrations', count: '3' },
                { icon: Award, label: language === 'ar' ? 'جوائز التميز' : 'Excellence Awards', count: '5+' },
                { icon: Shield, label: language === 'ar' ? 'سجل السلامة' : 'Safety Record', count: '16+' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.count}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}
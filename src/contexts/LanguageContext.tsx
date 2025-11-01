import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_admin: 'Admin',
    hero_title: 'Al Reyada Al Kubra Freight Broker L.L.C.',
    hero_subtitle: 'Your Trusted Partner for Air, Sea & Land Freight Solutions',
    hero_description: 'Professional logistics and freight forwarding services across the UAE and globally. We deliver excellence in cargo transportation, customs clearance, and supply chain management.',
    hero_cta: 'Get a Quote',
    services_title: 'Our Services',
    service_air: 'Air Freight',
    service_air_desc: 'Fast and reliable air cargo services for urgent shipments worldwide',
    service_sea: 'Sea Freight',
    service_sea_desc: 'Cost-effective ocean freight solutions for large volume cargo',
    service_land: 'Road Transport',
    service_land_desc: 'Efficient ground transportation across UAE and GCC countries',
    service_customs: 'Customs Clearance',
    service_customs_desc: 'Expert customs brokerage and documentation services',
    service_warehouse: 'Warehousing',
    service_warehouse_desc: 'Secure storage and distribution facilities',
    service_packaging: 'Packaging & Crating',
    service_packaging_desc: 'Professional packing services for safe cargo handling',
    about_title: 'About Al Reyada Al Kubra',
    about_mission: 'Our Mission',
    about_mission_text: 'To provide world-class freight forwarding and logistics solutions with unwavering commitment to customer satisfaction, reliability, and operational excellence.',
    about_vision: 'Our Vision',
    about_vision_text: 'To be the leading freight broker in the UAE, recognized for innovation, integrity, and building lasting partnerships with clients worldwide.',
    about_experience: 'Experience & Expertise',
    about_experience_text: 'With years of industry experience, we have built a robust global network and deep expertise in handling diverse cargo requirements. From small parcels to large industrial shipments, we ensure seamless logistics solutions tailored to your needs.',
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch with our team for a free consultation',
    contact_name: 'Full Name',
    contact_email: 'Email Address',
    contact_phone: 'Phone Number',
    contact_service: 'Service Type',
    contact_message: 'Your Message',
    contact_submit: 'Send Enquiry',
    contact_submitting: 'Sending...',
    contact_success: 'Thank you! We will contact you soon.',
    contact_error: 'Something went wrong. Please try again.',
    service_option_air: 'Air Freight',
    service_option_sea: 'Sea Freight',
    service_option_land: 'Road Transport',
    service_option_customs: 'Customs Clearance',
    service_option_warehouse: 'Warehousing',
    service_option_other: 'Other Services',
    contact_info: 'Contact Information',
    contact_address: 'Address',
    contact_address_value: 'Dubai, United Arab Emirates',
    footer_tagline: 'Your trusted partner in global freight solutions',
    footer_quicklinks: 'Quick Links',
    footer_services: 'Services',
    footer_contact: 'Contact',
    footer_rights: '© 2024 Al Reyada Al Kubra Freight Broker L.L.C. All rights reserved.',
    admin_title: 'CRM Dashboard',
    admin_subtitle: 'Contact Form Submissions',
    admin_login: 'Admin Login',
    admin_email: 'Email',
    admin_password: 'Password',
    admin_signin: 'Sign In',
    admin_signout: 'Sign Out',
    admin_empty: 'No enquiries yet',
    admin_status: 'Status',
    admin_new: 'New',
    admin_contacted: 'Contacted',
    admin_closed: 'Closed',
    admin_notes: 'Notes',
    admin_save: 'Save',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'من نحن',
    nav_contact: 'اتصل بنا',
    nav_admin: 'لوحة الإدارة',
    hero_title: 'الريادة الكبرى لوساطة الشحن ذ.م.م',
    hero_subtitle: 'شريكك الموثوق لحلول الشحن الجوي والبحري والبري',
    hero_description: 'خدمات لوجستية احترافية وشحن عبر الإمارات والعالم. نقدم التميز في نقل البضائع، والتخليص الجمركي، وإدارة سلسلة التوريد.',
    hero_cta: 'احصل على عرض أسعار',
    services_title: 'خدماتنا',
    service_air: 'الشحن الجوي',
    service_air_desc: 'خدمات شحن جوي سريعة وموثوقة للشحنات العاجلة عالميًا',
    service_sea: 'الشحن البحري',
    service_sea_desc: 'حلول شحن بحري فعالة من حيث التكلفة للبضائع الكبيرة',
    service_land: 'النقل البري',
    service_land_desc: 'نقل بري فعال عبر الإمارات ودول مجلس التعاون الخليجي',
    service_customs: 'التخليص الجمركي',
    service_customs_desc: 'خدمات وساطة جمركية ومستندات احترافية',
    service_warehouse: 'التخزين',
    service_warehouse_desc: 'مرافق تخزين وتوزيع آمنة',
    service_packaging: 'التعبئة والتغليف',
    service_packaging_desc: 'خدمات تعبئة احترافية لمناولة آمنة للبضائع',
    about_title: 'عن الريادة الكبرى',
    about_mission: 'مهمتنا',
    about_mission_text: 'تقديم حلول لوجستية وشحن عالمية المستوى مع التزام راسخ برضا العملاء والموثوقية والتميز التشغيلي.',
    about_vision: 'رؤيتنا',
    about_vision_text: 'أن نكون وسيط الشحن الرائد في الإمارات، معترف به بالابتكار والنزاهة وبناء شراكات دائمة مع العملاء في جميع أنحاء العالم.',
    about_experience: 'الخبرة والاحترافية',
    about_experience_text: 'بفضل سنوات من الخبرة في الصناعة، قمنا ببناء شبكة عالمية قوية وخبرة عميقة في التعامل مع متطلبات الشحن المتنوعة. من الطرود الصغيرة إلى الشحنات الصناعية الكبيرة، نضمن حلولًا لوجستية سلسة مصممة خصيصًا لاحتياجاتك.',
    contact_title: 'اتصل بنا',
    contact_subtitle: 'تواصل مع فريقنا للحصول على استشارة مجانية',
    contact_name: 'الاسم الكامل',
    contact_email: 'البريد الإلكتروني',
    contact_phone: 'رقم الهاتف',
    contact_service: 'نوع الخدمة',
    contact_message: 'رسالتك',
    contact_submit: 'إرسال الاستفسار',
    contact_submitting: 'جاري الإرسال...',
    contact_success: 'شكراً! سنتواصل معك قريباً.',
    contact_error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    service_option_air: 'الشحن الجوي',
    service_option_sea: 'الشحن البحري',
    service_option_land: 'النقل البري',
    service_option_customs: 'التخليص الجمركي',
    service_option_warehouse: 'التخزين',
    service_option_other: 'خدمات أخرى',
    contact_info: 'معلومات الاتصال',
    contact_address: 'العنوان',
    contact_address_value: 'دبي، الإمارات العربية المتحدة',
    footer_tagline: 'شريكك الموثوق في حلول الشحن العالمية',
    footer_quicklinks: 'روابط سريعة',
    footer_services: 'الخدمات',
    footer_contact: 'الاتصال',
    footer_rights: '© 2024 الريادة الكبرى لوساطة الشحن ذ.م.م. جميع الحقوق محفوظة.',
    admin_title: 'لوحة إدارة CRM',
    admin_subtitle: 'نماذج الاتصال المستلمة',
    admin_login: 'تسجيل دخول الإدارة',
    admin_email: 'البريد الإلكتروني',
    admin_password: 'كلمة المرور',
    admin_signin: 'تسجيل الدخول',
    admin_signout: 'تسجيل الخروج',
    admin_empty: 'لا توجد استفسارات بعد',
    admin_status: 'الحالة',
    admin_new: 'جديد',
    admin_contacted: 'تم التواصل',
    admin_closed: 'مغلق',
    admin_notes: 'ملاحظات',
    admin_save: 'حفظ',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

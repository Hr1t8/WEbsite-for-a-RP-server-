import { Calendar, FileText, Phone, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  const quickLinks = [
    {
      icon: Calendar,
      title: 'Запись к врачу',
      description: 'Онлайн-запись через ЕГИСЗ',
      href: '#services',
      color: 'bg-blue-500',
    },
    {
      icon: Shield,
      title: 'ОМС',
      description: 'Полис обязательного медицинского страхования',
      href: '#services',
      color: 'bg-green-500',
    },
    {
      icon: FileText,
      title: 'Льготы',
      description: 'Лекарственное обеспечение (ЗНВЛП)',
      href: '#services',
      color: 'bg-amber-500',
    },
    {
      icon: Phone,
      title: 'Скорая помощь',
      description: 'Вызов бригады СМП — 103',
      href: '#contacts',
      color: 'bg-red-500',
    },
  ];

  return (
    <section className="relative">
      {/* Фоновое изображение */}
      <div className="relative h-[500px] lg:h-[600px]">
        <img
          src="/hero-hospital.jpg"
          alt="Владимирская областная клиническая больница"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Контент */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-[#CC0000] text-white text-sm font-medium rounded">
                  Официальный портал
                </span>
                <span className="text-gray-200 text-sm">
                  zdrav33.ru
                </span>
              </div>
              <h2 className="hero-title text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Здравоохранение<br />
                Владимирской области
              </h2>
              <p className="hero-subtitle text-lg sm:text-xl text-gray-200 mb-8">
                Государственные услуги в сфере здравоохранения, 
                запись к врачу, информация о медицинских организациях региона
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="btn-primary inline-flex items-center justify-center space-x-2">
                  <span>Получить услугу</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contacts" className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded transition-colors">
                  <span>Контакты</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Быстрые ссылки */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                className="service-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#003366] mb-1 group-hover:text-[#CC0000] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { 
  Calendar, 
  Shield, 
  Pill, 
  Baby, 
  Ambulance, 
  FileCheck,
  Stethoscope,
  HeartPulse,
  Building2
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Calendar,
      title: 'Запись на приём к врачу',
      description: 'Запишитесь на приём к специалисту онлайн через Единую государственную информационную систему здравоохранения (ЕГИСЗ) или через портал Госуслуг.',
      link: 'https://gorzdrav.ru',
      linkText: 'Записаться онлайн',
    },
    {
      icon: Shield,
      title: 'Обязательное медицинское страхование (ОМС)',
      description: 'Получите полис ОМС, выберите страховую компанию и медицинскую организацию. Территориальный фонд ОМС Владимирской области.',
      link: '#',
      linkText: 'Подробнее об ОМС',
    },
    {
      icon: Pill,
      title: 'Льготное лекарственное обеспечение',
      description: 'Получение лекарственных препаратов по рецептам в рамках программ ЛЛО и перечня ЖНВЛП для льготных категорий граждан.',
      link: '#',
      linkText: 'Узнать о льготах',
    },
    {
      icon: Baby,
      title: 'Диспансеризация населения',
      description: 'Профилактические медицинские осмотры и диспансеризация определённых групп взрослого населения.',
      link: '#',
      linkText: 'Записаться на диспансеризацию',
    },
  ];

  const additionalServices = [
    {
      icon: Ambulance,
      title: 'Скорая медицинская помощь',
      description: 'Вызов скорой помощи — 103 или 112',
      phone: '103',
    },
    {
      icon: FileCheck,
      title: 'Получение справок',
      description: 'Медицинские справки для различных целей',
    },
    {
      icon: Stethoscope,
      title: 'Вакцинация',
      description: 'Календарь профилактических прививок',
    },
    {
      icon: HeartPulse,
      title: 'Реабилитация',
      description: 'Медицинская реабилитация пациентов',
    },
    {
      icon: Building2,
      title: 'Госпитализация',
      description: 'Плановая госпитализация в стационары',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl lg:text-3xl font-bold text-[#003366]">
          Государственные услуги
        </h2>
        
        {/* Основные услуги */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mainServices.map((service) => (
            <div key={service.title} className="service-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <service.icon className="service-icon" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#003366] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-[#003366] font-medium hover:text-[#CC0000] transition-colors group"
                  >
                    <span>{service.linkText}</span>
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительные услуги */}
        <h3 className="text-xl font-semibold text-[#003366] mb-6">
          Дополнительные услуги
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {additionalServices.map((service) => (
            <div key={service.title} className="service-card text-center">
              <service.icon className="service-icon mx-auto mb-3" />
              <h4 className="font-semibold text-[#003366] mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                {service.description}
              </p>
              {service.phone && (
                <a 
                  href={`tel:${service.phone}`}
                  className="inline-flex items-center text-[#CC0000] font-bold"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {service.phone}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Информационный блок */}
        <div className="mt-12 info-block">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-[#CC0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#003366] mb-2">
                Важная информация
              </h4>
              <p className="text-gray-700 text-sm">
                Все медицинские услуги по ОМС предоставляются бесплатно. При обращении в медицинскую организацию 
                необходимо иметь при себе полис ОМС и документ, удостоверяющий личность. 
                Для получения льготных лекарственных препаратов требуется рецепт от лечащего врача 
                с отметкой о категории льготности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

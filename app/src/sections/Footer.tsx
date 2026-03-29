import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Запись к врачу', href: '#services' },
      { label: 'ОМС', href: '#services' },
      { label: 'Льготные лекарства', href: '#services' },
      { label: 'Диспансеризация', href: '#services' },
      { label: 'Вакцинация', href: '#services' },
    ],
    information: [
      { label: 'Новости', href: '#news' },
      { label: 'Документы', href: '#documents' },
      { label: 'Медицинские организации', href: '#organizations' },
      { label: 'Контакты', href: '#contacts' },
      { label: 'Обращения граждан', href: '#contacts' },
    ],
    external: [
      { label: 'Минздрав России', href: 'https://minzdrav.gov.ru' },
      { label: 'Правительство Владимирской области', href: 'https://www.vladimir.ru' },
      { label: 'ТФОМС Владимирской области', href: '#' },
      { label: 'Портал Госуслуг', href: 'https://gosuslugi.ru' },
      { label: 'ЕГИСЗ', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#003366] text-white">
      {/* Основной footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О департаменте */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <svg 
                width="48" 
                height="60" 
                viewBox="0 0 64 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-15"
              >
                <path 
                  d="M32 0L0 12V36C0 56 32 80 32 80C32 80 64 56 64 36V12L32 0Z" 
                  fill="#CC0000"
                />
                <path 
                  d="M32 4L4 14V36C4 53 32 74 32 74C32 74 60 53 60 36V14L32 4Z" 
                  fill="#FFFFFF"
                />
                <path 
                  d="M20 20L24 28L32 22L40 28L44 20L32 14L20 20Z" 
                  fill="#D4A574"
                />
                <circle cx="32" cy="48" r="14" fill="#CC0000" />
                <circle cx="32" cy="48" r="10" fill="#FFFFFF" />
                <circle cx="32" cy="48" r="6" fill="#CC0000" />
                <path 
                  d="M30 38L26 48H30L28 58L36 46H32L34 38H30Z" 
                  fill="#D4A574"
                />
              </svg>
              <div>
                <h3 className="font-bold text-lg leading-tight">
                  Департамент здравоохранения
                </h3>
                <p className="text-sm text-gray-300">
                  Владимирской области
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Региональный орган исполнительной власти, осуществляющий 
              государственное управление в сфере здравоохранения.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">г. Владимир, ул. Горького, 36</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+74922321500" className="text-gray-300 hover:text-white transition-colors">
                  +7 (4922) 32-15-00
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:info@zdrav33.ru" className="text-gray-300 hover:text-white transition-colors">
                  info@zdrav33.ru
                </a>
              </div>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Информация</h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Внешние ресурсы */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Внешние ресурсы</h4>
            <ul className="space-y-2">
              {footerLinks.external.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя панель */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Департамент здравоохранения Владимирской области. Все права защищены.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Карта сайта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

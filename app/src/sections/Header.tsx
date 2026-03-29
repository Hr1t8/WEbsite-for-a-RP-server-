import { Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          {/* Логотип и название */}
          <div className="flex items-center space-x-4">
            {/* Герб Минздрава России */}
            <div className="flex-shrink-0">
              <img 
                src="/minzdrav-emblem.png" 
                alt="Эмблема Министерства здравоохранения Российской Федерации"
                className="w-16 h-20 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-[#003366] leading-tight">
                Департамент здравоохранения
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Владимирской области
              </p>
            </div>
          </div>

          {/* Контакты */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8">
            {/* Горячая линия */}
            <div className="flex items-center space-x-3 bg-[#E6F0F8] px-4 py-2 rounded-lg border-l-4 border-[#CC0000]">
              <Phone className="w-5 h-5 text-[#CC0000] phone-pulse" />
              <div>
                <p className="text-xs text-gray-600">Горячая линия (бесплатно)</p>
                <p className="text-lg font-bold text-[#003366]">8-800-100-02-03</p>
              </div>
            </div>

            {/* Дополнительные контакты */}
            <div className="hidden md:flex flex-col space-y-1 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+7 (4922) 32-15-00</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@zdrav33.ru</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>г. Владимир, ул. Горького, 36</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

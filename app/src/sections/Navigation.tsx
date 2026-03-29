import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  isSticky: boolean;
}

const Navigation = ({ isSticky }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'Главная', href: '#' },
    { 
      label: 'Услуги', 
      href: '#services',
      dropdown: [
        { label: 'Запись к врачу', href: '#services' },
        { label: 'ОМС и страхование', href: '#services' },
        { label: 'Льготное лекарственное обеспечение', href: '#services' },
        { label: 'Профосмотры работников', href: '/profosmotry' },
        { label: 'Госуслуги', href: '#services' },
      ]
    },
    { label: 'Новости', href: '#news' },
    { label: 'Документы', href: '#documents' },
    { label: 'Учреждения', href: '#organizations' },
    { label: 'Обращения', href: '#contacts' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <nav className={`bg-white border-b border-gray-200 ${isSticky ? 'nav-sticky' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Десктопное меню */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="nav-link flex items-center space-x-1 px-4 py-2"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg border border-gray-200 min-w-[280px] z-50">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#E6F0F8] hover:text-[#003366] transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={item.href} className="nav-link block px-4 py-2">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Кнопка мобильного меню */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu className="w-6 h-6 text-[#003366]" />
            </button>

            {/* Кнопка записи */}
            <a
              href="#services"
              className="hidden sm:inline-flex btn-primary text-sm"
            >
              Записаться к врачу
            </a>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="mobile-menu">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold text-[#003366]">Меню</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Закрыть меню"
              >
                <X className="w-6 h-6 text-[#003366]" />
              </button>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-[#E6F0F8] rounded-lg transition-colors"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#003366] transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#E6F0F8] rounded-lg transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="#services"
                className="block w-full btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Записаться к врачу
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;

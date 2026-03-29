import { Eye, Globe, Search } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#003366] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <span className="hidden sm:inline text-gray-200">
              Официальный портал Департамента здравоохранения Владимирской области
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="flex items-center space-x-2 hover:text-gray-200 transition-colors"
              aria-label="Версия для слабовидящих"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Версия для слабовидящих</span>
            </button>
            <button 
              className="flex items-center space-x-2 hover:text-gray-200 transition-colors"
              aria-label="Язык"
            >
              <Globe className="w-4 h-4" />
              <span>RU</span>
            </button>
            <button 
              className="flex items-center space-x-2 hover:text-gray-200 transition-colors"
              aria-label="Поиск"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

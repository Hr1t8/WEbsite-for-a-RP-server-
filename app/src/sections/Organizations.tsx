import { MapPin, Phone, Clock, ExternalLink, Building2 } from 'lucide-react';

const Organizations = () => {
  const organizations = [
    {
      id: 1,
      name: 'Владимирская областная клиническая больница',
      shortName: 'ВОКБ',
      address: 'г. Владимир, ул. Студёная Гора, 10',
      phone: '+7 (4922) 44-15-00',
      schedule: 'Круглосуточно',
      type: 'Больница',
      website: 'https://vokb33.ru',
    },
    {
      id: 2,
      name: 'Детская областная клиническая больница',
      shortName: 'ДОКБ',
      address: 'г. Владимир, ул. Верхняя Дуброва, 21',
      phone: '+7 (4922) 32-42-00',
      schedule: 'Круглосуточно',
      type: 'Детская больница',
      website: 'https://dokb33.ru',
    },
    {
      id: 3,
      name: 'Городская клиническая больница №2',
      shortName: 'ГКБ №2',
      address: 'г. Владимир, ул. Школьная, 7',
      phone: '+7 (4922) 47-51-00',
      schedule: 'Круглосуточно',
      type: 'Больница',
      website: 'https://gkb2-vladimir.ru',
    },
    {
      id: 4,
      name: 'Станция скорой медицинской помощи',
      shortName: 'ССМП',
      address: 'г. Владимир, ул. Мира, 40',
      phone: '103, +7 (4922) 32-03-03',
      schedule: 'Круглосуточно',
      type: 'Скорая помощь',
      website: 'https://smp33.ru',
    },
    {
      id: 5,
      name: 'Областной центр профилактики и борьбы со СПИД',
      shortName: 'Центр СПИД',
      address: 'г. Владимир, ул. Ленина, 17',
      phone: '+7 (4922) 32-71-00',
      schedule: 'Пн-Пт: 8:00-17:00',
      type: 'Специализированный',
      website: 'https://spid33.ru',
    },
    {
      id: 6,
      name: 'Областной кожно-венерологический диспансер',
      shortName: 'ОКВД',
      address: 'г. Владимир, ул. Горького, 56',
      phone: '+7 (4922) 32-89-00',
      schedule: 'Пн-Пт: 8:00-18:00',
      type: 'Диспансер',
      website: 'https://okvd33.ru',
    },
  ];

  const districts = [
    'Все районы',
    'г. Владимир',
    'Александровский район',
    'Вязниковский район',
    'Гороховецкий район',
    'Гусь-Хрустальный район',
    'Камешковский район',
    'Киржачский район',
    'Ковровский район',
    'Кольчугинский район',
    'Меленковский район',
    'Муромский район',
    'Петушинский район',
    'Селивановский район',
    'Собинский район',
    'Судогодский район',
    'Суздальский район',
    'Юрьев-Польский район',
  ];

  return (
    <section id="organizations" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl lg:text-3xl font-bold text-[#003366]">
          Медицинские организации
        </h2>

        {/* Фильтры */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Район
            </label>
            <select className="form-input">
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Тип учреждения
            </label>
            <select className="form-input">
              <option>Все типы</option>
              <option>Больницы</option>
              <option>Поликлиники</option>
              <option>Детские учреждения</option>
              <option>Специализированные</option>
              <option>ФАПы</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="btn-primary w-full sm:w-auto">
              Найти
            </button>
          </div>
        </div>

        {/* Список организаций */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {organizations.map((org) => (
            <div 
              key={org.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#E6F0F8] rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#003366]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {org.type}
                    </span>
                    <h3 className="font-semibold text-[#003366]">
                      {org.name}
                    </h3>
                  </div>
                </div>
                <span className="px-2 py-1 bg-[#E6F0F8] text-[#003366] text-xs font-medium rounded">
                  {org.shortName}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{org.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a 
                    href={`tel:${org.phone.replace(/[^\d]/g, '')}`}
                    className="text-[#003366] font-medium hover:text-[#CC0000] transition-colors"
                  >
                    {org.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{org.schedule}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <a 
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#003366] font-medium hover:text-[#CC0000] transition-colors"
                >
                  <span>Перейти на сайт</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <button className="text-sm text-gray-500 hover:text-[#003366] transition-colors">
                  Показать на карте
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#003366]">47</div>
            <div className="text-sm text-gray-600 mt-1">Больниц</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#003366]">156</div>
            <div className="text-sm text-gray-600 mt-1">Поликлиник</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#003366]">312</div>
            <div className="text-sm text-gray-600 mt-1">ФАПов</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#003366]">28</div>
            <div className="text-sm text-gray-600 mt-1">Спец. учреждений</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;

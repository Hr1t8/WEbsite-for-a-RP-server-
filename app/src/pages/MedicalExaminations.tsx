import { useState } from 'react';
import { 
  Calendar, 
  Users, 
  Building2, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  Clock,
  Phone,
  Search
} from 'lucide-react';

const MedicalExaminations = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedOrg, setSelectedOrg] = useState('all');

  const examinationSchedule = [
    {
      id: 1,
      organization: 'Администрация Владимирской области',
      department: 'Аппарат Губернатора',
      employees: 45,
      period: '01.04.2026 — 30.04.2026',
      month: 'april',
      location: 'ВОКБ, каб. 315',
      status: 'planned',
      contact: '+7 (4922) 44-15-00 (доб. 315)',
    },
    {
      id: 2,
      organization: 'Департамент здравоохранения',
      department: 'Отдел организации медицинской помощи',
      employees: 28,
      period: '15.04.2026 — 15.05.2026',
      month: 'april',
      location: 'Поликлиника №1, каб. 201-205',
      status: 'planned',
      contact: '+7 (4922) 32-15-01',
    },
    {
      id: 3,
      organization: 'Департамент образования',
      department: 'Все структурные подразделения',
      employees: 156,
      period: '01.05.2026 — 31.05.2026',
      month: 'may',
      location: 'Городская поликлиника №3',
      status: 'planned',
      contact: '+7 (4922) 47-82-00',
    },
    {
      id: 4,
      organization: 'Департамент социальной защиты',
      department: 'Отдел пенсионного обеспечения',
      employees: 67,
      period: '15.05.2026 — 15.06.2026',
      month: 'may',
      location: 'Диагностический центр',
      status: 'planned',
      contact: '+7 (4922) 32-71-00',
    },
    {
      id: 5,
      organization: 'Департамент строительства',
      department: 'Все структурные подразделения',
      employees: 89,
      period: '01.06.2026 — 30.06.2026',
      month: 'june',
      location: 'ВОКБ, профосмотровый кабинет',
      status: 'planned',
      contact: '+7 (4922) 44-15-00',
    },
    {
      id: 6,
      organization: 'Департамент транспорта',
      department: 'Отдел лицензирования',
      employees: 34,
      period: '15.06.2026 — 15.07.2026',
      month: 'june',
      location: 'Поликлиника №2',
      status: 'planned',
      contact: '+7 (4922) 54-32-00',
    },
    {
      id: 7,
      organization: 'Департамент имущественных отношений',
      department: 'Все структурные подразделения',
      employees: 52,
      period: '01.07.2026 — 31.07.2026',
      month: 'july',
      location: 'Городская поликлиника №1',
      status: 'planned',
      contact: '+7 (4922) 32-15-22',
    },
    {
      id: 8,
      organization: 'Департамент экономического развития',
      department: 'Отдел инвестиций',
      employees: 41,
      period: '15.07.2026 — 15.08.2026',
      month: 'july',
      location: 'Диагностический центр',
      status: 'planned',
      contact: '+7 (4922) 32-15-33',
    },
  ];

  const filteredSchedule = examinationSchedule.filter(item => {
    const monthMatch = selectedMonth === 'all' || item.month === selectedMonth;
    const orgMatch = selectedOrg === 'all' || item.organization.toLowerCase().includes(selectedOrg.toLowerCase());
    return monthMatch && orgMatch;
  });

  const months = [
    { value: 'all', label: 'Все месяцы' },
    { value: 'april', label: 'Апрель 2026' },
    { value: 'may', label: 'Май 2026' },
    { value: 'june', label: 'Июнь 2026' },
    { value: 'july', label: 'Июль 2026' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Шапка страницы */}
      <div className="bg-[#003366] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a 
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Вернуться на главную</span>
          </a>
          <h1 className="text-3xl lg:text-4xl font-bold">
            График проведения профилактических медицинских осмотров
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            Государственных служащих и работников органов государственной власти Владимирской области
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Информационный блок */}
        <div className="bg-[#E6F0F8] rounded-lg p-6 mb-8 border-l-4 border-[#003366]">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-[#003366] flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-[#003366] mb-2">
                Важная информация
              </h2>
              <p className="text-gray-700 text-sm mb-2">
                В соответствии с Федеральным законом № 323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации» 
                и Приказом Минздрава России № 29н, все работники обязаны проходить периодические медицинские осмотры 
                не реже одного раза в два года.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Срок действия справки:</strong> 1 год с момента прохождения осмотра.
              </p>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#003366]">8</div>
            <div className="text-sm text-gray-600">Организаций</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#003366]">512</div>
            <div className="text-sm text-gray-600">Сотрудников</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#003366]">4</div>
            <div className="text-sm text-gray-600">Месяца</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-[#CC0000]">0</div>
            <div className="text-sm text-gray-600">Просрочено</div>
          </div>
        </div>

        {/* Фильтры */}
        <div className="bg-[#F5F5F5] rounded-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Месяц проведения
              </label>
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="form-input"
              >
                {months.map(month => (
                  <option key={month.value} value={month.value}>{month.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Поиск по организации
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Введите название..."
                  value={selectedOrg}
                  onChange={(e) => setSelectedOrg(e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Таблица графика */}
        <div className="overflow-x-auto">
          <table className="w-full official-table">
            <thead>
              <tr>
                <th className="text-left">Организация</th>
                <th className="text-left">Подразделение</th>
                <th className="text-center">Сотрудников</th>
                <th className="text-left">Период</th>
                <th className="text-left">Место проведения</th>
                <th className="text-left">Контакт</th>
                <th className="text-center">Статус</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="font-medium text-[#003366]">{item.organization}</td>
                  <td className="text-gray-600">{item.department}</td>
                  <td className="text-center">
                    <span className="inline-flex items-center px-2 py-1 bg-[#E6F0F8] rounded text-[#003366] font-medium">
                      <Users className="w-4 h-4 mr-1" />
                      {item.employees}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {item.period}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center text-gray-700">
                      <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                      {item.location}
                    </div>
                  </td>
                  <td>
                    <a 
                      href={`tel:${item.contact.replace(/[^\d]/g, '')}`}
                      className="flex items-center text-[#003366] hover:text-[#CC0000] transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.contact}</span>
                    </a>
                  </td>
                  <td className="text-center">
                    {item.status === 'planned' && (
                      <span className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        Планируется
                      </span>
                    )}
                    {item.status === 'active' && (
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Идёт
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredSchedule.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>По заданным критериям ничего не найдено</p>
          </div>
        )}

        {/* Перечень обследований */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#003366] mb-6">
            Перечень обследований при прохождении профосмотра
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#003366] mb-3">Обязательные исследования</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  Осмотр терапевта
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  Электрокардиография (ЭКГ)
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  Флюорография лёгких
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  Общий анализ крови
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  Общий анализ мочи
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  Глюкоза крови
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#003366] mb-3">Дополнительные исследования (по показаниям)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  Осмотр окулиста
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  Осмотр ЛОР-врача
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  Ультразвуковое исследование
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  Консультация невролога
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  Психиатрическое освидетельствование
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Необходимые документы */}
        <div className="mt-8 bg-[#F5F5F5] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">
            Необходимые документы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Паспорт гражданина РФ</p>
                <p className="text-sm text-gray-600">Оригинал</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Полис ОМС</p>
                <p className="text-sm text-gray-600">Оригинал или копия</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Направление от работодателя</p>
                <p className="text-sm text-gray-600">Форма 405/у</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FileText className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Медицинская карта (при наличии)</p>
                <p className="text-sm text-gray-600">Форма 003/у</p>
              </div>
            </div>
          </div>
        </div>

        {/* Контакты отдела профосмотров */}
        <div className="mt-8 bg-[#003366] rounded-lg p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">
            Отдел организации профилактических медицинских осмотров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-white/70" />
              <div>
                <p className="text-sm text-white/70">Телефон</p>
                <p className="font-medium">+7 (4922) 32-15-44</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-white/70" />
              <div>
                <p className="text-sm text-white/70">Режим работы</p>
                <p className="font-medium">Пн-Пт: 9:00 — 17:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5 text-white/70" />
              <div>
                <p className="text-sm text-white/70">Адрес</p>
                <p className="font-medium">ул. Горького, 36, каб. 412</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#003366] text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-white/70">
              © 2026 Департамент здравоохранения Владимирской области
            </div>
            <a 
              href="/"
              className="mt-4 md:mt-0 inline-flex items-center text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Вернуться на главную страницу</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicalExaminations;

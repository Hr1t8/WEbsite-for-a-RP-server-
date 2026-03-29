import { FileText, Download, ExternalLink, ChevronRight } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      id: 1,
      title: 'Приказ №127-п от 15.03.2026',
      description: 'Об утверждении порядка организации оказания первичной медико-санитарной помощи населению Владимирской области',
      type: 'Приказ',
      date: '15.03.2026',
      size: '245 KB',
      format: 'PDF',
    },
    {
      id: 2,
      title: 'Постановление №45 от 10.03.2026',
      description: 'О программе государственных гарантий бесплатного оказания гражданам медицинской помощи на 2026 год',
      type: 'Постановление',
      date: '10.03.2026',
      size: '512 KB',
      format: 'PDF',
    },
    {
      id: 3,
      title: 'Приказ №118-п от 05.03.2026',
      description: 'О внесении изменений в перечень жизненно необходимых и важнейших лекарственных препаратов',
      type: 'Приказ',
      date: '05.03.2026',
      size: '189 KB',
      format: 'PDF',
    },
    {
      id: 4,
      title: 'Распоряжение №12-р от 01.03.2026',
      description: 'О создании рабочей группы по внедрению ЕГИСЗ в медицинских организациях региона',
      type: 'Распоряжение',
      date: '01.03.2026',
      size: '156 KB',
      format: 'PDF',
    },
    {
      id: 5,
      title: 'Приказ №105-п от 25.02.2026',
      description: 'Об утверждении графика проведения диспансеризации взрослого населения на 2026 год',
      type: 'Приказ',
      date: '25.02.2026',
      size: '298 KB',
      format: 'PDF',
    },
  ];

  const categories = [
    { name: 'Все документы', count: 156 },
    { name: 'Приказы', count: 89 },
    { name: 'Постановления', count: 34 },
    { name: 'Распоряжения', count: 28 },
    { name: 'Протоколы', count: 5 },
  ];

  return (
    <section id="documents" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl lg:text-3xl font-bold text-[#003366]">
          Нормативные документы
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковое меню */}
          <div className="lg:col-span-1">
            <div className="bg-[#F5F5F5] rounded-lg p-4">
              <h3 className="font-semibold text-[#003366] mb-4">Категории</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a
                      href="#"
                      className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-white transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-[#003366]">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500 bg-white px-2 py-0.5 rounded-full">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 bg-[#E6F0F8] rounded-lg p-4 border-l-4 border-[#003366]">
              <h3 className="font-semibold text-[#003366] mb-2">
                Архив документов
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Доступ к документам предыдущих лет
              </p>
              <a 
                href="#"
                className="inline-flex items-center text-sm text-[#003366] font-medium hover:text-[#CC0000] transition-colors"
              >
                <span>Перейти в архив</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Список документов */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {documents.map((doc) => (
                <div 
                  key={doc.id}
                  className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-2 py-1 bg-[#E6F0F8] text-[#003366] text-xs font-medium rounded">
                          {doc.type}
                        </span>
                        <span className="text-sm text-gray-500">{doc.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#003366] mb-2">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {doc.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-sm text-gray-500">
                          <FileText className="w-4 h-4 mr-1" />
                          {doc.format}
                        </span>
                        <span className="text-sm text-gray-500">
                          {doc.size}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 ml-4">
                      <button 
                        className="flex items-center justify-center w-10 h-10 bg-[#E6F0F8] rounded-lg hover:bg-[#003366] hover:text-white transition-colors"
                        title="Скачать"
                      >
                        <Download className="w-5 h-5" />
                      </button>
                      <button 
                        className="flex items-center justify-center w-10 h-10 bg-[#E6F0F8] rounded-lg hover:bg-[#003366] hover:text-white transition-colors"
                        title="Открыть"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Пагинация */}
            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Показано 5 из 156 документов
              </p>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                  Назад
                </button>
                <button className="px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-[#004080] transition-colors">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  3
                </button>
                <span className="text-gray-400">...</span>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  32
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  Вперёд
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;

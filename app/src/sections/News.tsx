import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Владимирская область получила новое оборудование для онкологического центра',
      excerpt: 'В рамках национального проекта «Здравоохранение» Владимирская областная клиническая больница получила современное лучевое оборудование для диагностики и лечения онкологических заболеваний.',
      date: '25 марта 2026',
      category: 'Оборудование',
      image: '/surgery.jpg',
      isNew: true,
    },
    {
      id: 2,
      title: 'Стартовала весенняя диспансеризация населения',
      excerpt: 'С 1 марта 2026 года стартовала плановая диспансеризация взрослого населения Владимирской области. Приглашаем граждан пройти профилактические медицинские осмотры.',
      date: '20 марта 2026',
      category: 'Диспансеризация',
      image: '/doctor-office.jpg',
      isNew: true,
    },
    {
      id: 3,
      title: 'Открытие нового фельдшерско-акушерского пункта в Суздальском районе',
      excerpt: 'В селе Боголюбово Суздальского района открылся современный фельдшерско-акушерский пункт, оснащённый всем необходимым оборудованием для оказания первичной медико-санитарной помощи.',
      date: '15 марта 2026',
      category: 'ФАПы',
      image: '/clinic-interior.jpg',
      isNew: false,
    },
    {
      id: 4,
      title: 'Обновление перечня ЖНВЛП на 2026 год',
      excerpt: 'Утверждён новый перечень жизненно необходимых и важнейших лекарственных препаратов, отпускаемых по льготным рецептам. Список расширен на 15 позиций.',
      date: '10 марта 2026',
      category: 'Льготы',
      image: '/paramedic.jpg',
      isNew: false,
    },
    {
      id: 5,
      title: 'Детская областная клиническая больница отмечает 70-летний юбилей',
      excerpt: 'Владимирская детская областная клиническая больница празднует 70-летие со дня основания. За годы работы учреждение стало ведущим детским медицинским центром региона.',
      date: '5 марта 2026',
      category: 'Юбилей',
      image: '/pediatrician.jpg',
      isNew: false,
    },
    {
      id: 6,
      title: 'Приказ о вакцинации против гриппа в сезон 2025-2026 гг.',
      excerpt: 'Утверждён план вакцинации населения Владимирской области против гриппа. Прививки проводятся бесплатно в поликлиниках по месту жительства.',
      date: '1 марта 2026',
      category: 'Вакцинация',
      image: '/ambulance.jpg',
      isNew: false,
    },
  ];

  return (
    <section id="news" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title text-2xl lg:text-3xl font-bold text-[#003366] mb-0">
            Новости
          </h2>
          <a 
            href="#"
            className="hidden sm:inline-flex items-center text-[#003366] font-medium hover:text-[#CC0000] transition-colors group"
          >
            <span>Все новости</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <article key={news.id} className="news-card group">
              <div className="overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="badge-date flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {news.date}
                    </span>
                    {news.isNew && (
                      <span className="badge-new">Новое</span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-[#003366] font-medium uppercase tracking-wide">
                  {news.category}
                </span>
                <h3 className="text-lg font-semibold text-[#003366] mt-2 mb-3 group-hover:text-[#CC0000] transition-colors line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {news.excerpt}
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center text-sm text-[#003366] font-medium hover:text-[#CC0000] transition-colors"
                >
                  <span>Подробнее</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Мобильная кнопка */}
        <div className="mt-8 text-center sm:hidden">
          <a 
            href="#"
            className="inline-flex items-center text-[#003366] font-medium hover:text-[#CC0000] transition-colors"
          >
            <span>Все новости</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Анонсы */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#003366] mb-4">
            Ближайшие мероприятия
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-100">
              <div className="flex-shrink-0 w-16 h-16 bg-[#E6F0F8] rounded-lg flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-[#003366]">28</span>
                <span className="text-xs text-gray-600">мар</span>
              </div>
              <div>
                <h4 className="font-medium text-[#003366]">
                  День открытых дверей в Детской областной клинической больнице
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Экскурсия для будущих мам, консультации специалистов
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#E6F0F8] rounded-lg flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-[#003366]">02</span>
                <span className="text-xs text-gray-600">апр</span>
              </div>
              <div>
                <h4 className="font-medium text-[#003366]">
                  Всероссийский день борьбы с туберкулёзом
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Бесплатная флюорография в поликлиниках области
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

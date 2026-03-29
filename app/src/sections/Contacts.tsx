import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Обращение отправлено. Номер обращения: №2026-0342');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const hotlines = [
    {
      title: 'Единая горячая линия',
      phone: '8-800-100-02-03',
      description: 'Бесплатно по России',
      schedule: 'Круглосуточно',
      icon: Phone,
      color: 'bg-[#CC0000]',
    },
    {
      title: 'Скорая медицинская помощь',
      phone: '103',
      description: 'Вызов бригады СМП',
      schedule: 'Круглосуточно',
      icon: Phone,
      color: 'bg-[#003366]',
    },
    {
      title: 'Единый номер экстренных служб',
      phone: '112',
      description: 'Единый номер вызова экстренных оперативных служб',
      schedule: 'Круглосуточно',
      icon: Phone,
      color: 'bg-red-600',
    },
  ];

  return (
    <section id="contacts" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl lg:text-3xl font-bold text-[#003366]">
          Контакты и обращения
        </h2>

        {/* Горячие линии */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {hotlines.map((hotline) => (
            <div 
              key={hotline.title}
              className={`${hotline.color} rounded-lg p-6 text-white`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <hotline.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{hotline.title}</h3>
                  <p className="text-sm text-white/80">{hotline.description}</p>
                </div>
              </div>
              <a 
                href={`tel:${hotline.phone.replace(/[^\d]/g, '')}`}
                className="block text-3xl font-bold text-white hover:text-white/90 transition-colors mb-2"
              >
                {hotline.phone}
              </a>
              <div className="flex items-center text-sm text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                {hotline.schedule}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <h3 className="text-xl font-semibold text-[#003366] mb-6">
              Департамент здравоохранения Владимирской области
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#E6F0F8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#003366]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Адрес</p>
                  <p className="text-gray-600">600000, г. Владимир, ул. Горького, 36</p>
                  <p className="text-sm text-gray-500">Приёмная</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#E6F0F8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#003366]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Телефоны</p>
                  <p className="text-gray-600">
                    <a href="tel:+74922321500" className="hover:text-[#CC0000] transition-colors">
                      +7 (4922) 32-15-00
                    </a>
                    {' — приёмная'}
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+74922321501" className="hover:text-[#CC0000] transition-colors">
                      +7 (4922) 32-15-01
                    </a>
                    {' — факс'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#E6F0F8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#003366]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">E-mail</p>
                  <a 
                    href="mailto:info@zdrav33.ru"
                    className="text-[#003366] hover:text-[#CC0000] transition-colors"
                  >
                    info@zdrav33.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#E6F0F8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#003366]" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Режим работы</p>
                  <p className="text-gray-600">Пн-Пт: 9:00 — 18:00</p>
                  <p className="text-gray-600">Обед: 13:00 — 14:00</p>
                  <p className="text-gray-600">Сб-Вс: выходной</p>
                </div>
              </div>
            </div>

            {/* Руководитель */}
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h4 className="font-semibold text-[#003366] mb-3">
                Руководитель
              </h4>
              <p className="text-gray-900 font-medium">
                Смирнов Алексей Николаевич
              </p>
              <p className="text-gray-600 text-sm">
                Начальник Департамента здравоохранения Владимирской области
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Приём граждан: вторник, четверг с 14:00 до 17:00 (по предварительной записи)
              </p>
            </div>
          </div>

          {/* Форма обращения */}
          <div>
            <h3 className="text-xl font-semibold text-[#003366] mb-6">
              Направить обращение
            </h3>

            <div className="bg-[#E6F0F8] rounded-lg p-4 mb-6 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-1">Важно!</p>
                <p>
                  Обращения рассматриваются в течение 30 дней с момента регистрации. 
                  Для получения ответа укажите корректные контактные данные.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ФИО <span className="text-[#CC0000]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Иванов Иван Иванович"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail <span className="text-[#CC0000]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Тема обращения <span className="text-[#CC0000]">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Выберите тему</option>
                  <option value="oms">Вопросы ОМС</option>
                  <option value="appointment">Запись к врачу</option>
                  <option value="drugs">Льготное лекарственное обеспечение</option>
                  <option value="complaint">Жалоба на медицинскую организацию</option>
                  <option value="quality">Качество медицинской помощи</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Текст обращения <span className="text-[#CC0000]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Опишите суть обращения..."
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Я согласен на обработку персональных данных в соответствии с 
                  Федеральным законом №152-ФЗ «О персональных данных»
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Отправить обращение</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

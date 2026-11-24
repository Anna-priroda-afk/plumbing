import { Mail, Phone, Pin, Telegram, WhatsApp } from './Icons.jsx'

export default function Contacts() {
  return (
    <section className="section contacts-section" id="contacts">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Контакты</span>
          <h2>Работаем в Челябинске</h2>
          <p>Подача техники по городу в день заказа. Выезд за город — по договорённости.</p>
        </div>

        <div className="contacts-layout">
          <div className="contact-card glass reveal">
            <h3>Свяжитесь с нами</h3>

            <a className="contact-line" href="tel:+70000000000">
              <span className="contact-icon">
                <Phone size={20} />
              </span>
              <span>
                <small>Телефон</small>
                <strong>+7 (XXX) XXX-XX-XX</strong>
              </span>
            </a>

            <a className="contact-line" href="mailto:info@spec74.ru">
              <span className="contact-icon">
                <Mail size={20} />
              </span>
              <span>
                <small>E-mail</small>
                <strong>info@spec74.ru</strong>
              </span>
            </a>

            <div className="contact-line">
              <span className="contact-icon">
                <Pin size={20} />
              </span>
              <span>
                <small>Адрес</small>
                <strong>Челябинск, [улица, район]</strong>
              </span>
            </div>

            <div className="messengers">
              <a className="messenger" href="https://t.me/+70000000000" target="_blank" rel="noreferrer">
                <Telegram size={18} />
                Telegram
              </a>
              <a className="messenger" href="https://wa.me/70000000000" target="_blank" rel="noreferrer">
                <WhatsApp size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="map-card glass reveal" style={{ '--delay': '120ms' }}>
            <iframe
              title="Карта: Челябинск"
              src="https://yandex.ru/map-widget/v1/?ll=61.4368%2C55.1644&z=12&pt=61.4368,55.1644,pm2rdm"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <span className="map-badge">
              <Pin size={15} /> База в Челябинске
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

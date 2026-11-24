import { ArrowRight, Check, Compressor, Lift, Phone, Truck } from './Icons.jsx'

const highlights = [
  { icon: Lift, name: 'Автовышка', price: 'от 2 500 ₽/ч' },
  { icon: Truck, name: 'Самогруз', price: 'от 3 000 ₽/ч' },
  { icon: Compressor, name: 'Компрессор', price: 'от 1 800 ₽/ч' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob--one" />
        <span className="hero-blob hero-blob--two" />
        <span className="hero-blob hero-blob--three" />
        <span className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="eyebrow">
            Аренда спецтехники в Челябинске
          </span>

          <h1>
            Аренда спецтехники в Челябинске — с расчётом стоимости{' '}
            <span className="text-gradient">за 10 минут</span>
          </h1>

          <p className="hero-lead">
            Автовышки, самогрузы и компрессоры с оператором. Подберём технику под вашу задачу, скажем финальную цену
            сразу — без скрытых доплат. Подача на объект в день заказа.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="#form">
              Рассчитать стоимость за 10 минут
              <ArrowRight size={19} />
            </a>
            <a className="btn btn-outline btn-lg" href="tel:+70000000000">
              <Phone size={18} />
              Или позвоните: +7 (XXX) XXX-XX-XX
            </a>
          </div>

          <p className="hero-note">
            Не знаете, что выбрать? Опишите задачу в двух строках — сами подскажем, какая техника нужна и сколько часов
            заказывать.
          </p>

          <div className="hero-metrics">
            <div>
              <strong>15 минут</strong>
              <span> до звонка с расчётом</span>
            </div>
            <div>
              <strong>2 часа</strong>
              <span> на замену техники</span>
            </div>
            <div>
              <strong>0 ₽</strong>
              <span> скрытых доплат</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal" style={{ '--delay': '140ms' }}>
          <span className="visual-orbit" aria-hidden="true" />

          <div className="visual-card visual-card--main glass">
            <div className="visual-card__top">
              <span className="pill">Подбор за 10 минут</span>
              <span className="live-dot" aria-hidden="true" />
            </div>
            <h3>Техника под вашу задачу</h3>
            <ul className="mini-list">
              <li>
                <Check size={16} /> Назовём точную цену сразу
              </li>
              <li>
                <Check size={16} /> Подскажем нужное число часов
              </li>
              <li>
                <Check size={16} /> Привезём с оператором
              </li>
            </ul>
            <div className="visual-card__footer">
              <span>от 1 800 ₽/час</span>
              <span>без предоплаты</span>
            </div>
          </div>

          {highlights.map(({ icon: Icon, name, price }, index) => (
            <div
              className={`visual-card visual-card--float visual-card--${index + 1} glass`}
              key={name}
              style={{ '--float-delay': `${index * 600}ms` }}
            >
              <span className="visual-icon">
                <Icon size={19} />
              </span>
              <span className="visual-card__label">
                <small>{name}</small>
                <strong>{price}</strong>
              </span>
            </div>
          ))}

          <div className="visual-badge" aria-hidden="true">
            <strong>10</strong>
            <span>минут</span>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#steps" aria-label="Листать ниже">
        <span />
        Листайте ниже
      </a>
    </section>
  )
}

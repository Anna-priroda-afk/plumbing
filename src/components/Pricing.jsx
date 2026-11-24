import { Check } from './Icons.jsx'

const prices = [
  { name: 'Автовышка', hour: 'от 2 500 ₽/ч', shift: 'от 20 000 ₽', min: '4 часа' },
  { name: 'Самогруз', hour: 'от 3 000 ₽/ч', shift: 'от 24 000 ₽', min: '4 часа' },
  { name: 'Компрессор', hour: 'от 1 800 ₽/ч', shift: 'от 14 400 ₽', min: '4 часа' },
]

const included = [
  'опытный оператор;',
  'подача на объект в пределах Челябинска;',
  'топливо и расходники;',
  'договор и закрывающие документы (для ИП и юрлиц).',
]

export default function Pricing() {
  return (
    <section className="section pricing-section" id="prices">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Прозрачные цены</span>
          <h2>Вы платите только за то, что заказали</h2>
          <p>Никаких «уточним на объекте». Ориентиры по бюджету — ниже, точную сумму назовём за 15 минут.</p>
        </div>

        <div className="pricing-layout">
          <div className="price-table glass reveal">
            <div className="price-row price-row--head">
              <span>Техника</span>
              <span>Почасовая</span>
              <span>Смена (8 ч)</span>
              <span>Минимальный заказ</span>
            </div>
            {prices.map((row) => (
              <div className="price-row" key={row.name}>
                <span data-label="Техника">
                  <strong>{row.name}</strong>
                </span>
                <span data-label="Почасовая">{row.hour}</span>
                <span data-label="Смена (8 ч)">{row.shift}</span>
                <span data-label="Минимальный заказ">{row.min}</span>
              </div>
            ))}
          </div>

          <aside className="included-card glass reveal" style={{ '--delay': '120ms' }}>
            <h3>Что уже входит в цену</h3>
            <ul>
              {included.map((item) => (
                <li key={item}>
                  <span className="check-badge">
                    <Check size={15} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="fine-print">
              Выезд за город — по договорённости, посчитаем отдельно и честно.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

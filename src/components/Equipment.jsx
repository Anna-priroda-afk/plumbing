import { ArrowRight, Compressor, Lift, Truck } from './Icons.jsx'

const machines = [
  {
    id: 'lift',
    icon: Lift,
    title: 'Автовышка — поднимите бригаду и материалы на высоту',
    forWho: 'Частные заказчики (стройка дома, фасадные работы), ИП (монтаж, реклама, электрика).',
    solves: 'Доступ на этажи, работа на высоте, подъём грузов в люльке.',
    priceHour: 'от 2 500 ₽/ч',
    priceShift: 'от 20 000 ₽ за смену (8 ч)',
    min: 'мин. 4 ч',
    task: 'lift',
    cta: 'Подобрать автовышку под мою задачу',
  },
  {
    id: 'loader',
    icon: Truck,
    title: 'Самогруз — перевозка и погрузка без дополнительной техники',
    forWho: 'Частники (переезд, стройматериалы), ИП (логистика, вывоз мусора, доставка).',
    solves: 'Привезёт и разгрузит сам, не нужно нанимать отдельно кран и грузовик.',
    priceHour: 'от 3 000 ₽/ч',
    priceShift: 'от 24 000 ₽ за смену',
    min: 'мин. 4 ч',
    task: 'loader',
    cta: 'Подобрать самогруз под мою задачу',
  },
  {
    id: 'compressor',
    icon: Compressor,
    title: 'Компрессор — сжатый воздух для пневмоинструмента',
    forWho: 'ИП (строительные бригады), частники (продувка, покраска, продувка труб).',
    solves: 'Питание отбойных молотков, гайковёртов, краскопультов.',
    priceHour: 'от 1 800 ₽/ч',
    priceShift: 'от 14 400 ₽ за смену',
    min: 'мин. 4 ч',
    task: 'compressor',
    cta: 'Подобрать компрессор под мою задачу',
  },
]

export default function Equipment({ onSelect }) {
  return (
    <section className="section equipment-section" id="equipment">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Виды техники</span>
          <h2>Найдите то, что решает именно вашу задачу</h2>
          <p>Короткая справка по каждой машине: кому подходит, что делает и сколько стоит.</p>
        </div>

        <div className="equipment-grid">
          {machines.map((machine, index) => {
            const Icon = machine.icon
            return (
              <article
                className="equipment-card glass reveal"
                key={machine.id}
                style={{ '--delay': `${index * 120}ms` }}
              >
                <div className="equipment-card__head">
                  <span className="equipment-icon">
                    <Icon size={26} />
                  </span>
                  <span className="equipment-tag">{machine.min}</span>
                </div>

                <h3>{machine.title}</h3>

                <dl className="equipment-list">
                  <div>
                    <dt>Для кого</dt>
                    <dd>{machine.forWho}</dd>
                  </div>
                  <div>
                    <dt>Что решает</dt>
                    <dd>{machine.solves}</dd>
                  </div>
                </dl>

                <div className="equipment-price">
                  <div>
                    <small>Почасовая аренда</small>
                    <strong>{machine.priceHour}</strong>
                  </div>
                  <div>
                    <small>Смена</small>
                    <strong>{machine.priceShift}</strong>
                  </div>
                </div>

                <button className="btn btn-soft equipment-button" type="button" onClick={() => onSelect(machine.task)}>
                  {machine.cta}
                  <ArrowRight size={17} />
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

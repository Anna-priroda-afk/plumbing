import { Bolt, Clock, Contract, Shield } from './Icons.jsx'

const guarantees = [
  {
    icon: Shield,
    title: 'Техника исправна',
    text: 'Проходит ТО. Перед выездом проверяем все узлы, чтобы не было простоев на объекте.',
  },
  {
    icon: Bolt,
    title: 'Замена за 2 часа',
    text: 'При поломке заменим технику в течение 2 часов. Критично, если сроки горят.',
  },
  {
    icon: Contract,
    title: 'Работаем по договору',
    text: 'Даём закрывающие документы: УПД и акт для ИП, бухгалтерии и отчётности.',
  },
  {
    icon: Clock,
    title: 'Цена фиксируется',
    text: 'Стоимость, которую назвали, не меняется в процессе работы. Никаких сюрпризов.',
  },
]

export default function Trust() {
  return (
    <section className="section trust-section" id="trust">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Доверие и гарантии</span>
          <h2>Почему с нами спокойно</h2>
          <p>Спокойный деловой подход: понятные условия, исправная техника и слово, которое держим.</p>
        </div>

        <div className="trust-grid">
          {guarantees.map(({ icon: Icon, title, text }, index) => (
            <article className="trust-card glass reveal" key={title} style={{ '--delay': `${index * 90}ms` }}>
              <span className="trust-icon">
                <Icon size={23} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

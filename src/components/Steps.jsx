import { Check, Clock, Truck } from './Icons.jsx'

const steps = [
  {
    number: '01',
    icon: Check,
    title: 'Опишите задачу',
    text: 'Напишите, что нужно сделать: “поднять материалы на 5 этаж”, “вывезти грунт”, “нужен сжатый воздух”. Без терминов — простыми словами.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'Получите расчёт',
    text: 'Перезвоним в течение 15 минут, назовём точную цену со всем включённым и подскажем, сколько реально часов нужно.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Техника на объекте',
    text: 'Подаём в день заказа или на удобную дату, с опытным оператором. При поломке заменим в течение 2 часов.',
  },
]

export default function Steps() {
  return (
    <section className="section steps-section" id="steps">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Простой процесс</span>
          <h2>Как мы подбираем технику — без лишних вопросов</h2>
          <p>Три шага от заявки до работы на объекте. Никаких сложных форм и неожиданных доплат.</p>
        </div>

        <div className="steps-grid">
          {steps.map(({ number, icon: Icon, title, text }, index) => (
            <article
              className="step-card glass reveal"
              key={number}
              style={{ '--delay': `${index * 110}ms` }}
            >
              <span className="step-number">{number}</span>
              <span className="step-icon">
                <Icon size={24} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="step-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, Telegram, WhatsApp } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="final-cta">
        <div className="container final-cta__inner reveal">
          <div>
            <span className="eyebrow">Остались вопросы?</span>
            <h2>Скажем точную цену за 10 минут</h2>
            <p>Опишите задачу — подберём технику, назовём сроки и зафиксируем стоимость.</p>
          </div>
          <a className="btn btn-primary btn-lg" href="#form">
            Рассчитать стоимость
            <ArrowRight size={19} />
          </a>
        </div>
      </div>

      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>Спецтехника 74</strong>
          <span>Аренда автовышек, самогрузов и компрессоров в Челябинске.</span>
        </div>

        <div className="footer-links">
          <a href="#equipment">Техника</a>
          <a href="#prices">Цены</a>
          <a href="#contacts">Контакты</a>
          <a href="#privacy" id="privacy">
            Политика конфиденциальности
          </a>
        </div>

        <div className="footer-social">
          <a href="https://t.me/+70000000000" target="_blank" rel="noreferrer" aria-label="Telegram">
            <Telegram size={17} />
          </a>
          <a href="https://wa.me/70000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <WhatsApp size={17} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2024, Спецтехника 74</span>
        <span>ИНН / ОГРН — указать после согласования</span>
      </div>
    </footer>
  )
}

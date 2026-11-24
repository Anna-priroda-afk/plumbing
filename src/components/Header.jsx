import { useState } from 'react'
import { Bolt, Close, Menu, Phone } from './Icons.jsx'

const links = [
  { href: '#steps', label: 'Как это работает' },
  { href: '#equipment', label: 'Техника' },
  { href: '#prices', label: 'Цены' },
  { href: '#trust', label: 'Почему мы' },
  { href: '#contacts', label: 'Контакты' },
]

export default function Header({ scrolled }) {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={close} aria-label="На главную">
          <span className="brand-mark">
            <Bolt size={20} />
          </span>
          <span className="brand-text">
            <strong>Спецтехника 74</strong>
            <small>Челябинск</small>
          </span>
        </a>

        <nav className={`header-nav${open ? ' is-open' : ''}`} aria-label="Основная навигация">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="header-nav__phone" href="tel:+70000000000" onClick={close}>
            <Phone size={16} />
            +7 (XXX) XXX-XX-XX
          </a>
        </nav>

        <a className="header-cta" href="#form">
          Рассчитать стоимость
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <Close size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}

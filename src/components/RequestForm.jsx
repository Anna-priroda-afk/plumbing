import { useEffect, useState } from 'react'
import { ArrowRight, Check, Clock, Close } from './Icons.jsx'
import { leadEndpoint } from '../config.js'

const taskOptions = [
  { value: 'lift', label: 'Автовышка' },
  { value: 'loader', label: 'Самогруз' },
  { value: 'compressor', label: 'Компрессор' },
]

const emptyForm = { name: '', phone: '', task: '', comment: '' }

export default function RequestForm({ selectedTask }) {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [callForm, setCallForm] = useState({ name: '', phone: '' })

  useEffect(() => {
    if (selectedTask) setForm((current) => ({ ...current, task: selectedTask }))
  }, [selectedTask])

  useEffect(() => {
    if (!modalOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [modalOpen])

  const update = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const updateCall = (event) => {
    const { name, value } = event.target
    setCallForm((current) => ({ ...current, [name]: value }))
  }

  const openCallModal = (event) => {
    event.preventDefault()
    setCallForm({ name: form.name, phone: form.phone })
    setModalOpen(true)
  }

  const submitCall = async (event) => {
    event.preventDefault()

    const lead = {
      createdAt: new Date().toISOString(),
      name: callForm.name || '',
      phone: callForm.phone ? `'${callForm.phone}` : '',
      task: taskOptions.find((item) => item.value === form.task)?.label || '',
      comment: form.comment || '',
    }

    try {
      if (leadEndpoint.startsWith('ВАШ_')) {
        console.warn('Google Таблица не подключена. Данные заявки:', lead)
      } else {
        await fetch(leadEndpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(lead),
        })
      }
    } catch (error) {
      console.error(error)
    }

    setModalOpen(false)
    setSent(true)
  }

  return (
    <>
    <section className="section form-section" id="form">
      <div className="container form-layout">
        <div className="form-copy reveal">
          <span className="eyebrow">Оставьте заявку</span>
          <h2>Остались вопросы по технике или цене?</h2>
          <p>
            Оставьте заявку — перезвоним за 15 минут, подскажем, что подойдёт под вашу задачу, и зафиксируем цену. Без
            навязывания лишних часов.
          </p>
          <div className="form-benefits">
            <span>
              <Check size={16} /> Ответим на ваш вопрос по телефону
            </span>
            <span>
              <Clock size={16} /> Перезвоним в течение 15 минут
            </span>
          </div>
        </div>

        <div className="form-card glass reveal" style={{ '--delay': '100ms' }}>
          {sent ? (
            <div className="form-success" role="status">
              <span className="success-icon">
                <Check size={30} />
              </span>
              <h3>Заявка отправлена</h3>
              <p>Перезвоним в течение 15 минут и зафиксируем стоимость. Спасибо за обращение!</p>
              <button className="btn btn-outline" type="button" onClick={() => { setSent(false); setForm(emptyForm) }}>
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h3>Расчёт стоимости за 10 минут</h3>
              <p className="form-card__hint">Заполните поля — мы уточним детали по телефону.</p>

              <label className="field">
                <span>Имя <small>(необязательно)</small></span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Как к вам обращаться"
                  autoComplete="name"
                />
              </label>

              <label className="field">
                <span>Телефон <b>*</b></span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+7 (999) 000-00-00"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="field">
                <span>Вид задачи</span>
                <div className="select-wrap">
                  <select name="task" value={form.task} onChange={update}>
                    <option value="">Выберите из списка</option>
                    {taskOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <label className="field">
                <span>Комментарий</span>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={update}
                  rows="3"
                  placeholder="нужно на завтра, объект за городом, высота 5 этажей…"
                />
              </label>

              <button className="btn btn-primary btn-block" type="button" onClick={openCallModal}>
                Отправить заявку — перезвоним за 15 минут
                <ArrowRight size={18} />
              </button>
              <p className="form-disclaimer">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Мы не передаём номер третьим лицам.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>

    {modalOpen && (
      <div
        className="modal-backdrop"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setModalOpen(false)
        }}
      >
        <div className="modal glass" role="dialog" aria-modal="true" aria-labelledby="callModalTitle">
          <button className="modal-close" type="button" onClick={() => setModalOpen(false)} aria-label="Закрыть">
            <Close size={20} />
          </button>
          <span className="eyebrow">Заявка на звонок</span>
          <h3 id="callModalTitle">Оставьте данные для созвона</h3>
          <p className="modal-hint">Перезвоним в течение 15 минут и зафиксируем стоимость.</p>

          <form onSubmit={submitCall}>
            <label className="field">
              <span>Имя <small>(необязательно)</small></span>
              <input
                type="text"
                name="name"
                value={callForm.name}
                onChange={updateCall}
                placeholder="Как к вам обращаться"
                autoComplete="name"
                autoFocus
              />
            </label>

            <label className="field">
              <span>Телефон <b>*</b></span>
              <input
                type="tel"
                name="phone"
                value={callForm.phone}
                onChange={updateCall}
                placeholder="+7 (999) 000-00-00"
                autoComplete="tel"
              />
            </label>

            <button className="btn btn-primary btn-block" type="button" onClick={submitCall}>
              Отправить заявку
              <ArrowRight size={18} />
            </button>
            <p className="form-disclaimer">Мы не передаём номер третьим лицам.</p>
          </form>
        </div>
      </div>
    )}
    </>
  )
}

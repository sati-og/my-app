import s from './Schedule.module.scss';

export const Schedule = () => {
  return (
    <div className={s.container}>
      <div
        className={s.content}
      >
        <img className={s.flowersTopImage} src="/images/flowersRight5.svg" alt=""/>
        <div className={s.title}>
          <span>Программа</span>
        </div>
        <div className={s.text}>
          <span>Утро невесты</span>
          <span>12:00</span>
          <span>ул. Майкопская 273</span>
        </div>
        <div className={s.text}>
          <span>Регистрация</span>
          <span>16:00</span>
          <span>ул.Тенистая 30 Ресторан "Белуга"</span>
        </div>
        <div className={s.text}>
          <span>Банкет</span>
          <span>18:00</span>
          <span>ул. Ефремова 187 Ресторан "Крокус"</span>
        </div>
        <div className={s.additionalText}>
          <span>*Если Вы придете раньше основной программы, будем рады видеть вас по адресу: улица 2я Урицкого, 88.</span>
        </div>
      </div>
    </div>
  )
}

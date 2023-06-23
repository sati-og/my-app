import s from './Schedule.module.scss';

export const Schedule = () => {
  return (
    <div className={s.container}>
      <div
        // style={{ backgroundImage: 'url("/images/backdrop.svg")' }}
        className={s.backdrop}
      />
      <div
        className={s.content}
      >
        <img className={s.flowersLeftImage} src="/images/flowersRight2.svg" alt=""/>
        <div className={s.title}>
          <span>Расписание свадебного дня</span>
        </div>
        {/*<div className={s.text}>*/}
        {/*  <span>Утро невесты</span>*/}
        {/*  <span>Регистрация брака</span>*/}
        {/*  <span>Банкет</span>*/}
        {/*</div>*/}
        {/*<div className={s.text}>*/}
        {/*  <span>12:00</span>*/}
        {/*  <span>16:00</span>*/}
        {/*  <span>18:00</span>*/}
        {/*</div>*/}
        {/*<div className={s.text}>*/}
        {/*  <span>2я Урицкого 88</span>*/}
        {/*  <span>территория ресторана "Белуга" ул.Тенистая 30</span>*/}
        {/*  <span>Ресторан "Крокус" ул. Ефремова 187</span>*/}
        {/*</div>*/}
        <div className={s.text}>
          <span>Утро невесты</span>
          <span>12:00</span>
          <span>2я Урицкого 88</span>
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
      </div>
      <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
    </div>
  )
}

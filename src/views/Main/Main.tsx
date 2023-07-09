import s from './Main.module.scss';

export const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.flowersLeftImage} src="/images/flowersLeft3.svg" alt=""/>
        <div className={s.contentInfo}>
          <span className={s.name}>Александр</span>
          <span className={s.name}>Сатеник</span>
        </div>
        <div className={s.dateText}>
          <span>12 августа 2023</span>
        </div>
      </div>
    </div>
  )
}

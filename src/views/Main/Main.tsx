import s from './Main.module.scss';

export const Main = () => {
  return (
    <div className={s.container}>
      <div
        // style={{ backgroundImage: 'url("/images/backdrop.svg")' }}
        className={s.backdrop}
      />
      <div
        className={s.content}
      >
        <img className={s.flowersLeftImage} src="/images/flowersLeft3.svg" alt=""/>
        <div className={s.contentInfo}>
          <span className={s.name}>Александр</span>
          <span className={s.name}>Сатеник</span>
        </div>
        <div className={s.dateText}>
          <span>12 августа 2023</span>
        </div>
        {/*<div className={s.contentInfo}>*/}
        {/*  <span className={s.name}>Александр Сатеник</span>*/}
        {/*</div>*/}
        {/*<div className={s.contentInfo}>*/}
        {/*  <span className={s.name}>12 августа 2023</span>*/}
        {/*</div>*/}
      </div>
      <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
    </div>
  )
}

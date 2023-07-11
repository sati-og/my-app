import s from './Thank.module.scss';

export const Thank = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.flowersLeftImage} src="/images/flowersCenter3.svg" alt=""/>
        <div className={s.contentInfo}>
          <span className={s.name}>A</span>
          <span className={s.name}>&</span>
          <span className={s.name}>C</span>
        </div>
      </div>
    </div>
  )
}

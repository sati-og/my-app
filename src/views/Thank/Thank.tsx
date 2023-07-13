import s from './Thank.module.scss';

export const Thank = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.flowersLeftImage} src="/images/flowersCenter3.jpg" alt=""/>
        <div className={s.contentInfo}>
          <span className={s.textA}>A</span>
          <span className={s.textAnd}>&</span>
          <span className={s.textC}>C</span>
        </div>
      </div>
    </div>
  )
}

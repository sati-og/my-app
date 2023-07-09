import s from './HeartLoader.module.scss'

export const HeartLoader = () => {
  return (
    <div className={s.loaderBackdrop}>
      <div className={s.wrapper}>
        <div className={s.heart}>
          <div className={s.rhombus2}>
            <div className={s.circle21}></div>
            <div className={s.circle22}></div>
          </div>
        </div>
        <div className={`${s.text} ${s.textLeft}`}>Александр</div>
        <div className={`${s.text} ${s.textRight}`}>Сатеник</div>
      </div>
    </div>
  )
}

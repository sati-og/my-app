import s from './HeartLoader.module.scss'

export const HeartLoader = () => {
  return (
    <div className={s.loaderBackdrop}>
      <div className={s.rhombus2}>
        <div className={s.circle21}></div>
        <div className={s.circle22}></div>
      </div>
    </div>
  )
}

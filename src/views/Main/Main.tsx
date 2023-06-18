import s from './Main.module.scss';

export const Main = () => {
  return (
    <div className={s.container}>
      <div
        style={{ backgroundImage: 'url("/images/backdrop.svg")' }}
        className={s.backdrop}
      />
      <div
        className={s.content}
      >
        Александр Сатеник
      </div>
    </div>
  )
}

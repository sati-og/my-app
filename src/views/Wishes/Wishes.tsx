import s from './Wishes.module.scss';

export const Wishes = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.flowersTopImage} src="/images/flowersTop6.jpg" alt="" />
        <div className={s.title}>
          <span>Пожелания</span>
        </div>
        <div className={s.text}>
          <span><span style={{ fontWeight: 600 }}>Пожалуйста,</span> подтвердите ваше присутствие на нашем празднике до  01 августа 2023 года любым удобным для вас способом.</span>
        </div>
        <div className={s.text}>
          <span><span style={{ fontWeight: 600 }}>Пожалуйста,</span> воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.</span>
        </div>
      </div>
    </div>
  )
}

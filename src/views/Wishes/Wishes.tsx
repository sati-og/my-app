import s from './Wishes.module.scss';

export const Wishes = () => {
  return (
    <div className={s.container}>
      <div
        className={s.backdrop}
      />
      <div
        className={s.content}
      >
        <img className={s.flowersLeftImage} src="/images/flowersTop.svg" alt=""/>
        <div className={s.title}>
          <span>Пожелания</span>
        </div>
        <div className={s.text}>
          <span>Пожалуйста, подтвердите ваше присутствие на нашем празднике до  01 августа 2023 года любым удобным для вас способом.</span>
        </div>
        <div className={s.text}>
          <span>Пожалуйста, воздержитесь от криков «Горько» на празднике, ведь поцелуй - знак выражения чувств, он не может быть по заказу.</span>
        </div>
        {/*<div className={s.text}>*/}
        {/*  <span>Нам важно провести этот день с вами, поэтому просим прийти пожалуйста на регистрацию и на банкет не позже чем за 30 минут до начала официальной части, чтобы вы могли занять свое место и не пропустили важные моменты.</span>*/}
        {/*</div>*/}
      </div>
      <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
    </div>
  )
}

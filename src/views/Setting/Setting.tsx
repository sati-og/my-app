import s from './Setting.module.scss';



export const Setting = () => {

  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.flowersTopImage} src="/images/flowersBottomRight.svg" alt=""/>
        <div className={s.invitationContent}>
          {/*<img className={s.settingImg} src="/images/settingImg.png" alt=""/>*/}
          <div className={s.text}>
            <span>*За несколько дней до свадьбы на этой странице появится информация о вашем столе</span>
          </div>
        </div>
      </div>
    </div>
  )
}

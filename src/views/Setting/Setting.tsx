import s from './Setting.module.scss';
import { Page } from "../../components/Page";

export const Setting = () => {
  return (
    <Page>
      <img className={s.flowersTopImage} src="/images/flowersBottomRight.jpg" alt=""/>
      <div className={s.invitationContent}>
        <div className={s.text}>
          <span>*За несколько дней до свадьбы на этой странице появится информация о вашем столе</span>
        </div>
      </div>
    </Page>
  )
}

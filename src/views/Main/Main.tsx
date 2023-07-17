import s from './Main.module.scss';
import { Page } from "../../components/Page";

export const Main = () => {
  return (
    <Page>
      <img className={s.flowersLeftImage} src="/images/flowersLeft3.jpg" alt=""/>
      <div className={s.contentInfo}>
        <span className={s.name}>Александр</span>
        <span className={s.name}>Сатеник</span>
      </div>
      <div className={s.dateText}>
        <span>12 августа 2023</span>
      </div>
    </Page>
  )
}

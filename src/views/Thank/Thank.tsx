import s from './Thank.module.scss';
import { Page } from "../../components/Page";

export const Thank = () => {
  return (
    <Page>
      <img className={s.flowersLeftImage} src="/images/flowersCenter3.jpg" alt=""/>
      <div className={s.contentInfo}>
        <span className={s.textA}>A</span>
        <span className={s.textAnd}>&</span>
        <span className={s.textC}>C</span>
      </div>
    </Page>

  )
}

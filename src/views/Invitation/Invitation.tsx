import s from './Invitation.module.scss';
import { guestList } from "./guestList";
import { declOfNum } from "../../utils";
import { useParams } from "react-router-dom";
import {useMemo} from "react";
import { Page } from "../../components/Page";

const setName = (nameId: string): string => {
  const nameObj = guestList.find(el => el.id === nameId)
  if (nameObj) {
    switch (nameObj.type) {
      case 'name':
        return `Дорогие ${nameObj.nameStr}`
        break;
      case 'family':
        return `Уважаемая семья ${nameObj.nameStr}`
        break;
      default:
        return nameObj.nameStr
    }
  }
  return guestList.find(el => el.id === 'guest')?.nameStr || ''
}

export const Invitation = () => {

  const {id} = useParams<{ id: string }>();

  const userType = useMemo(()=>{
   return  guestList.find(el=> el.id === id)?.type || 'name'
  }, [id, guestList])

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2023, 7, 12).getTime();
  const secondDate = new Date().getTime();

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return (
    <Page>
      <img className={s.flowersTopImage} src="/images/flowersTop7.jpg" alt=""/>
      <div className={s.invitationContent}>
        <div className={s.nameText}>
          <span>{setName(id || 'guest')}</span>
        </div>
        <div className={s.text}>
          <span>Мы будем очень рады видеть {userType==='singleName' ? 'тебя' : 'вас'} на долгожданном торжестве, посвященном дню рождения нашей семьи.</span>
          <span
            className={s.secondText}>Приглашаем {userType==='singleName' ? 'тебя' : 'вас'} разделить с нами радость особенного дня — дня нашей свадьбы.</span>
        </div>
        <div className={s.dateText}>
          12 августа 2023
        </div>
        <div className={s.dayText}>
          <span>Осталось {diffDays} {declOfNum(diffDays, ['день', 'дня', 'дней'])}</span>
        </div>
      </div>
    </Page>

  )
}

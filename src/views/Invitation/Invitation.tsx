import s from './Invitation.module.scss';
import { guestList } from "./guestList";
import { declOfNum } from "../../utils";
import { useParams } from "react-router-dom";

const setName = (nameId: number): string => {
  const nameObj = guestList.find(el=> el.id === nameId)
  if(nameObj) {
    switch (nameObj.type) {
      case 'name': return `Дорогие ${nameObj.nameStr}`
        break;
      case 'family': return `Уважаемая семья ${nameObj.nameStr}`
        break;
      default: return nameObj.nameStr
    }
  }
  return ''
}

export const Invitation = () => {

  const { id } = useParams<{ id: string }>();

  console.log("@@@@id", id);
  
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(2023, 7, 12).getTime();
  const secondDate = new Date().getTime();

  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.flowersTopImage} src="/images/flowersTop7.svg" alt=""/>
        <div className={s.invitationContent}>
          <div className={s.nameText}>
            <span>{setName(+(id || 0))}</span>
          </div>
          <div className={s.text}>
            <span>Мы будем очень рады видеть вас на долгожданном торжестве, посвященном дню рождения нашей семьи. Приглашаем вас разделить с нами радость особенного дня.</span>
            <span style={{display: 'inline-block',  marginTop: 25 }}>Дня нашей свадьбы.</span>
          </div>
          <div className={s.dateText}>
            <span>Осталось {diffDays} {declOfNum(diffDays, ['день', 'дня', 'дней'])}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

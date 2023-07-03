import s from './Invitation.module.scss';
import { guestList } from "./guestList";



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
  return (
    <div className={s.container}>
      <div
        className={s.content}
      >
        <img className={s.flowersLeftImage} src="/images/flowersTop.svg" alt=""/>
        <div className={s.nameText}>
          <span>{setName(25)}</span>
        </div>
        <div className={s.text}>
          <span>Мы будем очень рады видеть вас на долгожданном торжестве, посвященном дню рождения нашей семьи. Приглашаем вас разделить с нами радость оссобенного дня - дня нашей свадьбы. </span>
        </div>
        <div className={s.dateText}>
          <span>До свадьбы 12 дней</span>
        </div>
      </div>
      <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
    </div>
  )
}

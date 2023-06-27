import s from './Invitation.module.scss';

type NameType = {
  id: number, nameStr: string, type: 'name'| 'singleName' | 'family'
}
const names:NameType[]= [
  {id: 1, nameStr: 'папа и мама', type: 'name'},
  {id: 2, nameStr: 'Мкартычева Хачатура', type: 'family'},
  {id: 3, nameStr: 'Мкартычева Виталия', type: 'family'},
  {id: 4, nameStr: 'Арутюнова Ованеса', type: 'family'},
  {id: 5, nameStr: 'Арестак, Рубик и Людочка', type: 'name'},
  {id: 6, nameStr: 'Дорогая Людочка', type: 'singleName'},
  {id: 7, nameStr: 'Давид, Рубен и Левон', type: 'name'},
  {id: 8, nameStr: 'Карапетяна Левона', type: 'family'},
  {id: 9, nameStr: 'Дорогая Карапетян Альвина', type: 'singleName'},
  {id: 10, nameStr: 'Нуна и Артём', type: 'name'},
  {id: 11, nameStr: 'Искандер и Диана', type: 'name'},
  {id: 12, nameStr: 'Аркадий и Анжела', type: 'name'},
  {id: 13, nameStr: 'Киракосовых', type: 'family'},
  {id: 14, nameStr: 'Дорогая Алла', type: 'singleName'},
  {id: 15, nameStr: 'Карапетяна Геворка', type: 'family'},
  {id: 16, nameStr: 'Карапетовых', type: 'family'},
  {id: 17, nameStr: 'Анжела и Рафик', type: 'name'},
  {id: 18, nameStr: 'Арестак и Тая', type: 'name'},
  {id: 19, nameStr: 'Карен и Маргарита', type: 'name'},
  {id: 20, nameStr: 'Дорогая Малхазова Жанна', type: 'singleName'},
  {id: 21, nameStr: 'Егояна Эдуарда', type: 'family'},
  {id: 22, nameStr: 'Егояна Алика', type: 'family'},
  {id: 23, nameStr: 'Григоряна Арменака', type: 'family'},
  {id: 24, nameStr: 'Арзуманян Армен и Светлана', type: 'name'},
  {id: 25, nameStr: 'Сергей, Лилия, Альберт и Армине', type: 'name'},
  {id: 26, nameStr: 'Лаура, Рудольф, Кристина, Артур и Дарина', type: 'name'},
  {id: 27, nameStr: 'Лиана и Арина', type: 'name'},
  {id: 28, nameStr: 'Дорогая Тоноян Сусана', type: 'singleName'},
  {id: 29, nameStr: 'Аркадий, Ася, Александр и Лев', type: 'name'},
  {id: 30, nameStr: 'Геворк, Галина, Рустам и Михаил', type: 'name'},
  {id: 31, nameStr: 'Погосова Серго', type: 'family'},
  {id: 32, nameStr: 'Погосова Анатолия', type: 'family'},
  {id: 33, nameStr: 'Сироповых', type: 'family'},
  {id: 34, nameStr: 'Анушик и Игорь', type: 'name'},
  {id: 35, nameStr: 'Арутюновых', type: 'family'},
  {id: 36, nameStr: 'Манукян', type: 'family'},
  {id: 37, nameStr: 'Дорогая Татевик', type: 'singleName'},
  {id: 38, nameStr: 'Настя и Костя', type: 'name'},
  {id: 39, nameStr: 'Дорогая Надя', type: 'singleName'},
]

const setName = (nameId: number): string =>{
  const nameObj = names.find(el=> el.id === nameId)
  if(nameObj){
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
          <span>12 августа 2023</span>
        </div>
      </div>
      <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
    </div>
  )
}

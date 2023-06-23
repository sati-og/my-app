import s from './Invitation.module.scss';

type NameType = {
  id: number, nameStr: string, type: 'name'| 'singleName' | 'family'
}
const names:NameType[]= [
  {id: 1, nameStr: 'папа и мама', type: 'name'},
  {id: 2, nameStr: 'Мкартычева Хачатура', type: 'name'},
  {id: 3, nameStr: 'Мкартычева Виталия', type: 'name'},
  {id: 4, nameStr: 'Арутюнова Ованеса', type: 'name'},
  {id: 5, nameStr: 'Арестак, Рубик и Людочка', type: 'name'},
  {id: 6, nameStr: 'Людочка', type: 'name'},
  {id: 7, nameStr: 'Давид, Рубен и Левон', type: 'name'},
  {id: 8, nameStr: 'Карапетяна Левона', type: 'family'},
  {id: 9, nameStr: 'Карапетян Альвина', type: 'family'},
  {id: 10, nameStr: 'Нуна и Артём', type: 'family'},
  {id: 11, nameStr: 'Киракосовых', type: 'family'},
  {id: 12, nameStr: 'Карапетяна Геворка', type: 'family'},
  {id: 13, nameStr: 'Карапетовых', type: 'family'},
  {id: 14, nameStr: 'Анжела и Рафик', type: 'family'},
  {id: 15, nameStr: 'Карапетовых', type: 'family'},
  {id: 16, nameStr: 'Арестак и Тая', type: 'family'},
  {id: 17, nameStr: 'Карен и Маргарита', type: 'family'},
  {id: 18, nameStr: 'Малхазова Жанна', type: 'family'},
  {id: 19, nameStr: 'Егояна Эдуарда', type: 'family'},
  {id: 20, nameStr: 'Егояна Алика', type: 'family'},
  {id: 21, nameStr: 'Григоряна Арменака', type: 'family'},
  {id: 22, nameStr: 'Дорогие Арзуманян Армен и Светлана', type: 'family'},
  {id: 23, nameStr: 'Сергей, Лилия, Альберт', type: 'family'},
  {id: 24, nameStr: 'Армине', type: 'family'},
  {id: 25, nameStr: 'Лаура, Рудольф, Артур и Дарина', type: 'family'},
  {id: 26, nameStr: 'Лиана и Арина', type: 'family'},
  {id: 27, nameStr: 'Дорогая Тоноян Сусана', type: 'family'},
  {id: 28, nameStr: 'Аркадий, Ася, Александр и Лев', type: 'family'},
  {id: 29, nameStr: 'Геворк, Галина, Рустам и Михаил', type: 'family'},
  {id: 30, nameStr: 'Погосова Серго', type: 'family'},
  {id: 31, nameStr: 'Погосова Анатолия', type: 'family'},
  {id: 32, nameStr: 'Сироповых', type: 'family'},
  {id: 32, nameStr: 'Анушик и Игорь', type: 'family'},
  {id: 33, nameStr: 'Арутюновых', type: 'family'},
  {id: 34, nameStr: 'Манукян', type: 'family'},
  {id: 35, nameStr: 'Дорогая Татевик', type: 'family'},
  {id: 36, nameStr: 'Настя и Костя', type: 'name'},
  {id: 37, nameStr: 'Дорогая Надя', type: 'singleName'},
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
        // style={{ backgroundImage: 'url("/images/backdrop.svg")' }}
        className={s.backdrop}
      />
      <div
        className={s.content}
      >
        <img className={s.flowersLeftImage} src="/images/flowersTop.svg" alt=""/>
        <div className={s.nameText}>
          <span>{setName(29)}</span>
        </div>
        <div className={s.text}>
          <span>Мы будем очень рады видеть вас на долгожданном торжестве, посвященном дню рождения нашей семьи. Приглашаем вас разделить с нами радость оссобенного дня - нашей свадьбы. </span>
        </div>
        <div className={s.dateText}>
          <span>12 августа 2023</span>
        </div>
      </div>
      <img className={s.shadowOverlay} src="/images/leafs-shadow.png" alt=""/>
    </div>
  )
}

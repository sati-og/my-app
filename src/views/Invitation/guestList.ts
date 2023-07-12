export type NameType = {
  id: string, nameStr: string, type: 'name'| 'singleName' | 'family'
}

export const guestList: NameType[]= [
  {id: 'guest', nameStr: 'Дорогой гость', type: 'singleName'},
  {id: 'parents', nameStr: 'папа и мама', type: 'name'},
  {id: 'mkartychev-kh', nameStr: 'Мкартычева Хачатура', type: 'family'},
  {id: 'mkartychev-v', nameStr: 'Мкартычева Виталия', type: 'family'},
  {id: 'arutyunov-oa', nameStr: 'Арутюнова Ованеса', type: 'family'},
  {id: 'ovsepyan-a', nameStr: 'Арестак, Рубик и Людочка', type: 'name'},
  {id: 'lyudmila', nameStr: 'Дорогая Людочка', type: 'singleName'},
  {id: 'ovsepyan-d', nameStr: 'Давид, Рубен и Левон', type: 'name'},
  {id: 'karapetyan-l', nameStr: 'Карапетяна Левона', type: 'family'},
  {id: 'karapetyan-a', nameStr: 'Дорогая Карапетян Альвина', type: 'singleName'},
  {id: 'mykyrtychev', nameStr: 'Нуна и Артём', type: 'name'},
  {id: 'iskander-diana', nameStr: 'Искандер и Диана', type: 'name'},
  {id: 'arkady-angela', nameStr: 'Аркадий и Анжела', type: 'name'},
  {id: 'kirakosovs', nameStr: 'Киракосовых', type: 'family'},
  {id: 'alla', nameStr: 'Дорогая Алла', type: 'singleName'},
  {id: 'karapetyan-g', nameStr: 'Карапетяна Геворка', type: 'family'},
  {id: 'karapetovs', nameStr: 'Карапетовых', type: 'family'},
  {id: 'angela-raphael', nameStr: 'Анжела и Рафик', type: 'name'},
  {id: 'karapetyan-ar', nameStr: 'Карапетян Арестака', type: 'family'},
  {id: 'karapetyan-k', nameStr: 'Карапетян Карена', type: 'family'},
  {id: 'jeanne', nameStr: 'Дорогая Малхазова Жанна', type: 'singleName'},
  {id: 'egoyan-e', nameStr: 'Егояна Эдуарда', type: 'family'},
  {id: 'egoyan-a', nameStr: 'Егояна Алика', type: 'family'},
  {id: 'grigoryan', nameStr: 'Григоряна Арменака', type: 'family'},
  {id: 'arzumanyan', nameStr: 'Арзуманян Армен и Светлана', type: 'name'},
  {id: 'mnatsakanyan', nameStr: 'Сергей, Лилия, Альберт и Армине', type: 'name'},
  {id: 'laura-rudolf', nameStr: 'Лаура, Рудольф, Артур и Дарина', type: 'name'},
  {id: 'kristina', nameStr: 'Дорогая Кристина', type: 'singleName'},
  {id: 'liana', nameStr: 'Лиана и Арина', type: 'name'},
  {id: 'tonoyan-s', nameStr: 'Дорогая Тоноян Сусана', type: 'singleName'},
  {id: 'tonoyan-a', nameStr: 'Аркадий, Ася, Александр и Лев', type: 'name'},
  {id: 'gandilian', nameStr: 'Геворк, Галина, Рустам и Михаил', type: 'name'},
  {id: 'pogosov-s', nameStr: 'Погосова Серго', type: 'family'},
  {id: 'pogosov-a', nameStr: 'Погосова Анатолия', type: 'family'},
  {id: 'siropovy', nameStr: 'Сироповых', type: 'family'},
  {id: 'anushik-igor', nameStr: 'Анушик и Игорь', type: 'name'},
  {id: 'arutyunov-a', nameStr: 'Арутюновых', type: 'family'},
  {id: 'arutyunov-m', nameStr: 'Арутюновых', type: 'family'},
  {id: 'manukyan', nameStr: 'Манукян', type: 'family'},
  {id: 'tata', nameStr: 'Дорогая Татевик', type: 'singleName'},
  {id: 'nastya-kostya', nameStr: 'Настя и Костя', type: 'name'},
  {id: 'nadya', nameStr: 'Дорогая Надя', type: 'singleName'},
  {id: 'movsepyan-v', nameStr: 'Мовсепян Валерия', type: 'family'},
  {id: 'movsepyan-s', nameStr: 'Мовсепян Самвела', type: 'family'},
  {id: 'mkrtychan-z', nameStr: 'Мкртычан Зины', type: 'family'},
  {id: 'mkrtychan-v', nameStr: 'Мкртычана Вартана', type: 'family'},
  {id: 'sarkisov-sh', nameStr: 'Саркисовой Шогик', type: 'family'},
  {id: 'sarkisov-a', nameStr: 'Саркисова Андрея', type: 'family'},
  {id: 'toma-myguch', nameStr: 'Тамара и Мугуч', type: 'family'},
  {id: 'atabekyants', nameStr: 'Атабекянц Геворг', type: 'family'},
  {id: 'grandparents', nameStr: 'дедушка и бабушка', type: 'name'},
  {id: 'shaybak', nameStr: 'крестный, тётя Таня и Вероника', type: 'name'},
  {id: 'dasha', nameStr: 'Дорогая Даша', type: 'singleName'},
  {id: 'arina-nikita', nameStr: 'Арина и Никита', type: 'name'},
  {id: 'galina-alexey', nameStr: 'крестная, дядя Лёша и Даша', type: 'name'},
  {id: 'julia', nameStr: 'Дорогая Юля', type: 'singleName'},
  {id: 'natalia-vadim', nameStr: 'Наташа и Вадим', type: 'name'},
  {id: 'levaevy', nameStr: 'тётя Света и дядя Витя', type: 'name'},
  {id: 'victor-liza', nameStr: 'Витя и Лиза', type: 'name'},
  {id: 'glazunovy', nameStr: 'Надя, Илья и Настя', type: 'name'},
  {id: 'vasiltsovy', nameStr: 'тётя Оля, дядя Вова, Полина и Есения', type: 'name'},
  {id: 'aliona', nameStr: 'Дорогая Алёна', type: 'singleName'},
  {id: 'samusevich', nameStr: 'тётя Жанна и дядя Сергей', type: 'name'},
  {id: 'kot', nameStr: 'Дима, Рита и Рома', type: 'name'},
  {id: 'demyanenko', nameStr: 'Маша и Рома', type: 'name'},
  {id: 'savrasevich', nameStr: 'Сергей, Катя, Даша и Женя', type: 'name'},
  {id: 'alexander-anastasiya', nameStr: 'Александр и Анастасия', type: 'name'},
  {id: 'artem-liza', nameStr: 'Артём и Лиза', type: 'name'},
  {id: 'eskerovy', nameStr: 'Дядя Назим, тётя Чинара и Саида', type: 'name'},
  {id: 'nechaevy', nameStr: 'Дядя Юра и тётя Люба', type: 'name'},
]

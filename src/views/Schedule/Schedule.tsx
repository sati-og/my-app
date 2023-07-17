import s from './Schedule.module.scss';
import { YandexMapsIcon } from "../../icons/YandexMapsIcon";

export const Schedule = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.flowersTopImage} src="/images/flowersRight5.jpg" alt=""/>
        <div className={s.title}>
          <span>Программа</span>
        </div>
        <div className={s.grid}>
          <div className={s.text}>
            <span>Сборы жениха</span>
            <span className={s.time}>12:00</span>
            <div className={s.place}>
              <div className={s.address}>
                <YandexMapsIcon />
                <a className={s.link} target='_blank' rel="noreferrer" href="https://yandex.ru/maps/-/CLx6v1C">ул. Мира 20А</a>
              </div>
              <div className={s.placeName}>Royal Hotel Riz</div>
            </div>
          </div>
          <div className={s.text}>
            <span>Утро невесты</span>
            <span className={s.time}>12:30</span>
            <div className={s.place}>
              <div className={s.address}>
                <YandexMapsIcon />
                <a className={s.link} target='_blank' rel="noreferrer" href="https://yandex.ru/maps/-/CLx66pB">ул. Майкопская 273</a>
              </div>
            </div>
          </div>
          <div className={s.text}>
            <span>Регистрация</span>
            <span className={s.time}>16:00</span>
            <div className={s.place}>
              <div className={s.address}>
                <YandexMapsIcon />
                <a className={s.link} target='_blank' rel="noreferrer" href="https://yandex.ru/maps/-/CLx6Nts">ул.Тенистая 30</a>
              </div>
              <div className={s.placeName}>Ресторан Белуга</div>
            </div>
          </div>
          <div className={s.text}>
            <span>Банкет</span>
            <span className={s.time}>17:30</span>
            <div className={s.place}>
              <div className={s.address}>
                <YandexMapsIcon />
                <a className={s.link} target='_blank' rel="noreferrer" href="https://yandex.ru/maps/-/CLx65mq">ул. Ефремова 187</a>
              </div>
              <div className={s.placeName}>Ресторан Крокус</div>
            </div>
          </div>
        </div>
        <div className={s.additionalText}>
          <span>*Если Вы прибудете раньше основной программы, будем рады видеть вас по адресу: <a className={s.link} target='_blank' rel="noreferrer" href="https://yandex.ru/maps/-/CLxbMmS">улица 2я Урицкого, 88</a>.</span>
        </div>
      </div>
    </div>
  )
}

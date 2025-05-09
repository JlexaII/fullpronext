import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="box">
          <div className="left">
            <div className="logo">
              <Image src="/img/logo1.svg" alt="CBD Логотип" width={100} height={50} unoptimized />
              <span>Продукт для жизни</span>
            </div>
            <div className="soc">
              <a href="#">Ok</a>
              <a href="#">VK</a>
              <a href="#">IN</a>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <div className="zag">Информация</div>
              <ul>
                <li><a href="#">Статьи</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Обзоры</a></li>
                <li><a href="#">Форум</a></li>
                <li><a href="#">Доставка</a></li>
                <li><a href="#">Оплата</a></li>
                <li><a href="#">Частные вопросы</a></li>
              </ul>
            </div>
            <div className="item">
              <div className="zag">О нас</div>
              <ul>
                <li><a href="#">Кто мы</a></li>
                <li><a href="#">Отзывы о нас</a></li>
                <li><a href="#">Поддержка</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>
            <div className="item">
              <div className="zag">Каталог</div>
              <ul>
                <li><a href="#">Для просыпания</a></li>
                <li><a href="#">Для тела</a></li>
                <li><a href="#">Для здорового сна</a></li>
                <li><a href="#">Для мозговой активности</a></li>
                <li><a href="#">Для питомцев</a></li>
                <li><a href="#">Для спокойствия</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="copy">
            Copyright © Holland & Barrett Retail Limited, 2025. Все права защищены.
            hollandandbarrett.com — торговая марка Holland & Barrett Retail Limited.
          </div>
          <div className="link">
            <a href="#">Карта сайта</a>
          </div>
          <div className="design">
            <a href="#">
              <span>Разработка проекта <br />Российские информационно-технические системы</span>
              <svg width="63" height="26" viewBox="0 0 63 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M41.8537 25.9997C36.9211 25.9997 34.4206 23.7018 35.1742 19.7235H41.2714C41.1344 20.7181 41.4769 21.2325 42.7443 21.2325H43.7719C44.7996 21.2325 45.2791 20.8896 45.4161 20.2037C45.5532 19.6206 45.2791 19.312 44.4913 19.1062C43.5664 18.9004 41.888 18.4889 40.5863 18.1802C37.435 17.3914 36.2361 15.6766 36.8869 12.3156C37.5035 9.22902 40.004 7.20557 44.594 7.20557H46.204C51.2736 7.20557 53.2261 9.94923 52.541 13.4474H46.478C46.615 12.4185 46.3067 11.9384 45.2791 11.9384H44.5598C43.5322 11.9384 43.0184 12.2813 42.8813 12.9673C42.7443 13.5503 43.0526 13.8932 43.8062 14.0647L47.5741 14.9907C50.8283 15.8138 52.0614 17.5286 51.4106 20.8553C50.8283 23.9762 48.2935 25.9997 43.7034 25.9997H41.8537Z"
                  fill="#848484"
                />
                <path
                  d="M26.2045 4.34619H32.5165L31.8647 7.70732H35.947L34.9178 13.0234H30.8013L29.9094 17.6535C29.5663 19.437 30.3553 20.1229 32.0706 20.1229H33.923L32.8939 25.4733H30.2867C24.9353 25.4733 22.5683 22.7638 23.5631 17.5506L26.2045 4.34619Z"
                  fill="#848484"
                />
                <path
                  d="M13.3911 25.4719L16.8524 7.68962H23.1581L19.7311 25.4719H13.3911ZM17.2294 5.73288L18.326 0H24.666L23.5694 5.73288H17.2294Z"
                  fill="#848484"
                />
                <path
                  d="M14.9729 7.68066L13.8777 13.2793H11.9953C9.97597 13.2793 8.70962 14.4471 8.26468 16.7828L6.5534 25.4727H0.255859L2.24095 15.3402C3.2335 10.3941 6.31382 7.68066 11.8926 7.68066H14.9729Z"
                  fill="#848484"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.578 11.921C60.5567 11.921 62.1608 10.317 62.1608 8.33823C62.1608 6.35951 60.5567 4.75545 58.578 4.75545C56.5993 4.75545 54.9952 6.35951 54.9952 8.33823C54.9952 10.317 56.5993 11.921 58.578 11.921ZM58.578 12.7595C61.0198 12.7595 62.9992 10.78 62.9992 8.33823C62.9992 5.89645 61.0198 3.91699 58.578 3.91699C56.1362 3.91699 54.1567 5.89645 54.1567 8.33823C54.1567 10.78 56.1362 12.7595 58.578 12.7595Z"
                  fill="#848484"
                />
                <path
                  d="M57.7932 6.42866V8.31014H59.111C59.455 8.31014 59.7198 8.22947 59.9055 8.06814C60.0935 7.90453 60.1876 7.67162 60.1876 7.3694C60.1876 7.074 60.0898 6.84336 59.8943 6.67748C59.6988 6.5116 59.4278 6.42866 59.0813 6.42866H57.7932ZM57.7932 8.8555V10.8017H57.125V5.8833H59.1704C59.6877 5.8833 60.101 6.01737 60.4103 6.2855C60.7221 6.55136 60.8781 6.90585 60.8781 7.34895C60.8781 7.69207 60.7828 7.98861 60.5922 8.23856C60.4017 8.48852 60.1381 8.66235 59.8015 8.76006L61.0414 10.8017H60.2581L59.111 8.8555H57.7932Z"
                  fill="#848484"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
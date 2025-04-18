import Image from 'next/image';

export default function Main() {
  return (
    <main>
      <section className="sec-1">
        <div className="wrapper">
          <h1>Поиск по информационной базе статей и каталогу продукции</h1>
          <div className="search">
            <form>
              <input type="text" placeholder="Введите интересующий Вас вопрос" />
              <button type="submit">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4318 0.682648C6.15587 0.682648 1.86354 5.0398 1.86354 10.3954C1.86354 12.7121 2.66712 14.8417 4.00571 16.5129L0 20.5791L1.39978 22L5.40549 17.9338C7.05173 19.2925 9.14956 20.1083 11.4318 20.1083C16.7077 20.1083 21 15.7511 21 10.3954C21 5.0398 16.7077 0.682648 11.4318 0.682648ZM11.4318 18.0987C7.24746 18.0987 3.8432 14.643 3.8432 10.3954C3.8432 6.14788 7.24742 2.69218 11.4318 2.69218C15.6162 2.69218 19.0204 6.14788 19.0204 10.3954C19.0204 14.643 15.6161 18.0987 11.4318 18.0987Z"
                    fill="#AEAEAE"
                  />
                </svg>
              </button>
            </form>
            <div className="search-popup">
              <a href="#" className="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <g clipPath="url(#clip0_570_105)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 15.4541L1.54594 17L8.5 10.0459L15.4541 17L17 15.4541L10.0459 8.5L17 1.54594L15.4541 0L8.5 6.95406L1.54594 0L0 1.54594L6.95406 8.5L0 15.4541Z"
                      fill="#AEAEAE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_570_105">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {[...Array(6)].map((_, index) => (
                <a href="#" className="item" key={index}>
                  <span className="zag">Полезные свойства СBD масло</span>
                  <span className="text">совмещая передовые технологии производства</span>
                </a>
              ))}
              <a href="#" className="btn">Смотреть все</a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <div className="wrapper">
          <div className="box">
            {[
              { img: 'img1.jpg', name: 'Для подъема' },
              { img: 'img2.jpg', name: 'Тело' },
              { img: 'img3.jpg', name: 'Сон' },
              { img: 'img4.jpg', name: 'Разум' },
              { img: 'img5.jpg', name: 'Питомцам' },
              { img: 'img6.jpg', name: 'Спокойствие' },
            ].map((item, index) => (
              <a href="#" className="item" key={index}>
                <span className="img">
                  <Image src={`/img/${item.img}`} alt={item.name} width={150} height={150} unoptimized />
                </span>
                <span className="name">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-3">
        <div className="wrapper">
          <div className="box">
            <div className="title">Статьи</div>
            <a href="#">Все статьи</a>
          </div>
          <div className="teg">
            {['Все', 'Vegan', 'Vitamins & Supplements', 'Food & Drink', 'Beauty', 'Sports Nutrition', 'Weight Management', 'New in'].map((tag, index) => (
              <a href="#" key={index}>{tag}</a>
            ))}
          </div>
          <div className="box">
            {['img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg'].map((img, index) => (
              <a href="#" className="item" key={index}>
                <span className="img">
                  <Image src={`/img/${img}`} alt="Изображение статьи" width={200} height={150} unoptimized />
                </span>
                <span className="box">
                  <span className="name">Поиск по информационной базе статей и каталогу продукции</span>
                  <span className="info">
                    <span className="like">109</span>
                    <span className="comment">52</span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-4">
        <div className="wrapper">
          <div className="box">
            <div className="title">Новости</div>
            <a href="#">Все новости</a>
          </div>
          <div className="box">
            {['img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg'].map((img, index) => (
              <div className="item" key={index}>
                <a href="#" className="img">
                  <Image src={`/img/${img}`} alt="Изображение новости" width={200} height={150} unoptimized />
                </a>
                <a href="#" className="name">Полезные свойства СBD масло</a>
                <div className="text">совмещая передовые технологии производства</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-5">
        <div className="wrapper">
          <div className="box">
            <div className="swiper slider">
              <div className="swiper-wrapper">
                {[...Array(3)].map((_, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="cat">Обзоры</div>
                    <div className="title">Matcha & Green Tea</div>
                    <div className="text">The game-changing supplement for muscle health and recovery</div>
                    <a href="#" className="btn">Читать обзор</a>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="swiper info-slider">
              <div className="swiper-wrapper">
                {[...Array(3)].map((_, index) => (
                  <div className="swiper-slide" key={index}>
                    <span className="name">Matcha & Green Tea</span>
                    <span className="text">The game-changing supplement for muscle health and recovery</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-6">
        <div className="wrapper">
          <div className="title">Популярные товары</div>
          <div className="swiper tovar">
            <div className="swiper-wrapper">
              {['img16.jpg', 'img17.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg', 'img21.jpg', 'img16.jpg', 'img17.jpg'].map((img, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="item">
                    <div className="img">
                      <a href="#">
                        <Image src={`/img/${img}`} alt="Изображение продукта" width={200} height={200} unoptimized />
                      </a>
                      <a href="#" className="like">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 5.0002C8.5005 3.25268 5.99481 2.71262 4.11602 4.31282C2.23723 5.91302 1.97272 8.58846 3.44815 10.481C4.67487 12.0545 8.38733 15.3733 9.60408 16.4475C9.74017 16.5676 9.80825 16.6277 9.88767 16.6513C9.95692 16.6719 10.0327 16.6719 10.1021 16.6513C10.1815 16.6277 10.2495 16.5676 10.3857 16.4475C11.6024 15.3733 15.3148 12.0545 16.5416 10.481C18.017 8.58846 17.7848 5.89619 15.8737 4.31282C13.9626 2.72946 11.4995 3.25268 10 5.0002Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="cat">Питомцам</div>
                    <a href="#" className="name">Full Spectrum Sleep CBN Gummies</a>
                    <div className="box">
                      <div className="price">₽ 220</div>
                      <div className="sale">₽ 280</div>
                    </div>
                    <a href="#" className="btn">Добавить в корзину</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-button-prev">
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_199_449)">
                  <circle cx="30.5" cy="26.5" r="24.5" transform="rotate(-180 30.5 26.5)" fill="white" />
                </g>
                <path d="M34 35L25 26.8864L34 18" stroke="black" strokeWidth="2" />
                <defs>
                  <filter id="filter0_d_199_449" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_199_449" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_199_449" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="swiper-button-next">
              <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_199_443)">
                  <circle cx="30.5" cy="26.5" r="24.5" fill="white" />
                </g>
                <path d="M27 18L36 26.1136L27 35" stroke="black" strokeWidth="2" />
                <defs>
                  <filter id="filter0_d_199_443" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_199_443" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_199_443" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-7">
        <div className="wrapper">
          <div className="box">
            <div className="title">Посты с форума</div>
            <a href="#">Все посты</a>
          </div>
          <div className="box">
            {[...Array(2)].map((_, index) => (
              <div className="item" key={index}>
                <div className="text">
                  В поисках путей решения проблем со здоровьем Рейчел Куинн, наша основательница, открыла для себя КБР, и это был опыт, изменивший ее жизнь, которым она поделилась с другими.
                </div>
                <div className="name">Виктория Ю.</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-8">
        <div className="wrapper">
          <div className="box">
            <div className="title">Реальные отзывы о товарах</div>
            <a href="#">Все отзывы</a>
          </div>
          <div className="box">
            {[...Array(3)].map((_, index) => (
              <div className="item" key={index}>
                <div className="left">
                  <Image src="/img/img22.jpg" alt="Изображение отзыва" width={100} height={100} unoptimized />
                </div>
                <div className="right">
                  <div className="star">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" key={starIndex}>
                        <path
                          d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                          fill={index === 0 && starIndex < 4 ? '#80A9AA' : '#666666'}
                        />
                      </svg>
                    ))}
                  </div>
                  <div className="zag">Full Spectrum Sleep CBN Gummies</div>
                  <div className="text">Full Spectrum Sleep CBN Gummies Full Spectrum Sleep CBN Gummies</div>
                  <a href="#">Читать далее</a>
                  <div className="name">Виктория Ю.</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-9">
        <div className="img"></div>
        <div className="wrapper">
          <div className="box">
            <div className="title">Подписаться на новости</div>
            <form>
              <input type="email" placeholder="Ваш email" />
              <button type="submit">Подписаться</button>
            </form>
          </div>
        </div>
      </section>
      <div className="popup-fade">
        <div className="popup">
          <a href="#" className="popup-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <g clipPath="url(#clip0_255_1873)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 15.4541L1.54594 17L8.5 10.0459L15.4541 17L17 15.4541L10.0459 8.5L17 1.54594L15.4541 0L8.5 6.95406L1.54594 0L0 1.54594L6.95406 8.5L0 15.4541Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_255_1873">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <div className="title">Войти в личный кабинет</div>
          <form>
            <div className="item">
              <label htmlFor="name">Ваш email</label>
              <input type="text" name="name" id="name" placeholder="Представьтесь" />
            </div>
            <div className="item">
              <label htmlFor="pass">Пароль</label>
              <input type="password" name="name" id="pass" placeholder="Ваш пароль" />
            </div>
            <div className="box">
              <a href="#">Забыли пароль?</a>
              <a href="#" className="popup-open-reg">Регистрация</a>
            </div>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
      <div className="popup-fade-reg">
        <div className="popup">
          <a href="#" className="popup-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <g clipPath="url(#clip0_255_1873)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 15.4541L1.54594 17L8.5 10.0459L15.4541 17L17 15.4541L10.0459 8.5L17 1.54594L15.4541 0L8.5 6.95406L1.54594 0L0 1.54594L6.95406 8.5L0 15.4541Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_255_1873">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <div className="title">Регистрация</div>
          <form>
            <div className="item">
              <label htmlFor="mal">Ваш email</label>
              <input type="email" name="name" id="mal" placeholder="Введите e-mail" />
            </div>
            <div className="item">
              <label htmlFor="pass1">Придумайте пароль</label>
              <input type="password" name="name" id="pass1" placeholder="Ваш пароль" />
            </div>
            <div className="box">
              <a href="#" className="popup-open">Уже зарегистрированы?</a>
            </div>
            <button type="submit">Регистрируюсь</button>
          </form>
        </div>
      </div>
      <div className="tg">
        <a href="#" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M25.8312 4.64625L3.66875 13.1925C2.15625 13.8 2.165 14.6438 3.39125 15.02L9.16625 16.41L22.2037 8.17625C22.8312 7.7925 23.3912 7.995 22.9362 8.43L12.6062 18.15L12.6112 18.1537L12.1887 24.5287C12.7912 24.5287 13.0512 24.2675 13.3912 23.9325L16.3875 20.9962L22.2225 25.1287C23.2975 25.73 24.2225 25.42 24.5287 24.1237L27.6662 6.65625C27.8725 5.595 27.1537 4.9875 25.8312 4.64625Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </main>
  );
}
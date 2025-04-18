import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="info-dostavka">
        <a href="#" className="close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_199_69)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.09125L1.09125 0L6 4.90875L10.9088 0L12 1.09125L7.09125 6L12 10.9087L10.9088 12L6 7.09125L1.09125 12L0 10.9087L4.90875 6L0 1.09125Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_199_69">
                <rect width="12" height="12" fill="white" transform="matrix(1 0 0 -1 0 12)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <div className="text">Бесплатная доставка от 5 900 рублей</div>
      </div>
      <header>
        <div className="wrapper">
          <div className="box">
            <button type="button" className="burger">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="soc">
              <a href="#">OK</a>
              <a href="#">VK</a>
              <a href="#">IN</a>
            </div>
            <div className="logo">
              <Link href="/">
                <Image src="/img/logo.svg" alt="CBD Логотип" width={100} height={50} unoptimized />
                <span>Продукт для жизни</span>
              </Link>
            </div>
            <div className="right">
              <a href="#" className="popup-open">
                <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5073 7.8405V5.52543C10.5073 2.95583 8.48195 0.871063 6 0.871063C3.51805 0.871063 1.49268 2.95583 1.49268 5.52543V7.8405H0V16.3856H12V7.8405H10.5073ZM3.01463 5.52543C3.01463 3.81035 4.34341 2.42252 6 2.42252C7.65659 2.42252 8.98537 3.81035 8.98537 5.52543V7.8405H3.01463V5.52543Z"
                    fill="white"
                  />
                </svg>
                <span>Войти</span>
              </a>
              <span></span>
              <a href="#">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.73672 2.29265C1.85121 1.96702 2.208 1.79585 2.53364 1.91034L2.78481 1.99864C3.29858 2.17925 3.73495 2.33265 4.07834 2.50115C4.44554 2.68131 4.76041 2.90326 4.99723 3.24981C5.23221 3.59368 5.32923 3.97095 5.374 4.3846C5.39404 4.56976 5.40462 4.77471 5.41019 4.99999H14.2753C15.6795 4.99999 16.9435 4.99999 17.3134 5.48089C17.6834 5.9618 17.5388 6.6864 17.2495 8.13561L16.833 10.1562C16.5704 11.4303 16.4391 12.0673 15.9793 12.442C15.5196 12.8167 14.8692 12.8167 13.5683 12.8167H9.14925C6.82515 12.8167 5.66311 12.8167 4.94111 12.0552C4.2191 11.2936 4.16641 10.4847 4.16641 8.03332V5.86525C4.16641 5.24863 4.16556 4.83595 4.13126 4.51911C4.09849 4.21632 4.0404 4.06514 3.96519 3.95506C3.8918 3.84768 3.78041 3.74732 3.52772 3.62334C3.25869 3.49133 2.89306 3.3617 2.33672 3.1661L2.11904 3.08957C1.7934 2.97509 1.62224 2.6183 1.73672 2.29265Z"
                    fill="white"
                  />
                  <path
                    d="M6.25 15C6.94036 15 7.5 15.5597 7.5 16.25C7.5 16.9403 6.94036 17.5 6.25 17.5C5.55964 17.5 5 16.9403 5 16.25C5 15.5597 5.55964 15 6.25 15Z"
                    fill="white"
                  />
                  <path
                    d="M13.75 15.0001C14.4403 15.0001 15 15.5597 15 16.2501C15 16.9404 14.4403 17.5001 13.75 17.5001C13.0597 17.5001 12.5 16.9404 12.5 16.2501C12.5 15.5597 13.0597 15.0001 13.75 15.0001Z"
                    fill="white"
                  />
                </svg>
                <span>Корзина</span>
              </a>
            </div>
          </div>
          <div className="menu">
            <ul>
              <li><Link href="/">Главная</Link></li>
              <li><Link href="/articles">Статьи</Link></li>
              <li><Link href="/news">Новости</Link></li>
              <li><Link href="/products">Продукты</Link></li>
              <li><Link href="/reviews">Обзоры</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
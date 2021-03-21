import * as React from "react"
import { Link } from "gatsby"
import "./../styles/header.sass";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="header__logo">
            <Link to="/" className="logo__link">
              <svg width="215" height="60" viewBox="0 0 215 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.492 37.8959C22.932 38.3519 24.06 39.1199 24.876 40.1999C25.692 41.2559 26.1 42.5639 26.1 44.1239C26.1 46.3319 25.236 48.0359 23.508 49.2359C21.804 50.4119 19.308 50.9999 16.02 50.9999H2.988V25.7999H15.3C18.372 25.7999 20.724 26.3879 22.356 27.5639C24.012 28.7399 24.84 30.3359 24.84 32.3519C24.84 33.5759 24.54 34.6679 23.94 35.6279C23.364 36.5879 22.548 37.3439 21.492 37.8959ZM8.784 30.1919V36.1319H14.58C16.02 36.1319 17.112 35.8799 17.856 35.3759C18.6 34.8719 18.972 34.1279 18.972 33.1439C18.972 32.1599 18.6 31.4279 17.856 30.9479C17.112 30.4439 16.02 30.1919 14.58 30.1919H8.784ZM15.588 46.6079C17.124 46.6079 18.276 46.3559 19.044 45.8519C19.836 45.3479 20.232 44.5679 20.232 43.5119C20.232 41.4239 18.684 40.3799 15.588 40.3799H8.784V46.6079H15.588ZM46.3193 51.4319C43.7033 51.4319 41.3393 50.8679 39.2273 49.7399C37.1393 48.6119 35.4953 47.0639 34.2953 45.0959C33.1193 43.1039 32.5313 40.8719 32.5313 38.3999C32.5313 35.9279 33.1193 33.7079 34.2953 31.7399C35.4953 29.7479 37.1393 28.1879 39.2273 27.0599C41.3393 25.9319 43.7033 25.3679 46.3193 25.3679C48.9353 25.3679 51.2873 25.9319 53.3753 27.0599C55.4633 28.1879 57.1073 29.7479 58.3073 31.7399C59.5073 33.7079 60.1073 35.9279 60.1073 38.3999C60.1073 40.8719 59.5073 43.1039 58.3073 45.0959C57.1073 47.0639 55.4633 48.6119 53.3753 49.7399C51.2873 50.8679 48.9353 51.4319 46.3193 51.4319ZM46.3193 46.4639C47.8073 46.4639 49.1513 46.1279 50.3513 45.4559C51.5513 44.7599 52.4873 43.7999 53.1593 42.5759C53.8553 41.3519 54.2033 39.9599 54.2033 38.3999C54.2033 36.8399 53.8553 35.4479 53.1593 34.2239C52.4873 32.9999 51.5513 32.0519 50.3513 31.3799C49.1513 30.6839 47.8073 30.3359 46.3193 30.3359C44.8313 30.3359 43.4873 30.6839 42.2873 31.3799C41.0873 32.0519 40.1393 32.9999 39.4433 34.2239C38.7713 35.4479 38.4353 36.8399 38.4353 38.3999C38.4353 39.9599 38.7713 41.3519 39.4433 42.5759C40.1393 43.7999 41.0873 44.7599 42.2873 45.4559C43.4873 46.1279 44.8313 46.4639 46.3193 46.4639ZM84.1463 50.9999L79.2863 43.9799H78.9983H73.9223V50.9999H68.0903V25.7999H78.9983C81.2303 25.7999 83.1623 26.1719 84.7943 26.9159C86.4503 27.6599 87.7223 28.7159 88.6103 30.0839C89.4983 31.4519 89.9423 33.0719 89.9423 34.9439C89.9423 36.8159 89.4863 38.4359 88.5743 39.8039C87.6863 41.1479 86.4143 42.1799 84.7583 42.8999L90.4103 50.9999H84.1463ZM84.0383 34.9439C84.0383 33.5279 83.5823 32.4479 82.6703 31.7039C81.7583 30.9359 80.4263 30.5519 78.6743 30.5519H73.9223V39.3359H78.6743C80.4263 39.3359 81.7583 38.9519 82.6703 38.1839C83.5823 37.4159 84.0383 36.3359 84.0383 34.9439ZM139.549 25.7999H150.997C153.733 25.7999 156.145 26.3279 158.233 27.3839C160.345 28.4159 161.977 29.8799 163.129 31.7759C164.305 33.6719 164.893 35.8799 164.893 38.3999C164.893 40.9199 164.305 43.1279 163.129 45.0239C161.977 46.9199 160.345 48.3959 158.233 49.4519C156.145 50.4839 153.733 50.9999 150.997 50.9999H139.549V25.7999ZM150.709 46.2119C153.229 46.2119 155.233 45.5159 156.721 44.1239C158.233 42.7079 158.989 40.7999 158.989 38.3999C158.989 35.9999 158.233 34.1039 156.721 32.7119C155.233 31.2959 153.229 30.5879 150.709 30.5879H145.381V46.2119H150.709ZM172.891 25.7999H178.723V50.9999H172.891V25.7999ZM211.416 25.7999V50.9999H206.628L194.064 35.6999V50.9999H188.304V25.7999H193.128L205.656 41.0999V25.7999H211.416Z" fill="white"/>
                <path d="M3.316 4.19994H7.6C8.64533 4.19994 9.574 4.40527 10.386 4.81594C11.198 5.21727 11.828 5.79127 12.276 6.53794C12.724 7.27527 12.948 8.12927 12.948 9.09994C12.948 10.0706 12.724 10.9293 12.276 11.6759C11.828 12.4133 11.198 12.9873 10.386 13.3979C9.574 13.7993 8.64533 13.9999 7.6 13.9999H3.316V4.19994ZM7.516 12.4599C8.23467 12.4599 8.86467 12.3246 9.406 12.0539C9.95667 11.7739 10.3767 11.3819 10.666 10.8779C10.9647 10.3646 11.114 9.77194 11.114 9.09994C11.114 8.42794 10.9647 7.83994 10.666 7.33594C10.3767 6.82261 9.95667 6.43061 9.406 6.15994C8.86467 5.87994 8.23467 5.73994 7.516 5.73994H5.136V12.4599H7.516ZM38.5844 13.9999L38.5704 7.50394L35.3504 12.8799H34.5384L31.3184 7.58794V13.9999H29.5824V4.19994H31.0804L34.9724 10.6959L38.7944 4.19994H40.2924L40.3064 13.9999H38.5844ZM57.6535 4.19994H59.4735V13.9999H57.6535V4.19994ZM78.8122 5.73994H75.5642V4.19994H83.8802V5.73994H80.6322V13.9999H78.8122V5.73994ZM106.358 13.9999L104.356 11.1299C104.272 11.1393 104.146 11.1439 103.978 11.1439H101.766V13.9999H99.9461V4.19994H103.978C104.827 4.19994 105.565 4.33994 106.19 4.61994C106.825 4.89994 107.31 5.30127 107.646 5.82394C107.982 6.34661 108.15 6.96727 108.15 7.68594C108.15 8.42327 107.968 9.05794 107.604 9.58994C107.249 10.1219 106.736 10.5186 106.064 10.7799L108.318 13.9999H106.358ZM106.316 7.68594C106.316 7.06061 106.111 6.57994 105.7 6.24394C105.289 5.90794 104.687 5.73994 103.894 5.73994H101.766V9.64594H103.894C104.687 9.64594 105.289 9.47794 105.7 9.14194C106.111 8.79661 106.316 8.31127 106.316 7.68594ZM128.978 10.5419V13.9999H127.158V10.5699L123.308 4.19994H125.254L128.124 8.97394L131.022 4.19994H132.814L128.978 10.5419Z" fill="white"/>
                <path d="M124.448 48.3676C124.169 48.3676 123.889 48.2619 123.67 48.0579C123.217 47.6273 123.194 46.9097 123.625 46.4564L130.189 39.4991L123.625 32.5418C123.194 32.0885 123.217 31.3709 123.67 30.9403C124.123 30.5097 124.841 30.5324 125.271 30.9856L132.576 38.721C132.992 39.1592 132.992 39.839 132.576 40.2772L125.271 48.0126C125.045 48.2467 124.743 48.3676 124.448 48.3676Z" fill="url(#paint0_linear)"/>
                <path d="M106.44 48.3676C106.138 48.3676 105.835 48.2467 105.616 48.0126L98.3116 40.2772C97.8961 39.839 97.8961 39.1592 98.3116 38.721L105.616 30.9856C106.047 30.5324 106.765 30.5097 107.218 30.9403C107.671 31.3709 107.694 32.0885 107.263 32.5418L100.691 39.4991L107.256 46.4564C107.686 46.9097 107.664 47.6273 107.21 48.0579C106.991 48.2619 106.712 48.3676 106.44 48.3676Z" fill="url(#paint1_linear)"/>
                <path d="M113.71 52.0011C113.65 52.0011 113.597 51.9936 113.537 51.986C112.917 51.8878 112.494 51.3137 112.585 50.6943L116.06 27.964C116.158 27.3445 116.732 26.9215 117.351 27.0122C117.971 27.1104 118.394 27.6845 118.303 28.3039L114.828 51.0342C114.745 51.6007 114.262 52.0011 113.71 52.0011Z" fill="url(#paint2_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="123.315" y1="30.631" x2="133.616" y2="31.1377" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE9417"/>
                <stop offset="1" stop-color="#F56233"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="98" y1="30.631" x2="108.3" y2="31.1377" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE9417"/>
                <stop offset="1" stop-color="#F56233"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="112.573" y1="26.9999" x2="118.764" y2="27.1296" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE9417"/>
                <stop offset="1" stop-color="#F56233"/>
                </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="header-info">
            <h1 className="header-info__title">
              Веб-дизайн и разработка <br/>
              для бизнеса
            </h1>
            <div className="header-info__separator"></div>
            <p className="header-info__description">
              Качественно выполню работы по дизайну и разработке сайта, <br/>
              интернет-магазина или веб-приложения от вашей идеи до готового результата.
            </p>
          </div>
          <div className="header-buttons">
            <div className="header-buttons__about">
              <div className="header-buttons__title">
                Узнать обо мне
              </div>
              <div className="header-buttons__icon">
                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 11.2858V1.00009M9 7.28581L5 11.2858L9 7.28581ZM5 11.2858L1 7.28581L5 11.2858Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <a href="#portfolio" className="header-buttons__portfolio">
              <div className="header-buttons__title">
                Смотреть портфолио
              </div>
              <div className="header-buttons__icon">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4784 5.25866C14.817 5.70152 14.817 6.29938 14.4784 6.74152C13.412 8.13366 10.8534 11.0001 7.86629 11.0001C4.87915 11.0001 2.32057 8.13366 1.25415 6.74152C1.08942 6.52947 1 6.2686 1 6.00009C1 5.73158 1.08942 5.47071 1.25415 5.25866C2.32057 3.86652 4.87915 1.00009 7.86629 1.00009C10.8534 1.00009 13.412 3.86652 14.4784 5.25866V5.25866Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.86628 8.14295C9.04974 8.14295 10.0091 7.18356 10.0091 6.00009C10.0091 4.81662 9.04974 3.85723 7.86628 3.85723C6.68281 3.85723 5.72342 4.81662 5.72342 6.00009C5.72342 7.18356 6.68281 8.14295 7.86628 8.14295Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
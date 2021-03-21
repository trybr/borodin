import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const FooterContacts = () => {


  const { allContentfulContacts } = useStaticQuery(
    graphql`
        query {
          allContentfulContacts {
            nodes {
              phone
              email
              whatsapp
              vk
              telegram
            }
          }
        }
    `
  )
  
  const phone = allContentfulContacts.nodes[0].phone ? allContentfulContacts.nodes[0].phone : "",
        email = allContentfulContacts.nodes[0].email ? allContentfulContacts.nodes[0].email : "",
        whatsapp = allContentfulContacts.nodes[0].whatsapp ? allContentfulContacts.nodes[0].whatsapp : "",
        telegram = allContentfulContacts.nodes[0].telegram ? allContentfulContacts.nodes[0].telegram : "",
        vk = allContentfulContacts.nodes[0].vk ? allContentfulContacts.nodes[0].vk : "";

  return (
    <>
    <div className="footer-contacts-item">
        <div className="footer-contacts-item__title">Телефон:</div>
        <a href={`tel: ${phone}`} className="footer-contacts-item__value">{phone}</a>
    </div>
    <div className="footer-contacts-item">
        <div className="footer-contacts-item__title">Почта:</div>
        <a href={`mailto: ${email}`} className="footer-contacts-item__value">{email}</a>
    </div>
    <div className="footer-contacts-item">
        <div className="footer-contacts-item__title">Соц. сети:</div>
        <div className="footer-social">
            <a href={telegram} target="_blank" 
 rel="noreferrer" className="footer-social__item" aria-label="tg">
                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.0285 18.9947C36.0285 23.7724 34.1306 28.3544 30.7523 31.7328C27.374 35.1111 22.792 37.009 18.0143 37.009C13.2366 37.009 8.65459 35.1111 5.27626 31.7328C1.89793 28.3544 0 23.7724 0 18.9947C0 14.2171 1.89793 9.63506 5.27626 6.25673C8.65459 2.8784 13.2366 0.980469 18.0143 0.980469C22.792 0.980469 27.374 2.8784 30.7523 6.25673C34.1306 9.63506 36.0285 14.2171 36.0285 18.9947ZM18.6605 14.2795C16.9086 15.0091 13.4049 16.5178 8.15371 18.8056C7.30254 19.1434 6.85443 19.4766 6.8139 19.8009C6.74635 20.3481 7.43314 20.5642 8.36763 20.8592L8.76169 20.9831C9.68042 21.2826 10.9189 21.6316 11.5607 21.6451C12.1461 21.6586 12.7969 21.4199 13.5152 20.9245C18.4218 17.6121 20.9551 15.9391 21.1127 15.903C21.2253 15.876 21.3829 15.8445 21.4865 15.9391C21.5924 16.0314 21.5811 16.2093 21.5698 16.2566C21.5023 16.5471 18.8069 19.051 17.413 20.3481C16.9785 20.7534 16.67 21.0394 16.6069 21.1047C16.4681 21.2466 16.3269 21.3862 16.1836 21.5235C15.3279 22.3476 14.6884 22.9646 16.2174 23.9734C16.9537 24.4598 17.5436 24.8584 18.1314 25.2592C18.7709 25.6961 19.4104 26.1306 20.239 26.6756C20.4485 26.8107 20.6511 26.957 20.847 27.0967C21.5924 27.6281 22.2656 28.1055 23.092 28.0289C23.5739 27.9839 24.0716 27.5335 24.3238 26.1824C24.9205 22.9917 26.0937 16.0809 26.3639 13.2324C26.3804 12.9956 26.3706 12.7577 26.3346 12.5231C26.3134 12.3338 26.2218 12.1594 26.0779 12.0345C25.873 11.893 25.6288 11.8198 25.3799 11.8251C24.7043 11.8363 23.6617 12.1989 18.6605 14.2795Z" fill="white"/>
                </svg>
            </a>
            <a href={whatsapp} target="_blank" 
 rel="noreferrer" className="footer-social__item" aria-label="wa">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.7675 9.2889C28.3781 0.980194 17.3747 -1.48996 8.8414 3.67491C0.532695 8.83978 -2.16202 20.0678 3.22741 28.3765L3.67653 29.0501L1.88005 35.7869L8.61684 33.9905L9.29052 34.4396C12.2098 36.0115 15.3536 36.9097 18.4975 36.9097C21.8659 36.9097 25.2343 36.0115 28.1535 34.215C36.4622 28.8256 38.9324 17.8222 33.7675 9.2889ZM29.0518 26.58C28.1535 27.9273 27.0307 28.8256 25.4588 29.0501C24.5606 29.0501 23.4378 29.4993 18.9466 27.7028C15.1291 25.9063 11.9852 22.987 9.73964 19.6186C8.39228 18.0467 7.7186 16.0257 7.49404 14.0047C7.49404 12.2082 8.16772 10.6363 9.29052 9.51346C9.73964 9.06434 10.1888 8.83978 10.6379 8.83978H11.7607C12.2098 8.83978 12.6589 8.83978 12.8835 9.73802C13.3326 10.8608 14.4554 13.5555 14.4554 13.7801C14.6799 14.0047 14.6799 14.4538 14.4554 14.6783C14.6799 15.1275 14.4554 15.5766 14.2308 15.8011C14.0063 16.0257 13.7817 16.4748 13.5572 16.6994C13.108 16.9239 12.8835 17.373 13.108 17.8222C14.0063 19.1695 15.1291 20.5169 16.2519 21.6397C17.5992 22.7625 18.9466 23.6607 20.5185 24.3344C20.9676 24.559 21.4167 24.559 21.6413 24.1098C21.8659 23.6607 22.9887 22.5379 23.4378 22.0888C23.8869 21.6397 24.1115 21.6397 24.5606 21.8642L28.1535 23.6607C28.6026 23.8853 29.0518 24.1098 29.2763 24.3344C29.5009 25.0081 29.5009 25.9063 29.0518 26.58Z" fill="white"/>
                </svg>
            </a>
            <a href={vk} target="_blank" 
 rel="noreferrer" className="footer-social__item" aria-label="vk">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.012 0.00878906C8.06412 0.00878906 0 8.0729 0 18.0208C0 27.9686 8.06412 36.0328 18.012 36.0328C27.9599 36.0328 36.024 27.9686 36.024 18.0208C36.024 8.0729 27.9599 0.00878906 18.012 0.00878906ZM24.9391 20.3304C24.9391 20.3304 26.532 21.9027 26.9242 22.6326C26.9354 22.6476 26.941 22.6626 26.9448 22.6701C27.1043 22.9384 27.1418 23.1467 27.063 23.3024C26.9317 23.5613 26.4814 23.6889 26.3275 23.7002H23.5131C23.318 23.7002 22.909 23.6495 22.4137 23.308C22.0328 23.0416 21.6575 22.6044 21.2917 22.1785C20.7457 21.5444 20.2729 20.9965 19.7963 20.9965C19.7358 20.9964 19.6756 21.0059 19.6181 21.0246C19.2578 21.141 18.7963 21.6551 18.7963 23.0247C18.7963 23.4525 18.4585 23.6983 18.2202 23.6983H16.9313C16.4922 23.6983 14.2051 23.5444 12.1787 21.4074C9.69833 18.79 7.46559 13.5403 7.44683 13.4915C7.30611 13.1519 7.59693 12.9699 7.91401 12.9699H10.7565C11.1355 12.9699 11.2594 13.2007 11.3457 13.4052C11.447 13.6435 11.8185 14.591 12.4283 15.6567C13.4171 17.3941 14.0231 18.0996 14.509 18.0996C14.6001 18.0985 14.6896 18.0753 14.7698 18.032C15.404 17.6793 15.2858 15.4184 15.2577 14.9494C15.2577 14.8612 15.2558 13.9381 14.9312 13.4953C14.6985 13.1744 14.3026 13.0525 14.0625 13.0074C14.1597 12.8733 14.2878 12.7645 14.4359 12.6904C14.8711 12.4727 15.6554 12.4408 16.4341 12.4408H16.8675C17.7118 12.4521 17.9294 12.5065 18.2353 12.5834C18.8544 12.7316 18.8676 13.1313 18.8131 14.4991C18.7963 14.8874 18.7794 15.3265 18.7794 15.8443C18.7794 15.9569 18.7737 16.077 18.7737 16.2046C18.755 16.9007 18.7325 17.6906 19.224 18.0151C19.2882 18.0553 19.3623 18.0768 19.4379 18.0771C19.6087 18.0771 20.1228 18.0771 21.5149 15.6886C21.9443 14.9198 22.3174 14.1209 22.6313 13.2983C22.6595 13.2495 22.742 13.0994 22.8396 13.0412C22.9116 13.0045 22.9914 12.9858 23.0722 12.9868H26.4138C26.7778 12.9868 27.0274 13.0412 27.0743 13.1819C27.1568 13.4052 27.0593 14.0863 25.5339 16.152L24.8528 17.0508C23.47 18.8632 23.47 18.9551 24.9391 20.3304Z" fill="white"/>
                </svg>
            </a>
        </div>
    </div>
    </>
  );
};

export default FooterContacts
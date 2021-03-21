import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const MenuSocial = () => {


  const { allContentfulContacts } = useStaticQuery(
    graphql`
        query {
          allContentfulContacts {
            nodes {
              whatsapp
              vk
              telegram
            }
          }
        }
    `
  )
  
  const whatsapp = allContentfulContacts.nodes[0].whatsapp ? allContentfulContacts.nodes[0].whatsapp : "",
        telegram = allContentfulContacts.nodes[0].telegram ? allContentfulContacts.nodes[0].telegram : "",
        vk = allContentfulContacts.nodes[0].vk ? allContentfulContacts.nodes[0].vk : "";

  return (
    <>
    <a href={telegram} target="_blank" 
 rel="noreferrer"className="header-social__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20V20ZM20.7175 14.765C18.7725 15.575 14.8825 17.25 9.0525 19.79C8.1075 20.165 7.61 20.535 7.565 20.895C7.49 21.5025 8.2525 21.7425 9.29 22.07L9.7275 22.2075C10.7475 22.54 12.1225 22.9275 12.835 22.9425C13.485 22.9575 14.2075 22.6925 15.005 22.1425C20.4525 18.465 23.265 16.6075 23.44 16.5675C23.565 16.5375 23.74 16.5025 23.855 16.6075C23.9725 16.71 23.96 16.9075 23.9475 16.96C23.8725 17.2825 20.88 20.0625 19.3325 21.5025C18.85 21.9525 18.5075 22.27 18.4375 22.3425C18.2834 22.5 18.1267 22.6551 17.9675 22.8075C17.0175 23.7225 16.3075 24.4075 18.005 25.5275C18.8225 26.0675 19.4775 26.51 20.13 26.955C20.84 27.44 21.55 27.9225 22.47 28.5275C22.7025 28.6775 22.9275 28.84 23.145 28.995C23.9725 29.585 24.72 30.115 25.6375 30.03C26.1725 29.98 26.725 29.48 27.005 27.98C27.6675 24.4375 28.97 16.765 29.27 13.6025C29.2883 13.3396 29.2774 13.0755 29.2375 12.815C29.214 12.6048 29.1122 12.4111 28.9525 12.2725C28.725 12.1155 28.4538 12.0341 28.1775 12.04C27.4275 12.0525 26.27 12.455 20.7175 14.765V14.765Z" fill="white"/>
        </svg>
    </a>
    <a href={whatsapp} target="_blank" 
 rel="noreferrer"className="header-social__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.0085 9.24976C31.025 -0.000305774 18.8087 -2.75033 9.33481 2.99972C0.110229 8.74976 -2.88153 21.2499 3.10199 30.4999L3.60061 31.2499L1.60611 38.75L9.0855 36.75L9.83344 37.25C13.0745 39 16.5649 40 20.0553 40C23.795 40 27.5347 39 30.7757 37C40.0003 30.9999 42.7427 18.7498 37.0085 9.24976V9.24976ZM31.773 28.4999C30.7757 29.9999 29.5292 30.9999 27.784 31.2499C26.7867 31.2499 25.5402 31.7499 20.5539 29.7499C16.3156 27.7499 12.8252 24.4999 10.3321 20.7499C8.83618 18.9998 8.08824 16.7498 7.83893 14.4998C7.83893 12.4998 8.58687 10.7498 9.83344 9.49977C10.3321 8.99976 10.8307 8.74976 11.3293 8.74976H12.5759C13.0745 8.74976 13.5731 8.74976 13.8224 9.74977C14.3211 10.9998 15.5676 13.9998 15.5676 14.2498C15.8169 14.4998 15.8169 14.9998 15.5676 15.2498C15.8169 15.7498 15.5676 16.2498 15.3183 16.4998C15.069 16.7498 14.8197 17.2498 14.5704 17.4998C14.0718 17.7498 13.8224 18.2498 14.0718 18.7498C15.069 20.2498 16.3156 21.7499 17.5621 22.9999C19.058 24.2499 20.5539 25.2499 22.2991 25.9999C22.7977 26.2499 23.2963 26.2499 23.5456 25.7499C23.795 25.2499 25.0415 23.9999 25.5402 23.4999C26.0388 22.9999 26.2881 22.9999 26.7867 23.2499L30.7757 25.2499C31.2744 25.4999 31.773 25.7499 32.0223 25.9999C32.2716 26.7499 32.2716 27.7499 31.773 28.4999V28.4999Z" fill="white"/>
        </svg>
    </a>
    <a href={vk} target="_blank" 
 rel="noreferrer"className="header-social__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C8.95417 0 0 8.95417 0 20C0 31.0458 8.95417 40 20 40C31.0458 40 40 31.0458 40 20C40 8.95417 31.0458 0 20 0ZM27.6917 22.5646C27.6917 22.5646 29.4604 24.3104 29.8958 25.1208C29.9083 25.1375 29.9146 25.1542 29.9187 25.1625C30.0958 25.4604 30.1375 25.6917 30.05 25.8646C29.9042 26.1521 29.4042 26.2938 29.2333 26.3063H26.1083C25.8917 26.3063 25.4375 26.25 24.8875 25.8708C24.4646 25.575 24.0479 25.0896 23.6417 24.6167C23.0354 23.9125 22.5104 23.3042 21.9813 23.3042C21.914 23.3041 21.8472 23.3146 21.7833 23.3354C21.3833 23.4646 20.8708 24.0354 20.8708 25.5562C20.8708 26.0312 20.4958 26.3042 20.2313 26.3042H18.8C18.3125 26.3042 15.7729 26.1333 13.5229 23.7604C10.7687 20.8542 8.28958 15.025 8.26875 14.9708C8.1125 14.5937 8.43542 14.3917 8.7875 14.3917H11.9437C12.3646 14.3917 12.5021 14.6479 12.5979 14.875C12.7104 15.1396 13.1229 16.1917 13.8 17.375C14.8979 19.3042 15.5708 20.0875 16.1104 20.0875C16.2116 20.0863 16.311 20.0606 16.4 20.0125C17.1042 19.6208 16.9729 17.1104 16.9417 16.5896C16.9417 16.4917 16.9396 15.4667 16.5792 14.975C16.3208 14.6187 15.8812 14.4833 15.6146 14.4333C15.7225 14.2844 15.8647 14.1636 16.0292 14.0812C16.5125 13.8396 17.3833 13.8042 18.2479 13.8042H18.7292C19.6667 13.8167 19.9083 13.8771 20.2479 13.9625C20.9354 14.1271 20.95 14.5708 20.8896 16.0896C20.8708 16.5208 20.8521 17.0083 20.8521 17.5833C20.8521 17.7083 20.8458 17.8417 20.8458 17.9833C20.825 18.7562 20.8 19.6333 21.3458 19.9937C21.417 20.0384 21.4993 20.0622 21.5833 20.0625C21.7729 20.0625 22.3437 20.0625 23.8896 17.4104C24.3663 16.5568 24.7806 15.6697 25.1292 14.7562C25.1604 14.7021 25.2521 14.5354 25.3604 14.4708C25.4404 14.4301 25.529 14.4093 25.6187 14.4104H29.3292C29.7333 14.4104 30.0104 14.4708 30.0625 14.6271C30.1542 14.875 30.0458 15.6312 28.3521 17.925L27.5958 18.9229C26.0604 20.9354 26.0604 21.0375 27.6917 22.5646V22.5646Z" fill="white"/>
        </svg>
    </a>
    <a href="#" className="menu-social__item">
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 15C31 18.9782 29.367 22.7936 26.4602 25.6066C23.5533 28.4196 19.6109 30 15.5 30C11.3891 30 7.44666 28.4196 4.53985 25.6066C1.63303 22.7936 0 18.9782 0 15C0 11.0218 1.63303 7.20644 4.53985 4.3934C7.44666 1.58035 11.3891 0 15.5 0C19.6109 0 23.5533 1.58035 26.4602 4.3934C29.367 7.20644 31 11.0218 31 15V15ZM16.0561 11.0738C14.5487 11.6813 11.5339 12.9375 7.01569 14.8425C6.28331 15.1237 5.89775 15.4012 5.86288 15.6712C5.80475 16.1269 6.39569 16.3069 7.19975 16.5525L7.53881 16.6556C8.32931 16.905 9.39494 17.1956 9.94712 17.2069C10.4509 17.2181 11.0108 17.0194 11.6289 16.6069C15.8507 13.8488 18.0304 12.4556 18.166 12.4256C18.2629 12.4031 18.3985 12.3769 18.4876 12.4556C18.5787 12.5325 18.569 12.6806 18.5593 12.72C18.5012 12.9619 16.182 15.0469 14.9827 16.1269C14.6087 16.4644 14.3433 16.7025 14.2891 16.7569C14.1696 16.875 14.0482 16.9913 13.9248 17.1056C13.1886 17.7919 12.6383 18.3056 13.9539 19.1456C14.5874 19.5506 15.0951 19.8825 15.6008 20.2162C16.151 20.58 16.7012 20.9419 17.4142 21.3956C17.5944 21.5081 17.7688 21.63 17.9374 21.7462C18.5787 22.1887 19.158 22.5863 19.8691 22.5225C20.2837 22.485 20.7119 22.11 20.9289 20.985C21.4423 18.3281 22.4518 12.5737 22.6843 10.2019C22.6984 10.0047 22.69 9.80662 22.6591 9.61125C22.6408 9.4536 22.562 9.30836 22.4382 9.20437C22.2619 9.08661 22.0517 9.02559 21.8376 9.03C21.2563 9.03937 20.3592 9.34125 16.0561 11.0738V11.0738Z" fill="white"/>
        </svg>
    </a>
    <a href="#" className="menu-social__item">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.7564 6.93732C23.2688 -0.000229331 14.1065 -2.06274 7.00111 2.24979C0.0826717 6.56232 -2.16114 15.9374 2.32649 22.8749L2.70046 23.4374L1.20458 29.0625L6.81412 27.5625L7.37508 27.9375C9.80588 29.25 12.4237 30 15.0415 30C17.8462 30 20.651 29.25 23.0818 27.75C30.0002 23.2499 32.0571 14.0624 27.7564 6.93732V6.93732ZM23.8297 21.3749C23.0818 22.4999 22.1469 23.2499 20.838 23.4374C20.09 23.4374 19.1551 23.8125 15.4154 22.3124C12.2367 20.8124 9.61889 18.3749 7.74905 15.5624C6.62714 14.2499 6.06618 12.5624 5.8792 10.8749C5.8792 9.37484 6.44015 8.06233 7.37508 7.12483C7.74905 6.74982 8.12302 6.56232 8.49699 6.56232H9.43191C9.80588 6.56232 10.1798 6.56232 10.3668 7.31233C10.7408 8.24983 11.6757 10.4999 11.6757 10.6874C11.8627 10.8749 11.8627 11.2499 11.6757 11.4374C11.8627 11.8124 11.6757 12.1874 11.4887 12.3749C11.3018 12.5624 11.1148 12.9374 10.9278 13.1249C10.5538 13.3124 10.3668 13.6874 10.5538 14.0624C11.3018 15.1874 12.2367 16.3124 13.1716 17.2499C14.2935 18.1874 15.4154 18.9374 16.7243 19.4999C17.0983 19.6874 17.4723 19.6874 17.6592 19.3124C17.8462 18.9374 18.7811 17.9999 19.1551 17.6249C19.5291 17.2499 19.7161 17.2499 20.09 17.4374L23.0818 18.9374C23.4558 19.1249 23.8297 19.3124 24.0167 19.4999C24.2037 20.0624 24.2037 20.8124 23.8297 21.3749V21.3749Z" fill="white"/>
        </svg>
    </a>
    <a href="#" className="menu-social__item">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0C6.71563 0 0 6.71563 0 15C0 23.2844 6.71563 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71563 23.2844 0 15 0ZM20.7687 16.9234C20.7687 16.9234 22.0953 18.2328 22.4219 18.8406C22.4312 18.8531 22.4359 18.8656 22.4391 18.8719C22.5719 19.0953 22.6031 19.2687 22.5375 19.3984C22.4281 19.6141 22.0531 19.7203 21.925 19.7297H19.5812C19.4187 19.7297 19.0781 19.6875 18.6656 19.4031C18.3484 19.1812 18.0359 18.8172 17.7312 18.4625C17.2766 17.9344 16.8828 17.4781 16.4859 17.4781C16.4355 17.478 16.3854 17.4859 16.3375 17.5016C16.0375 17.5984 15.6531 18.0266 15.6531 19.1672C15.6531 19.5234 15.3719 19.7281 15.1734 19.7281H14.1C13.7344 19.7281 11.8297 19.6 10.1422 17.8203C8.07656 15.6406 6.21719 11.2687 6.20156 11.2281C6.08437 10.9453 6.32656 10.7937 6.59062 10.7937H8.95781C9.27344 10.7937 9.37656 10.9859 9.44844 11.1562C9.53281 11.3547 9.84219 12.1437 10.35 13.0312C11.1734 14.4781 11.6781 15.0656 12.0828 15.0656C12.1587 15.0647 12.2332 15.0454 12.3 15.0094C12.8281 14.7156 12.7297 12.8328 12.7062 12.4422C12.7062 12.3687 12.7047 11.6 12.4344 11.2312C12.2406 10.9641 11.9109 10.8625 11.7109 10.825C11.7919 10.7133 11.8985 10.6227 12.0219 10.5609C12.3844 10.3797 13.0375 10.3531 13.6859 10.3531H14.0469C14.75 10.3625 14.9313 10.4078 15.1859 10.4719C15.7016 10.5953 15.7125 10.9281 15.6672 12.0672C15.6531 12.3906 15.6391 12.7562 15.6391 13.1875C15.6391 13.2812 15.6344 13.3812 15.6344 13.4875C15.6187 14.0672 15.6 14.725 16.0094 14.9953C16.0628 15.0288 16.1245 15.0467 16.1875 15.0469C16.3297 15.0469 16.7578 15.0469 17.9172 13.0578C18.2747 12.4176 18.5855 11.7523 18.8469 11.0672C18.8703 11.0266 18.9391 10.9016 19.0203 10.8531C19.0803 10.8226 19.1468 10.807 19.2141 10.8078H21.9969C22.3 10.8078 22.5078 10.8531 22.5469 10.9703C22.6156 11.1562 22.5344 11.7234 21.2641 13.4437L20.6969 14.1922C19.5453 15.7016 19.5453 15.7781 20.7687 16.9234V16.9234Z" fill="white"/>
        </svg>
    </a>
    </>
  );
};

export default MenuSocial
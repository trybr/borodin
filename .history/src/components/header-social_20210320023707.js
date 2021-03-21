import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const HeaderSocial = () => {


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
 rel="noreferrer" className="header-social__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 20C40 25.3043 37.8929 30.3914 34.1421 34.1421C30.3914 37.8929 25.3043 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20C0 14.6957 2.10714 9.60859 5.85786 5.85786C9.60859 2.10714 14.6957 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20V20ZM20.7175 14.765C18.7725 15.575 14.8825 17.25 9.0525 19.79C8.1075 20.165 7.61 20.535 7.565 20.895C7.49 21.5025 8.2525 21.7425 9.29 22.07L9.7275 22.2075C10.7475 22.54 12.1225 22.9275 12.835 22.9425C13.485 22.9575 14.2075 22.6925 15.005 22.1425C20.4525 18.465 23.265 16.6075 23.44 16.5675C23.565 16.5375 23.74 16.5025 23.855 16.6075C23.9725 16.71 23.96 16.9075 23.9475 16.96C23.8725 17.2825 20.88 20.0625 19.3325 21.5025C18.85 21.9525 18.5075 22.27 18.4375 22.3425C18.2834 22.5 18.1267 22.6551 17.9675 22.8075C17.0175 23.7225 16.3075 24.4075 18.005 25.5275C18.8225 26.0675 19.4775 26.51 20.13 26.955C20.84 27.44 21.55 27.9225 22.47 28.5275C22.7025 28.6775 22.9275 28.84 23.145 28.995C23.9725 29.585 24.72 30.115 25.6375 30.03C26.1725 29.98 26.725 29.48 27.005 27.98C27.6675 24.4375 28.97 16.765 29.27 13.6025C29.2883 13.3396 29.2774 13.0755 29.2375 12.815C29.214 12.6048 29.1122 12.4111 28.9525 12.2725C28.725 12.1155 28.4538 12.0341 28.1775 12.04C27.4275 12.0525 26.27 12.455 20.7175 14.765V14.765Z" fill="white"/>
        </svg>
    </a>
    <a href={whatsapp} target="_blank" 
 rel="noreferrer" className="header-social__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.0085 9.24976C31.025 -0.000305774 18.8087 -2.75033 9.33481 2.99972C0.110229 8.74976 -2.88153 21.2499 3.10199 30.4999L3.60061 31.2499L1.60611 38.75L9.0855 36.75L9.83344 37.25C13.0745 39 16.5649 40 20.0553 40C23.795 40 27.5347 39 30.7757 37C40.0003 30.9999 42.7427 18.7498 37.0085 9.24976V9.24976ZM31.773 28.4999C30.7757 29.9999 29.5292 30.9999 27.784 31.2499C26.7867 31.2499 25.5402 31.7499 20.5539 29.7499C16.3156 27.7499 12.8252 24.4999 10.3321 20.7499C8.83618 18.9998 8.08824 16.7498 7.83893 14.4998C7.83893 12.4998 8.58687 10.7498 9.83344 9.49977C10.3321 8.99976 10.8307 8.74976 11.3293 8.74976H12.5759C13.0745 8.74976 13.5731 8.74976 13.8224 9.74977C14.3211 10.9998 15.5676 13.9998 15.5676 14.2498C15.8169 14.4998 15.8169 14.9998 15.5676 15.2498C15.8169 15.7498 15.5676 16.2498 15.3183 16.4998C15.069 16.7498 14.8197 17.2498 14.5704 17.4998C14.0718 17.7498 13.8224 18.2498 14.0718 18.7498C15.069 20.2498 16.3156 21.7499 17.5621 22.9999C19.058 24.2499 20.5539 25.2499 22.2991 25.9999C22.7977 26.2499 23.2963 26.2499 23.5456 25.7499C23.795 25.2499 25.0415 23.9999 25.5402 23.4999C26.0388 22.9999 26.2881 22.9999 26.7867 23.2499L30.7757 25.2499C31.2744 25.4999 31.773 25.7499 32.0223 25.9999C32.2716 26.7499 32.2716 27.7499 31.773 28.4999V28.4999Z" fill="white"/>
        </svg>
    </a>
    <a href={vk} target="_blank" 
 rel="noreferrer" className="header-social__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C8.95417 0 0 8.95417 0 20C0 31.0458 8.95417 40 20 40C31.0458 40 40 31.0458 40 20C40 8.95417 31.0458 0 20 0ZM27.6917 22.5646C27.6917 22.5646 29.4604 24.3104 29.8958 25.1208C29.9083 25.1375 29.9146 25.1542 29.9187 25.1625C30.0958 25.4604 30.1375 25.6917 30.05 25.8646C29.9042 26.1521 29.4042 26.2938 29.2333 26.3063H26.1083C25.8917 26.3063 25.4375 26.25 24.8875 25.8708C24.4646 25.575 24.0479 25.0896 23.6417 24.6167C23.0354 23.9125 22.5104 23.3042 21.9813 23.3042C21.914 23.3041 21.8472 23.3146 21.7833 23.3354C21.3833 23.4646 20.8708 24.0354 20.8708 25.5562C20.8708 26.0312 20.4958 26.3042 20.2313 26.3042H18.8C18.3125 26.3042 15.7729 26.1333 13.5229 23.7604C10.7687 20.8542 8.28958 15.025 8.26875 14.9708C8.1125 14.5937 8.43542 14.3917 8.7875 14.3917H11.9437C12.3646 14.3917 12.5021 14.6479 12.5979 14.875C12.7104 15.1396 13.1229 16.1917 13.8 17.375C14.8979 19.3042 15.5708 20.0875 16.1104 20.0875C16.2116 20.0863 16.311 20.0606 16.4 20.0125C17.1042 19.6208 16.9729 17.1104 16.9417 16.5896C16.9417 16.4917 16.9396 15.4667 16.5792 14.975C16.3208 14.6187 15.8812 14.4833 15.6146 14.4333C15.7225 14.2844 15.8647 14.1636 16.0292 14.0812C16.5125 13.8396 17.3833 13.8042 18.2479 13.8042H18.7292C19.6667 13.8167 19.9083 13.8771 20.2479 13.9625C20.9354 14.1271 20.95 14.5708 20.8896 16.0896C20.8708 16.5208 20.8521 17.0083 20.8521 17.5833C20.8521 17.7083 20.8458 17.8417 20.8458 17.9833C20.825 18.7562 20.8 19.6333 21.3458 19.9937C21.417 20.0384 21.4993 20.0622 21.5833 20.0625C21.7729 20.0625 22.3437 20.0625 23.8896 17.4104C24.3663 16.5568 24.7806 15.6697 25.1292 14.7562C25.1604 14.7021 25.2521 14.5354 25.3604 14.4708C25.4404 14.4301 25.529 14.4093 25.6187 14.4104H29.3292C29.7333 14.4104 30.0104 14.4708 30.0625 14.6271C30.1542 14.875 30.0458 15.6312 28.3521 17.925L27.5958 18.9229C26.0604 20.9354 26.0604 21.0375 27.6917 22.5646V22.5646Z" fill="white"/>
        </svg>
    </a>
    </>
  );
};

export default HeaderSocial
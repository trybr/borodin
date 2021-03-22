import React, { useState } from "react";
import { Link } from "gatsby";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';

const FooterForm = () => {

    const [showSuccess, setShowSuccess] = useState(false);
    const handleCloseSuccess = () => setShowSuccess(false);
    const handleShowSuccess = () => setShowSuccess(true);

    const [showError, setShowError] = useState(false);
    const handleCloseError = () => setShowError(false);
    const handleShowError = () => setShowError(true);

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    

    return (
        <>
        <Modal className="popup popup-success" show={showSuccess} onHide={handleCloseSuccess}>
            <div className="popup-close" onClick={handleCloseSuccess}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24.1469" height="3.21912" rx="1.60956" transform="matrix(0.674623 -0.738163 0.737042 0.675847 0.858398 17.8244)" fill="black"/>
                <rect width="24.1433" height="3.2196" rx="1.6098" transform="matrix(-0.73866 -0.674079 0.672852 -0.739777 17.8335 19.7077)" fill="black"/>
            </svg>
            </div>
            <div className="popup-icon">
            <svg width="237" height="189" viewBox="0 0 237 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M174.395 42.6021C165.731 37.8576 156.704 35.9532 146.853 37.1727C134.719 38.6707 125.136 40.4359 113.525 35.9142C103.763 32.1164 94.8481 26.4476 85.5374 21.7477C66.4929 12.0862 47.5875 9.09591 33.3097 28.1516C25.7141 38.292 19.9451 49.9359 15.9636 62.2202C9.52628 82.0388 4.23613 103.985 7.13736 124.683C10.8071 150.922 33.3097 163.24 60.2282 153.734C71.1148 149.892 81.6227 144.268 93.2332 142.658C117.529 139.284 137.554 161.592 166.688 156.168C216.906 146.835 213.197 63.8462 174.395 42.6021Z" fill="#FE9417"/>
                <path opacity="0.7" d="M174.395 42.6021C165.731 37.8576 156.704 35.9532 146.853 37.1727C134.719 38.6707 125.136 40.4359 113.525 35.9142C103.763 32.1164 94.8481 26.4476 85.5374 21.7477C66.4929 12.0862 47.5875 9.09591 33.3097 28.1516C25.7141 38.292 19.9451 49.9359 15.9636 62.2202C9.52628 82.0388 4.23613 103.985 7.13736 124.683C10.8071 150.922 33.3097 163.24 60.2282 153.734C71.1148 149.892 81.6227 144.268 93.2332 142.658C117.529 139.284 137.554 161.592 166.688 156.168C216.906 146.835 213.197 63.8462 174.395 42.6021Z" fill="white"/>
                <path d="M181.996 21.2245C178.46 19.2922 176.857 20.9015 175.57 19.2922C174.284 17.6829 179.106 13.5064 169.445 9.33C169.445 9.33 168.805 0.33117 155.624 0.00819197C142.443 -0.314786 145.996 9.00702 142.46 11.2567C138.924 13.5064 137.96 9.99266 134.424 12.2201C130.888 14.4475 132.497 18.9692 129.607 19.6096C126.717 20.25 122.853 16.7195 119.317 18.9692C115.78 21.2189 115.78 23.1457 114.177 23.1457C112.573 23.1457 109.354 21.8593 107.428 23.1457C105.501 24.432 103.246 26.0413 103.246 26.0413H184.547C184.547 26.0413 185.533 23.1512 181.996 21.2245Z" fill="#FE9417"/>
                <path opacity="0.5" d="M181.996 21.2245C178.46 19.2922 176.857 20.9015 175.57 19.2922C174.284 17.6829 179.106 13.5064 169.445 9.33C169.445 9.33 168.805 0.33117 155.624 0.00819197C142.443 -0.314786 145.996 9.00702 142.46 11.2567C138.924 13.5064 137.96 9.99266 134.424 12.2201C130.888 14.4475 132.497 18.9692 129.607 19.6096C126.717 20.25 122.853 16.7195 119.317 18.9692C115.78 21.2189 115.78 23.1457 114.177 23.1457C112.573 23.1457 109.354 21.8593 107.428 23.1457C105.501 24.432 103.246 26.0413 103.246 26.0413H184.547C184.547 26.0413 185.533 23.1512 181.996 21.2245Z" fill="white"/>
                <path d="M89.797 93.4657C87.3134 92.1125 86.183 93.2374 85.2809 92.1125C84.3788 90.9877 87.7645 88.0474 80.9931 85.1128C80.9931 85.1128 80.542 78.7925 71.2815 78.5641C62.0209 78.3358 64.5101 84.8845 62.0265 86.466C59.5429 88.0474 58.8691 85.5639 56.3855 87.1453C53.9019 88.7268 55.0268 91.8842 52.9998 92.3352C50.9729 92.7863 48.2554 90.3027 45.7607 91.8842C43.2659 93.4657 43.2771 94.8188 42.1522 94.8188C41.0274 94.8188 38.761 93.9167 37.4078 94.8188C36.0546 95.7209 34.4731 96.8514 34.4731 96.8514H91.6012C91.6012 96.8514 92.2806 94.8188 89.797 93.4657Z" fill="white"/>
                <path opacity="0.5" d="M89.797 93.4657C87.3134 92.1125 86.183 93.2374 85.2809 92.1125C84.3788 90.9877 87.7645 88.0474 80.9931 85.1128C80.9931 85.1128 80.542 78.7925 71.2815 78.5641C62.0209 78.3358 64.5101 84.8845 62.0265 86.466C59.5429 88.0474 58.8691 85.5639 56.3855 87.1453C53.9019 88.7268 55.0268 91.8842 52.9998 92.3352C50.9729 92.7863 48.2554 90.3027 45.7607 91.8842C43.2659 93.4657 43.2771 94.8188 42.1522 94.8188C41.0274 94.8188 38.761 93.9167 37.4078 94.8188C36.0546 95.7209 34.4731 96.8514 34.4731 96.8514H91.6012C91.6012 96.8514 92.2806 94.8188 89.797 93.4657Z" fill="white"/>
                <path d="M160.401 187.558H195.594C194.92 183.253 192.153 184.011 191.785 177.34C191.602 173.998 194.714 169.822 194.442 165.412C194.219 161.775 190.638 158.05 190.36 153.89C190.109 150.137 193.144 145.972 192.871 141.929C192.587 138.109 188.973 134.439 188.634 130.463C188.322 126.565 191.318 122.383 190.961 118.463C190.605 114.543 186.913 110.94 186.506 107.075C186.1 103.105 189.001 98.8282 188.556 95.0304C188.088 90.9932 184.279 87.5073 183.761 83.7874C183.204 79.65 185.883 75.2285 185.253 71.6535C184.479 67.2766 180.403 64.1081 179.546 60.8783C177.947 54.8587 178.148 49.0618 176.26 48.6831C174.25 48.2822 173.788 53.9677 172.262 60.3214C171.493 63.5122 167.512 66.7476 166.855 71.13C166.326 74.6772 169.144 78.9929 168.681 83.1136C168.269 86.8056 164.555 90.3528 164.193 94.3677C163.853 98.1432 166.866 102.303 166.571 106.251C166.281 110.088 162.673 113.746 162.433 117.644C162.194 121.542 165.29 125.619 165.078 129.467C164.861 133.409 161.325 137.134 161.141 140.927C160.952 144.942 164.121 148.99 163.965 152.71C163.792 156.836 160.306 160.612 160.178 164.22C160.022 168.597 163.235 172.634 163.135 175.97C162.923 183.209 159.61 181.7 159.493 187.525L160.401 187.558Z" fill="#FE9417"/>
                <path d="M175.508 60.2492V185.932" stroke="black" stroke-miterlimit="10"/>
                <path d="M181.004 73.4244L175.274 78.3748L170.585 72.1213" stroke="black" stroke-miterlimit="10"/>
                <path d="M181.004 95.3033L175.274 100.248L170.585 94.0003" stroke="black" stroke-miterlimit="10"/>
                <path d="M181.004 115.873L175.274 120.824L170.585 114.57" stroke="black" stroke-miterlimit="10"/>
                <path d="M181.004 140.359L175.274 145.304L170.585 139.056" stroke="black" stroke-miterlimit="10"/>
                <path d="M181.004 165.1L175.274 170.045L170.585 163.797" stroke="black" stroke-miterlimit="10"/>
                <path d="M136.428 187.558H163.597C163.074 184.217 160.941 184.818 160.657 179.673C160.512 177.078 162.912 173.87 162.706 170.463C162.534 167.678 159.772 164.777 159.554 161.553C159.36 158.657 161.721 155.427 161.492 152.32C161.275 149.369 158.474 146.54 158.224 143.472C157.973 140.403 160.295 137.229 160.022 134.205C159.749 131.182 156.893 128.397 156.592 125.418C156.28 122.35 158.519 119.053 158.173 116.113C157.811 113 154.871 110.311 154.476 107.443C154.03 104.246 156.113 100.833 155.623 98.0765C155.027 94.6964 151.881 92.2462 151.224 89.757C149.988 85.1128 150.144 80.6301 148.685 80.3406C147.131 80.0287 146.775 84.4168 145.6 89.3283C145.009 91.7896 141.93 94.2899 141.423 97.6811C141.017 100.421 143.188 103.751 142.832 106.931C142.515 109.782 139.652 112.499 139.368 115.618C139.107 118.53 141.434 121.743 141.206 124.789C140.983 127.751 138.204 130.575 138.01 133.582C137.815 136.589 140.237 139.741 140.053 142.709C139.869 145.677 137.158 148.628 137.018 151.557C136.868 154.653 139.313 157.777 139.196 160.651C139.062 163.836 136.372 166.776 136.272 169.56C136.15 172.935 138.633 176.059 138.555 178.626C138.388 184.195 135.832 183.053 135.743 187.536L136.428 187.558Z" fill="#FE9417"/>
                <path d="M148.094 89.2892V186.305" stroke="black" stroke-miterlimit="10"/>
                <path d="M152.332 99.4573L147.911 103.277L144.291 98.4494" stroke="black" stroke-miterlimit="10"/>
                <path d="M152.332 116.342L147.911 120.162L144.291 115.339" stroke="black" stroke-miterlimit="10"/>
                <path d="M152.332 132.223L147.911 136.043L144.291 131.221" stroke="black" stroke-miterlimit="10"/>
                <path d="M152.332 151.123L147.911 154.943L144.291 150.115" stroke="black" stroke-miterlimit="10"/>
                <path d="M152.332 170.223L147.911 174.038L144.291 169.215" stroke="black" stroke-miterlimit="10"/>
                <path d="M112.211 187.296V74.7104H118.153V187.296" fill="#2E353A"/>
                <path d="M112.211 187.296V74.7104H118.153V187.296" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M109.243 187.296V74.7104H115.185V187.296" fill="#FE9417"/>
                <path d="M109.243 187.296V74.7104H115.185V187.296" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <g style="mix-blend-mode:multiply" opacity="0.3">
                <path d="M115.185 74.7104H109.243V88.075H115.185V74.7104Z" fill="#2E353A"/>
                </g>
                <path d="M134.597 30.7575H90.5718L109.761 77.89H153.792V49.9468C153.792 47.4264 153.295 44.9306 152.331 42.6021C151.366 40.2736 149.952 38.1579 148.169 36.3759C146.387 34.594 144.271 33.1806 141.942 32.2166C139.613 31.2526 137.117 30.7567 134.597 30.7575Z" fill="#FE9417" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <g style="mix-blend-mode:multiply" opacity="0.3">
                <path d="M106.403 69.6373L109.744 77.8899H153.792V49.9467C153.792 49.5235 153.792 49.1003 153.747 48.6827H106.414L106.403 69.6373Z" fill="black"/>
                </g>
                <path d="M134.274 48.6827H129.641" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M153.748 48.6827H139.726" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M90.5719 30.7575C95.6627 30.7575 100.545 32.7798 104.145 36.3795C107.744 39.9793 109.767 44.8616 109.767 49.9524V77.8955H71.377V49.9468C71.3784 44.857 73.4014 39.9761 77.001 36.3776C80.6006 32.779 85.482 30.7575 90.5719 30.7575V30.7575Z" fill="#2E353A" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M109.761 74.7104H76.6836V77.89H109.761V74.7104Z" fill="#FE9417" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M109.761 74.7104H41.3066V77.89H109.761V74.7104Z" fill="#FE9417" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.3" d="M109.761 74.7104H76.6836V77.89H109.761V74.7104Z" fill="black"/>
                <path d="M137.459 19.3976H123.722V29.048H137.459V19.3976Z" fill="#2E353A" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M124.836 19.3976H121.868V49.468H124.836V19.3976Z" fill="white" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M123.348 53.5498C125.194 53.5498 126.69 52.0539 126.69 50.2086C126.69 48.3633 125.194 46.8675 123.348 46.8675C121.503 46.8675 120.007 48.3633 120.007 50.2086C120.007 52.0539 121.503 53.5498 123.348 53.5498Z" fill="#2E353A" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M83.167 43.1C91.8502 47.5102 106.946 54.5778 120.869 58.1334" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 4"/>
                <path d="M75.8813 39.2637C75.8813 39.2637 78.6635 40.8357 83.1673 43.125" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 4"/>
                <path d="M72.7557 39.033L78.9999 24.1992L33.7188 13.1518L72.7557 39.033Z" fill="white" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M75.7999 25.9957L72.7557 39.033L33.7188 13.1518L75.7999 25.9957Z" fill="#FE9417" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M75.7999 25.9957L68.6949 32.084L33.7188 13.1518L75.7999 25.9957Z" fill="white" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M78.9999 24.1992L85.3252 21.6292L33.7188 13.1518L78.9999 24.1992Z" fill="white" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M63.9604 36.725L65.4264 37.6233" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M55.9634 31.8221L60.8726 34.8288" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50.4492 67.4282V51.3406L96.4727 58.7388L50.4492 67.4282Z" fill="white" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M52.7011 54.2348L50.4492 67.428L96.4727 58.7386L52.7011 54.2348Z" fill="#FE9417" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M52.7012 54.2348L56.8868 62.5998L96.4728 58.7386L52.7012 54.2348Z" fill="white" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M50.4493 51.3405L45.6211 46.5123L96.4727 58.7387L50.4493 51.3405Z" fill="white" stroke="#2E353A" stroke-width="1.2629" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M66.9297 67.1287L70.922 66.3177" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M52.9067 69.9794L62.9436 67.9396" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44.9035 66.4362C44.9035 66.4362 8.72347 72.6741 1.86174 105.111C-4.99999 137.549 31.18 139.42 37.418 123.825C43.6559 108.23 16.209 101.992 9.97105 116.963C3.73312 131.935 22.4469 157.51 48.0225 158.758C69.2751 159.793 128.86 134.985 165.919 128.716C165.919 128.716 193.366 121.118 235.784 122.783" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 4"/>
                <path d="M199.638 150.075H208.921" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M199.638 163.808H208.921" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.18066 163.44H198.524V150.443H4.18066" fill="white"/>
                <path d="M4.18066 163.44H198.524V150.443H4.18066" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.6899 187.385V121.999C17.69 121.838 17.7227 121.68 17.7858 121.532C17.849 121.385 17.9414 121.252 18.0575 121.141L23.136 116.358C23.3647 116.144 23.6687 116.029 23.9816 116.039C24.2946 116.048 24.5911 116.181 24.8066 116.408L29.2615 121.147C29.4636 121.367 29.5767 121.655 29.5789 121.954V187.385" fill="#2E353A"/>
                <path d="M17.6899 187.385V121.999C17.69 121.838 17.7227 121.68 17.7858 121.532C17.849 121.385 17.9414 121.252 18.0575 121.141L23.136 116.358C23.3647 116.144 23.6687 116.029 23.9816 116.039C24.2946 116.048 24.5911 116.181 24.8066 116.408L29.2615 121.147C29.4636 121.367 29.5767 121.655 29.5789 121.954V187.385" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.248 187.942V121.999C16.2479 121.838 16.2809 121.679 16.3451 121.531C16.4093 121.384 16.5033 121.251 16.6211 121.141L21.6997 116.358C21.8126 116.251 21.9454 116.168 22.0905 116.113C22.2356 116.058 22.3902 116.032 22.5454 116.036C22.7005 116.041 22.8533 116.076 22.9948 116.14C23.1364 116.204 23.264 116.295 23.3703 116.408L27.8251 121.147C28.0296 121.366 28.1431 121.655 28.1425 121.954V187.942" fill="white"/>
                <path d="M16.248 187.942V121.999C16.2479 121.838 16.2809 121.679 16.3451 121.531C16.4093 121.384 16.5033 121.251 16.6211 121.141L21.6997 116.358C21.8126 116.251 21.9454 116.168 22.0905 116.113C22.2356 116.058 22.3902 116.032 22.5454 116.036C22.7005 116.041 22.8533 116.076 22.9948 116.14C23.1364 116.204 23.264 116.295 23.3703 116.408L27.8251 121.147C28.0296 121.366 28.1431 121.655 28.1425 121.954V187.942" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M60.5122 187.385V121.999C60.5123 121.838 60.5449 121.68 60.6081 121.532C60.6713 121.385 60.7637 121.252 60.8797 121.141L65.9638 116.358C66.0767 116.251 66.2096 116.168 66.3547 116.113C66.4998 116.058 66.6544 116.032 66.8095 116.036C66.9647 116.041 67.1174 116.076 67.259 116.14C67.4005 116.204 67.5281 116.295 67.6344 116.408L72.0893 121.147C72.2937 121.366 72.4072 121.655 72.4067 121.954V187.385" fill="#2E353A"/>
                <path d="M60.5122 187.385V121.999C60.5123 121.838 60.5449 121.68 60.6081 121.532C60.6713 121.385 60.7637 121.252 60.8797 121.141L65.9638 116.358C66.0767 116.251 66.2096 116.168 66.3547 116.113C66.4998 116.058 66.6544 116.032 66.8095 116.036C66.9647 116.041 67.1174 116.076 67.259 116.14C67.4005 116.204 67.5281 116.295 67.6344 116.408L72.0893 121.147C72.2937 121.366 72.4072 121.655 72.4067 121.954V187.385" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M59.3096 187.942V121.999C59.3094 121.838 59.3425 121.679 59.4067 121.531C59.4709 121.383 59.5648 121.251 59.6827 121.141L64.7612 116.358C64.9899 116.144 65.2939 116.029 65.6068 116.039C65.9198 116.048 66.2163 116.181 66.4318 116.408L70.8867 121.147C71.0927 121.365 71.2081 121.654 71.2096 121.954V187.942" fill="white"/>
                <path d="M59.3096 187.942V121.999C59.3094 121.838 59.3425 121.679 59.4067 121.531C59.4709 121.383 59.5648 121.251 59.6827 121.141L64.7612 116.358C64.9899 116.144 65.2939 116.029 65.6068 116.039C65.9198 116.048 66.2163 116.181 66.4318 116.408L70.8867 121.147C71.0927 121.365 71.2081 121.654 71.2096 121.954V187.942" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M103.574 187.385V121.999C103.574 121.838 103.607 121.679 103.671 121.531C103.736 121.383 103.829 121.251 103.947 121.141L109.026 116.358C109.255 116.144 109.559 116.029 109.871 116.039C110.184 116.048 110.481 116.181 110.696 116.408L115.151 121.147C115.357 121.365 115.473 121.654 115.474 121.954V187.942" fill="#2E353A"/>
                <path d="M103.574 187.385V121.999C103.574 121.838 103.607 121.679 103.671 121.531C103.736 121.383 103.829 121.251 103.947 121.141L109.026 116.358C109.255 116.144 109.559 116.029 109.871 116.039C110.184 116.048 110.481 116.181 110.696 116.408L115.151 121.147C115.357 121.365 115.473 121.654 115.474 121.954V187.942" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M102.377 187.942V121.999C102.377 121.838 102.41 121.68 102.473 121.532C102.536 121.385 102.628 121.252 102.744 121.141L107.829 116.358C107.941 116.251 108.074 116.168 108.219 116.113C108.365 116.058 108.519 116.032 108.674 116.036C108.829 116.041 108.982 116.076 109.124 116.14C109.265 116.204 109.393 116.295 109.499 116.408L113.954 121.147C114.158 121.366 114.272 121.655 114.271 121.954V187.942" fill="white"/>
                <path d="M102.377 187.942V121.999C102.377 121.838 102.41 121.68 102.473 121.532C102.536 121.385 102.628 121.252 102.744 121.141L107.829 116.358C107.941 116.251 108.074 116.168 108.219 116.113C108.365 116.058 108.519 116.032 108.674 116.036C108.829 116.041 108.982 116.076 109.124 116.14C109.265 116.204 109.393 116.295 109.499 116.408L113.954 121.147C114.158 121.366 114.272 121.655 114.271 121.954V187.942" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M146.642 187.385V121.999C146.642 121.838 146.674 121.68 146.737 121.532C146.801 121.385 146.893 121.252 147.009 121.141L152.088 116.358C152.316 116.144 152.62 116.029 152.933 116.039C153.246 116.048 153.543 116.181 153.758 116.408L158.213 121.147C158.415 121.367 158.528 121.655 158.531 121.954V187.385" fill="#2E353A"/>
                <path d="M146.642 187.385V121.999C146.642 121.838 146.674 121.68 146.737 121.532C146.801 121.385 146.893 121.252 147.009 121.141L152.088 116.358C152.316 116.144 152.62 116.029 152.933 116.039C153.246 116.048 153.543 116.181 153.758 116.408L158.213 121.147C158.415 121.367 158.528 121.655 158.531 121.954V187.385" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M145.439 187.942V121.999C145.439 121.838 145.472 121.679 145.536 121.531C145.6 121.384 145.694 121.251 145.812 121.141L150.891 116.358C151.004 116.251 151.136 116.168 151.281 116.113C151.427 116.058 151.581 116.032 151.736 116.036C151.891 116.041 152.044 116.076 152.186 116.14C152.327 116.204 152.455 116.295 152.561 116.408L157.016 121.147C157.221 121.366 157.334 121.655 157.333 121.954V187.942" fill="white"/>
                <path d="M145.439 187.942V121.999C145.439 121.838 145.472 121.679 145.536 121.531C145.6 121.384 145.694 121.251 145.812 121.141L150.891 116.358C151.004 116.251 151.136 116.168 151.281 116.113C151.427 116.058 151.581 116.032 151.736 116.036C151.891 116.041 152.044 116.076 152.186 116.14C152.327 116.204 152.455 116.295 152.561 116.408L157.016 121.147C157.221 121.366 157.334 121.655 157.333 121.954V187.942" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M189.703 187.385V121.999C189.703 121.838 189.736 121.68 189.799 121.532C189.862 121.385 189.955 121.252 190.071 121.141L195.155 116.358C195.268 116.251 195.4 116.168 195.546 116.113C195.691 116.058 195.845 116.032 196 116.036C196.156 116.041 196.308 116.076 196.45 116.14C196.591 116.204 196.719 116.295 196.825 116.408L201.28 121.147C201.485 121.366 201.598 121.655 201.598 121.954V187.385" fill="#2E353A"/>
                <path d="M189.703 187.385V121.999C189.703 121.838 189.736 121.68 189.799 121.532C189.862 121.385 189.955 121.252 190.071 121.141L195.155 116.358C195.268 116.251 195.4 116.168 195.546 116.113C195.691 116.058 195.845 116.032 196 116.036C196.156 116.041 196.308 116.076 196.45 116.14C196.591 116.204 196.719 116.295 196.825 116.408L201.28 121.147C201.485 121.366 201.598 121.655 201.598 121.954V187.385" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M188.5 187.942V121.999C188.5 121.838 188.533 121.679 188.598 121.531C188.662 121.383 188.756 121.251 188.874 121.141L193.952 116.358C194.181 116.144 194.485 116.029 194.798 116.039C195.111 116.048 195.407 116.181 195.623 116.408L200.078 121.147C200.284 121.365 200.399 121.654 200.401 121.954V187.942" fill="white"/>
                <path d="M188.5 187.942V121.999C188.5 121.838 188.533 121.679 188.598 121.531C188.662 121.383 188.756 121.251 188.874 121.141L193.952 116.358C194.181 116.144 194.485 116.029 194.798 116.039C195.111 116.048 195.407 116.181 195.623 116.408L200.078 121.147C200.284 121.365 200.399 121.654 200.401 121.954V187.942" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.3647 116.408V121.175" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M25.2744 118.869V130.151" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M61.6538 119.794V134.066" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M63.4971 117.951V124.165" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M107.829 116.358V130.385" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M110.474 117.488V138.215" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M147.544 119.794V135.447" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M153.53 117.951V121.865" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M192.443 117.717V126.008" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M197.511 118.641V142.586" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M188.3 153.64H183.232" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M188.3 157.554H170.57" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M122.213 157.554H114.155" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M79.8463 157.554H71.7886" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.0641 155.483H8.00635" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.0641 159.164H12.8398" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M118.069 155.483H114.155" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M75.2414 159.854H71.3267" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M58.8918 159.854H54.9771" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M203.953 157.554H200.501" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M208.559 157.554H206.487" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.9416 133.615C27.9416 133.615 26.5495 145.582 24.8789 157.827C23.2083 170.072 26.2711 182.602 27.1064 183.715" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.4346 157.838C22.7019 155.449 22.9246 153.94 22.9246 153.94" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.544 182.323C26.544 182.323 21.5322 181.209 21.5322 172.3C21.5322 168.641 21.7661 164.894 22.0445 161.719" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M68.5923 119.415C68.5923 119.415 69.7061 120.25 67.7571 129.717C65.8081 139.184 66.0865 153.105 68.5923 160.901" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M71.3769 136.956C71.3769 136.956 68.5926 145.309 70.5416 157.003" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M103.118 142.241C103.118 142.241 104.51 150.315 105.902 158.663C107.294 167.01 106.181 178.709 105.067 181.767C103.953 184.824 102.839 187.335 102.839 187.335" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M108.363 183.242C107.122 187.051 105.579 182.602 105.579 182.602" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M108.313 154.776C108.313 154.776 110.936 168.313 109.455 178.503" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M102.561 159.23C102.561 159.23 105.345 165.077 102.839 170.646" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M154.516 160.054C154.888 161.756 155.378 163.431 155.98 165.066" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M156.815 131.109C155.048 136.717 153.927 142.509 153.474 148.372C153.308 151.338 153.474 154.313 153.97 157.242" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M151.525 156.713C151.525 156.713 154.031 166.18 155.423 169.521C156.816 172.862 156.259 180.931 154.588 184.829" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M189.103 135.286C189.103 135.286 194.671 145.309 189.381 161.731" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M194.22 152.403C194.253 155.533 193.975 159.498 192.722 162.839C190.216 169.521 189.103 171.749 189.103 171.749" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M193.835 146.98C193.835 146.98 194.019 148.177 194.131 150.02" stroke="#2E353A" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <h4 className="popup-title title-h3">
            Ваша заявка отправлена
            </h4>
            <p className="popup-text">
            Cпасибо за ваше обращение. <br />
            Скоро я с вами свяжусь.
            </p>
            <div className="popup-btn btn-orange" onClick={handleCloseSuccess}>
            Хорошо
            </div>
        </Modal>
        <Modal className="popup popup-error" show={showError} onHide={handleCloseError}>
            <div className="popup-close" onClick={handleCloseError}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24.1469" height="3.21912" rx="1.60956" transform="matrix(0.674623 -0.738163 0.737042 0.675847 0.858398 17.8244)" fill="black"/>
                    <rect width="24.1433" height="3.2196" rx="1.6098" transform="matrix(-0.73866 -0.674079 0.672852 -0.739777 17.8335 19.7077)" fill="black"/>
                </svg>
            </div>
            <div className="popup-icon">
                <svg width="223" height="199" viewBox="0 0 223 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M170.796 9.5641C187.564 20.4353 190.766 42.8697 198.69 61.1915C206.099 78.3217 214.918 94.7016 215.681 113.344C216.524 133.983 216.663 157.043 203.253 172.778C189.904 188.44 166.797 189.913 146.671 194.315C128.548 198.279 110.329 201.037 92.2072 197.066C73.7141 193.015 56.3299 184.748 42.7763 171.554C28.8466 157.994 20.6936 140.268 14.8358 121.749C8.32236 101.157 1.43967 79.5951 7.09577 58.7524C13.062 36.7669 26.3276 15.0923 46.6125 4.65244C66.3258 -5.49322 89.6424 3.98595 111.805 4.86252C131.923 5.65823 153.912 -1.38219 170.796 9.5641Z" fill="#FFDFB9"/>
                    <path d="M62.2891 49.924V29.9844L119.332 39.154L62.2891 49.924Z" fill="white" stroke="#2E353A" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65.0801 33.5715L62.2891 49.9237L119.332 39.1537L65.0801 33.5715Z" fill="#FE9417" stroke="#2E353A" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65.0801 33.5715L70.2679 43.9395L119.332 39.1537L65.0801 33.5715Z" fill="white" stroke="#2E353A" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M62.2889 29.9842L56.3047 24L119.332 39.1538L62.2889 29.9842Z" fill="white" stroke="#2E353A" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M82.7153 49.5527L87.6635 48.5476" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65.335 53.086L77.775 50.5578" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M55.4156 48.6944C55.4156 48.6944 10.5727 56.4259 2.06807 96.6298C-6.4366 136.834 38.4062 139.153 46.1377 119.824C53.8692 100.496 19.8506 92.7641 12.119 111.32C4.38753 129.875 -11.4373 173.242 59.2813 163.121C130 153 131 70.3197 222 111.32" stroke="black" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 4"/>
                    <path d="M38.3495 6.00822L110.5 78.1561L182.354 6.30512C183.613 4.96486 185.13 3.89269 186.813 3.15291C188.497 2.41314 190.313 2.021 192.152 2C196.089 2 199.865 3.56405 202.649 6.34807C205.433 9.1321 206.998 12.908 206.998 16.8453C207.032 18.6653 206.695 20.4732 206.005 22.1581C205.316 23.8429 204.29 25.3692 202.989 26.6431L130.393 98.4941L202.989 171.087C205.436 173.481 206.871 176.722 206.998 180.143C206.998 184.08 205.433 187.856 202.649 190.64C199.865 193.424 196.089 194.988 192.152 194.988C190.26 195.067 188.372 194.751 186.609 194.061C184.845 193.371 183.245 192.322 181.908 190.98L110.5 118.832L38.498 190.832C37.2436 192.127 35.745 193.162 34.0888 193.875C32.4326 194.588 30.6514 194.967 28.8482 194.988C24.9109 194.988 21.1348 193.424 18.3506 190.64C15.5665 187.856 14.0024 184.08 14.0024 180.143C13.9678 178.323 14.3055 176.515 14.9948 174.83C15.6841 173.145 16.7104 171.619 18.0108 170.345L90.6066 98.4941L18.0108 25.9009C15.564 23.5072 14.1292 20.2658 14.0024 16.8453C14.0024 12.908 15.5665 9.1321 18.3506 6.34807C21.1348 3.56405 24.9109 2 28.8482 2C32.4112 2.04454 35.8257 3.48452 38.3495 6.00822Z" fill="#C21414" fill-opacity="0.41"/>
                </svg>
            </div>
            <h4 className="popup-title title-h3">
                Упс, что-то пошло не так...
            </h4>
            <p className="popup-text">
                Ваше письмо не удалось отправить. <br />
                Попробуйте еще раз.
            </p>
            <div className="popup-btn btn-orange" onClick={handleCloseError}>
                Сейчас попробую
            </div>
        </Modal>
        <Formik
            initialValues={{
            name: '',
            phone: '',
            message: '',
            }}
            onSubmit={(values, actions) => {
                fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...values })
                })
                .then(() => {
                    console.log('Success');
                    actions.resetForm();
                })
                .catch(() => {
                    console.log('Error');
                    handleShowError();
                })
                .finally(() => {
                    handleShowSuccess();
                    actions.setSubmitting(false);
                })
            }}
            validate={values => {
                const errors = {};
                if (!values.phone) {
                    errors.phone = 'Введите ваш телефон';
                  }
                
                if (!values.name) {
                    errors.name = 'Введите ваше имя';
                }
                return errors;
              }}
        >
        {() => (
            
            <Form name="contact" data-netlify="true" netlify-honeypot="bot-field" className="footer-form order-lg-1 order-2" data-aos="fade-right">
                <div className="footer-form-field-wrapper hidden">
                    <label htmlFor="phone" className="footer-form__label">Don’t fill this out if you’re human:</label>
                    <Field 
                    name="bot-field"
                    className="footer-form__input"
                    />
                </div>
                <div className="footer-form-field-wrapper">
                    <label htmlFor="phone" className="footer-form__label">Телефон</label>
                    <Field 
                    name="phone"
                    className="footer-form__input"
                    placeholder="Телефон *" />
                    <div className="footer-form__error">
                        <ErrorMessage name="phone" />
                    </div>
                </div>
                <div className="footer-form-field-wrapper">
                    <label htmlFor="name" className="footer-form__label">Имя</label>
                    <Field 
                    name="name"
                    className="footer-form__input"
                    placeholder="Имя *" />
                    <div className="footer-form__error">
                        <ErrorMessage name="name" />
                    </div>
                </div>
                <div className="footer-form-field-wrapper">
                    <label htmlFor="message" className="footer-form__label">Идея или вопрос</label>
                    <Field 
                    name="message"
                    className="footer-form__textarea"
                    placeholder="Идея или вопрос"
                    component="textarea"/>
                </div>
                <button className="footer-form-btn btn-orange-with-animation" type="submit">Связаться</button>
                <p className="footer-form__text">
                    Нажимая на кнопку, Вы даете согласие на <Link to="#">обработку персональных данных.</Link>
                </p>
            </Form>
        )}
        </Formik>
        </>
    );
};

export default FooterForm
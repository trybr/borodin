import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import FooterContacts from "../components/footer-contacts";


const Footer = () => {

    const { allContentfulFooter } = useStaticQuery(
        graphql`
            query {
              allContentfulFooter(
                filter: {node_locale: {eq: "ru-RU"}}
              ) {
                nodes {
                    illustration {
                      file {
                        url
                      }
                    }
                }
              }
            }
        `
    )

    const illustration = allContentfulFooter.nodes[0].illustration.file.url;

    return(
        <footer className="footer section">
            <img src={illustration} className="footer-illustration" data-aos="fade-left" alt=""/>
            <div  id="footer" className="footer-title">
                <h2 className="footer-title__title title-h2-white">Готовы обсудить ваш проект или идею?</h2>
                <h3 className="footer-title__subtitle title-h3-white">Свяжитесь со мной и мы обсудим детально</h3>
            </div>
            <div className="footer-content section-content">
                <div className="footer-content-plane" data-aos="fade-right"></div>
                <form className="footer-form order-lg-1 order-2" data-aos="fade-right">
                    <input type="text" className="footer-form__input" placeholder="Телефон *" />
                    <input type="text" className="footer-form__input" placeholder="Имя *" />
                    <textarea className="footer-form__textarea" placeholder="Идея или вопрос" ></textarea>
                    <input className="footer-form-btn btn-orange-with-animation" type="submit" value="Связаться"/>
                    <p className="footer-form__text">
                        Нажимая на кнопку, Вы даете согласие на <Link to="#">обработку персональных данных.</Link>
                    </p>
                </form>
                <div className="footer-contacts order-lg-2 order-1" data-aos="fade-left">
                    <FooterContacts />
                </div>
            </div>
            <div className="footer-copyright">
                © 2021 Дмитрий Бородин
            </div>
        </footer>
    );
}

export default Footer
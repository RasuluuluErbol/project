import React from 'react';
import './style.scss';
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";

const Hero = () => {
    const texts = {
        welcomeTitle: "Welcome to Live KG",
        siteDescriptionTitle: "О нашем сайте",
        siteDescription: "На нашем сайте вы найдете удобные инструменты для планирования своего путешествия по Кыргызстану. Мы стремимся предоставить подробную информацию о достопримечательностях, услугах и событиях, чтобы сделать ваш опыт максимально приятным и удобным.",
        informationTitle: "Подробная информация",
        informationDescription: "Мы предоставляем подробные описания каждой достопримечательности и услуги, чтобы вы могли сделать информированный выбор. Разнообразие информации помогает вам лучше понять, что вас ожидает в каждом месте и сделать ваш выбор наилучшим образом.",
        userExperienceTitle: "Пользовательский опыт",
        userExperienceDescription: "Наш сайт создан с учетом потребностей пользователей, чтобы обеспечить легкость использования и понимания. Мы стремимся сделать ваше взаимодействие с нашим сайтом максимально удобным и приятным, учитывая ваши потребности и предоставляя понятный интерфейс.",
        currentInformationTitle: "Актуальная информация",
        currentInformationDescription: "Мы регулярно обновляем информацию о достопримечательностях и событиях, чтобы предоставить вам актуальные данные. Ваш опыт планирования поездки в Кыргызстан будет всегда основан на свежей и достоверной информации, которую мы поддерживаем актуальной."
    };

    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <h1>{texts.welcomeTitle}</h1>
                    <div className="hero__content">
                        <div className="hero__content__description">
                            <h2>{texts.siteDescriptionTitle}</h2>
                            <p>{texts.siteDescription}</p>
                        </div>
                        <img
                            src="../../../src/img/kyrgyzstan.jpg"
                            alt="Kyrgyzstan Landscape"
                            className="hero__content__image"
                        />
                    </div>
                    <div className="hero__bottom">
                        <div className="hero__bottom__section">
                            <div className="hero__bottom__section__icon">
                                <IoInformationCircleSharp />
                            </div>
                            <div className="hero__bottom__section__info">
                                <h2>{texts.informationTitle}</h2>
                                <p>{texts.informationDescription}</p>
                            </div>
                        </div>
                        <div className="hero__bottom__section">
                            <div className="hero__bottom__section__icon">
                                <FaUserFriends />
                            </div>
                            <div className="hero__bottom__section__info">
                                <h2>{texts.userExperienceTitle}</h2>
                                <p>{texts.userExperienceDescription}</p>
                            </div>
                        </div>
                        <div className="hero__bottom__section">
                            <div className="hero__bottom__section__icon">
                                <FcCalendar />
                            </div>
                            <div className="hero__bottom__section__info">
                                <h2>{texts.currentInformationTitle}</h2>
                                <p>{texts.currentInformationDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

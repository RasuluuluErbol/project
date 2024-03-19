
import React, { useState } from 'react';
import './style.scss';

const OurTeam = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div id='our-team'>
            <div className="container">
                <div className="our-team">
                    <div className="our-team--title">
                        <h2>Наша Команда</h2>
                        <p>
                            Узнайте больше о нашей креативной и дружной команде, посвятившей себя созданию
                            незабываемых впечатлений для туристов в Кыргызстане. Мы собрали вместе ярких и талантливых
                            профессионалов, способных сделать ваше путешествие по нашей удивительной стране по-настоящему
                            уникальным и захватывающим.
                        </p>
                        <button onClick={openModal}>Узнать больше</button>
                    </div>

                    {showModal && (
                        <div className="our-team--modal">
                            <div className="our-team--modal__content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>Больше о Нашей Команде</h2>
                                <p>Дружный коллектив профессионалов, преданных своему делу. Мы стремимся
                                    создавать уникальные и незабываемые моменты для каждого туриста.</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default OurTeam;

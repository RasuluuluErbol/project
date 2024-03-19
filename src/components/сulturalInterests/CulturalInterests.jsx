import React from 'react';
import './style.scss';

const CulturalInterests = () => {
    const culturalInterestsData = [
        {
            id: 1,
            title: 'Народные Традиции',
            imageUrl: 'https://russiancouncil.ru/upload/main/9f6/3v5i650m0h0snajgjlkqly6ze3e98cqu/i.jpg',
            description: 'Кыргызстанцы гордятся своей культурой и традициями, которые уходят корнями в древнее время. Одной из ярких черт культуры является гостеприимство и радушие местных жителей.'
        },
        {
            id: 2,
            title: 'Национальная Кухня',
            imageUrl: 'https://too.kg/wp-content/uploads/Natsionalnye-blyuda-KR.jpg',
            description: 'Попробуйте национальные блюда Кыргызстана, такие как лагман, манты, плов и сумолок. Это уникальные блюда, которые отражают богатство культурных влияний в регионе.'
        },
        {
            id: 3,
            title: 'Искусство и Музыка',
            imageUrl: 'https://rus.ruhaniat.kg/wp-content/uploads/2018/12/1iv4VDKpEN81.jpg',
            description: 'Познакомьтесь с местным искусством и музыкальными традициями Кыргызстана. Узнайте о народных музыкальных инструментах, танцах и художественных выражениях, которые отражают богатство культурного наследия страны.'
        },
        {
            id: 4,
            title: 'Природные Удивления',
            imageUrl: 'https://sotni.ru/wp-content/uploads/2023/08/kirgiziia-gory-dolina-arashan-1.webp',
            description: 'Погрузитесь в удивительные природные красоты Кыргызстана. Откройте для себя горные озера, живописные долины, водопады и уникальные экосистемы. Исследуйте богатство живой природы страны.'
        },
        {
            id: 5,
            title: 'Исторические Памятники',
            imageUrl: 'https://architectureguru.ru/wp-content/uploads/2015/08/7327c2fe-15dc-4d05-8eb0-c92a5.jpg',
            description: 'Посетите исторические памятники и археологические объекты Кыргызстана, которые раскрывают богатство истории этой земли. Узнайте о древних цивилизациях, культурных наследиях и археологических открытиях.'
        },
        {
            id: 6,
            title: 'Традиционные Кыргызские Игры',
            imageUrl: 'https://sputnik.kg/images/07e4/0b/08/1050363332.jpg',
            description: 'Изучите традиционные кыргызские игры, такие как охота с беркутами, кок-бору, кыз-кумай и другие, которые отражают культурные особенности и дух соревновательности народа.'
        }
    ];

    return (
        <div id="cultural-interests">
            <div className="container">
                <div className="cultural-interests">
                    <h2>Культурные Интересности</h2>
                    <div className="card-wrapper">
                        {culturalInterestsData.map((interest) => (
                            <div className="card" key={interest.id}>
                                <img src={interest.imageUrl} alt={interest.title} />
                                <div className="card-content">
                                    <h3>{interest.title}</h3>
                                    <p>{interest.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CulturalInterests;

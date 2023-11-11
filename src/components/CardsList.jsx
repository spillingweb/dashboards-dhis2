import { useEffect, useState } from 'react';

import Card from './Card';
import classes from './CardsList.module.css';

function CardsList({isFiltered}) {
    const [cards, setCards] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        async function fetchCards() {
            setIsFetching(true);
            const response = await fetch('https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/dashboards.json');
            const resData = await response.json();
            setCards(resData.dashboards);
            setIsFetching(false);
        }

        fetchCards();
    }, []);

    function toggleActive(cardIndex, e) {
        if (e.target.outerHTML.substring(1,5) != 'svg ' && e.target.outerHTML.substring(1,5) != 'path') {
          activeCard === cardIndex ? setActiveCard('') : setActiveCard(cardIndex);  
        }
    }
    
    return (
        <>
            {!isFetching && cards.length > 0 && (
                <ul className={classes.cardslist}>
                    {cards.map((card, index) =>
                        <Card key={card.id}
                            id={card.id}
                            displayName={card.displayName}
                            onToggleChange={toggleActive}
                            isActive={activeCard === index}
                            isFiltered={isFiltered}
                            i={index}
                        />
                    )}
                </ul>
                )}
            {!isFetching && cards.length === 0 && (           
                <div style={{textAlign: 'center'}}>
                    <h2>There was a problem fetching the data from the DHIS2 API</h2>
                </div>
            )}
            {isFetching && (
                <div style={{textAlign: 'center'}}>
                    <p>Loading DHIS2 Dashboards...</p>
                </div>
            )}
        </>
    );
}

export default CardsList;
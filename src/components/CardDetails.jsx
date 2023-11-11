import { useState, useEffect } from 'react';

import classes from './CardDetails.module.css';
import CardDetailsItem from './CardDetailsItem';

function CardDetails({id, isFiltered}) {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    async function fetchCardDetails() {
        const response = await fetch('https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/' + id + '.json');
        const resData = await response.json();
        setCardDetails(resData.dashboardItems);
    }

    fetchCardDetails();
  }, []);

  return (
      <>
          {cardDetails.length > 0 && (
              <ul className={classes.details}>
                  {cardDetails.map(item => 
                    <CardDetailsItem key={item.id} 
                      type={item.type}
                      text={
                        item.type === 'TEXT' ? item.text : 
                        item.type === 'VISUALIZATION' ? item.visualization.name : 
                        item.type === 'MAP' ? item.map.name : null
                      }
                      isFiltered={isFiltered}
                    />
                  )}
              </ul>
              )}
          {cardDetails.length === 0 && (           
              <div style={{textAlign: 'center'}}>
                  <h2>There was a problem fetching the data from the DHIS2 API</h2>
              </div>
          )}
      </>
  );
}

export default CardDetails;
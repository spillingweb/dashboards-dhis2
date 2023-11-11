import classes from './CardDetailsItem.module.css'
import { BsFileBarGraph, BsGlobe2, BsGraphDown, BsFileText } from 'react-icons/bs';

function CardDetailsItem({type, text, isFiltered}) {
    const icon =    type === 'TEXT' ? <BsFileText /> :
                    type === 'VISUALIZATION' ? <BsGraphDown /> :
                    type === 'MAP' ? <BsGlobe2 /> : <BsFileBarGraph />;
    
    return (
        <li className={classes['list-el']}
            style={
                isFiltered === 'ALL TYPES' || isFiltered === type ? {display: 'block'} : {display: 'none'} 
            }
        >
            <p>{icon}</p>
            <p>{text}</p>
        </li>
    )
}

export default CardDetailsItem;
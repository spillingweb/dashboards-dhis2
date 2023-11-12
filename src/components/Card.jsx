import { useState } from 'react';
import { BsStar, BsStarFill, BsChevronDown, BsChevronUp } from 'react-icons/bs';

import classes from './Card.module.css';
import CardDetails from './CardDetails';

function Card({i, onToggleChange, displayName, id, isActive, isFiltered}) {

    // Check for starred cards in local storage
    function checkLocalStar() {
        return localStorage.getItem(`star-${id}`);
    }

    const [localStar, setLocalStar] = useState(checkLocalStar);

    function starClickHandler(filled) {
        if (filled) {
            setLocalStar(false);
            localStorage.removeItem(`star-${id}`);
        } else {
            setLocalStar(true);
            localStorage.setItem(`star-${id}`, true);
        }
    }

    return (
        <li className={classes.card} style={{border: isActive ? "2px solid dodgerblue" : null}}>
            <div className={classes.listHeader} onClick={(e) => onToggleChange(i, e)}>
                <h2 className={classes.display}>{displayName}</h2>
                <div>
                    <i className={classes.star}>
                        {localStar ?
                            <BsStarFill onClick={() => starClickHandler(true)} />
                            : <BsStar onClick={() => starClickHandler(false)} />
                        }
                    </i>
                    <i className={classes.chevron}>
                        {isActive ? <BsChevronUp /> : <BsChevronDown />}
                    </i>
                </div>
            </div>
                
            
            <div className={classes.content} style={{display: isActive ? "block" : "none"}}>
                <CardDetails id={id} isFiltered={isFiltered}/>
            </div>
        </li>
    );
}

export default Card;
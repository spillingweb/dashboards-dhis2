import { useState } from 'react';
import { BsStar, BsStarFill, BsChevronDown, BsChevronUp } from 'react-icons/bs';

import classes from './Card.module.css';
import CardDetails from './CardDetails';

function Card({i, onToggleChange, displayName, id, isActive, isFiltered, starredArray}) {

    // Check for starred cards in local storage
    function checkLocalStar() {
        return starredArray.includes(id);
    }

    const [localStar, setLocalStar] = useState(checkLocalStar);

    function starClickHandler(id) {
        if (localStar) {
            const arrayIndex = starredArray.indexOf(id);
            starredArray.splice(arrayIndex, 1);
            starredArray.length > 0 ?
                localStorage.setItem('starredDashboards', JSON.stringify(starredArray))
                : localStorage.removeItem('starredDashboards');
            setLocalStar(false);
        } else {
            starredArray.push(id);
            localStorage.setItem('starredDashboards', JSON.stringify(starredArray));
            setLocalStar(true);
        }
    }

    return (
        <li className={classes.card} style={{border: isActive ? "2px solid dodgerblue" : null}}>
            <div className={classes.listHeader} onClick={(e) => onToggleChange(i, e)}>
                <h2 className={classes.display}>{displayName}</h2>
                <div>
                    <i className={classes.star}>
                        {/* {localStar ?
                            <BsStarFill onClick={() => starClickHandler(true)} />
                            : <BsStar onClick={() => starClickHandler(false)} />
                        } */}
                                                {localStar ?
                            <BsStarFill onClick={() => starClickHandler(id)} />
                            : <BsStar onClick={() => starClickHandler(id)} />
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
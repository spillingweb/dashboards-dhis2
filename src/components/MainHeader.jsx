import classes from './MainHeader.module.css';

function MainHeader({ onFilter}) {
  const typesArray = ['All Types', 'Visualization', 'Map', 'Text', 'Messages'];

  return (
    <div className={classes['header-container']}>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          Dashboards
        </h1>
        <div className={classes.filter}>
          <label htmlFor="types">Filter Items </label>
          <select name="types" onChange={onFilter}>
            {typesArray.map((item) => (<option key={item} value={item.toUpperCase()}>{item}</option>))}
          </select>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;

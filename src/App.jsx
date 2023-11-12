import { useState } from 'react';

import MainHeader from "./components/MainHeader";
import CardsList from "./components/CardsList";

function App() {
    const [filteredType, setFilteredType] = useState('ALL TYPES');

    function filterTypeHandler(e) {
        setFilteredType(e.target.value);
    }

    return (
        <>
            <MainHeader onFilter={filterTypeHandler} />
            <main>
                <CardsList isFiltered={filteredType} />
            </main>
        </>
    )
}

export default App;
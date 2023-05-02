import '../style.css';
import React, { useState } from "react";

export default function Search() {
    const itemList = [
        "Apple",
        "Orange",
        "Banana",
        "Cherry",
        "Milk",
        "Peanuts",
        "Butter",
        "Tomato"
    ];

    const [filteredList, setFilteredList] = useState(itemList);

    const filterBySearch = (event) => {
        const query = event.target.value;
        var updatedList = [...itemList];
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
    };

    return (
        <div className="App">
            <h1>Search Item Here</h1>
            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>
            <div id="item-list">
                <ul style={{ listStyle: 'none' }}>
                    {filteredList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

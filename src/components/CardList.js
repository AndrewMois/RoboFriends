import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return (<Card
            key={i}
            // key is needed for React to keep track of the elements. If one is deleted, it will know which one to delete. Otherwise it will delete all of them and do a full re-render
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email} />
        )
    });

    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;
// or we can do map directly in the return statement
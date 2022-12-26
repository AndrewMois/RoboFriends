import React from "react";

const SearchBox = ({searchfield, searchChange }) => {
    return (

    <div className="pa2">
        <input className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots" 
        onChange={searchChange}/>
        
    </div>
/* seacrhChange is just a prop that leads to parent App and that's how we communicate */
    );
}

export default SearchBox;
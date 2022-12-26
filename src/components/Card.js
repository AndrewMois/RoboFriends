import React from 'react';
// needed to use JSX

const Card = (props) => {
    const { name, email, id } = props;
    // or we can destructure props in the function parameters and put { name, email, id } instead of props
    return (
        // <h1>Hello</h1>
        // Only one element can be returned from a component

        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

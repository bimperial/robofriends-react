import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='dib tc bg-lightest-blue br3 pa3 ma2 grow bw2 shadow-2'>
            <img alt='robots' src={`http://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;
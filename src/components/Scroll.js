import React from 'react';

const Scroll = (props) => {
   return(
      <div className='pa4' style={{overflowY: 'scroll', border: '2px solid #999999', height: '640px'}}>
         {props.children}
      </div>
   );
};

export default Scroll;
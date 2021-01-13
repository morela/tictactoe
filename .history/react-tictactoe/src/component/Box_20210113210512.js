import React from 'react';

function Box({value,onClick}){

return (
<button
style={style}
onClick={onClick}>
    {value}
</button>

);

}
export default Box;
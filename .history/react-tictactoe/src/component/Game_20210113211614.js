import React, {useState} from 'react';
import Layout from './Layout';

const style = {
width: '200px',
margin: '20px auto',
}

const pStyle = {
    color: 'green'
}

function Game() {
return (
<React.Fragment>
<Layout boxes={layout} />
<div style={styles}>
<p style ={pStyle}> The winner goes here</p>
</div>

</React.Fragment>


)

}
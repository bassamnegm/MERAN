import React from 'react'

function Text({ text }) {
    console.log("text" + text);
    return (
        <h1>{text}</h1>
    )
}

export default React.memo(Text);
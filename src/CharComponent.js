import React from 'react'
import PropTypes from 'prop-types'

const style = {
    display: "inline-block",
    padding: 16,
    textAlign: 'center',
    margin: 16, 
    border: "1px solid black"
}

function CharComponent({char, click}) {
    return (
        <div style={style} onClick={click}>
            {char}
        </div>
    )
}

CharComponent.propTypes = {

}

export default CharComponent


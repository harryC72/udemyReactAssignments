import React from 'react'
import PropTypes from 'prop-types'

function ValidationComponent({length}) {
    if(length > 5){
        return (
            <div>
                <p>The word is to long</p>
            </div>
        )
    }else if(length === 5){
        return (
            <div>
                <h1>The word is perfect!</h1>
            </div>
        )
    }else{
        return (
            <div>
                <p>The word is to short</p>
            </div>
        )
    }  
}

ValidationComponent.propTypes = {

}

export default ValidationComponent


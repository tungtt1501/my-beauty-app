import React from 'react'
import './FormError.css'

function FormError(props) {
    /* nếu isHidden = true, return null ngay từ đầu */
    if (props.isHidden) { return null;}

    return ( <div className={'error'}>{props.errorMessage}</div>)
}

export default FormError;

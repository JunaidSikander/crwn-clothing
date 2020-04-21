import React from "react";

import './form-input.styles.scss'

const FormInput = ({label, onChange, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={onChange} {...otherProps}/>
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrinks' : ''}  form-input-label`}>
                    {label}
                </label>)
                : null
        }
    </div>
);

export default FormInput
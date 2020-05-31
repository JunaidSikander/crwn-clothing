import React from 'react';

import {GroupContainer, FormInputContainer, FormInputLabel} from './form-input.styles'

const FormInput = ({ onChange, label, ...props }) => (
    <GroupContainer>
        <FormInputContainer onChange={onChange} {...props} />
        {label ? (
            <FormInputLabel className={props.value.length ? 'shrink' : '' }>
                {label}
            </FormInputLabel>
        ) : null}
    </GroupContainer>
);

export default FormInput;
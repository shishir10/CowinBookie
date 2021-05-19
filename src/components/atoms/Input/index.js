import React from 'react';
import {Input as AntdInput, InputNumber as AntdInputNumber } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import InputProps from './props';

const { TextArea, Search, Password } = AntdInput;

const Input = ({type,placeholder, ...props}) => {
    const allProps = {...props};
    const [t] = useTranslation('common');
  
    return (       
        <>
            {type === InputProps.type.text && <AntdInput {...allProps} autoComplete="off" placeholder={placeholder || t('message.pleaseEnter')} />}
            {type === InputProps.type.number && <AntdInputNumber {...allProps} autoComplete="off" placeholder={placeholder || t('message.pleaseEnter')} type="number" />}
            {type === InputProps.type.textarea && <TextArea {...allProps} autoComplete="off" placeholder={placeholder || t('message.pleaseEnter')} />}
            {type === InputProps.type.search && <Search {...allProps} autoComplete="off" placeholder={placeholder || t('message.pleaseEnter')} />}
            {type === InputProps.type.password && <Password {...allProps} autoComplete="off" placeholder={placeholder || t('message.pleaseEnter')} />}
        </>
        
    );
};

Input.propTypes = {
    type: PropTypes.oneOf([InputProps.type.text, InputProps.type.number, InputProps.type.textarea, InputProps.type.search, InputProps.type.password]),
};
Input.defaultProps = {
    type: InputProps.type.text,
};

export default Input;
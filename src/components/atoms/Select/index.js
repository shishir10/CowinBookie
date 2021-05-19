import React, { useEffect }  from 'react';
import {Select as AntdSelect } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const { Option } = AntdSelect;

const Select = ({placeholder,options,onChange,optionValKey,optionLabelKey,mode}) => {
    const [t] = useTranslation('common');
    return (
        <AntdSelect
            mode={mode}
            showSearch
            placeholder={placeholder || t('message.pleaseSelect')}
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {options.map((val,index) => {
                let label = val[optionLabelKey];
                const optionProps = {key: val[optionValKey], value: val[optionValKey]};
                return (<Option {...optionProps}>{label}</Option>);
            })}
        </AntdSelect>
    );
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    optionValKey: PropTypes.string,
    optionLabelKey: PropTypes.string,
};
Select.defaultProps = {
    optionValKey: 'value',
    optionLabelKey: 'label',
};

export default Select;
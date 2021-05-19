import React from 'react';
import styled from 'styled-components';

const classNames = require('classnames');

const Wrapper = styled.div`
    width:100%;
    height:auto;
    background-color:white;
    display:flex;
    flex-wrap: wrap
    padding:10px;     
}`;


const Body = ({children}) => {
    const compClasses = classNames({
        body : true,
    });

    return (
        <Wrapper className={compClasses}>
            {children}
        </Wrapper>
    );
}

Body.propTypes = {};
Body.defaultProps = {};

export default Body;

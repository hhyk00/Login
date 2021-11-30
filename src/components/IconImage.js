import React from "react";
import styled from "styled-components/native";
import PropTypes from 'prop-types';
import { images } from "../Image";

const Icon=styled.Image`
    aspectRatio: 3;
`;

const IconImage=({type})=>{
    return (
        <Icon source={type}/>
    );
};

IconImage.prototype={
    type:PropTypes.oneOf(Object.values(images)).isRequired,
};

export default IconImage;
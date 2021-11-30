import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const IdInput = styled.TextInput`
    widtn:${({width})=>width-100}px;
    height:50px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius:10px;
    border:2px;
    font-size:12px;
`;

const PwdInput = styled.TextInput`
    width: ${({width})=>width-100}px;
    height:50px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius:10px;
    border:2px;
    font-size:12px;
`;

const Input = ({placeholder}) => {
    const width = Dimensions.get('window').width;
    return (
    <IdInput
        width={width}
        placeholder={placeholder}  
        placeholderTextColor="#d3d3d3" 
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
    />,
    <PwdInput 
        width={width}
        placeholder={placeholder}
        placeholderTextColor="#d3d3d3"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
    />
    );
};

export default Input;
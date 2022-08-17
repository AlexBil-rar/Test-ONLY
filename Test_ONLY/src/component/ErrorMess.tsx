import React from 'react';
import styled from 'styled-components';

interface Props {
    email: string;
}

const ErrorMess:React.FC<Props> = ({email}) => {
    return (
        <>
            <ErrorMessage>
                <Warning>
                    <Point>!</Point>
                </Warning>
                <ErrText>Пользователя {email} не существует </ErrText>
            </ErrorMessage>  
        </>
    );
};

const Warning  = styled.div({
    width: "20px",
    height: "20px",
    backgroundColor: "#FFC8C8",
    borderRadius: "50%",
    margin: "0 14px 0 20px",
    display: "flex",
    alignItems: 'center',
    justifyContent: "center"

})

const Point = styled.h4({
    color: "#EE6565",
    fontSize: "14px"
})

const ErrorMessage  = styled.div({
    width: "100%",
    height: "60px",
    display: 'flex',
    background: "#F5E9E9",
    border: '1px solid #E26F6F',
    borderRadius: "8px",
    alignItems: 'center'
})

const ErrText  = styled.p({
})

export default ErrorMess;
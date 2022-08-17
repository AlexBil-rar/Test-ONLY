import styled from 'styled-components';

const Container = ({children}: any) => {
    return (
        <Con>
            {children}
        </Con>
    );
};

const Con  = styled.div({
    display: "flex",
    width: "100%",
    height: '70vh',
    alignItems: "center",
    justifyContent: "center",
})

export default Container;
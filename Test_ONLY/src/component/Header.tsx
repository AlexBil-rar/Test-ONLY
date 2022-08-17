import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <Head>ONLY.</Head>
        </>
    );
};

const Head  = styled.h1({
    fontSize: "64px",
    display: 'flex',
    justifyContent: 'center',
    padding: "40px 0 0 0",
    margin: '0'
})

export default Header;
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../store/reducers/UserReducers';

const Home = () => {
  const user= useTypedSelector(state => state.user.userInfo.user)

  const dispatch = useDispatch()

    return (
        <>
            <Flex>
                <H1>Здравствуйте, <Span>{user.email}</Span></H1>
                <Button onClick={() => dispatch(logout())}>
                    Выход
                </Button>
            </Flex>
        </>
    );
};


const Flex  = styled.div({
    display: "grid",
    justifyItems: 'center'
})

const H1  = styled.h1({
    fontWeight: "normal"
})

const Span  = styled.span({
    fontWeight: "700"
})

const Button  = styled.button({
    height: "60px",
    width: "200px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    outline: "0",
    backgroundColor: "#F5F5F5",
    color: 'black',
    marginTop: "50px",
    cursor: 'pointer'
})


export default Home;
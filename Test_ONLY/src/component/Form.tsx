import React from 'react';
import {useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import styled from 'styled-components';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { fetchUsers } from '../store/action/user.action';
import ErrorMess from './ErrorMess';
import Checkbox from './Checkbox';

interface ISignIn {
    email: string;
    password: string;
}

interface StyleProps {
    color: string;
    className: string;
    dir: string
  }

const Forma: React.FC<StyleProps> = () => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const [email, setEmail] = React.useState<string>('')
    const { handleSubmit, control, formState: {errors}, setValue  } = useForm<ISignIn>();

    const {error} = useTypedSelector(state => state.user)

    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<ISignIn> = data => {
        setLoading(true)
        setTimeout(() => {
            dispatch(fetchUsers(data.email, data.password)) 
            setEmail(data.email)
            setLoading(false)
        }, 2000)
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
            {error &&  
                 <ErrorMess email={email}/>
            }
            <Label htmlFor="email">
                Логин
            </Label>
            <Controller
                rules={{required: "Обязательное поле"}}
                control={control}
                name="email"
                render={({ field }) => (
                    <>
                        <Input 
                            id="email"  
                            color={errors.email && 'red'}
                            type="text" 
                            onChange={(e) => field.onChange(e)}
                            value={field.value || "" }
                        />
                    </>
                )}
            />
            {errors.email && 
                <Error>
                    Обязательное поле
                </Error>
            }
            <Label htmlFor="password">
                Пароль
            </Label>
            <Controller
                rules={{required: "Обязательное поле"}}
                control={control}
                name="password"
                render={({ field }) => (
                    <Input 
                        color={errors.password && 'red'}
                        id="password" 
                        type="password" 
                        onChange={(e) => field.onChange(e)}
                        value={field.value || "" }
                    />
                )}
            />
            {errors.password && 
                <Error>
                    Обязательное поле
                </Error>
            }
            <Checkbox/>
            <Button
                className={loading ? '#99A9FF' : "#4A67FF"}
                dir={loading ? '': 'pointer'}
            >
                Войти
            </Button>
        </Form>
        </>
    );
};

const Form  = styled.form({
    width: "640px",
    display: 'flex',
    flexDirection: 'column',
})

const Error  = styled.p({
    fontSize: "16px",
    color: "red",
    display: "block",
    margin: "0",
    padding: "8px 0 0 0"
})

const Input  = styled.input`
    height: 60px;
    border-radius: 8px;
    border: 1px solid ${props => (props.color)};
    color:${props => (props.color)} ;
    outline: 0;
    background-color: #F5F5F5;
    font-size: 16px;
    padding: 21px 0px 20px 20px;
`

const Button  = styled.button`
    height: 60px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    outline: 0;
    background-color: ${props => (props.className)};
    color: #FFFF;
    margin-top: 40px;
    cursor: ${props => (props.dir)};
    font-weight: 700;
`

const Label  = styled.label({
    margin: "20px 0 10px 0"

})

export default Forma;
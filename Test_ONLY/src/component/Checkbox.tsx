import styled from 'styled-components';

const Checkbox = () => {
    return (
        <>
            <Indicator>
                <LabelCheck>
                    <InputChek   type="checkbox" />
                    <Span></Span> 
                    <p>Запомнить пароль</p>
                </LabelCheck>
            </Indicator>   
        </>
    );
};

const InputChek  = styled.input`
    display: none;
`

const Span  = styled.span`
    display: inline-block;
    width: 16px;
    alignsself: center;
    height: 16px;
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px #000;
    border-radius: 2px;
    vertical-align: middle;
    margin: 20px 17px 0 4px;
    padding: 0px;
`

const Indicator = styled.div`
  ${InputChek}:checked + ${Span} {
    background-color: #4A67FF;
  }
`

const LabelCheck  = styled.label({
    display: "flex",
    width: "28%",
    cursor: "pointer",
    alignItems: "end",
})

export default Checkbox;
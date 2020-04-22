import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const Div = styled.div`
    background-color: white;
    margin: 10px 10px 20px -100px;
    padding: 20px 10px 100px 10px;
    align-items: center;
`
const H1 = styled.h1`
    font-family: "Alfa Slab One", cursive;
    text-align: center;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    font-size: 60px;
    color: red;
`

const StyledButton = styled(Button)`
    margin: 10px 10px 15px 80px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(29, 85, 226);
`

const Req = function (){
    return(
        <Div id="req">
            <H1><b>Mínimos Requisitos</b></H1>
            <p>
            <StyledButton class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Ver Mas
            </StyledButton>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>

        </Div>
    );
}

export default Req;
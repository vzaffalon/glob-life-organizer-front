import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Card, AlignCenter, PrimaryButton, Row } from 'AppStyles';
import { MessageBoard } from 'models';

function MessageBoardListScreen(){
    let history = useHistory();

    const MessageBoardsList = () => {
        const [message_boards, setMessageBoards] = useState([]);

        const getMessageBoards = () => {
            MessageBoard.list().then( response => {
                setMessageBoards(response.data)
            })
        }
    
        useEffect(() => {
            getMessageBoards();
        },[]);  
    
            return message_boards.map((message_board) => {
                const { title, description } = message_board 
                return (
                    <div>
                        <MessageTitle>{title}</MessageTitle>
                        <MessageDescription>{description}</MessageDescription>
                        <MessageDivider></MessageDivider>
                    </div>)
            }
        )
    }

    const goToNewMessageBoardScreen = () => {
        history.push("/new_message_board")
    }

    return (
        <AlignCenter>
            <MenuCard>
                    <RowCenter>
                            <LeftMarginButton>
                                <ProjectTitle>Meu Mural</ProjectTitle>
                            </LeftMarginButton>
                            <LeftMarginButton>
                                <PrimaryButton onClick={(e) => goToNewMessageBoardScreen()}>Novo</PrimaryButton>
                            </LeftMarginButton>
                    </RowCenter>
                    <AlignCenter>
                        <LineDivider></LineDivider>
                    </AlignCenter>
                    <MessageBoardsList></MessageBoardsList>
            </MenuCard>
        </AlignCenter>
    );
}

const LeftMarginButton = styled.div`
    margin-left: 10px;
`

const RowCenter = styled(Row)`
    align-items: center;
    justify-content: center;
`


const MessageTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
`;

const MessageDescription = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 300;
    word-wrap: break-word;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
`;

const MessageDivider = styled.div`
    height: 1px;
    background-color: #f2f2f2;
`

const LineDivider = styled.div`
    width: 90%;
    height: 3px;
    background-color: #283c46;
`

const MenuCard = styled(Card)`
    padding: 15px;
    margin-top: 20px;
    min-height: 400px;
    min-width: 300px;
    max-width: 300px;

    @media(min-width: 800px) {
        margin-top: 40px;
        width: 600px;
        width: 800px;
        height: 800px;
    }
`

const ToolCard = styled(Card)`
        position: relative;
        width: 240px;
        height: 240px;
        margin: 2%;
        vertical-align: top;
        font-size: 1.1rem;
        line-height: 1.3;
        text-align: left;
        text-rendering: optimizeLegibility;
        word-wrap: break-word;
        background: #fff;
`;

const ProjectTitle = styled.div`
    font-size: 22px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ToolTitle = styled.div`
    font-size: 18px;
    color: #283C46;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default MessageBoardListScreen
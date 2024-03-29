import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    console.log(messagesRef);

    useEffect(() => {
        const div = messagesRef.current;
        console.log(div);

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])

    return (
        <Container>
            <Messages>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Guilherme Rodz"
                        date="21/06/2020"
                        content="Hoje é meu aniversário"
                    />
                ))}

                <ChannelMessage
                    author="Diego Fernandes"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Guilherme Rodz</Mention>, me carrega no Lol e CS de novo por favor?
                            me carrega no Lol e CS de novo por favor?,me carrega no Lol e CS de novo por favor?
                            , mecarrega no Lol e CS de novo por favor?, mecarrega no Lol e CS de novo por favor?, mecarrega no Lol e CS de novo por favor?
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;
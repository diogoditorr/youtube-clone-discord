import React from 'react';

import { Container } from './styles';
import Category from '../Category';
import ChannelButton from '../ChannelButton';


const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category name="💬 Canais de Texto"/>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />
            <ChannelButton channelName="gta-v" />

            <Category name="📢 Informação"/>
        </Container>

    )
}

export default ChannelList;
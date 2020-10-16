import React from 'react';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import colors from '../../styles/colors';

import { Container, Avatar, OnLineStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnLineStatus />        
      </Avatar>

      <RightSide>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black} />
        </Button>

        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black} />
        </Button>

        <Button>
          <Feather
            name="search"
            size={26}
            color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;

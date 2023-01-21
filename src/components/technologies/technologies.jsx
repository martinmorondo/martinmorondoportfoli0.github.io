import React from 'react';

import {
    TechnologiesHeader,
    TechnologiesIcons,
    TechnologyIcon,
} from './Technologies.styled';
import { iconsData } from './icons';

export const Technologies = () => {
    return (
        <>
            <TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader>

            <TechnologiesIcons>
            {iconsData.map((iconData) => {
            return (
                <TechnologyIcon
                key={iconData.id}
                src={iconData.icon}
                alt={iconData.name}
                title={iconData.name}
                {...iconData}
                />
            );
        })}
      </TechnologiesIcons>
        </>
    );
}

export default Technologies;

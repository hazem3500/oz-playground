import React from 'react';
import Root from '../src/components/Root/Root';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
};

export const decorators = [
    (Story) => (
        <Root>
            <Story />
        </Root>
    ),
];

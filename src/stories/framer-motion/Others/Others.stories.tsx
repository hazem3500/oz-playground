import { Center } from '@chakra-ui/core';
import React from 'react';
import Accordion from './Accordion.framer';
import Tabs from './Tabs.framer';

export default {
    title: 'framer-motion/others',
    decorators: [
        (Story) => (
            <Center minH="100vh">
                <Story />
            </Center>
        ),
    ],
};

export const accordion = () => <Accordion />;
export const tabs = () => <Tabs />;

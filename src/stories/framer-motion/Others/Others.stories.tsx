import { Center } from '@chakra-ui/react';
import React from 'react';
import Accordion from './Accordion.framer';
import PeopleGrid from './PeopleGrid.framer';
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
export const peopleGrid = () => <PeopleGrid />;

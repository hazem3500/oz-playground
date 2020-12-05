import { Box, Heading, HStack, Text, useToken } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';

function Tab({ title, color, selectTab, active, id }) {
    const [colorToken] = useToken('colors', [color], 'currentColor');
    return (
        <Box color={color} onClick={() => selectTab(id)} position="relative">
            <Heading>{title}</Heading>
            {active && (
                <MotionBox
                    layoutId="underline"
                    position="absolute"
                    bottom="-10px"
                    left="0"
                    right="0"
                    height={2}
                    initial={false}
                    animate={{
                        backgroundColor: colorToken,
                    }}
                />
            )}
        </Box>
    );
}

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(tabList[0].id);

    function changeActiveTab(id) {
        setActiveTab(id);
    }

    return (
        <AnimateSharedLayout>
            <HStack spacing={5}>
                {tabList.map(({ title, color, id }) => (
                    <Tab
                        id={id}
                        title={title}
                        color={color}
                        active={id === activeTab}
                        selectTab={changeActiveTab}
                    />
                ))}
            </HStack>
        </AnimateSharedLayout>
    );
}

const tabList = [
    {
        id: 'home',
        title: 'home',
        color: 'blue.400',
    },
    {
        id: 'product',
        title: 'product',
        color: 'red.400',
    },
    {
        id: 'about',
        title: 'about',
        color: 'green.400',
    },
    {
        id: 'blog',
        title: 'blog',
        color: 'purple.400',
    },
    {
        id: 'contact',
        title: 'contact',
        color: 'cyan.400',
    },
];

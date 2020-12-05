import { Center, Button, Box, Stack, HStack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';
import StyledMotionBox from '../../../components/StyledMotionBox/StyledMotionBox';
import { useAnimation } from 'framer-motion';

export default {
    title: 'framer-motion/basics',
    decorators: [
        (Story) => (
            <Center minH="100vh">
                <Story />
            </Center>
        ),
    ],
};

const template = (args) => <StyledMotionBox {...args} />;

export const basic = template.bind({});
basic.args = {
    animate: {
        scale: 2,
    },
};

export const keyFrames = template.bind({});
keyFrames.args = {
    animate: {
        scale: [0.2, 2, 1.5],
        rotate: [0, 380, 360],
        borderRadius: ['50%', '25px'],
        x: [0, -150, 0, 150, 0, 0],
        y: [-150, 0, 150, 0, -150, 0],
        backgroundColor: ['#FFBC42', '#34F6F2', '#1e90ff'],
    },
    transition: {
        duration: 1,
    },
};

export const Variants = () => {
    const [active, setActive] = useState(false);
    return (
        <StyledMotionBox
            initial="inactive"
            animate={active ? 'active' : 'inactive'}
            onClick={() => setActive(!active)}
            variants={{
                inactive: {
                    scale: 0.7,
                    rotate: 0,
                    backgroundColor: '#1e90ff',
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
                active: {
                    scale: 2,
                    rotate: 25,
                    backgroundColor: '#471eff',
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            textAlign="center"
            color="white"
            userSelect="none"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Heading>
                {'HEY!'.split('').map((letter, i) => (
                    <MotionBox
                        as="span"
                        verticalAlign="text-top"
                        display="inline-block"
                        variants={{
                            inactive: {
                                rotate: 0,
                                scale: 1,
                                textShadow: 'none',
                            },
                            active: {
                                rotate: 10,
                                scale: letter === '!' ? 1.6 : 1.1,
                                textShadow: '2px 2px #ff0000',
                            },
                        }}
                    >
                        {letter}
                    </MotionBox>
                ))}
            </Heading>
        </StyledMotionBox>
    );
};

export const ControlledAnimation = () => {
    const controls = useAnimation();

    const variants = {
        tiny: {
            scale: 0.5,
            rotate: -215,
            borderRadius: '50%',
            backgroundColor: '#D53F8C',
            x: -200,
        },
        normal: {
            scale: 1,
            rotate: 0,
            borderRadius: '25px',
            backgroundColor: '#1e90ff',
            x: 0,
        },
        bold: {
            scale: 1.5,
            rotate: 215,
            borderRadius: '25px',
            backgroundColor: '#805AD5',
            x: 200,
        },
    };

    return (
        <Stack align="center" spacing={16}>
            <StyledMotionBox
                initial="normal"
                variants={variants}
                animate={controls}
            />
            <HStack>
                <Button
                    size="lg"
                    colorScheme="pink"
                    onClick={() => controls.start('tiny')}
                >
                    Tiny
                </Button>
                <Button
                    size="lg"
                    colorScheme="blue"
                    onClick={() => controls.start('normal')}
                >
                    Normal
                </Button>
                <Button
                    size="lg"
                    colorScheme="purple"
                    onClick={() => controls.start('bold')}
                >
                    Bold
                </Button>
            </HStack>
        </Stack>
    );
};

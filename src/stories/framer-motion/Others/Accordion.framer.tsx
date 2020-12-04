import { Divider, Heading, Stack, Text } from '@chakra-ui/core';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';
import { IoIosArrowForward } from 'react-icons/io';

export default function Accordion() {
    return (
        <AnimateSharedLayout>
            <MotionBox
                layout
                boxShadow="xl"
                overflow="hidden"
                as={React.forwardRef(({ ...props }, ref) => (
                    <Stack
                        ref={ref}
                        as="ul"
                        spacing={0}
                        {...props}
                        divider={<MotionBox as={Divider} layout />}
                    />
                ))}
                bg="gray.100"
                borderRadius="10px"
                width="500px"
                maxW="70vw"
            >
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <Item key={i} />
                    ))}
            </MotionBox>
        </AnimateSharedLayout>
    );
}

function Item() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MotionBox
            layout
            p={5}
            _hover={{
                background: 'gray.200',
            }}
            sx={{
                transition: 'background 0.1s ease-in',
            }}
            bg="gray.100"
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            outline="none"
            _focusVisible={{
                background: 'gray.200',
            }}
        >
            <MotionBox
                layout
                transition={{ layoutX: { duration: 0 } }}
                as={Heading}
                size="lg"
                display="flex"
                justifyContent="space-between"
            >
                <span>Title</span>
                <MotionBox animate={{ rotate: isOpen ? 90 : 0 }}>
                    <IoIosArrowForward />
                </MotionBox>
            </MotionBox>
            <AnimatePresence>
                {isOpen && (
                    <MotionBox
                        as={Text}
                        layout
                        key="item-text"
                        paddingLeft={5}
                        variants={{
                            initial: {
                                y: -10,
                                opacity: 0,
                            },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.2,
                                },
                            },
                            exit: {
                                y: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.1,
                                },
                            },
                        }}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        mb={4}
                        onClick={(e) => e.stopPropagation()}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Odit rerum fuga, numquam quidem tenetur magni
                        corrupti culpa veritatis laborum quisquam optio fugiat
                        cumque, accusamus, facere qui facilis dolores officia
                        consectetur?
                    </MotionBox>
                )}
            </AnimatePresence>
        </MotionBox>
    );
}

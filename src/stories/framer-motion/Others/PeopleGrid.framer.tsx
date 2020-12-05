import {
    Avatar,
    Box,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    SimpleGrid,
    useToken,
    Heading,
    Grid,
    Text,
} from '@chakra-ui/react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';
import { userBuilder, User } from '../../../fakers';
import { IoIosMail } from 'react-icons/io';
import { Flex } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const users = Array.from({ length: 48 }).map(() => userBuilder());

function UserAvatar({
    user,
    selectHandler,
}: {
    user: User;
    selectHandler: (user: User) => void;
}) {
    return (
        <MotionBox
            layout
            variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
            borderRadius="full"
            cursor="pointer"
            onClick={() => selectHandler(user)}
            position="relative"
            whileHover="hover"
        >
            <MotionBox
                layoutId={`user-${user.id}`}
                as={Avatar}
                size="lg"
                src={user.avatar}
                name={user.name}
                zIndex={5}
            />
            <MotionBox
                layoutId={`user-background-${user.id}`}
                bg="gray.200"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                borderRadius="full"
                variants={{ hover: { scale: 1.3 } }}
            />
        </MotionBox>
    );
}

function UserModal({ user, onClose }) {
    return (
        <Modal isOpen={user} onClose={() => onClose()} isCentered size="xs">
            <ModalOverlay />
            <ModalContent backgroundColor="transparent" boxShadow="none">
                {user && (
                    <MotionBox
                        layoutId={`user-background-${user.id}`}
                        bg="gray.800"
                        p={5}
                        pt={20}
                        borderRadius="md"
                        position="relative"
                    >
                        <MotionBox
                            position="absolute"
                            top="0"
                            left="0"
                            right="0"
                            transform="translateY(-50%)"
                            display="flex"
                            justifyContent="center"
                        >
                            <MotionBox
                                layoutId={`user-${user.id}`}
                                as={Avatar}
                                size="2xl"
                                src={user.avatar}
                                name={user.name}
                                zIndex={5}
                            />
                        </MotionBox>
                        <Grid
                            justifyContent="center"
                            justifyItems="center"
                            gap={1}
                            marginTop="-10px"
                            color="gray.100"
                        >
                            <Heading size="md">{user.name}</Heading>
                            <Text fontSize="sm">{user.title}</Text>
                            <Text fontSize="xs">{user.email}</Text>
                        </Grid>
                    </MotionBox>
                )}
            </ModalContent>
        </Modal>
    );
}

export default function PeopleGrid() {
    const [selectedUser, setSelectedUser] = useState<User>();

    return (
        <AnimateSharedLayout type="crossfade">
            <MotionBox
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.015,
                        },
                    },
                }}
                initial="hidden"
                animate="visible"
            >
                <SimpleGrid columns={[2, 6, 8]} gap={{ base: 5, lg: 8 }}>
                    {users.map((user) => (
                        <UserAvatar
                            key={user.id}
                            user={user}
                            selectHandler={setSelectedUser}
                        />
                    ))}
                </SimpleGrid>
            </MotionBox>
            <UserModal
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
            />
        </AnimateSharedLayout>
    );
}

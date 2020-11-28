import React from 'react';
import MotionBox from '../MotionBox/MotionBox';

const StyledMotionBox = (props) => (
    <MotionBox
        height="100px"
        width="100px"
        bg="dodgerblue"
        borderRadius="25px"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...props}
    ></MotionBox>
);

export default StyledMotionBox;

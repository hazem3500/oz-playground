import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';

const variants = {
    box: {
        backgroundColor: '#1e90ff',
        clipPath:
            'polygon(25% 25%, 25% 25%, 25% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 75%, 75% 75% , 75% 75%, 25% 75%, 25% 75% ,25% 75%)',
    },
    triangle: {
        backgroundColor: '#FFBC42',
        clipPath:
            'polygon(50% 25%, 50% 25%, 50% 25%, 50% 25%, 75% 75%, 75% 75%, 75% 75%, 75% 75%, 25% 75%, 25% 75%, 25% 75%, 25% 75%)',
    },
    pentagon: {
        backgroundColor: '#5F00BA',
        clipPath:
            'polygon(50% 25%, 75% 45%, 65% 75%, 35% 75%, 25% 45%, 25% 45%, 25% 45% ,25% 45%, 25% 45%, 25% 45%, 25% 45%, 25% 45%)',
    },
    trapezoid: {
        backgroundColor: '#34F6F2',
        clipPath:
            'polygon(35% 25%, 65% 25%, 75% 75%, 25% 75%, 25% 75%, 25% 75%, 25% 75% ,25% 75%, 25% 75%, 25% 75%, 25% 75%, 25% 75%)',
    },
    parallelogram: {
        backgroundColor: '#FFEFD3',
        clipPath:
            'polygon(35% 25%, 85% 25%, 65% 75%, 15% 75%, 15% 75%, 15% 75%, 15% 75% ,15% 75%, 15% 75%, 15% 75%, 15% 75%, 15% 75%)',
    },
    rhombus: {
        backgroundColor: '#EE6352',
        clipPath:
            'polygon(50% 25%, 75% 50%, 50% 75%, 25% 50%, 25% 50%, 25% 50%, 25% 50% ,25% 50%, 25% 50%, 25% 50%, 25% 50%, 25% 50%)',
    },
    arrow: {
        backgroundColor: '#1e90ff',
        clipPath:
            'polygon(25% 35%, 55% 35%, 55% 25%, 75% 50%, 55% 75%, 55% 65%, 25% 65%, 25% 65%, 25% 65%, 25% 65%, 25% 65%, 25% 65%)',
    },
    star: {
        backgroundColor: '#FFBC42',
        clipPath:
            'polygon(50% 25%, 57% 41%, 75% 40%, 59% 53%, 70% 75%, 50% 62%, 30% 75%, 40% 53%, 25% 40%, 42% 41%, 42% 41%, 42% 41%)',
    },
    message: {
        backgroundColor: '#5F00BA',
        clipPath:
            'polygon(25% 25%, 75% 25%, 75% 60%, 60% 60%, 60% 75%, 50% 60%, 25% 60%, 25% 60%, 25% 60%, 25% 60%, 25% 60%, 25% 60%)',
    },
    frame: {
        backgroundColor: '#FFEFD3',
        clipPath:
            'polygon(25% 25%, 25% 75%, 35% 75%, 35% 35%, 65% 35%, 65% 65%, 35% 65%, 35% 75%, 75% 75%, 75% 25%, 75% 25%, 75% 25%)',
    },
    close: {
        backgroundColor: '#34F6F2',
        clipPath:
            'polygon(25% 16%, 10% 35%, 31% 54%, 15% 73%, 34% 90%, 50% 70%, 64% 88%, 84% 70%, 63% 51%, 81% 32%, 66% 16%, 49% 36%)',
    },
};
const variantNames = Object.keys(variants);

const ShapeShifter = () => {
    const [currentVariant, setCurrentVariant] = useState(variantNames[0]);

    function updateShape() {
        const currVariantIndex = variantNames.indexOf(currentVariant);
        setCurrentVariant(
            variantNames[
                currVariantIndex + 1 > variantNames.length - 1
                    ? 0
                    : currVariantIndex + 1
            ]
        );
    }

    return (
        <MotionBox
            h="lg"
            w="lg"
            initial={variantNames[0]}
            animate={currentVariant}
            variants={variants}
            transition={{
                ease: 'easeOut',
            }}
            onClick={updateShape}
        />
    );
};

export default ShapeShifter;

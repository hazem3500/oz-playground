import React, { useRef, useContext, useCallback } from 'react'
import styled from '@emotion/styled/macro';
import {css} from '@emotion/core'
import { useSpring, animated, interpolate } from 'react-spring';


const FoldContext = React.createContext({ content: '', scrollTop: 0 });

const Screen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  perspective: 20vw;
  transform-style: preserve-3d;
  width: 100%;
`;

const Align = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledFold = styled.div`
    overflow: hidden;
    width: 60%;
    height: 80vh;
    opacity: 0.8;
    margin: 0 auto;

    ${({ top }) =>
        top &&
        css`
            transform-origin: bottom center;
            transform: rotateX(-120deg);
            background: #dadada;
            position: absolute;
            transform-origin: bottom center;
            right: 0;
            left: 0;
            bottom: 100%;

            ${Align} {
                transform: translateY(100%);
            }
        `}

    ${({ bottom }) =>
        bottom &&
        css`
            transform-origin: top center;
            transform: rotateX(120deg);
            background: #dadada;
            position: absolute;
            transform-origin: top center;
            right: 0;
            left: 0;
            top: 100%;

            ${Align} {
                transform: translateY(-100%);
            }
        `}
`;

export default function FoldContainer({ content, children }) {
                   const containerRef = useRef();
                   const [{ scrollTop }, setScrollTop] = useSpring(() => ({
                       scrollTop: 0,
                   }));
                   const scrollHandler = useCallback(
                       (e) => {
                           setScrollTop({ scrollTop: e.target.scrollTop });
                       },
                       []
                   );

                   return (
                       <FoldContext.Provider value={{ content, scrollTop }}>
                           <div style={{ position: 'relative' }}>
                               <Screen>
                                   <Wrapper>{children}</Wrapper>
                               </Screen>
                               <div
                                   ref={containerRef}
                                   style={{
                                       overflow: 'auto',
                                       maxHeight: '100vh',
                                       position: 'relative',
                                   }}
                                   onScroll={scrollHandler}
                               >
                                   <div style={{ height: '300vh' }}></div>
                               </div>
                           </div>
                       </FoldContext.Provider>
                   );
               }


FoldContainer.Fold = function Fold({...props}) {
    const {content, scrollTop} = useContext(FoldContext)
    const interContent = scrollTop.interpolate(o => `translateY(-${o}px)`)
    return (
        <StyledFold {...props}>
            <Align>
                <animated.div style={{ transform: interContent }}>
                    {content}
                </animated.div>
            </Align>
        </StyledFold>
    );
}
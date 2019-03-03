import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const Panel = styled.div`
  position: absolute;
  width: ${({ size }) => (size ? `${size}px` : '200px')};
  height: ${({ size }) => (size ? `${size}px` : '200px')};
`;

const FrontPanel = styled(Panel)`
  color: #000;
  word-wrap: break-word;
  background: snow;
  transform: rotateY(0deg) translateZ(${({ size }) => (size ? `${size / 2}px` : '100px')});
`;

const BackPanel = styled(Panel)`
  background: snow;
  transform: rotateY(180deg) translateZ(${({ size }) => (size ? `${size / 2}px` : '100px')});
`;

const TopPanel = styled(Panel)`
  background: #959595;
  transform: rotateX(90deg) translateZ(${({ size }) => (size ? `${size / 2}px` : '100px')});
`;

const BottomPanel = styled(Panel)`
  background: #959595;
  transform: rotateX(-90deg) translateZ(${({ size }) => (size ? `${size / 2}px` : '100px')});
`;

const RightPanel = styled(Panel)`
  background: #d9d9d9;
  transform: rotateY(90deg) translateZ(${({ size }) => (size ? `${size / 2}px` : '100px')});
`;

const LeftPanel = styled(Panel)`
  background: #d9d9d9;
  transform: rotateY(-90deg) translateZ(${({ size }) => (size ? `${size / 2}px` : '100px')});
`;

const rotate = css`
  animation: rotate 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) alternate infinite;

  @keyframes rotate {
    from {
      transform: translateZ(-50px) rotateX(25deg) rotateY(0deg);
    }
    to {
      transform: translateZ(-50px) rotateX(180deg) rotateY(-180deg);
    }
  }
`;

const CubeParent = styled.div`
  width: ${({ size }) => (size ? `${size}px` : '200px')};
  height: ${({ size }) => (size ? `${size}px` : '200px')};
  position: relative;
  transform-style: preserve-3d;
  ${({ animation }) => (animation !== undefined ? animation : rotate)};
`;

const Cube = ({ animation, size, children }) => (
  <CubeParent animation={animation} size={size}>
    <FrontPanel size={size}>{children}</FrontPanel>
    <BackPanel size={size} />
    <RightPanel size={size} />
    <LeftPanel size={size} />
    <TopPanel size={size} />
    <BottomPanel size={size} />
  </CubeParent>
);

Cube.propTypes = {
  animation: PropTypes.instanceOf(Array).isRequired,
  size: PropTypes.number.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Cube;

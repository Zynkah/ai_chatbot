import styled from "styled-components";


export const SIconTitle = styled.p`
  position: absolute;
  left: 50%;
  top: 30%;
  font-size: 20px;
  transform: translate(-50%, -50%);
  display: none;
  color: #fdbd01;
  font-weight: bold;
  user-select: none;
  transition: all 0.3s ease;

`;

export const SIconWrapper = styled.div`
  position: relative;

  &:hover ${SIconTitle} {
    display: block;
  }
`;

export const SIconImage = styled.img`
  border-radius: 0.375rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.35;
    cursor: pointer;
    transform: scale(1.05);
  }
`;

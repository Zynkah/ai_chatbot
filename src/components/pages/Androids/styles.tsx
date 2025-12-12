import styled from "styled-components";
import { css } from "styled-components";

export const SGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // todo: adjust margin
  margin: 6.25rem;

  h2 {
    color: #fdbd01;
    font-size: 1.75rem;
  }
`;

const SSharedGridStyles = css`
  display: grid;
  background-color: #3a3a3a;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const SGridContainer = styled.div`
  ${SSharedGridStyles}
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const SSmallGridContainer = styled.div`
  ${SSharedGridStyles}
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
`;
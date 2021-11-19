import styled from 'styled-components';

export const UseCaseImage = styled.img`
  --initial-height: 600px;
  --initial-width: 70%;

  border-radius: 1rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.75);
  height: var(--initial-height);
  width: var(--initial-width);

  /* @media (max-width: 1280px) {
        height: calc(var(--initial-height) * 0.8);
        width: calc(var(--initial-width) * 0.8);
    }

    @media (max-width: 1024px) {
        height: calc(var(--initial-height) * 0.7);
        width: calc(var(--initial-width) * 0.7);
    }

    @media (max-width: 768px) {
        margin: 1.5rem 0;
        width: 90%;
        height: auto;
    } */
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  [class^='number-slide'],
  [class*=' number-slide'] {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    height: 100%;
  }

  .number-slide1 {
    background: transparent;
    /* background: rgb(64, 175, 255); */
    /* background: linear-gradient(
            128deg,
            rgba(64, 175, 255, 1) 0%,
            rgba(63, 97, 255, 1) 100%
        ); */
  }

  .number-slide2 {
    background: transparent;
  }

  .number-slide3 {
    background: transparent;
  }

  .number-slide4 {
    background: transparent;
  }

  .number-slide5 {
    background: transparent;
  }
  .number-slide6 {
    background: transparent;
  }

  .navigation-wrapper {
    position: relative;
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: ${(props) => props.theme.accentColor};
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #060606;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

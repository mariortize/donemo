import * as React from 'react';

interface IArrow {
  disabled: boolean;
  onClick: React.MouseEventHandler;
}

export const ArrowLeft: React.FC<IArrow> = (props) => {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='#060606'
    >
      <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
    </svg>
  );
};

export const ArrowRight: React.FC<IArrow> = (props) => {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='#060606'
    >
      <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
    </svg>
  );
};

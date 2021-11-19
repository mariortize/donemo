import React from 'react';
import Tilt from 'react-parallax-tilt';
import { UseCaseImage } from './styles';

export interface ContentProviderProps {
  content: React.ReactNode;
}

export const ContentComponent = () => {
  const DATA = [
    {
      content: (
        <UseCaseImage
          src={
            'https://i.ibb.co/HX05d9k/temporary-lifeos.png' ||
            '/features/dark/workspace.png'
          }
        />
      ),
    },
    { content: 'The best' },
  ];

  return (
    <>
      {DATA.map((item, idx) => {
        const updatedIdx: number = idx + 1;
        return (
          <div
            key={idx}
            className={`keen-slider__slide number-slide${updatedIdx}`}
          >
            {item.content}
          </div>
        );
      })}
    </>
  );
};

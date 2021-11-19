import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';
import 'keen-slider/keen-slider.min.css';
import { Wrapper } from './styles';
import { ArrowLeft, ArrowRight } from './Helper';
import { ContentComponent } from './Content/Content.provider';

export default function GalleryFlow() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <Wrapper>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <ContentComponent />
        </div>
        {slider && (
          <>
            <ArrowLeft
              // @ts-expect-error ignore lines below.
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              // @ts-expect-error ignore lines below.
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {/* {slider && (
        <div className='dots'>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            );
          })}
        </div>
      )} */}
    </Wrapper>
  );
}

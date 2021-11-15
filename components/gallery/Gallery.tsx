import React from 'react';
import SlideshowWithPagination from 'react-slideshow-with-pagination';

const CARDS_DETAILS = [
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
  { image: '/placeholder.jpeg', title: 'The best' },
];

const Slideshow = () => {
  return (
    // Slideshow with preset card features along with pagination and arrow buttons
    <>
      <SlideshowWithPagination
        options={CARDS_DETAILS}
        showNumbers={true}
        showDots={true}
        showArrows={true}
        numberOfCardsPerScreen={3}
        showOneCardForWidthLower='sm'
        slideshowContainerMaxWidth={false}
        cardWidth={500}
        cardHeight={300}
      />
    </>
  );
};

export default Slideshow;

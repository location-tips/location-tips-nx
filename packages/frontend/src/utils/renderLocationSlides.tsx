import { TLocationInResult } from '@types';

export default function renderLocationSlides(
  location: TLocationInResult
): JSX.Element[] {
  const mainPicture = (
    <img draggable={false} src={location.images.medium} alt={location.title} />
  );

  const renderRestPictures = location.nearest.map((nearest, index) => {
    return (
      <img
        draggable={false}
        key={index}
        src={nearest.images.medium}
        alt={nearest.title}
      />
    );
  });

  const slides = [mainPicture, ...renderRestPictures];

  return slides;
}

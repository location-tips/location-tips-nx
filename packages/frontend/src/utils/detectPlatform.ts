export type Platform = 'web-desktop' | 'web-mobile' | 'web-tablet';

export const detectPlatform = (): Platform => {
  const documentWidth = document ? document.documentElement.clientWidth : 0;
  const windowWidth = window ? window.innerWidth : 0;
  const viewportWidth = Math.max(documentWidth, windowWidth);

  if (viewportWidth <= 900) {
    return 'web-mobile';
  } else if (viewportWidth > 900 && viewportWidth < 1440) {
    return 'web-tablet';
  } else {
    return 'web-desktop';
  }
};

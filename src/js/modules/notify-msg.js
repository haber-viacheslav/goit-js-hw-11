import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const notifyFailureMessage = () => {
  return Notify.failure('Oops, there is no country with that name', {
    opacity: 0.8,
    position: 'center-top',
    timeout: 300,
    cssAnimationDuration: 800,
    backOverlay: true,
    backOverlayColor: 'rgba(50,198,130,0.2)',
    cssAnimationStyle: 'zoom',
  });
};

export const notifyInfoMessage = () => {
  return Notify.info(
    'Too many matches found. Please enter a more specific name.',
    {
      opacity: 0.8,
      position: 'center-top',
      timeout: 300,
      backOverlay: true,
      cssAnimationDuration: 800,
      backOverlayColor: 'rgba(255,85,73,0.2)',
      cssAnimationStyle: 'zoom',
    }
  );
};

import {
  AnimationReferenceMetadata,
  animate,
  animateChild,
  animation,
  group,
  query,
  style,
} from '@angular/animations';

export const slideLeft: AnimationReferenceMetadata = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
    }),
  ]),
  query(':enter', [style({ right: '-100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('1s ease-out', style({ right: '100%', opacity: 0 })),
    ]),
    query(':enter', [
      animate('1s ease-out', style({ right: '0%', opacity: 1 })),
    ]),
  ]),
  query(':enter', animateChild()),
]);

export const slideRight: AnimationReferenceMetadata = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ]),
  query(':enter', [style({ left: '-100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('1s ease-out', style({ left: '100%', opacity: 0 })),
    ]),
    query(':enter', [
      animate('1s ease-out', style({ left: '0%', opacity: 1 })),
    ]),
  ]),
  query(':enter', animateChild()),
]);

export const transitionFade: AnimationReferenceMetadata = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  ]),
  query(':enter', [style({ bottom: '100%', opacity: 0 })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('1s ease-out', style({ bottom: '100%', opacity: 0 })),
    ]),
    query(':enter', [
      animate('1s ease-out', style({ bottom: '0%', opacity: 1 })),
    ]),
  ]),
  query(':enter', animateChild()),
]);

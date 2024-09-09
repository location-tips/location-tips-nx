import { CATEGORIES } from '@const';
import { LocationCategory } from '@types';

export const getCategory = (category: string): LocationCategory => {
  return (
    CATEGORIES.find((c) => c === category) || CATEGORIES[CATEGORIES.length - 1]
  );
};

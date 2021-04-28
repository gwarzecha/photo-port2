import React from 'react';
import PhotoList from '../PhotoList'
import { capitalizeFirstLetter } from '../../assets/utils/helpers';

// takes in currentCateogry, which is desctrutured from the props that is created
//using the categories arr. name and description are then destructured out of 
//currentCategory, and used to pull the values from each obj within the categories arr
//It is similar to using props as the argument, then props.name or props.description. 
function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid='h1tag'>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;
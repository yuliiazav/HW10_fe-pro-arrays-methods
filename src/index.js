import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */

const brandFilter = (brand) => {
 return goods.filter((good) => {
    return good.brand === brand;
  });
};


 /**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
   return goods.filter((good) => {
     return good.color === color;
   });
 };

/**
 * @param {string} model
 * @returns {*}
 */

const modelFilter = (model) => {
  return goods.filter((good) => {
    return good.model == model;
  })
};
/**
 * @param {number} memory
 * @returns {*}
 */

const memoryFilter = (memory) => {
  return goods.filter((good) => {
    return good.memory == memory;
  })
};
/**
 * @param {number} price
 * @returns {*}
 */

const priceFilter = (price) => {
  return goods.filter((good) => {
    return good.price == price;
  })
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter((good) => {
   return good.country == country;
  })
};

/**
 * @param {string} os
 * @returns {*}
 */

const osFilter = (os) => {
  return goods.filter((good)=> {
    return good.os == os;
  })
};
/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((good) => {
    if (good.price >= from && good.price < to)
      return good;
  })
};

const minPriceReducer = () => {
  return goods.reduce((accum, good) => {
    return Math.min(accum, good.price);
  }, 0)
};
console.log(minPriceReducer);


const maxPriceReducer = () => {
  return goods.reduce((accum, good) => {
    return Math.max(accum, good.price);
  }, 0)
};

console.log(maxPriceReducer);


const toMaxSorter = () => {
  return goods.sort((a, b) => {
    return b.price - a.price;
  });
};
//console.log(toMaxSorter());

const toMinSorter = () => {
  return goods.sort((a, b) => {
    return a.price - b.price;
  });
};
 //console.log(toMinSorter());


export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};

// import ReactPixel from 'react-facebook-pixel';

// import { translations } from '../translations';

/*
*    Global method (saveLocalStorage, getLocalStorage & removeLocalStorage, getAllArchive). use these *    helper method to store, get and remove, getAllArchive the value from localstorage.
*/

export const saveLocalStorage = (key, values) => {
  var data = [];
  data.push(values);
  localStorage.setItem(key, JSON.stringify(data));
};


export const getLocalStorage = (key) => {
  var data = JSON.parse(localStorage.getItem(key));
  if (typeof data !== 'undefined' && data !== null && typeof data[0] !== 'undefined') {
    return data[0];
  }
  return [];
};

/**
 * @description: Delete data from local storage
 *  1. if key is string, remove that key only from localStorage
 *  2. if key is array, remove all array value from localStorage
 */
export const removeLocalStorage = (keys) => {
  if (typeof keys ===  'string') {
    localStorage.removeItem(keys);
  } else if ( Array.isArray(keys) && keys.length > 0 ) {
    keys.map(key => {
      localStorage.removeItem(key);
    });
  }
};

export const getAllArchive = () => {
  var archive = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while ( i-- ) {
    archive.push(
      {
        [keys[i]]: localStorage.getItem(keys[i])
      }
    );
  }
  return archive;
};

export const saveSessionStorage = (key, values) => {
  var data = [];
  data.push(values);
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getSessionStorage = (key) => {
  var data = JSON.parse(sessionStorage.getItem(key));
  if (typeof data !== 'undefined' && data !== null && typeof data[0] !== 'undefined') {
    return data[0];
  }
  return [];
};

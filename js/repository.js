/* eslint-disable no-console */
/* eslint-disable eqeqeq */
// eslint-disable-next-line import/named
// eslint-disable-next-line no-unused-vars
import Photographe from './model/photographe';

/**
 *
 * @returns {Promise|any}
 */
async function reader() {
  try {
    const response = await fetch('./js/data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getAll = async () => {
  const data = await reader();
  return data;
};
export const getPhotographers = async () => {
  const data = await reader();
  return data.photographers;
};
export const getMediaByPhotographer = async (id) => {
  const data = await reader();
  const medias = data.media.filter((item) => item.photographerId == id);
  return medias;
};

/**
 * @param {number} id ,
 * @returns {Promise<Photographe>}
 */
export const getPhotographer = async (id) => {
  const data = await reader();
  const photographe = data.photographers.find((user) => user.id == id);
  return photographe;
};

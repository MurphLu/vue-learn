import * as axios from 'axios';

import { API } from './config.js';

const getHeros = async function() {
  const response = await axios.get(`${API}/heros.json`);
  const heroes = response.data
  return heroes
}

export const data = {
  getHeros
}
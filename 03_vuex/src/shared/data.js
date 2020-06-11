import * as axios from 'axios';

import { API } from './config.js';

const getHeroes = async function() {
  try {
    const response = await axios.get(`/${API}/heros.json`);
    const heroes = parseResponse(response);
    return heroes;
  } catch (error) {
    console.log("================== start == get response with error ==========================")
    console.log(error);
    console.log("==================  end  == get response with error ==========================")
  }
}

const parseHeroList = response => {
  let data = parseResponse(response)
  let list = data
  if (typeof list != 'object') {
    list = []
  }
  return list
}

const parseResponse = response => {
  if (response.status != 200) throw Error(response.message);
  return response.data;
}

export const dataService = {
  getHeroes
}
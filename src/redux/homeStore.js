import { createSlice } from '@reduxjs/toolkit';
import nextId from 'react-id-generator';

const initialState = [];

const homeInfo = createSlice({
  name: 'home',
  initialState,
  reducers: {
    initial(state, action) {
      const characters = action.payload.map((item) => ({
        names: item.name,
        image: item.image,
        actorName: item.actor,
        house: item.house,
        patronus: item.patronus,
        wand: item.wand.core,
        dateOfBirth: item.dateOfBirth,
        hairColour: item.hairColour,
        eyeColour: item.eyeColour,
        id: nextId(),
      }));
      return characters;
    },

    character(state, action) {
      const item = action.payload;
      return {
        names: item.name,
        image: item.image,
        actorName: item.actor,
        house: item.house,
        patronus: item.patronus,
        wand: item.wand,
        dateOfBirth: item.dateOfBirth,
        hairColour: item.hairColour,
        eyeColour: item.eyeColour,
        id: item.id,
      };
    },

    filter(state, action) {
      const characters = action.payload.map((item) => ({
        names: item.names,
        image: item.image,
        actorName: item.actorName,
        house: item.house,
        patronus: item.patronus,
        dateOfBirth: item.dateOfBirth,
        hairColour: item.hairColour,
        eyeColour: item.eyeColour,
        id: item.id,
      }));
      return characters;
    },
  },
});

export const { actions } = homeInfo;

const api = 'http://hp-api.herokuapp.com/api/characters';

export const fetchData = () => async (dispatch) => {
  const fetchingData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  };
  try {
    const testdata = await fetchingData();
    dispatch(actions.initial(testdata));
  } catch (error) {
    console.log(error);
  }
};

export default homeInfo;

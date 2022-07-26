import { createSlice } from '@reduxjs/toolkit';

const initialState = []; 

const homeInfo = createSlice ({
  name: 'home',
  initialState,
  reducers: {
    initial(state, action) {
        const characters = action.payload.map((item) => ({
        names: item.name,
        image: item.image,
        actorName: item.actor,
      }));
      return characters
    },
    // characters(state, action) {
    //   const characters = action.payload.map((item) => ({
    //     names: item.name
    //   }));
    // }
  }
})

export const actions = homeInfo.actions;

const api = 'http://hp-api.herokuapp.com/api/characters'

export const fetchData = () => async (dispatch) => {
  const fetchingData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  };
  try {
    const testdata = await fetchingData()
    // console.log(testdata);
    dispatch(actions.initial(testdata));
  } catch (error) {
    console.log(error);
  }
};

export default homeInfo;
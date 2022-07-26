import {configureStore} from '@reduxjs/toolkit';
import homeInfo from './homeStore'

const store = configureStore({
  reducer: { card:  homeInfo.reducer}
})

export default store;

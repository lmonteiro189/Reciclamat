import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Moldes(redux)/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});

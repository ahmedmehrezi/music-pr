import { configureStore,} from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import playerReducer from '../features/playerSlice';
import { shazanCoreApi } from '../services/shazamCore';
export const store = configureStore({
  reducer: {
    [shazanCoreApi.reducerPath]: shazanCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazanCoreApi.middleware)
});

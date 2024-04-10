import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { setLocalStorage } from '@Utils/localStorage'

const store = configureStore({
    reducer: rootReducer,
})

store.subscribe(()=>{
    setLocalStorage('store', store.getState().favoriteReducer)
})

export default store
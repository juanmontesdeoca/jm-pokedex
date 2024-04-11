import { configureStore } from '@reduxjs/toolkit'
import trainer from './state/trainerSlice'


export default configureStore({
  reducer:{
    trainer
  }
})
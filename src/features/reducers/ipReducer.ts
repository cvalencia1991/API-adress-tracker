import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface defaultStateIp {

}

const initialState: defaultStateIp = {};

export const ipSlice =  createSlice({
  name: 'ipslice',
  initialState,
  reducers:{
    getIpInfo:(state,action:any)=>{
      return state
    }

  }
})


export const {getIpInfo} = ipSlice.actions



export default ipSlice.reducer

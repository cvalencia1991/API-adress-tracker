import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  IpAddressState,
  FetchIpAddressArgs,
  rejectValue,
} from "./ipGeoLocationTypes";
import { RootState } from "../store";

export const fetchIpAddress = createAsyncThunk<
  IpAddressState,
  FetchIpAddressArgs,
  rejectValue
>("ipAddress/fetch", async ({ ipAddress }, thunkAPI) => {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APP_API_KEY}&ipAddress=${ipAddress}`,
    );
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (typeof error === "string") {
      return thunkAPI.rejectWithValue({ error });
    }
    return thunkAPI.rejectWithValue({ error: "Unknown error" });
  }
});

const initialState: IpAddressState = {
  ip: null,
  location: null,
  isp: null,
  loading: false,
};

const ipSlice = createSlice({
  name: "ipAddress",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIpAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIpAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.ip = action.payload.ip;
        state.location = action.payload.location;
        state.isp = action.payload.isp;
      })
      .addCase(fetchIpAddress.rejected, (state) => {
        state.loading = false;
        state.ip = null;
        state.location = null;
        state.isp = null;
      });
  },
});
const selectIpAddressLoading = (state: RootState) => state.ipaddress.loading;
const selectIpAddress = (state: RootState) => state.ipaddress;
export { selectIpAddress, selectIpAddressLoading };

export default ipSlice.reducer;

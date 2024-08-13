import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiOld = "https://bonusnumber1.com/api/brandsNew/read.php";
const apiNew = "https://bonusnumber1.com/api/brandsNew2/read.php";
const api1043 = "https://bonusnumber1.com/api/brandsNew3/read.php";
const api1044 = "https://bonusnumber1.com/api/brandsNew4/read.php";
const apiCLD_VIP = "https://bonusnumber1.com/api/brandsNew5/read.php";

const searchParams = new URLSearchParams(window.location.search);
searchParams.delete("brand");
const currentSource = searchParams.get("keyword");

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, thunkAPI) => {
    try {
      let source = "0";
      if (currentSource) {
        const match = currentSource.match(/(partner(_)?\d+|CLD_VIP)/);

        if (match) {
          source = match[0];
        } else {
          source = "0";
        }
      } else {
        source = "0";
      }

      let url;
      switch (source) {
        case "partner1039":
          url = apiNew; // Для partner1039
          break;
        case "partner1043":
          url = api1043; // Для partner1043
          break;
        case "partner1044":
          url = api1044; // Для partner1044
          break;
        case "CLD_VIP":
          url = apiCLD_VIP; // CLD_VIP
          break;
        case "partner1045":
          url = apiCLD_VIP; // CLD_VIP
          break;
        default:
          url = apiOld; // Для всех остальных случаев
      }

      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;

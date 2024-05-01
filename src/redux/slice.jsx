import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: '1',
      type: 'chair',
      title: 'NATURAL HARMONY: WOODEN FOLDING CHAIR',
      titleImage: '../../src/assets/first-chair.png',
      to: '/chair-card',
      images: ['../../src/assets/first-chair.png', '../../src/assets/123178.png', '../../src/assets/224926.png', '../../src/assets/225326.png',
              '../../src/assets/230408.png', '../../src/assets/233570.png', '../../src/assets/233880.png']
    },
    {
      id: '2',
      title: 'Glideride 2',
      titleImage: '../../src/assets/first-shoes.png',
      to: '/shoes-card',
      images: []
      }
  ],
  screenWidth: null
};
    
const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialState,
  reducers: {
    setScreenWidth:(state, action) => {state.screenWidth = action.payload},
  }
});

export const goodsReducer = goodsSlice.reducer;
export const { setScreenWidth } = goodsSlice.actions;
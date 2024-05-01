import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: '1',
      price: '2,280.00',
      newPrice: '1,890.90',
      smollDescription: 'This unique masterpiece is made of natural wood, which produces incredible textures and shades.',
      description: [
        'Wooden folding chair Natural Harmony is the embodiment of natural beauty and functionality. Made of high-quality wood, the chair is equipped with a convenient folding mechanism, which allows you to easily use it in any room or outdoors. With unparalleled textures and warm shades of wood, this chair creates an atmosphere of natural harmony and provides natural comfort for your moments of relaxation.',
        'Handcrafted in Ukraine, this selection can take up to 7 days to produce.All products are made from start to finish under fair trade conditions.',
        'This chair is best for indoor use.'
      ],
      title: 'NATURAL HARMONY: WOODEN FOLDING CHAIR',
      to: '/chair-card',
      color: 'yellow',
      yellow: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczOHcQPpXnUea-wsMujF23Sj4Ec0ZL6NWm6-L9pXllfYjZCmmk3dlmUdSXFqZR4MMpg32r4O3iEqQI_tIcFbnOEWYClt7m4J7EjOwLewtElx7GJPagtzB-XRyMYiJHWZIbHbjnAPeIWTirV77VIu7ZpJ_w=w800-h800-s-no-gm?authuser=0',
      images: [
        'https://lh3.googleusercontent.com/pw/AP1GczOHcQPpXnUea-wsMujF23Sj4Ec0ZL6NWm6-L9pXllfYjZCmmk3dlmUdSXFqZR4MMpg32r4O3iEqQI_tIcFbnOEWYClt7m4J7EjOwLewtElx7GJPagtzB-XRyMYiJHWZIbHbjnAPeIWTirV77VIu7ZpJ_w=w800-h800-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNpURYuv1p46YgS8iNfgYgiQRBLdY3IKfHMk1ou-kH0_BLy_q7xL5k4UopimcL-bMaWtN7iv8IqAcJAc12B1uc5qo_PuIaO5nJqmGxG0oXHYl4SCv1FlpWWt78ciX8y3z1kBUH3rco-S_8iSNidnfMT1Q=w1024-h768-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczPmjc8ylnoedOgSwAHtz_Ha62aDID1YSvNlQW4AqeUty-ZllbygRGnw-O_tboToeGh5aJg2VDuZLVUZXNIWaUwTl2wReEWomYY11_8x9LzzO3nvlS3y8MIVnJwjLvpq5_j3XDiFp-SNa_QSACdwK7V2EA=w1024-h768-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOV5NHtYHufDPxVEJxqXslQLEwKcXUhCymZ1gRdAEURzJNJPo_ypEs0bkLh4j4YxQ3XX1BEVXftbnvSAKkk5j378JxoXxrMKDij-xjCOY90JQwY79QqG6osOGJqb90RPZBid9f6gEXGi_F4rA9Ec19RNw=w744-h768-s-no-gm?authuser=0',
        ]
      }
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
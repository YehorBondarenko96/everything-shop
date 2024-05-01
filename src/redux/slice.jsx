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
      color: 'white',
      yellow: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczOHcQPpXnUea-wsMujF23Sj4Ec0ZL6NWm6-L9pXllfYjZCmmk3dlmUdSXFqZR4MMpg32r4O3iEqQI_tIcFbnOEWYClt7m4J7EjOwLewtElx7GJPagtzB-XRyMYiJHWZIbHbjnAPeIWTirV77VIu7ZpJ_w=w800-h800-s-no-gm?authuser=0',
        images: [
          'https://lh3.googleusercontent.com/pw/AP1GczOHcQPpXnUea-wsMujF23Sj4Ec0ZL6NWm6-L9pXllfYjZCmmk3dlmUdSXFqZR4MMpg32r4O3iEqQI_tIcFbnOEWYClt7m4J7EjOwLewtElx7GJPagtzB-XRyMYiJHWZIbHbjnAPeIWTirV77VIu7ZpJ_w=w800-h800-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczNpURYuv1p46YgS8iNfgYgiQRBLdY3IKfHMk1ou-kH0_BLy_q7xL5k4UopimcL-bMaWtN7iv8IqAcJAc12B1uc5qo_PuIaO5nJqmGxG0oXHYl4SCv1FlpWWt78ciX8y3z1kBUH3rco-S_8iSNidnfMT1Q=w1024-h768-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczPmjc8ylnoedOgSwAHtz_Ha62aDID1YSvNlQW4AqeUty-ZllbygRGnw-O_tboToeGh5aJg2VDuZLVUZXNIWaUwTl2wReEWomYY11_8x9LzzO3nvlS3y8MIVnJwjLvpq5_j3XDiFp-SNa_QSACdwK7V2EA=w1024-h768-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczOV5NHtYHufDPxVEJxqXslQLEwKcXUhCymZ1gRdAEURzJNJPo_ypEs0bkLh4j4YxQ3XX1BEVXftbnvSAKkk5j378JxoXxrMKDij-xjCOY90JQwY79QqG6osOGJqb90RPZBid9f6gEXGi_F4rA9Ec19RNw=w744-h768-s-no-gm?authuser=0',
        ]
      },
      white: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczMI7rfAVPLxtryccIUgvFpTojoAXkeNlEFSH2wsSySojpJcXGwAUZP-E9QfDsCc7VJS0OvCoAy0NPVWVMpspyWfFJvY37QDGtYXFewbRQZx58eaCphYECviwZ7_AaIk0_U4M6iBg-v1sLlQOe9fTYmt-Q=w800-h800-s-no-gm?authuser=0',
        images: [
          'https://lh3.googleusercontent.com/pw/AP1GczMI7rfAVPLxtryccIUgvFpTojoAXkeNlEFSH2wsSySojpJcXGwAUZP-E9QfDsCc7VJS0OvCoAy0NPVWVMpspyWfFJvY37QDGtYXFewbRQZx58eaCphYECviwZ7_AaIk0_U4M6iBg-v1sLlQOe9fTYmt-Q=w800-h800-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczP9mQI2AmBMe0TrXuFlICzVqWm1XmT9dLClvz5by19DAZA2oBz5Wv5PLvTA03ndU-xaq7NuO7WwGQxyS1RxxKKCh7rkxypIRgQVUF9MQ-isMiZWB-gku0po8PcCLDF5cYPhOPYaAeimPwS9upk7Z1JSAQ=w1024-h768-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczPcFgxox91Af89nE-4lhuLaa3DJ3lpn-BfM0pZoYbMxJk8sIgKUv4OyNTzqxEUsNn35h1VavV52-NXwnt5UxU3yqYTqtdXEtUeXP9a_0wH7FmfAGDL48wnD8SExHwwkcXZzDp1hvgIzWCjMMPsQVS5yZA=w1024-h768-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczMSaA6jacNJzQbTcsXInVIzAu_dXPIk0n74QtHha4vSKbAVkkPiq77upuwbr7bDoAH3XkQGrySJqq8qAR6tUdU11Zpu_FLJt1BBAPxUVVNBoS5eImsmIKEdYAlr6vxMrYcYvEZblc96d45zX1OPZ-6RdQ=w748-h768-s-no-gm?authuser=0'
        ]
      },
      green: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczOSd-cKATYzwzaN2tlDNcIgO56qm9XQiI8tz8vVkxncP_Y0tOIOrN2igqow0m1bG2y66UfhhtldkYWgDtq54TFtQCOVawXzbwVnrOuIjqpdLNDJ_nIaeRbuwX6P0G4IkinlVY4G8OFqBtpVWHmY8dcjMA=w800-h800-s-no-gm?authuser=0',
        images: [
          'https://lh3.googleusercontent.com/pw/AP1GczOSd-cKATYzwzaN2tlDNcIgO56qm9XQiI8tz8vVkxncP_Y0tOIOrN2igqow0m1bG2y66UfhhtldkYWgDtq54TFtQCOVawXzbwVnrOuIjqpdLNDJ_nIaeRbuwX6P0G4IkinlVY4G8OFqBtpVWHmY8dcjMA=w800-h800-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczMgM0_5WW5jFPsUwdwFaCRS0eJP_eiSCmywIyxzB9zxqDtJKRIfDYXv44gsl7WpupwFDZaPje_rpEJFdCpKSXCdSgit0kIaZATFMe5ENCyG3a0UQWDUQXEu41w3swGKoAqhogHMot08939XYcqd65pO2g=w1024-h768-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczNlSjpIvBrRrt02JlVclJfaoPwS9fNv-tMf0erw96RZsdWfrVtgElzxaxM7YJAo07iQpCVEYKmkS2cdCd0p61ZJNVy5MCEiKCVjNgw_qBFhAJazNx1DzjlF3mp03NJ86J-vGp1J4zv3wOfTePz9D1Mw1Q=w1024-h768-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczNoISmw0ML4pPSyjoT-UOGW5pmGWuc-r-ZM-jtpjC_JeNhuy_b7y4DMP2DOEbnKsiotledz1KzD9QCy3uH2eNB7fxPJC_545anD1UeV9IqiMOYLNz06TZmRgNtJV9zpo9dQ5ptX-rwRChkD8OTvQJ8Zzg=w748-h768-s-no-gm?authuser=0'
        ]
      },
      gray: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczOqP6Cedpzzt5f8GmSLjj-x_t3nMk_1a65IXuib0wdgV_JqZLLbeSyIG_5WZUHXRjuFIOXxyiq1UhrcDjZuJ7lunxBe11MwxQ-cH_GRhgYiAJbU0CDV7eUj7BgjxDGnIA9h_ot5dA_vyCnvHAhrZzANxQ=w800-h800-s-no-gm?authuser=0',
        images: [
          'https://lh3.googleusercontent.com/pw/AP1GczOqP6Cedpzzt5f8GmSLjj-x_t3nMk_1a65IXuib0wdgV_JqZLLbeSyIG_5WZUHXRjuFIOXxyiq1UhrcDjZuJ7lunxBe11MwxQ-cH_GRhgYiAJbU0CDV7eUj7BgjxDGnIA9h_ot5dA_vyCnvHAhrZzANxQ=w800-h800-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczPrDzUsIMnWplWohUZNMb7cjPoMxOAbSfpQYgv_rqKbH72n-fUcaVAr_PBO1IULYbu7eB18TcwcNSxz3wwrG59yq46YwMVVJsZWpyh3nM5My3UOTHIKKfLGJh7CvoNCkDEIK3-xvbk_jd2kMaV85jo7EQ=w1024-h768-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczOevrygWXZwobYdjW55fMPhoi7wZwkHjGkqUhgJrypuFk4Mkv_OdFZlN31hwpSyVvXgIu6hbr611eojLEVu9Lrjnb7GEZbwWD1wtKuVBGhNvXT6jyCTX_3-_c-5FEaHzFTb02jtNVzBtU6fv5fFY8p9Ig=w1024-h768-s-no-gm?authuser=0'
        ]
      }
    },
    {
      id: '2',
      title: 'Glideride 2',
      to: '/shoes-card',
      color: 'yellow',
      yellow: {
        titleImage: '../../src/assets/first-shoes.png',
        images: []
      },
      }
  ],
  screenWidth: null
};
    
const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialState,
  reducers: {
    setScreenWidth: (state, action) => { state.screenWidth = action.payload },
    setColor: (state, action) => { state.items.find(i => i.id === action.payload.id).color = action.payload.color}
  }
});

export const goodsReducer = goodsSlice.reducer;
export const { setScreenWidth, setColor } = goodsSlice.actions;
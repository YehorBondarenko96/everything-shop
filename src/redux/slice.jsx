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
      },
      size: {
        sizes: ['60CM X 48CM X 28CM', '54CM X 40CM X 24CM'],
        selectedSize: '60CM X 48CM X 28CM'
      }
    },
    {
      id: '2',
      title: 'Glideride 2',
      to: '/shoes-card',
      color: 'black',
      black: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczPJdrqLBvfB05G-sJwEThXJIYZ-v6hS9NE6TV9fOxMC6jNrFYIHcz2BjvFRL7gMwnM9pCbZlyRIJhwQWuJ9KObAFr0P4nscDG1Twp9mJs-YccNZMvG9VBkRS80w2TfbRDZUSpsQ1xdr5LqCS6mgwuBtxg=w472-h497-s-no-gm?authuser=0',
        images: [
          'https://lh3.googleusercontent.com/pw/AP1GczPJdrqLBvfB05G-sJwEThXJIYZ-v6hS9NE6TV9fOxMC6jNrFYIHcz2BjvFRL7gMwnM9pCbZlyRIJhwQWuJ9KObAFr0P4nscDG1Twp9mJs-YccNZMvG9VBkRS80w2TfbRDZUSpsQ1xdr5LqCS6mgwuBtxg=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczPxhZGa6HJVtgN7US2gs9dgEfCobNUbBiXWoWsSJIH2THZrhm9NsbwwuKFqX-1Xhw6lE9C5Z8ufGJ0yAGJ_SRkhCHaJwPkRAHwZw8RIZryKNxmlZkl4ScKbXDliDJuuKsbD1wGg212w93c_acGp46eHIQ=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczOvv2o8K-mFSDoMjPtulDjX4NkiCuvvEiSn3F5y10zo1V3BDeEkLH0mOSgs3FPEsVkrQ95XCY0PQIFzurNkRSgGH0gUp5CMnVNNTv8PdmmlVKlBwhR6AMYiQnbqB2pj6fSvbqCTvlxSPQsLoCVs6MEfsA=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczP-by892McTW0iPo3G65WygX4NAgpF7m4tqXSN_y8Ufnl4RCK3QqWX9W1hgwFWOuseBNHBKQtPcNJM6QlKjoY8zlPNWc3nutt6LLeIYvY6zZ15pG17uepTlEgZMncj8MLEgNPzAiW_j8SO5h-nl8l1F4g=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczNXUOTT7QcWlngYMxgf7dfN3WEoOisDnGpgy09lpwj6JJgRErzrE7SPN9wWVWqcBxuq_vIDu-ClEEowTA22bpJgkRIsPTJxxVrUN4sNDtblaZ11PR51AjLbB4E70Z2H1pY-IHPtuuvSdfiAALz4b9_mBA=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczOpLW5dzy8GY-eHrLVkxtcMptg8UjBuJvV129cV5t7GxO9FDXLwE_B5Cqlc8zuSI_S2V5_nCzavBv-qxnimYDf5NjTxaWtLBwY_UGGxATW3xdg8TEOruka8bEa3oV9BDfI3E2ySslhwmiOcWTrEcje0Kg=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczMqNhwAapdVk-_f2nJ-VSnJuH7KCJKRuJg-1f-E32dX1blhSlJIR1yCOs5bdhbwQzM21LV7Ju4sUKiYvjkKgH_O1Qmnx7aS2modWmipiYLpIhtTijfdvQZhb9GDRUUs8goHaaM1iBGjjLLPbGUglXILog=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczN3XWs96uE6Htj7Nj-ZjVtUk7drLLXvwDc48br0jl3KmlpT1OOy6dOVhgX3SJJBjYb9nGJKjr2jicVmbDbUI7n_GmvqV8oZhAqEvKR9bL44-W98TMEfCtX0ShijMuko_GcuUUSxzamcNPpIphupDgVShQ=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczONth2zyex1fvixDJiF8_R6niw_KlmnDBQdthymaN8b_iivGJWPrLhKXNf1_qqXhZwKfQP5LA3PGI5SnfyVBoLOhOkU1yOp-IeFFyKN1Wp6R-znpTZxcaAzJZ5xIHZhfgZqQEFpZvVDzWyaNcqou89zVA=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczMquX6zx7R1CEn8tcoT6iTqUUezIWh8ZGEUtMG4ZGTsU3eyXOioQYfiRKKov1yyLbfv8lELpyS4_AARX6IZadvingPu0AFZ9bKq4tVSopeM8yRLZ2TaWtwXLrsNZfAP2Q_YLOQTSTcbjH8LqRyD40_t7w=w472-h497-s-no-gm?authuser=0'
        ],
        sizes: ["41", "42", "43", "44", "45"],
        width: ["10.5", "11", "11.5", "12"]
      },
      blue: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczP8-KP_7B8NoyFpQpKJnzQAIlsYDgXJsUIU5JMkVRqN0UOfaPW8EXLB5zCAcVBBMHKWJoavXi4Eq7W6p3g-oRgDbEj37W7HubefSF_v1h6io_Sc8i66AG6712j6-EzQXmmGchZWbsfJ74lD8Jq1isjH9A=w472-h497-s-no-gm?authuser=0',
        images: [
          'https://lh3.googleusercontent.com/pw/AP1GczP8-KP_7B8NoyFpQpKJnzQAIlsYDgXJsUIU5JMkVRqN0UOfaPW8EXLB5zCAcVBBMHKWJoavXi4Eq7W6p3g-oRgDbEj37W7HubefSF_v1h6io_Sc8i66AG6712j6-EzQXmmGchZWbsfJ74lD8Jq1isjH9A=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczMfcXgRA_fYeiaFz6nYjeCihA84TOeKyuHp2pIB9FWpvslRKEktKRbSOkN5DGkRvtjAh_3M4yaboiqwsiy8twPYqBOpR7ettRScvWikb1n4-zc0cBP5wyuUoMQVjwM0foN8PKpY94xr-FbWap4fC2fzZg=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczPx8rFz0wL0HXQXpWQc90OzJ_V7nBYDGam-bQU10tgZO_aEoQzu2hxnNUeMWsYHhuPXwoqlc3ApvgH30RXMGw6pgVJuRdyphwmsEXx8kuWDzhGMNXAAGTOceyLc1_ccrfk2DCeK_hF4Eem_dftxtJ7MhA=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczOTGMYr_N-fWIhSoKzbknzZzXBrO2PFOgg5FchDDpSjbcsAlXkkNm9xwCzOQx9w4kWXS8xI1YloorNOsqYpFWwMRKgXUxjul8IAdZJi4ruNQykhklCd_QSsgZtyVLdW0qaAx1GQFuN_KwMq0rEzYXhLKQ=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczO5AdE5YWTwo0cDtxRgow-afh_c_tgyivzGEQkYFuUYczRagr5Cp2p0phNc4BJpAge-LngFxjuIOIUAKWj8aUpmkHoP8B40mOkhhALUxXTEUiQhs2XAW2oOfwqna-9Mmmcvspfbsvfvq4XY5crIbKc38Q=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczOD33n4NAbv0tmdPg4ocAkps4J3ay53nlToPdp5fwu0BxeyRHEBeljvYli1H6FDvsN-XeHT4ZZijiBHPzIENMntCUzk0tOn1637ERH8Avv8v9ExSYHp5-HvqTWL2btbZnDshEF5-WxMQoc7XbNXY1I-QQ=w472-h497-s-no-gm?authuser=0'
        ],
        sizes: ["38", "39", "41", "42", "43", "44"],
        width: ["10", "10.5", "11", "11.5"]
      },
      red: {
        titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczOS4snueYIsTgS4kuzV9oaBHJr57Qt6bvYDSBdspg2eSkAEeylfXsZTdM2PMBC4YJSK_JMDEqmm7EkRG3fOxK6Fz26aSSxb25Gx_jLQGADMw4scSm2-YvwfsTfSKL22dHVE47Ydk7cLlVujISK5WddXOg=w472-h497-s-no-gm?authuser=0',
        images: [
          'https://lh3.googleusercontent.com/pw/AP1GczOS4snueYIsTgS4kuzV9oaBHJr57Qt6bvYDSBdspg2eSkAEeylfXsZTdM2PMBC4YJSK_JMDEqmm7EkRG3fOxK6Fz26aSSxb25Gx_jLQGADMw4scSm2-YvwfsTfSKL22dHVE47Ydk7cLlVujISK5WddXOg=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczM3xHJ5DFOxf2T151m5VJStttvnmzc53DV21RF06F0ykDeJleFo8guu-3yaTqKSznKAgfA5_r6RRXKyvzaJhTb6RMGbfY8xc4Uan6-O49HU3yVh8f0CaoKBOZl_tzQ5Y-gb0Rb7kMHvq01BaiDbVkOFUg=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczMjhPLjp4xhd3ULpP6mNbT3RCJnUCJtNHMJh5Zcb42yZwgkOWNZa7Sm2We-uQ0T9URZHHnWbhmqO2Qo8-J97aENXkMRiGqUDbL7Ne2mslsAWq5vfGHday48oTV65a0USA1ULL8pTsGRR3xtR6gUqEBijA=w472-h497-s-no-gm?authuser=0',
          'https://lh3.googleusercontent.com/pw/AP1GczNK5EQxmR5s0zMzHAs58CPL6i6gbbkTxvirQyTRWTsDhrWbTWXjWL4knh4MneUluAHN1EiesB_1DuD-F5LWH-5j-hDsO45QtCdAoPYI6mF2uCJibtSdff_XwTeiKKmvyT41_iWVinY0zNDyMNt6OYVbqw=w472-h497-s-no-gm?authuser=0'
        ],
        sizes: ["36", "37", "38", "39", "41", "42"],
        width: ["9", "9.5", "10", "10.5"]
      },
      description: "Zoom's super-cushioned trainer returns with a facelift and all the bouncy goodness we’ve come to love. The third iteration boasts thicker stacks of ZoomX foam – the midsole material used in the Vaporfly and Alphafly racing shoes – than you’ll find anywhere else. The foam is lighter, softer and more responsive than other compounds, returning about 70% of energy with each footstrike. The previously thick (and hot) Flyknit upper has been replaced with a sleek version that breathes far better. Plus, all the bulky pillowing that lined the collar of the first two versions has gone. Our test team cherished them for recovery runs and easy jogs – the kind of running that should make up the majority of your mileage."
      }
  ],
  screenWidth: null,
  orderItems: []
};
    
const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialState,
  reducers: {
    setScreenWidth: (state, action) => { state.screenWidth = action.payload },
    setColor: (state, action) => { state.items.find(i => i.id === action.payload.id).color = action.payload.color },
    setSelectedSize: (state, action) => { state.items.find(i => i.id === action.payload.id).size.selectedSize = action.payload.size},
    setOrderItems: (state, action) => { state.orderItems.push(action.payload) },
    setTitleImage: (state, action) => {
      state.items.find(i => i.id === action.payload.id)[state.items.find(i => i.id === action.payload.id).color].titleImage = action.payload.titleImage;
    }
  }
});

export const goodsReducer = goodsSlice.reducer;
export const { setScreenWidth, setColor, setSelectedSize, setOrderItems, setTitleImage } = goodsSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: '1',
      type: 'chair',
      title: 'NATURAL HARMONY: WOODEN FOLDING CHAIR',
      titleImage: 'https://lh3.googleusercontent.com/pw/AP1GczMQwkMbh6EMDYhLEOQTdUjsGCIW1oK-kJgmLEfFDPqAuOjVEkWQlLyOzkx6CwKoFrSRLDcEjxPxXIjvfPihLZ5pSyAScgDhHikcYPVANRz4sEbpuQBnTZdaIyNDfBMEoSfyGB9NlvY0fLPT22ieSYhrEw=w768-h1024-s-no-gm?authuser=0',
      to: '/chair-card',
      images: [
        'https://lh3.googleusercontent.com/pw/AP1GczMQwkMbh6EMDYhLEOQTdUjsGCIW1oK-kJgmLEfFDPqAuOjVEkWQlLyOzkx6CwKoFrSRLDcEjxPxXIjvfPihLZ5pSyAScgDhHikcYPVANRz4sEbpuQBnTZdaIyNDfBMEoSfyGB9NlvY0fLPT22ieSYhrEw=w768-h1024-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNbL4Wvi0yjZKSXEtW9TwmCj3IWAPbbMjL1zzrOAx3FAqymqaK-cF0unAr7zrMFSQyidNGFA0hSgHXjzyLT03I-WN5Ljnbg0FbOMFgHK_CRVf20MQvJZ1mDDN1rpudJ4EWX19apeKNDUuV7RtATsab4lg=w768-h1024-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMbe5WIF5luyorq4m4eh22WvWrl9mHIgrzAkqVHQTjStNaets_6BUV06eHnX-JJQUyjQpfgzV8QDBVlxvZqMB4yiKQLIInjTLhbJMA2M6XrIz93UgzeaQ835v1JsAJ4zRvIDfFzP4igJxgaD_jYq7L3RQ=w580-h1024-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczOpHIX_agv-g8RsF55jRROJgVqSRjWbJHcZ0a3sxfYvrkAkoszmPTFwKA5Ujzil-6AMNCVHlhd-WnVA8kHOZ2sNhm07Vcz9JePtxNGasF9DvUsTzsDxo-M_KDLaoMu_KHSmp_O4Ri0vsqADrlsv4QUgug=w740-h1024-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczPVlgSAsAQ40g1kBo6kpLhY7Dm8nX6JUwQtsF67XZioGk7A6LWrX93jFWwlSLaiOL51hIM1y7aqwLKvs1M24TUvhTSK8jBetFENHwsv603hpivbkudWhcmXPboTKGwaX_QW6lhu6aGN1faDXv9x0u3Qog=w954-h1024-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczMv7EsBlWhhTPC0zHRrGqUsr1IVQk_sl1DSkkm2rfIzuz2mb4NfoDN3WLnYlSdzW9h3KHnoUW5LAsoJW57SJ1QI5dEBedb1VDmYDIzVwYCGQyztH-r7UV9s20dlSvO9opZN5fIjqNuVbdB29wGRXLft4A=w764-h1024-s-no-gm?authuser=0',
        'https://lh3.googleusercontent.com/pw/AP1GczNiD-NgyQqAtbzED1wHgYtpdyF-v7U8znsqsOQRF4fNcb4mIyevdHLQVvDq40bFcIRzKvD_kYndPJfjNH_O1J1jNAb-gpqynJwLiawYLtB9IgvlXu0UQmfrCgUvP6lRQZ1ltXpNtzzzIoF1dvJ7ttXiAA=w768-h1024-s-no-gm?authuser=0'
      ]
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
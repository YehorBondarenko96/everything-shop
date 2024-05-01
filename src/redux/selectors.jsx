export const selectItems = state => state.goods.items;

export const selectScreenWidth = state => state.goods.screenWidth;

export const selectColorChair = state => state.goods.items.find(i => i.id === '1').color;

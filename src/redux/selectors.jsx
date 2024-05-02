export const selectItems = state => state.goods.items;

export const selectScreenWidth = state => state.goods.screenWidth;

export const selectColorChair = state => state.goods.items.find(i => i.id === '1').color;

export const selectSizeChair = state => state.goods.items.find(i => i.id === '1').size;

export const selectTitleImageChair = state => state.goods.items.find(i => i.id === '1')[state.goods.items.find(i => i.id === '1').color].titleImage;
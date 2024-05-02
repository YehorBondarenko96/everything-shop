export const selectItems = state => state.goods.items;

export const selectScreenWidth = state => state.goods.screenWidth;

export const selectScreenHeight = state => state.goods.screenHeight;

export const selectColorChair = state => state.goods.items.find(i => i.id === '1').color;

export const selectSizeChair = state => state.goods.items.find(i => i.id === '1').size;

export const selectTitleImageChair = state => state.goods.items.find(i => i.id === '1')[state.goods.items.find(i => i.id === '1').color].titleImage;

export const selectColorShoes = state => state.goods.items.find(i => i.id === '2').color;

export const selectSizeShoes = state => state.goods.items.find(i => i.id === '2').size;

export const selectWidthShoes = state => state.goods.items.find(i => i.id === '2').width;

export const selectTitleImageShoes = state => state.goods.items.find(i => i.id === '2')[state.goods.items.find(i => i.id === '2').color].titleImage;

export const selectImagesShoes = state => state.goods.items.find(i => i.id === '2')[state.goods.items.find(i => i.id === '2').color].images;

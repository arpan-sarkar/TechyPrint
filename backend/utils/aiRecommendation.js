function recommendProducts(userHistory, products){

 return products.filter(p =>
  userHistory.includes(p.category)
 );

}

module.exports = recommendProducts;
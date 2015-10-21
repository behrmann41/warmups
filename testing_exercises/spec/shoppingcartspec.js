var Cart = require('../shoppingcart.js')
var cart;

describe('Cart', function(){

  beforeEach(function(){
    cart = new Cart()
  })
  
  describe('cart', function(){
    it('starts out with zero items', function(){
      expect(cart.listItems()).toEqual([])
    })
  })

  describe('add items', function(){
    it('can have items added to the cart', function(){
      cart.addItem("TV", 250)
      expect(cart.listItems()).toEqual([['TV', 250]])
    })
  })

  describe('remove item', function(){
    it('can have items removed from the cart',function(){
      cart.removeItem("TV", 250)
      expect(cart.listItems()).toEqual([])
    })
  })

  describe('total price', function(){
    it('can return the total price of all items in the cart', function(){
      cart.addItem('teddy bear', 15)
      cart.addItem('sofa', 900)
      cart.addItem('keyboard', 45)
      expect(cart.total()).toEqual(960)
    })
  })

  describe('discount', function(){
    it('cant take a percentage off the total price', function(){
      cart.addItem('TV', 300)
      cart.total()
      expect(cart.discount(20)).toEqual(240)
    })
  })
})

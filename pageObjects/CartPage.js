class CartPage{
    
    constructor(page){
        this.page = page;
        this.productName = page.locator("div[class='cartSection'] h3");     
        this.btn_checkout = page.locator("text=Checkout");
    }//constructor

    getProductName(){
        this.productName.waitFor();
        return this.productName;
    }

    getProductNameText(){
        this.productName.waitFor();
        return this.productName.textContent();
    }
   async removeProduct_FromCart(product_ToRemove){
       const cartCount =  await this.page.locator(".infoWrap").locator("h3").count()
       console.log('cartCount: '+cartCount);
       const removeProductLocator = this.page.locator(".infoWrap", {
    has: this.page.locator(`h3:text-is("${product_ToRemove}")`)
  })
  await removeProductLocator.locator(".fa.fa-trash-o").click();

    }

    async goToCheckoutPage(){
        console.log('Clicking on Checkout button')
        await this.btn_checkout.click();
    }
  
}//class

module.exports = {CartPage};
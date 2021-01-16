class goods{
    get price(){
        console.log(`Price is 3999~`);
    };
    set price(newPrice){
        console.log(`Price is ${newPrice}~`)
    }
}


let phone = new goods();
phone.price;
phone.price = '4999';

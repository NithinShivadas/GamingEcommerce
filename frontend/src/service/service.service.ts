import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  //------------Login Account---------------------------

  login(userEmail: any, password: any) {
    const logData = { userEmail, password };

    return this.http.post('http://localhost:3000/api/users/login', logData);
  }

  //-----------------Register account-------------------
  register(username:any,userEmail:any,password:any){
    const regdata={username,userEmail,password}
    return this.http.post('http://localhost:3000/api/users/signup', regdata);

  }


  //---------------Remove User-------------------------
  
  removeUser(id:any){
    return this.http.delete('http://localhost:3000/api/users/'+id)
  }

  //-------------------Admin's User Fetching-----------

  getUserData(){
    return this.http.get('http://localhost:3000/api/users/')
  }

  //------------Add product--------------------------
  addProduct(productName:any,Image:any,Description:any, Category:any,Price:any){
    const productdata={productName,Image,Description,Category,Price}
    return this.http.post('http://localhost:3000/api/admin/addproduct',productdata)
  }

  //------------------Get Products data---------------
  getProductData(){
    return this.http.get('http://localhost:3000/api/admin/')

  }

  //---------------Remove Product-----------------------
  removeProduct(id:any){
    return this.http.delete('http://localhost:3000/api/admin/'+id)
  }

//----------------------get product by id----------------
getProductDescription(id:any){
  return this.http.get('http://localhost:3000/api/admin/'+id)

}

//-----------------Add To Cart---------------------------
AddToCart(carts:any){
  return this.http.post('http://localhost:3000/api/cart/addcart',carts)
}

//--------------GET CART DATA------------------
getCartData(){
  return this.http.get('http://localhost:3000/api/cart/getcart')

}

//-----------Remove Cart Item------------------
removeCart(id:any){
  return this.http.delete('http://localhost:3000/api/cart/'+id)
}

//-----------------Add To Cart---------------------------
OderProduct(carts:any){
  return this.http.post('http://localhost:3000/api/order/addOrder',carts)
}

//--------------GET CART DATA------------------
getOrderData(){
  return this.http.get('http://localhost:3000/api/order/getOrder')

}

//-----------Remove Cart Item------------------
cancelOrder(id:any){
  return this.http.delete('http://localhost:3000/api/order/'+id)
}

}

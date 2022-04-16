import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header.jsx';
import ProductList from './Products/ListProduct.jsx';
import  ProductHome from './Products/productHome.jsx';
import CateHome from './Category/CateHome.jsx';

export default class AppRouter extends Component {

    AllProducts=[
        {id:1,name:"pc",price:1200,quentatiy:20,image:"1.jpg",code:123},
        {id:2,name:"mobile",price:4200,quentatiy:320,image:"2.jpg",code:763},
        {id:3,name:"tv",price:5200,quentatiy:204,image:"3.jpg",code:153},
        {id:4,name:"laptop",price:8200,quentatiy:620,image:"1.jpg",code:453},
        {id:5,name:"watches",price:1500,quentatiy:820,image:"2.jpg",code:763},
    ]

    AllCategory=[
        {id:1,name:"clothes",desc:"new clothes"},
        {id:2,name:"Electrions",desc:"new Eleec"},
        {id:3,name:"food",desc:"new food"},
    ]
render(){
    return(
        <>
       <Header/>
       <Route path='/' exact  component={(props)=>(<ProductHome {...props} _Products={this.AllProducts}/>)}/>
       <Route path='/product'   component={(props)=>(<ProductHome {...props} _Products={this.AllProducts}/>)}/>
       <Route path='/category' component={(props)=>(<CateHome {...props} _Cate={this.AllCategory}/>)}/>

       
      
       </>

    )
}
}
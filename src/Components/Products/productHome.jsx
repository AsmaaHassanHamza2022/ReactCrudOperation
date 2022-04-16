import React, { Component } from 'react';
import { Route,Link  } from 'react-router-dom';
import ProductList from './ListProduct.jsx';
import AddProduct from './AddProduct.jsx';
import Details from './Details.jsx';
import EditStudent from './EditProduct.jsx';



export default class ProductHome extends Component {

    state = {
        _Array:this.props._Products,
       
      };
    
    
    SaveData=(newProduct)=>{
    
        let colnedArray=this.state._Array;
        colnedArray.push(newProduct);
        
        this.setState({
            _Array: colnedArray,
            
           
          });
          this.props.history.push('/product/List');
        }


    SaveEdit =(updatedproduct)=> {
        console.log(updatedproduct);
        this.state._Array.forEach(element => {
          if(element.id==updatedproduct.id){
                element.id=updatedproduct.id;
                element.name=updatedproduct.name;
                element.price=updatedproduct.price;
                element.code=updatedproduct.code;
                element.quentatiy=updatedproduct.quentatiy;
                element.image=updatedproduct.image;
          }
          this.props.history.push('/product/List');
      });
      this.setState({
            EditFlag:false,
            
        });
    }
    

  
    render(){
      return(
        <>
        <div class="row">
        <div className='col-md-3' >
            <ul type="none">
               
                <li className='my-2 text-secondary'><Link to="/product/List" >List Product</Link></li>
                <li className='my-2 text-secondary'><Link to="/product/Add" >Add Product</Link></li>
            </ul>
        </div>
        <div className='col-md-8'>
            <Route path='/product/List' component={()=>(<ProductList _Products={this.props._Products}/>)}/>
            <Route path='/product/Add' component={()=>(<AddProduct _ProductsAdd={this.SaveData}/>)}/>
            <Route path='/product/Details/:id' component={(props)=>(<Details {...props}  _Products={this.props._Products} />)}/>
            <Route path='/product/Edit/:id' component={(props)=>(<EditStudent {...props}  _Products={this.props._Products} _UpdateDataRef={this.SaveEdit} />)}/>

        </div>
        </div>
        </>
      )
    }
}
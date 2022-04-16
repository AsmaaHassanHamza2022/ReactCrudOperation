import React, { Component } from 'react';
import { Route,Link  } from 'react-router-dom';
import CateList from './listCate.jsx';
import AddCate from './Addcate.jsx';
import Details from './Details.jsx';
import EditCate from './Editcate.jsx';



export default class CateHome extends Component {

    state = {
        _Array:this.props._Cate,
       
      };
    
    
    SaveData=(newProduct)=>{
    
        let colnedArray=this.state._Array;
        colnedArray.push(newProduct);
        
        this.setState({
            _Array: colnedArray,
            
           
          });
          this.props.history.push('/category/List');
        }


    SaveEdit =(updatedcate)=> {
     
        this.state._Array.forEach(element => {
          if(element.id==updatedcate.id){
                element.id=updatedcate.id;
                element.name=updatedcate.name;
                element.description=updatedcate.description;  
          }
          this.props.history.push('/category/List');
      });
      
    }
    

  
    render(){
      return(
        <>
        <div class="row">
        <div className='col-md-3' >
            <ul type="none">
               
                <li className='my-2 text-secondary'><Link to="/category/List" >List Cate</Link></li>
                <li className='my-2 text-secondary'><Link to="/category/Add" >Add Cate</Link></li>
            </ul>
        </div>
        <div className='col-md-8'>
            <Route path='/category/List' component={()=>(<CateList _Cate={this.state._Array}/>)}/>
            <Route path='/category/Add' component={()=>(<AddCate _ProductsAdd={this.SaveData}/>)}/>
            <Route path='/category/Details/:id' component={(props)=>(<Details {...props}   _Cate={this.state._Array} />)}/>
            <Route path='/category/Edit/:id' component={(props)=>(<EditCate {...props}   _Cate={this.state._Array} _UpdateDataRef={this.SaveEdit} />)}/>

        </div>
        </div>
        </>
      )
    }
}
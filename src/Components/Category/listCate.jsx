import { render } from '@testing-library/react';
import { isElementType } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import AddProduct from './Addcate';
// import AddAsClass  from './AddStudent.js';
// import Details from './Details.js';
// import EditStudent from './EditStudent.jsx'
export default class CateList extends Component{
    state = {
        _Array:this.props._Cate,
       
      };
    
    
    EditProduct(selectedProduct){
        this.setState({
            targetUpdatedObject:selectedProduct,
        });
    }
         
    deleteCate=(itemIndex)=>{
        let result=window.confirm("Are you sure you want to delete this product");
        if(result == true){
          let cloned = this.state._Array;
          cloned.splice(itemIndex, 1);
          this.setState({
          _Array: cloned,
          });
        }
    }
    
    

    render()
    {
        return(
        <>
            <h3 className='text-center text-primary my-5'> Our Category Data</h3>

                <table className="table  w-75 m-auto my-5">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Desc</th> 
                    </thead>
                    <tbody>
                        {
                            this.props._Cate.map((item,index)=>{
                               
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.desc}</td>
                                        <td><Link class="btn btn-primary" to={`/category/Details/${item.id}`}>Details</Link></td>
                                        <td><Link class="btn btn-warning" to={`/category/Edit/${item.id}`}>Edit</Link></td>
                                        <td><button onClick={()=>{this.deleteCate(index)}} class="btn btn-danger">Delete</button></td>

                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                    {/* <button  onClick={() => this.setState({ AddFlag: true })} className="btn btn-primary my-3 ">Add new Product</button> */}

    
                </table>
                
            
        </>
        )
           
         }
    }
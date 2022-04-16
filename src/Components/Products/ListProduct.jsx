import { render } from '@testing-library/react';
import { isElementType } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import AddProduct from './AddProduct';
// import AddAsClass  from './AddStudent.js';
// import Details from './Details.js';
// import EditStudent from './EditStudent.jsx'
export default class ProductList extends Component{
    state = {
        _Array:this.props._Products,
       
      };
    
    // }
    // ShowDetails(items){
    //     this.setState({
    //         DetailsFlag:true,
    //         detailsObject:items,
    //     })
        
    // }
    EditProduct(selectedProduct){
        this.setState({
            targetUpdatedObject:selectedProduct,
        });
    }
    // SaveEdit =(updatedStudent)=> {
    //     this.state._Array.forEach(element => {
    //       if(element.id==this.state.targetUpdatedObject.id){
    //             element.id=updatedStudent.id;
    //             element.name=updatedStudent.name;
    //             element.mobile=updatedStudent.mobile;
    //             element.address=updatedStudent.address;
    //             element.age=updatedStudent.age;
    //             element.image=updatedStudent.image;
    //       }
          
    //   });
    //   this.setState({
    //         EditFlag:false,
            
    //     });
    // }
    


    // gotoList=()=>{
    //     this.setState({
    //         AddFlag:false,
    //         DetailsFlag:false,
    //         EditFlag:false,
            
    //     });
    // }
     
    deleteProduct=(itemIndex)=>{
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
            <h3 className='text-center text-primary my-5'> Our Product Data</h3>

                <table className="table  w-75 m-auto my-5">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quentity</th>
                        <th>code</th>
                        <th>Image</th>
                    </thead>
                    <tbody>
                        {
                            this.props._Products.map((item,index)=>{
                               
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quentatiy}</td>
                                        <td>{item.code}</td>
                                        <td><img src={"../images/"+item.image} width="50" height="50" /></td>
                                        <td><Link class="btn btn-primary" to={`/product/Details/${item.id}`}>Details</Link></td>
                                        <td><Link class="btn btn-warning" to={`/product/Edit/${item.id}`}>Edit</Link></td>
                                        <td><button onClick={()=>{this.deleteProduct(index)}} class="btn btn-danger">Delete</button></td>

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
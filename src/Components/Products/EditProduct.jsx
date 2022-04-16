
import React, { Component } from 'react'

export default class EditStudent extends Component {
state={
    
    selectedObject:null
};

async componentDidMount() {

let idParam = this.props.match.params.id;

let targetObject = await this.props._Products.find((item) => {
    return item.id == idParam;
});

 await this.setState( 
{
    selectedObject:targetObject
});
}

SaveData=()=>{
let updatedProduct={
    id:this.state.selectedObject.id,
    name:this.state.selectedObject.name,
    price:this.state.selectedObject.price,
    quentatiy:this.state.selectedObject.quentatiy,
    code:this.state.selectedObject.code,
    image:this.state.selectedObject.image
}
this.props._UpdateDataRef(updatedProduct);
}
  render() {
      if(this.state.selectedObject !=null){
        return (
            <>
           
                
            
            <h3 className="text-center text-info">Edit-product</h3>
           <div className="w-75 m-auto  ">
               <div className="form-Group my-3">
               <label>Id</label>
               <input className="form-control" type="text" name="id" value={this.state.selectedObject.id} onChange={(e)=>{this.setState(prevState=>{  let selectedObject = Object.assign({}, prevState.selectedObject); 
                                                                                                                                                         selectedObject.id=e.target.value ;
                                                                                                                                                         return {selectedObject}  ;                                                    })}} />
               </div>
               <div className="form-Group my-3">
               <label>Name</label>
               <input className="form-control" type="text" name="name" value={this.state.selectedObject.name} onChange={(e)=>{this.setState(prevState=>{  let selectedObject = Object.assign({}, prevState.selectedObject); 
                                                                                                                                                         selectedObject.name=e.target.value ;
                                                                                                                                                         return {selectedObject}  ; }) }} />
               </div>
               <div className="form-Group my-3">
               <label>Price</label>
               <input className="form-control" type="text" name="price" value={this.state.selectedObject.price} onChange={(e)=>{this.setState(prevState=>{  let selectedObject = Object.assign({}, prevState.selectedObject); 
                                                                                                                                                         selectedObject.price=e.target.value ;
                                                                                                                                                         return {selectedObject}  ; })  }} />
               </div>
               <div className="form-Group my-3">
               <label>quentaty</label>
               <input className="form-control" type="text" name="quentatiy" value={this.state.selectedObject.quentatiy} onChange={(e)=>{this.setState(prevState=>{  let selectedObject = Object.assign({}, prevState.selectedObject); 
                                                                                                                                                         selectedObject.quentatiy=e.target.value ;
                                                                                                                                                         return {selectedObject}  ; })}} />
               </div>
               <div className="form-Group my-3">
               <label>code</label>
               <input className="form-control" type="text" name="code" value={this.state.selectedObject.code} onChange={(e)=>{this.setState(prevState=>{  let selectedObject = Object.assign({}, prevState.selectedObject); 
                                                                                                                                                         selectedObject.code=e.target.value ;
                                                                                                                                                         return {selectedObject}  ; })}} />
               </div>
               <div className="form-Group my-3">
               <label>image</label>
               <input className="form-control" type="text" name="image" value={this.state.selectedObject.image} onChange={(e)=>{this.setState(prevState=>{  let selectedObject = Object.assign({}, prevState.selectedObject); 
                                                                                                                                                         selectedObject.image=e.target.value ;
                                                                                                                                                         return {selectedObject}  ; })}} />
               </div>
        
               <button onClick={this.SaveData} className="btn btn-primary">Save Edit</button>
        
        
           </div>
        
            </>
        
        )
      }else{
          console.log("Loading.............................");
      }
    
  }
}


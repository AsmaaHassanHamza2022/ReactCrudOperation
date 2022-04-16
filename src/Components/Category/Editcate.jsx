
import React, { Component } from 'react'

export default class EditCate extends Component {
state={
    
    selectedObject:null
};

async componentDidMount() {

let idParam = this.props.match.params.id;

let targetObject = await this.props._Cate.find((item) => {
    return item.id == idParam;
});

 await this.setState( 
{
    selectedObject:targetObject
});
}

SaveData=()=>{
let updatedCate={
    id:this.state.selectedObject.id,
    name:this.state.selectedObject.name,
    desc:this.state.selectedObject.desc,
    
}
this.props._UpdateDataRef(updatedCate);
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
               <label>desc</label>
               <input className="form-control" type="text" name="desc" value={this.state.selectedObject.desc} onChange={(e)=>{this.setState(prevState=>{  let selectedObject = Object.assign({}, prevState.selectedObject); 
                                                                                                                                                         selectedObject.desc=e.target.value ;
                                                                                                                                                         return {selectedObject}  ; })  }} />
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


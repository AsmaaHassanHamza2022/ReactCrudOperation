import { Component } from "react";
export default class AddCate extends Component {
state = {
            id:0 ,
            name:'',
            desc:" ",
            
    };
handleOnChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
}
SaveData=()=>{
   let newProductObj={
        id:this.state.id,
        name:this.state.name,
        desc:this.state.desc
    }
    this.props._ProductsAdd(newProductObj);
}



render() {

return(

    <>
    <h3 className="text-center text-info">Add-product</h3>
   <div className="w-75 m-auto  ">
       <div className="form-Group my-3">
       <label>Id</label>
       <input className="form-control" type="text" name="id" value={this.state.id} onChange={this.handleOnChange} />
       </div>
       <div className="form-Group my-3">
       <label>Name</label>
       <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
       </div>
       <div className="form-Group my-3">
       <label>Price</label>
       <input className="form-control" type="text" name="desc" value={this.state.desc} onChange={this.handleOnChange} />
       </div>
      

       <button onClick={this.SaveData} className="btn btn-primary">Add Category</button>


   </div>

    </>
)


    }
}


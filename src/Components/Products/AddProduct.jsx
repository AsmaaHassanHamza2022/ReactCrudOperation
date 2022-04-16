import { Component } from "react";
export default class AddProduct extends Component {
state = {
            id:0 ,
            name:'',
            price:0,
            quentity:0,
            code:'----',
            image:"1.jpg",
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
        price:this.state.price,
        quentity:this.state.quentity,
       code:this.state.code,
        image:this.state.image
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
       <input className="form-control" type="text" name="price" value={this.state.price} onChange={this.handleOnChange} />
       </div>
       <div className="form-Group my-3">
       <label>quentaty</label>
       <input className="form-control" type="text" name="quentity" value={this.state.quentity} onChange={this.handleOnChange} />
       </div>
       <div className="form-Group my-3">
       <label>code</label>
       <input className="form-control" type="text" name="code" value={this.state.code} onChange={this.handleOnChange} />
       </div>
       <div className="form-Group my-3">
       <label>image</label>
       <input className="form-control" type="text" name="image" value={this.state.image} onChange={this.handleOnChange} />
       </div>

       <button onClick={this.SaveData} className="btn btn-primary">Add product</button>


   </div>

    </>
)


    }
}


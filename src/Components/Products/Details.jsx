import { Component } from "react";
import {Link} from 'react-router-dom';

class Details extends Component{
    selectedObject={};
    // state = {
    //    selectedObject:null
    //   };

componentWillMount() {
   
let idParam = this.props.match.params.id;

let targetObject = this.props._Products.find((item) => {
    return item.id == idParam;
});

this.selectedObject=targetObject;

// this.setState( 
// {
//    SelectedObject:targetObject
// },
// console.log(targetObject),
// console.log(this.state.SelectedObject),

// );
// console.log(targetObject);
// console.log(this.state.selectedObject);

// }
}


    render(){
        return(
            <>
                <ul  type="none" className="mx-auto mt-5 w-50 text-center alert alert-danger" >
                    <div>
                       
                        <li className="my-3"> id:{this.selectedObject.id}</li>
                        <li className="my-3"> Name:{this.selectedObject.name}</li>
                        <li className="my-3"> price:{this.selectedObject.price}</li>
                        <li className="my-3"> quentatiy:{this.selectedObject.quentatiy}</li>
                        <li className="my-3">code:{this.selectedObject.code}</li>
                        <li className="my-3"><img src={"../../images/"+this.selectedObject.image} width="50" height="50"/></li>
                    </div>
                    <Link class="btn btn-secondary" to={`/product/List`}>Go to List</Link>                </ul>
            </>
        )
    }
}

export default Details;
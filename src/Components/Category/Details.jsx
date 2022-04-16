import { Component } from "react";
import {Link} from 'react-router-dom';

class Details extends Component{
    selectedObject={};
    
componentWillMount() {
   console.log(this.props.match);
let idParam = this.props.match.params.id;

let targetObject = this.props._Cate.find((item) => {
    return item.id == idParam;
});

this.selectedObject=targetObject;

}


    render(){
        return(
            <>
                <ul  type="none" className="mx-auto mt-5 w-50 text-center alert alert-danger" >
                    <div>
                       
                        <li className="my-3"> id:{this.selectedObject.id}</li>
                        <li className="my-3"> Name:{this.selectedObject.name}</li>
                        <li className="my-3"> Desc:{this.selectedObject.desc}</li>
                      
                    </div>
                    <Link class="btn btn-secondary" to={`/category/List`}>Go to List</Link>                </ul>
            </>
        )
    }
}

export default Details;
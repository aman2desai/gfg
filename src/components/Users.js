import { Component } from "react";
import User from "./User";




export default class Users extends Component{

    render(){
        return(
            <div>
                {
                    this.props.udata.map((ud) =>  <User key={ud} userNew={ud} duser={this.props.dOne}/>)
                }
              <button disabled={!this.props.hasData} onClick={this.props.da}>DeleteAll</button>
            </div>
           
        )
    }
}



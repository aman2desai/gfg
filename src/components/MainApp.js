import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddUser from "./AddUser";
import Users from "./Users";
import GetData from "./GetData";

export default class MainApp extends Component{

    state={
          headerData:'Welcome to Header',
         footerData:'Welcome to Footer',
         userData:[]
    }
// adding the user

addUser=(data)=>{
    this.setState((prevState)=>{

        return{
            userData:prevState.userData.concat(data)
        }
    })
}
//delete all

deleteAll=()=>{
    this.setState(()=>{
        return {
            userData:[]
        }
    })
}
// delete single

deleteOne=(user)=>{
 this.setState((prevState)=>{
     return{
         userData:prevState.userData.filter((us) => user !== us)
     }
 })
}
render(){
      return(
            <div>
                <Users udata={this.state.userData}
                da={this.deleteAll}
                hasData={this.state.userData.length > 0}
                dOne={this.deleteOne}
                />
                <Header hdata={this.state.headerData}/>
                <p>MainApp Component</p>
                <AddUser au={this.addUser}/>
                <Footer fdata={this.state.footerData}/>
                <GetData/>
            </div>
           
        )
    }
}
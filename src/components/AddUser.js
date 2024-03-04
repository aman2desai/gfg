
import {Component} from "react";


export default class AddUser extends Component {

    addUser = (e) => {
        e.preventDefault()

        const data = e.target.elements.uname.value
         this.props.au(data)
    }

    render() {
        return (
            <div>
                <form onSubmit={
                    this.addUser
                }>
                    <input type='text' name='uname' placeholder='Enter Name' required/>
                    <button>adduser</button>
                    <p></p>
                </form>
            </div>

        )
    }
}

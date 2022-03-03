import { Component, ReactNode } from "react";
import axios from 'axios';

class ClassBasedComp extends Component{

    state = {
        counter : 0,
        posts : []
    }
    constructor(props : {}){
        super(props);
        console.log("Constructor")
    }

    componentDidMount(){
        console.log("Component Did Mount")
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({
                    posts : response.data
                })
            })
            .catch(err => console.log(err))
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    increaseHandler = () => {
        // this.state.counter = this.state.counter++;
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render(): ReactNode {
        console.log("Render")
        return (
            <div className="container text-center">
                <p className="display-4">Counter : {this.state.counter}</p>
                <button className="btn btn-primary" onClick={this.increaseHandler} >Increase</button>
                <br />
                <ul>
                {this.state.posts.map((post : {id : string, title: string, body: string}) => {
                    return <li key={post.id}>{post.title}</li>
                })}
                </ul>
            </div>
        )
    }

}

export default ClassBasedComp;
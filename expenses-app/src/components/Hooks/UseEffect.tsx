import { useEffect, useState } from "react";
import axios from 'axios';

const UseEffect = () => {

    let [counter, setCounter] = useState<number>(0)
    let [isValid, setIsValid] = useState(true)
    let  [posts, setPosts] = useState([])
    // ComponentDidMount
    // useEffect(() => {
    //     console.log("UseEffect Callback function called")
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then(resp => {
    //             setPosts(resp.data)
    //         })
    // }, [])
    
    // ComponentDidUpdate
    // useEffect(() => {
    //     console.log("UseEffect Callback function called")
    // }, [counter, isValid])

    // ComponentWillUnmount
    // useEffect(() => {
    //     let identifier = setTimeout(( )=>{
    //         // Make remote Server call
    //         console.log("UseEffect Callback");
    //     }, 1000)
    //     return () => {
    //         clearInterval(identifier);
    //         console.log("Clean-up")
    //     }
    // }, [counter, isValid])

    useEffect(() => () => console.log("Empty Clean up"), []);
    
    const [enteredValue, setEneteredValue] = useState<string>('')
    const [repos, setRepos] = useState([])

    useEffect(() => {
        let notifier = setTimeout(() => {
        axios.get(`https://api.github.com/users/${enteredValue}/repos`)
            .then(resp => {
                console.log(resp.data)
            })
            .catch(err => console.log(err));
        }, 1000)
        return () => {
            clearInterval(notifier)
        }
    }, [enteredValue])

    return (
        <div>
            <input type="text" value={enteredValue} onChange={
                (event) => setEneteredValue(event.target.value)
                } />
            <p>Counter : {counter} </p>
            <button className="btn btn-primary" onClick={() => setCounter(counter+1)}>
                Increase
            </button>
            <button className="btn btn-secondary" onClick={() => setIsValid(!isValid)}>
                Toggle Validity
            </button>
            <hr />
            <ul>
            {posts.map((p : {id : number, title : string, body : string}) => {
                return <li key={p.id}>{p.title}</li>
            })}
            </ul>
        </div>
    )

}
export default UseEffect;
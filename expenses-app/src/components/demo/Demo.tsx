const Demo = () => {

    let username = "john doe"
    
    const updateHandler = () => {
        // const div = document.getElementById("myDiv") as HTMLDivElement
        // div.innerHTML = `<p>Updated</p>`
        username = "jenny doe";
    }
    return (
        <>
        <div id="myDiv"><p>{username}</p></div>
        <button onClick={updateHandler}>Update</button>
        </>
    )
}

export default Demo;
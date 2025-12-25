import axios from "axios"

const blog = async ({params} : any) => {
    const postId  = (await params).postId
    console.log(postId)
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data = response.data
    return (
    <div>
    Blog Page: {postId}
    <h2 className="bg-amber-200 text-black">UserID : {data.userId}</h2>
    <h2 className="bg-amber-400 text-black">ID : {data.id}</h2> 
    <h1 className="bg-amber-400 text-black">Title : {data.title}</h1>
    <h1 className="bg-amber-400 text-black">Body : {data.body}</h1>
    </div>
    )
    }catch(e){
        return <>
        <h1>Post doesnt Exist, Try From 1-100</h1>
        </>
    }
}

export default blog

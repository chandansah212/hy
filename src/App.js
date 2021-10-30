
import './App.css';
import {useGetAllPostQuery,useGetPostIdQuery,useGetPostByLimitQuery,useDeletePostMutation,useCreatePostMutation} from './services/Post'
function App() {
  const responseInfo=useGetAllPostQuery()
  const responseInf=useGetPostIdQuery(5)
  const responseIn=useGetPostByLimitQuery(5)
  const [createPost,response]=useCreatePostMutation()
  const [deletePost,res]=useDeletePostMutation()
 
  if(responseInfo.isLoading)return <div>loading...</div>
  if(responseInfo.isError) return <div>{responseInfo.error.error}</div>

const newpost={
                        title:'foo',
                        body:'bar',
                        userId:1,
}




  return (
    
    <div className="App">
  
    <button onClick={()=>{createPost(newpost)}}>delete</button>
    
    
    
    
    
     {responseIn.data.map((post,i)=>
     
     <div key={i}>
        <h2>{post.id}:{post.title}</h2>
       <p>{post.body}</p>
       <hr/> 
        
     
     </div>

     )}
     <h2>{responseInf.data.id}:{responseInf.data.title}</h2>
    
    </div>
  );
}

export default App;

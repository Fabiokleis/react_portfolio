import React,{useState, useEffect} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {useSelector} from 'react-redux';
import './index.css';

export default function Profile(props){ 
    const user = useSelector(state => state.login);
    const [msg, setMsg] = useState(null);
    const [flag, setFlag] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUserLastPosts(user.token, 'http://127.0.0.1:3001/posts/profile_posts?'+"page=1");
    }, [flag, user]);

    async function createPost(e){
        e.preventDefault();
        const url = e.target.action;
        const title = e.target.elements[0].value;
        const description = e.target.elements[1].value;
        const data = {title, description};
        const res = await createPostReq(data, user.token, url);
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        setFlag(false);
        setTimeout(() => {
            setMsg(null);
        }, 3000)
    }

    function getUserLastPosts(jwt, url){
        fetch(url, 
            {
                headers: {'Authorization': jwt},
                method: 'GET'
            }).then(res => res.json()).then(data => {
                if(data.message){
                    setMsg(data.message);
                }else{
                    setPosts(data);
                }
            }).catch(err => alert('error on servers! try again later...'));
    }

    function createPostReq(data, jwt, url){
        const res = fetch(url, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': jwt
                },
                method: 'POST',
                body: JSON.stringify(data)
            })
         .then(res => res.json()).then(obj => {
            if(obj.message){
                setMsg(obj.message);
            }else{
                setFlag(true);
               
                return data;
            }
         }).catch(err => alert('error on servers! try again later...'));

        return res;
    }


    return (
        <>
        <Header />
        <main className="section-container">
            <div className="user-profile" >
                <div className={msg?"post-notification-message":"hidden"}>
                    {msg}
                </div>
                <div className="user-container">
                    <div className="img-container">
                        <img className="user-img" src="" alt="profile picture" />
                    </div>
                    <div className="user-credentials">
                        <h3 className="user-name">@{user.name}</h3>
                        <h4 className="user-email">{user.email}</h4>
                        <div className="user-bio">
                            user bio... in near future!
                        </div> 
                    </div>
               </div>
               <div className="user-posts">
                    <form method="POST" action="http://127.0.0.1:3001/posts" onSubmit={createPost}> 
                        <div className="newpost-container">
                            <input placeholder="title" required name="title" id="title" type="textarea" />
                            <input placeholder="description" required name="description" id="description" type="textarea" />
                            <button className="post-btn" type="submit">Post</button> 
                        </div>
                    </form>
                    <div className="user-last-posts">
                      {posts.map(post => (
                        <div className="user-post" key={post.id} >
                        <div className="user-post-header">  
                          <div className="user-post-name">
                            {"@"+post.name} 
                          </div>
                          <div className="user-post-title">
                            {post.title}
                          </div>
                          <div className="user-post-date">
                            {new Date(post.updated_at).toLocaleDateString('en-US',{
                                weekday: 'long',
                                month: 'long',
                                day:'numeric',
                                hour: 'numeric',
                                minute: 'numeric'}
                            )} 
                          </div>
                        </div>
                        <div className="user-post-desc">
                          {post.description}
                        </div>
                        </div>
                      ))}
                    </div>
                </div>

            </div>
        </main>
        <Footer />
        </>
    );
}

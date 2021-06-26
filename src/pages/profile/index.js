import React,{useState, useEffect} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {useSelector} from 'react-redux';
import edit from './edit.svg';
import del from './x-circle.svg';
import add from './check.svg';
import './index.css';

export default function Profile(props){ 
    const user = useSelector(state => state.login);
    const [msg, setMsg] = useState(null);
    const [flag, setFlag] = useState(false);
    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(false);
    const [postId, setPostId] = useState(null);
    const [load, setLoading] = useState(false);

    useEffect(() => {
        getUserLastPosts(user.token, 'https://fabiokleis-api.herokuapp.com/posts/profile_posts?'+"page=1");
    }, [flag, user, load]);

    function createPost(e){
        e.preventDefault();
        const url = e.target.action;
        const title = e.target.elements[0].value;
        const description = e.target.elements[1].value;
        const data = {title, description};
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        createPostReq(data, user.token, url);
        setFlag(false);
        setTimeout(() => {
            setMsg(null);
        }, 3000)
    }

    function updatePost(e){
        e.preventDefault();
        const title = e.target.elements[0].value;
        const description = e.target.elements[1].value;
        const data = {title, description};
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";

        fetch(e.target.action+"?id="+postId,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': user.token
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => {
                if(data.message){
                    setMsg(data.message);
                }else{
                    setUpdate(false);
                    setFlag(true);
                }
        }).catch(err => alert(err));

        setFlag(false);
        setTimeout(() => {
            setMsg(null);
        }, 3000);

    }

    function swapUpdateState(id){
        setUpdate(true);
        setPostId(id);
    }


    function deletePost(id){
        fetch('https://fabiokleis-api.herokuapp.com/posts?id='+id, 
            {
                headers: {'Authorization': user.token},
                method: 'DELETE'
            }).then(res => res.json())
            .then(data => {
                if(data.message){
                    setMsg(data.message);
                }else{
                    setFlag(true);               
                }
            }).catch(err => alert('error on server! try again later...'));
        setFlag(false);
        setTimeout(() => {
            setMsg(null);
        }, 3000);
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
        fetch(url, 
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
                        <img className="user-img" src="" alt="profile" />
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
                    <form method="POST" action="https://fabiokleis-api.herokuapp.com/posts" onSubmit={createPost} id="main-form"> 
                        <div className="newpost-container">
                            <input placeholder="title" required name="title" id="title" type="textarea" />
                            <textarea placeholder="description, max char 255" maxLength="255" 
                            required name="description" className="description" form="main-form"/>
                            <button className="post-btn" type="submit"><img src={add} alt="check" /></button> 
                        </div>
                    </form>
                    <form className={update?"":"hidden"} action='https://fabiokleis-api.herokuapp.com/posts' id="update-form" onSubmit={(e) => updatePost(e)}>
                         <div className="newpost-container">
                             <input placeholder="update title" required name="title" id="title" type="textarea" />
                             <textarea placeholder="update description, max char 255" maxLength="255" 
                             required name="description" className="description" form="update-form"/>               
                             <button className="post-btn" type="submit"><img src={add} alt="check" /></button> 
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
                            {new Date(post.updated_at).toLocaleDateString('en-US', {
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
                        <div className="user-post-reqs">
                            <div className={!update?"update-btn":"hidden"} onClick={() => swapUpdateState(post.id)}>
                                <img src={edit} alt="edit" />
                            </div>
                           <div className={!update?"delete-btn":"hidden"} onClick={() => deletePost(post.id)}>
                                <img src={del} alt="delete" />
                            </div>
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

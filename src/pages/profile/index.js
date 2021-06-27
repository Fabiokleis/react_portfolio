import React,{useState, useEffect} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginBio} from '../../actions/userActions';
import edit from './edit.svg';
import del from './x-circle.svg';
import add from './check.svg';
import pic from './image.svg';
import './index.css';

export default function Profile(props){ 
    const user = useSelector(state => state.login);
    const dispatch = useDispatch();
    const [msg, setMsg] = useState(null);
    const [flag, setFlag] = useState(false);
    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(false);
    const [postId, setPostId] = useState(null);
    const [createBio, setBio] = useState("");
    const [bioState, setBioState] = useState(false);

    useEffect(() => {
        getUserLastPosts(user.token, 'http://127.0.0.1:3001/posts/profile_posts?'+"page=1");
    }, [flag, user]);

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

    function swapBioState(){
        setBioState(true);
    }

    function deletePost(id){
        fetch('http://127.0.0.1:3001/posts?id='+id, 
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

    function saveBio(e){
        e.preventDefault();
        const bio = e.target.elements[0].value;
        saveBioReq({bio}, user.token, e.target.action);
        setBioState(false);
        setTimeout(() => {
            setMsg(null);
        }, 3000);
    }

    function saveBioReq(data, jwt, url){
        fetch(url, 
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": jwt
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(obj => {
                if(obj.message){
                    setMsg(obj.message);
                }else{
                    setBio(obj);
                    dispatch(setLoginBio(obj));
                }
            }).catch(err => alert(err));
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
                        <img className="user-img" src={pic} alt="profile" />
                    </div>
                    <div className="user-credentials">
                        <h3 className="user-name">@{user.name}</h3>
                        <h4 className="user-email">{user.email}</h4>
                        <div className="user-bio">
                             <form className={bioState?"":"hidden"} action='http://127.0.0.1:3001/users/bio' id="bio-form" onSubmit={saveBio}>
                                 <div className="bio-container">
                                     <textarea placeholder="create bio, max char 255" maxLength="255" 
                                     required name="bio" className="bio-textarea" form="bio-form"/>
                                     <button className="update-bio-btn" type="submit"><img src={add} alt="check" /></button> 
                                 </div>
                            </form>
                            <div className={!bioState?"bio-container":"hidden"}>
                                <textarea className="bio-textarea" value={createBio?createBio:user.bio} disabled />
                            </div>
                            <button className={!bioState?"update-bio-btn":"hidden"} onClick={swapBioState}>
                                <img src={edit} alt="edit bio" />
                            </button>
                        </div> 
                    </div>
               </div>
               <div className="user-posts">
                    <form method="POST" action="http://127.0.0.1:3001/posts" onSubmit={createPost} id="main-form"> 
                        <div className="newpost-container">
                            <input placeholder="title" required name="title" id="title" type="textarea" />
                            <textarea placeholder="description, max char 255" maxLength="255" 
                            required name="description" className="description" form="main-form"/>
                            <button className="post-btn" type="submit"><img src={add} alt="check" /></button> 
                        </div>
                    </form>
                    <form className={update?"":"hidden"} action='http://127.0.0.1:3001/posts' id="update-form" onSubmit={(e) => updatePost(e)}>
                         <div className="newpost-container">
                             <input placeholder="update title" required name="title" id="title" type="textarea" />
                             <textarea placeholder="update description, max char 255" maxLength="255" required name="description" className="description" form="update-form"/>               
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

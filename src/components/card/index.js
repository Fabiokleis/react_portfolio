import React,{useState, useEffect} from 'react';
import Card from './card.js';
import './index.css';

export default function Cards(props){
    const [load, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function getAllPosts(page, url){
        await getAllRecentPosts(url+page); 
        setLoading(false);
    }
  
    function getAllRecentPosts(url){
        return fetch(url, {method: 'GET'})
            .then(res => {
                return res.json();
            }).then(data => {
                setPosts(data);
            }).catch(err => alert('Error on servers! try again later.'));
    }
    
    useEffect(() => {
        setLoading(true);
        getAllPosts('?page=1','http://localhost:3001/posts');
    }, []);
    
    return (
        <>
            {posts.map((post, index) => (
                <Card post={post} key={index} />
            ))}
       </>
    );
}

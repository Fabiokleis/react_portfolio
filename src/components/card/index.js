import React,{useEffect} from 'react';
import {getLastedPosts} from '../../actions/postsAction';
import {useDispatch, useSelector} from 'react-redux';
import Card from './card.js';

export default function Cards({page}){
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const getPosts = (url) => {
        return fetch(url, {method: 'GET'})
                .then(res => res.json())
                .then(data => {
                    dispatch(getLastedPosts(data));
                }).catch(err => alert('Error on servers! try again later.'));
    }

    useEffect(() => {
        getPosts('http://localhost:3001/posts?page='+page);
    }, []);

    return (
        <>
          {posts.map((post, index) => (
            <Card key={post.id} post={post} />
          ))}
        </>
    );
}
    


import React,{useState, useEffect} from 'react';
import {getTotalCount} from '../../actions/headersActions';
import {useDispatch} from 'react-redux';

export default function Cards({page, Component}){
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    const getPosts = (url) => {
        return fetch(url, {method: 'GET'})
                .then(res => {
                    const count = res.headers.get('X-Total-Count');
                    dispatch(getTotalCount(count));
                    return res.json();
                }).then(data => setPosts(data))
                .catch(err => alert('Error on servers! try again later.'));
    }
    useEffect(() => {
        getPosts('http://localhost:3001/posts?page='+page);
    }, [page]);

    return (
        <>
          {posts.map((post, index) => (
            <Component key={post.id} post={post} />
          ))}
        </>
    );
}
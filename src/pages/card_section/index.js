import React,{useState} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cards from '../../components/card';
import Posts from '../../components/card/posts';
import {useSelector} from 'react-redux';
import './posts.css';

export default function CardSection(props){
    const total = useSelector(state => state.posts);
    const pages = Math.round(total/5);
    const [page, setPage] = useState(1);
    const pages_array = [];

    for(let i = 1; i <= pages; i++){
        pages_array.push(i);
    }

    function updatePageNumber(p){
        setPage(p);
    }

    function decrement(){
        if(page > 1){
            setPage(page - 1);
        }
    }

    function increment(){
        if(page < pages){
            setPage(page + 1)
        }
    }

    return (
        <>
            <Header />
            <main className="section-container">
                <h1 className="title-center">Posts</h1>
                <div className="posts-section">
                   <div className="current-page">Page: {page}</div>
                   <Cards page={page} Component={Posts} />
                    <div className="summary-container">
                         <img className="left-arrow-page" onClick={decrement} src="" alt="<" />
                        {pages_array.map((p, index) => (
                            <div onClick={() => updatePageNumber(p)} className="page-number" key={index}>
                            {p}
                            </div>
                        ))}
                       <img className="right-arrow-page" onClick={increment} src="" alt=">" />
                    </div> 
                </div>
            </main>
            <Footer />
        </>
    );
}


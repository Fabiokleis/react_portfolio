import React,{useState} from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Cards from '../../components/card';
import Posts from '../../components/card/posts';
import Summary from '../../components/summary';
import {useSelector} from 'react-redux';
import './index.css';

export default function CardSection(props){
    const total = useSelector(state => state.posts);
    const pages = Math.ceil(total/5);
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
                   {total > 0 ? <Summary updatePageNumber={updatePageNumber} pages_array={pages_array} decrement={decrement} increment={increment} />:null}
               </div>
            </main>
            <Footer />
        </>
    );
}


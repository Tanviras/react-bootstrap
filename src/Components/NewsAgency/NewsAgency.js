import React, {useEffect} from 'react';
import {useState} from 'react';
// import News from '../News';

const NewsAgency = () => {
    const [article,setArticle] = useState([]);//article er moddhe kichu nei apatoto

    useEffect( ()=>{//useEffect use kori api fetch korar jonno
    const url='http://newsapi.org/v2/everything?q=tesla&from=2021-01-16&sortBy=publishedAt&apiKey=5e6e87093be8430f9cebef7b38e8d148';
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.status);
        setArticle(data.articles);//articles initially empty chilo. Then setArticles diye update korlam: articles er moddhe data.articles dhukalam.
                })
                   })
    return (
        <div>
            <h1>Top Headline</h1>
           
            
        </div>
    );
};

export default NewsAgency;
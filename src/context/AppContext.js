import React, { useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl';
import { createContext } from 'react';
export const AppContext = createContext();
function AppContextProvider({ children }) {
    const [load, setLoad] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(null);
    const value = {
        load,
        setLoad,
        blogs,
        setBlogs,
        page,
        setPage,
        pages,
        setPages,
        setPageHandler,
        reset
    };
    // fetch th data from api
    async function getblogs(page = 1,tag=null,category=null) {
        setLoad(true);
        const url = `${baseUrl}?page=${page}`;
        if(tag)
            url+=`&tag=${tag}`;
        if(category)
            url+=`&category=${category}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            // if(!data.blogs || data.blogs.length === 0){
            //     throw new Error("No blogs found");
            // }
            setPage(data.page);
            setBlogs(data.posts);
            setPages(data.totalPages);
            
        }
        catch (err) {
            alert("Something went wrong");
            setPage(1);
            setBlogs([]);
            setPages(null);
        
        }
        setLoad(false); 
    }
    useEffect(() => {
        getblogs();
    }, []);
    function setPageHandler(page) {
        setPage(page);
        getblogs(page);
    }
    function reset(page){
        setPage(page);
        getblogs(page);
    }
    return <AppContext.Provider value={value} > {children} </AppContext.Provider>
}

export default AppContextProvider;

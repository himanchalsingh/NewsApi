// import { useEffect, useState } from "react"
// import News from './News.jsx'
// import './App.css'
// function App() {
//   let [articles,setArticles]=useState([]);
//   let [cart,setCart]=useState("india")
//   // useEffect(()=>{
//   //   fetch(`https://newsapi.org/v2/everything?q=${cart}&from=2024-01-01&apiKey=f99856f552c6442b8bb88b533ba84f5d`)
//   //   .then((response)=>response.json())
//   //   .then((data)=>{
//   //     setArticles(data.articles)
//   //     console.log(data.articles)
//   //   })
//   //   .catch((err)=>{
//   //     console.log(err)
//   //   }) 
//   // },[cart]) 

//   useEffect(() => {
//     const currentDate = new Date().toISOString().split('T')[0]; // Get current date in "YYYY-MM-DD" format

//     fetch(`https://newsapi.org/v2/everything?q=${cart}&apiKey=f99856f552c6442b8bb88b533ba84f5d`)
//       .then((response) => response.json())
//       .then((data) => {
//         setArticles(data.articles);
//         // console.log(data.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [cart]);

//   return (
//     <>
//     <header className="header">
//     <h1>NewsFast</h1>
   
//     <input type="text" onChange={(event)=>{
//      if(event.target.value!==""){
//       setCart(event.target.value)
//      }
//     }} placeholder="Search New" />
//      </header>
//     <section className="news-articles">
//         {
//         articles.length!==0?
//         articles.map((article)=>{
//           return(
//             <News article={article}/>
//           )
//         })
//         :
//         <h2>No News found</h2>
//         }
        
      
//     </section>
   

//     </>
//   )
// }

// export default App


import { useEffect, useState } from "react";
import News from './News.jsx';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("india");

  const fetchNews = (query) => {
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=f99856f552c6442b8bb88b533ba84f5d`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (searchQuery !== "") {
      fetchNews();
    }
  }, [searchQuery]);


  return (
    <>
      <header className="header">
        <h1>NewsFast</h1>
       <div className="search-container">
       <input type="text" placeholder="Search News" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="search-input"  />
        <button onClick={() => fetchNews(searchQuery)} className="search-button">Submit</button>
        
        </div> 
      </header>
      <section className="news-articles">
        {articles.length !== 0 ? (
          articles.map((article, index) => (
            <News key={index} article={article} />
          ))
        ) : (
          <h2>No News found</h2>
        )}
      </section>
    </>
  );
}

export default App;

export default function News(props){
        return( 
           <> <div className="news">
            {/*  */}
           
            <div className="new-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage} alt="" />
                    :
                    <img src="https://imgs.search.brave.com/XB7jECd2Htw0fIsV8nYnrJebME4I_4DBJN_lb7AeSSA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzUyLzM3LzE4/LzM2MF9GXzU1MjM3/MTg2N19Ma1ZtcU1F/Q2hSaE1NSERRMmRy/T1M4Y3doQVdlaGdW/Yy5qcGc" alt="" />
                }
                
            </div>

            <h1>{props.article.title}</h1>

            <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target="_blank">Read more</a></p>

           
            <div className="source">
                <p>Author:{props.article.author}</p>
                <p>{props.article.source.name}</p>
             </div> 
            </div>
            
            </>
        )
        }
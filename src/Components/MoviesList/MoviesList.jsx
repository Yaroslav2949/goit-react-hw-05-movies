import { LiStyle, UlStyle, WrapCardStyle } from "./MoviesList.styled";
import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ films }) => {
  const location = useLocation()
  console.log(location);
     return (
       <UlStyle>
         {films.map(({ id, title,  poster_path }) => (
           <Link to={`/movies/${id}`} key={id} state={{ from: location }} >
             <LiStyle key={id}>
               <img
                 src={
                   poster_path ? (
                     `https://image.tmdb.org/t/p/w500/${poster_path}` //лінк вказаний в документації бекенду для отримання картинок куди передаємо отриманий лінк кожної картинки
                   ) : (
                     <p>Ups, ... noImagefound</p>
                   )
                 }
                 alt={title}
                 width="154"
                 height="231"
               />

               <WrapCardStyle>
                 <h3>{title}</h3>
                 {/* <p>{overview}</p> */}
               </WrapCardStyle>
             </LiStyle>
           </Link>
         ))}
       </UlStyle>
     );
  

    
}

export default MoviesList
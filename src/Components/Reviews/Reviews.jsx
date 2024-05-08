import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { fetchMovieReviews, onFetchError } from 'services/api';
import { useParams } from 'react-router-dom';
import { UlReviewsStyled, LiReviewsStyled, } from './Reviews.styled';

const endPoint = '/movie';

const Reviews = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoading(true);
    fetchMovieReviews(endPoint, movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(onFetchError)
      .finally(setLoading(false));
  }, [movieId]);
 console.log(reviews);
  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <UlReviewsStyled>
          {reviews.map(({ id, author, content }) => (
            <LiReviewsStyled key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </LiReviewsStyled>
          ))}
        </UlReviewsStyled>
      ) : (
        <p>Sorry! We don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;

import React, { useEffect } from 'react';
import { Star, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getReview, getUserReview } from '../features/review/reviewSlice';


const AllReview = () => {

  const mockReviews = [
    {
      id: '1',
      userId: 'user1',
      carId: 'car1',
      rating: 5,
      comment: 'Great car, excellent condition!',
      userName: 'John Doe',
      date: '2024-03-01'
    },
  ];

  const {review} = useSelector(state => state.review)
console.log(review);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReview())
  },[])


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Reviews</h1>
      
      <div className="grid gap-6">
        {review?.userWithReviews?.map((user) => user?.reviews?.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <User className="h-6 w-6 text-gray-400 mr-2" />
                <span className="font-medium text-gray-900">{review.userName}</span>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < review.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-gray-600">{review.comment}</p>
          </div>
        )
        ))}
      </div>
    </div>
  );
}

export default AllReview


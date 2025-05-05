import { MessageSquare, Plus, Send, Star, ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserReview, getReview, getUserReview } from '../features/review/reviewSlice'
import { useParams } from 'react-router-dom'
import { getUserCar } from '../features/cars/carSlice'

const UserReviewPage = ({review}) => {

  const {id} = useParams()
  console.log(id);
  
  
  const [comment , setcomment] = useState("")
  const [rating , setRating] = useState("")
  const formdata = {comment,rating,id}

  console.log(comment, rating);
  
  const dispatch = useDispatch()

  const handelReview = () => {
      dispatch(addUserReview(formdata))
      setcomment("")
      setRating("")

      setTimeout(() => {
        dispatch(getUserReview(id)) 
      }, 1000)
  }

  // if(review < 1){
  //   return(
  //     <h1 className='text-center text-4xl font-bold text-gray-400'>No reviews yet...</h1>

  //   )
  // }
 
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Product Reviews</h1>
              <p className="text-xl text-gray-500 mt-1">See what others are saying</p>
            </div>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium">Write a Review</button>
          </div>
    
          {/* Stats Overview */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-gray-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Average Rating</p>
              <div className="flex items-center mt-1">
                <span className="text-3xl font-bold mr-2">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-1">Based on 128 reviews</p>
            </div>
    
            <div className="bg-gray-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Satisfaction</p>
              <p className="text-3xl font-bold mt-1">96%</p>
              <p className="text-gray-500 text-sm mt-1">Would recommend</p>
            </div>
    
            <div className="bg-gray-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Quality</p>
              <div className="flex items-center mt-1">
                <span className="text-3xl font-bold mr-2">4.7</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-1">Most mentioned</p>
            </div>
    
            <div className="bg-gray-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Value</p>
              <div className="flex items-center mt-1">
                <span className="text-3xl font-bold mr-2">4.5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-1">Price to performance</p>
            </div>
          </div>
     */}
          {/* Add Review Form */}
          <div className="bg-gray-50 p-6 rounded-xl mb-10">
            <h2 className="text-xl font-bold mb-4">Share Your Experience</h2>
                      
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
              <textarea value={comment} onChange={(e) => setcomment(e.target.value)}
                rows={4}
                placeholder="What did you like or dislike? What did you use this product for?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            <div className='flex items-center justify-between'>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} onClick={() => setRating(star)} 
                  fill={star <= rating ? '#facc15' : "none"}
                  stroke = '#facc15'
                   className="w-8 h-8 text-gray-300 cursor-pointer hover:text-amber-400" />
                ))}
              </div>
            </div>


            <div className="flex justify-end">
              <button onClick={handelReview}
               className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Submit Review
              </button>
            </div>

            </div>
           
          </div>
    
          {/* Reviews List */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">Sort by:</span>
                <select className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                  <option>Lowest Rated</option>
                  <option>Most Helpful</option>
                </select>
              </div>
            </div>
    
            {/* Individual Reviews */}

          
            <div className="space-y-6">
              {/* Review 1 */}
                

              {
                review.length > 0 && review?.map((review) =>  <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      {/* <span className="ml-2 font-semibold">Exceptional Quality</span> */}
                    </div>
                    <p className="text-gray-500 text-sm"> {review.userName} - April 15, 2025</p>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>Verified Purchase</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                 {review.comment}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-purple-600">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>Helpful (24)</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-purple-600">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span>Reply</span>
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
              </div>
                )
              }
    
              {/* Review 2 */}
              {/* <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-300" />
                      ))}
                      <span className="ml-2 font-semibold">Great Value</span>
                    </div>
                    <p className="text-gray-500 text-sm">Michael T. - April 10, 2025</p>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>Verified Purchase</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  For the price, this is an excellent product. I've been comparing similar items for months and finally
                  decided on this one. The only reason I'm giving 4 stars instead of 5 is that the setup was a bit
                  complicated. Once I got past that hurdle though, it's been working flawlessly. Would definitely recommend
                  to friends.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-purple-600">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>Helpful (16)</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-purple-600">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span>Reply</span>
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
              </div> */}
    
              {/* Review 3 */}
              {/* <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 font-semibold">Life Changing!</span>
                    </div>
                    <p className="text-gray-500 text-sm">Alex R. - April 5, 2025</p>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>Verified Purchase</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  I don't usually write reviews, but I had to for this product. It has completely changed my daily routine
                  for the better. The features are intuitive and the performance is consistent. Customer service was also
                  excellent when I had a question about one of the advanced settings. Highly recommend!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-purple-600">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>Helpful (42)</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-purple-600">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span>Reply</span>
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">2 weeks ago</span>
                </div>
              </div> */}
            </div>
    
            {/* Load More Button */}
            <div className="flex justify-center mt-8">
              <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                <Plus className="w-4 h-4 mr-2" />
                Load More Reviews
              </button>
            </div>
          </div>
        </div>
      )   
    
    }
    


export default UserReviewPage

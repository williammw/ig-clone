import React,{useEffect,useState} from 'react'
import faker from 'faker'
import Story from './Story'
import { useSession } from 'next-auth/react'

function Stories() {

  const [suggestions, setSuggestions] = useState([])
  const {data: session} = useSession()
  // the [] is dependent value to relaod
  useEffect(() => {
    // ... mean spreading
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id:i,
    }))
    setSuggestions(suggestions)
    // console.log(suggestions)
  },[])

  return (
    // ScrollBar shit
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 
    border rounded-sm overflow-x-scroll scrollbar-thin
    scrollbar-thumb-black z-80'>
      {session && 
        <Story  
        img={session.user.image} 
        username={session.user.username}  /> 
      }

      {suggestions.map((profile) => (
        <Story 
          key={profile.id} 
          img={profile.avatar} 
          username={profile.username}  
        />
      ))}
      {/* i am stories */}
     
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}

    </div>
  )
}

export default Stories

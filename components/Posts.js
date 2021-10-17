import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import React, { useState , useEffect} from 'react'
import Post from './Post'
import { db, storage } from '../firebase'


function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
      (snapshot) => {
        setPosts(snapshot.docs)
      }
      ), 
    [db]
  )

  // console.log('posts', posts)

  return (
    <div>
  {/* mapping firebase snapshot object */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts

import React from 'react'
import { IPost } from '../models/IPost';
import { postApi } from './../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(10)
  const [createPost,  {}] = postApi.useCreatePostMutation()
  const [deletePost, {}] = postApi.useDeletePostMutation()
  const [updatePost, {}] = postApi.useUpdatePostMutation()



  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }


  const handleRemove = (post: IPost) => {
    deletePost(post)
  }
  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
        <div>
          <button onClick={handleCreate}>Add new post</button>
          {isLoading && <h1>Идет загрузка...</h1>}
          {error && <h1>Произошла ошибка при загрузке</h1>}
          {posts && posts.map(post => 
            <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
            )}
        </div>
    </div>
  )
}

export default PostContainer
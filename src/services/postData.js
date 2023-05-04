import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => {
        // const posts = JSON.parse(localStorage.getItem('posts'))
        // if (posts) {
        //   // Return posts from localStorage if available
        //   return posts
        // } else {
        //   // Fetch posts from API and store in localStorage
        //   return fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(posts => {
        //       localStorage.setItem('posts', JSON.stringify(posts))
        //       return posts

        //     })
        // }
        return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(posts => {
            localStorage.setItem('posts', JSON.stringify(posts))
            return posts
          }
          )
      },
      method: 'GET',
    }),
    getPostById: builder.query({
      query: (id) => {
        const post = JSON.parse(localStorage.getItem(`post-${id}`))
        if (post) {
          // Return post from localStorage if available
          return post
        } else {
          // Fetch post from API and store in localStorage
          return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {
              localStorage.setItem(`post-${id}`, JSON.stringify(post))
              return post
            })
        }
      },
      method: 'GET',
    }),
  }),

})

export const { useGetPostsQuery, useGetPostByIdQuery, useEditPostMutation, useAddPostMutation, useDeletePostMutation } = postsAPI
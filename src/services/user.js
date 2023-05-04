import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsAPI = createApi({
  reducerPath: 'postsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      method: 'GET',
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
      method: 'GET',
    }),
    // addPost: builder.mutation({
    //   query: (newPost) => ({
    //     url: 'posts',
    //     method: 'POST',
    //     body: JSON.stringify(newPost),
    //   }),
    // }),
    // updatePost: builder.mutation({
    //   query: (updatedPost) => ({
    //     url: `posts/${updatedPost.id}`,
    //     method: 'PUT',
    //     body: updatedPost,
    //   }),
    // }),
    // deletePost: builder.mutation({
    //   query: (id) => (
    //     {
    //       url: `posts/${id}`,
    //       method: 'DELETE',
    //     }),
    // }),
  }),

})

export const { useGetPostsQuery, useGetPostByIdQuery, useEditPostMutation, useAddPostMutation, useDeletePostMutation } = postsAPI
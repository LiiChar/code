import { IActicles, IUser } from '../../types/acticles';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IAddArticle {
    author: string;
    name: string;
    tags: string;
    text?: string;
    image: ImageData;
    jwtToken?: string
}

// interface IUpdateArticle {
//     author: string;
//     name: string;
//     tags: string;
//     text?: string;
//     jwtToken?: string
// }

export interface UpdateArticle {
    id: number;
    author?: string;
    text?: string;
    name?: string;
    watcher?: number;
    image?: string;
    tags?: string;
}

export const articlesApi = createApi({
    reducerPath: 'articlesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Articles'],
    endpoints: (build) => ({
        fetchAllArticles: build.query<any, any>({
            query: (sort: any) => ({
                url: `/articles?sort=${sort.sort}&tag=${sort.sortTags}&search=${sort.sortName}`
            }),
            providesTags: result => ['Articles']
        }),
        fetchClearAllArticles: build.query<any, void>({
            query: () => ({
                url: `/articles?sort=&tag=&search=&page=-1`
            }),
            providesTags: result => ['Articles']
        }),
        getArticleById: build.query<IActicles, string | undefined>({
            query: (id) => ({
                url: `/articles/${id}`
            }),
            providesTags: result => ['Articles']
        }),
        getArticle: build.mutation<IActicles, string | undefined>({
            query: (id) => ({
                url: `/articles/${id}`,
                method: "POST"
            }),
            invalidatesTags: ['Articles']
        }),
        getTopUser: build.query<any, void>({
            query: () => ({
                url: `/articles/topusers`
            }),
            providesTags: result => ['Articles']
        }),
        getArticleByName: build.query<IActicles[], string | undefined>({
            query: (username) => ({
                url: `/articles/articles/${username}`
            }),
            providesTags: result => ['Articles']
        }),
        getArticleName: build.mutation<IActicles[], string | undefined>({
            query: (username) => ({
                url: `/articles/articles/${username}`
            }),
            invalidatesTags: ['Articles']
        }),
        createArticle: build.mutation<IActicles, any>({
            query: (article) => ({
                url: '/articles',
                method: 'POST',
                body: article
            }),
            invalidatesTags: ['Articles']
        }),
        updateArticle: build.mutation<IActicles, UpdateArticle>({
            query: (article) => ({
                url: '/articles',
                method: 'PUT',
                body: article
            }),
            invalidatesTags: ['Articles']
        }),
        deleteArticle: build.mutation<IAddArticle, string | undefined>({
            query: (id) => ({
                url: `/articles/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Articles']
        })
    })
})

export const {
    useCreateArticleMutation,
    useGetTopUserQuery,
    useFetchClearAllArticlesQuery,
    useFetchAllArticlesQuery,
    useUpdateArticleMutation,
    useGetArticleByIdQuery,
    useGetArticleMutation,
    useDeleteArticleMutation,
    useGetArticleByNameQuery,
    useGetArticleNameMutation
} = articlesApi




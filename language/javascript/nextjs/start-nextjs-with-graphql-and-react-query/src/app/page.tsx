"use server"

import type { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { GraphQLClient, gql } from "graphql-request";

const AnimeQuery = gql`
  query getAnime {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
      }
    }
  }
`;

const graphQLClient = new GraphQLClient("https://graphql.anilist.co");
const fetchAnime = async () => {
  return await graphQLClient.request(AnimeQuery);
};

export default async function Home() {
  const { isLoading, data } = useQuery(["getAnime"], fetchAnime);

  if (isLoading) return <p>Loading...</p>;

  console.log(data);
  

  return (
    <main>
      {
      // data?.getAnime?.Page.media.map((anime:any) => (
      //   <div>
      //     {title.native}
      //   </div>
      // ))
      }
    </main>
  )
}

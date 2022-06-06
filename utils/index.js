import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
  const query = gql`
    query MyQuery {
      projects {
        id
        slug
        title
        cover {
          url
        }
        link
        githubLink
        background,
        new
      }
    }
  `;

  const res = await request(graphqlAPI, query)

  return res.projects
};


export const getSingleProject = async (slug) => {
  const query = gql`
  query GetSingleProject($slug: String!) {
    project(where: {slug: $slug }) {
      title
      githubLink,
      link,
      cover {
        url
      }
      background
    }
  } `

  const res = await request(graphqlAPI, query, { slug })
  return res.project
}
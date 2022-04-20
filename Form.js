import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_URL } from "./GraphQL/Queries";

// const GET_SLUGS = gql`
//   {
//     Link {
//       url
//       slug
//     }
//   }
// `;

// const SEND_URLS = gql`
//   mutation createUrl($url: String!, $slug: String!) {
//     createUrl(input: { url: $url, slug: $slug }) {
//       url
//       slug
//     }
//   }
// `;

export default function Form() {
  const [urls, setUrls] = useState([]);
  const { error, loading, data } = useQuery(LOAD_URL);
  console.log("data here", data);

  useEffect(() => {
    setUrls(data.link);
  }, [data]);

  // const [createUrl] = useMutation(SEND_URLS);

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   createUrl({
  //     variables: {
  //       url: evt.target.value,
  //       slug: props.makeSlug(evt.target.value)
  //     }
  //   });
  // };

  // return data.slugs.map(({ url, slug }) => {
  //   let input;
  return (
    <>
      <form>
        <input id="url" type="text" />
        <input type="submit" value="Shorten URL" />
        <br />
        <br />
        <label htmlFor="slug"> Shortened URL: </label>
        <span id="slug" />
      </form>
      <div>
        {urls.map((val) => {
          return <h1> {val.slug} </h1>;
        })}
      </div>
    </>
  );
}

// import React from "react";
// import { graphql } from "gatsby";

// const ListItem = (listsData) => {
//   const {
//     data: {
//       prismic: {
//         allLists: {
//           edges,
//         }
//       }
//     }
//   } = listsData;
//   const currentListItem = edges[0].node;

//   return (
//     <div>{currentListItem.header[0].text}</div>
//   );
// };

// export const query = graphql`
// query {
//   prismic {
//     allPosts {
//       edges {
//         node {
//           _meta {
//             id
//             lang
//             tags
//             type
//             uid
//           }
//           body {
//             ... on PRISMIC_PostBodyText {
//               type
//               label
//               primary {
//                 text
//               }
//             }
//             ... on PRISMIC_PostBodyQuote {
//               type
//               label
//               primary {
//                 quote
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

// export default ListItem;

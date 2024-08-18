export const menuItemsData = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/aboutus",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    submenu: [
      {
        title: "Nails",
        submenu: [
          {
            title: "Covers",
            url: "/nailCovers",
          },
          {
            title: "Fashion Editorials",
            url: "/nail-fashion-edit",
          },
        ],
      },
      {
        title: "Hair",
        url: "/hair",
      },
    ],
  },
  {
    title: "Bookings",
    url: "/bookings",
  },
];


// {
//     title: "Home",
//     url: "/",
//   },
// {
//     title: "Portfolio",
//     url: "/portfolio",
//     submenu: [
//       {
//         title: 'Frontend',
//         url: 'frontend',
//       },
//       {
//         title: 'Backend',
//         submenu: [
//           {
//             title: 'NodeJS',
//             url: 'node',
//           },
//           {
//             title: 'PHP',
//             url: 'php',
//           },
//         ],
//       },
//     ],
//   },
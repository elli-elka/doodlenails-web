
import * as React from 'react';
import "./NailCovers.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { borders } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(9),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function NailCovers() {
  return (
//     <Box sx={{ width: '100%', minHeight: '100%'}}>
//       <Masonry className= "box-masonry" columns={2} spacing={6}>
//         {itemData.map((item, index) => (
//           <div className="box-element" key={index}>
//             <img className="images-nails"
//               srcSet={`${item.img}?w=50&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=50&auto=format`}
//               alt={item.title}
//               loading="lazy"
//               style={{
//                 borderBottomLeftRadius: 4,
//                 borderBottomRightRadius: 4,
//                 display: 'block',
//                 height: "90%", width: "90%"
            
//               }}
              
//             />
//           </div>
//         ))}
//       </Masonry>
//     </Box>
//   );
// }

<Box sx={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}




const itemData = [
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2024/08/photo_2024-08-15_19-35-59.jpg',
    title: 'Fern',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2024/08/photo_2024-08-15_19-35-59-2.jpg',
    title: 'Snacks',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2024/08/The-Silk-Road-Issue-12-14.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2024/08/The-Silk-Road-Issue-12-13.jpg',
    title: 'Tower',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2024/08/The-Silk-Road-Issue-12-Je.jpg',
    title: 'Sea star',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2024/08/The-Silk-Road-Issue-12-25.jpg',
    title: 'Honey',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2024/08/The-Silk-Road-Issue-12-24.jpg',
    title: 'Basketball',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2019/12/sisterhood4.jpg',
    title: 'Breakfast',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2019/12/sisterhood2.jpg',
    title: 'Tree',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2019/12/sisterhood1.jpg',
    title: 'Burger',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2019/12/Egle-Vasi_-FFP_red_10-scaled.jpg',
    title: 'Camera',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2019/12/Egle-Vasi_-FFP_red_6-scaled.jpg',
    title: 'Coffee',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2019/12/Egle-Vasi_-FFP_red_3-scaled.jpg',
    title: 'Camping Car',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2023/08/6378d9cc523c290d44143228_0-11.jpg',
    title: 'Hats',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2023/08/387_Senses_1945r2c-2-scaled.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2023/08/278864297_4668348156610243_5561578004087023101_n-scaled.jpg',
    title: 'Mountain',
  },
  {
    img: 'http://www.doodlenails.com/main/blog/wp-content/uploads/2023/08/ClaireH_041021_-001r1-2-scaled.jpg',
    title: 'Bike',
  },
];

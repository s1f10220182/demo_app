import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'


const Search = () => {
  const location = useLocation();
  const query = location.state;
  const appid = 'dj00aiZpPVl0RmEzVno0MDJxZyZzPWNvbnN1bWVyc2VjcmV0Jng9NmM-';
  const API_URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&query=${query}`;

  const [ items, setItem ] = useState({hits:[]})
  useEffect(() => {
      const loadSearch = async () => {
        try {
          const res = await fetch(API_URL);
          const data = await res.json();
          // console.log(data)
          setItem(data?.hits ?? []);
          // console.log(data);
        } catch(e) {
          console.log('エラーが発生しました', e);
        }
      };
      if (query) {
        loadSearch();
      }
    }, [query]);

  console.log(items)
  // const navigate = useNavigate();
  const navigate = useNavigate();

//   {items.length > 0 &&
//     <Box>
//       <Typography variant="h2">{items}の検索結果:</Typography>
//       <hr></hr>
//     </Box>
// }

  return (
    <Box className="search">
      <Typography variant="h1">hello</Typography>
      <hr></hr>

      {items.length > 0 && items.map((item, n) => {
      const itemName = item.name;
      const image = item.image.medium
      const price = item.price.toLocaleString();
      const rate = item.review.rate
      return(
        <Box className="item" key={n+1} onClick={() => navigate('/detail', {state:itemName})}>
        <img src={image} alt={n+1} onClick={() => navigate('/detail', {state:itemName})} className="imgURL"/>
              <Box className="title" onClick={() => navigate('/detail', {state:itemName})}>
                <p>{itemName.slice(0, 25)}</p>
              </Box>
            <Typography variant="h5" className="price">{price}円</Typography>
            <Typography variant="h6" className="rate">★{rate}</Typography>
          </Box>
      );
    })}
    <hr></hr>

      <Typography variant="h1">hello</Typography>
    </Box>
  );
}




export default Search;

import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Box, Typography } from '@mui/material'
// import Detail from "../func/Detail";
// import Detail from "../func/Detail";

const Main = () => {
  const appid = 'dj00aiZpPVl0RmEzVno0MDJxZyZzPWNvbnN1bWVyc2VjcmV0Jng9NmM-';
  const API_URL = `https://shopping.yahooapis.jp/ShoppingWebService/V1/highRatingTrendRanking?appid=${appid}`
  const [ items, setItems ] = useState([]);
  // let n = 0;
  useEffect(() => {
  const loadItems = async () =>{
      try{
        const res = await fetch(API_URL, { mode: "cors" });
        const data = await res.json();
        const newData = data.high_rating_trend_ranking.ranking_data
        // console.log(newData)
        setItems(newData);
      }
      catch(e){
        console.log('Errorだよ!!!', e)
      }
    }
  loadItems();
  //   console.log(data);
  }, [])

  const navigate = useNavigate();

  return (
    <Box className="main">
      <Box className="cols">
      <Typography variant="h2" >今週のランキング!</Typography>
      <hr></hr>
      <Box className="items">
      {items.map((item, n) => {
        const itemName = item.item_information.name;
        const price = item.item_information.regular_price.toLocaleString();
        const rate = item.review.rate;

        return (
          <Box key={n+1} className="item" onClick={() => navigate('/detail', {state:itemName})}>
            <Typography variant="h6" className="rank">第{n+1}位</Typography>
              <img src={item.image.medium} alt={n+1} onClick={() => navigate('/detail', {state:itemName})} className="imgURL"/>
              <Box className="title" onClick={() => navigate('/detail', {state:itemName})}>
                <Typography variant="p">{itemName.slice(0, 25)}</Typography>
              </Box>
            <Typography variant="h5" className="price">{price}円</Typography>
            <Typography variant="h6" className="rate">★{rate}</Typography>
          </Box>

        );
      })}
      </Box>
      </Box>
    </Box>
  );
}

export default Main;

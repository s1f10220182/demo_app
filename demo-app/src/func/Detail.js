import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'


const Detail = () => {
      const location = useLocation();
      const query = location.state;
      const appid = 'dj00aiZpPVl0RmEzVno0MDJxZyZzPWNvbnN1bWVyc2VjcmV0Jng9NmM-';
      const API_URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&query=${query}`;

      const [ details, setDetail ] = useState([]);
      useEffect(() => {
          const loadDetail = async () => {
              try {
                  const res = await fetch(API_URL);
                  const data = await res.json();
                  setDetail(data.hits);
              } catch(e) {
                  console.log('エラーが発生しました', e);
              }
          }
          loadDetail();
      }, [API_URL]);


      const navigate = useNavigate();

      return (
          <Box className="detail">
            <Box className="detailBox">
              {details.length > 0 ? (
                  <Box>
                      <Typography variant="h1">{details[0].name}</Typography>
                      <hr></hr>
                      <img src={details[0].image.medium} alt={details[0].name} />
                      <Box className="ratePrice">
                        <Typography variant="h3" className="price">{details[0].price.toLocaleString()}円</Typography>
                        <Typography variant="h4" className="rate">★{details[0].review.rate}</Typography>
                      </Box>
                      <hr></hr>
                      <details>
                        <summary>【詳細】を見る</summary>
                        <Typography variant="h6">【詳細】</Typography>
                      {details[0].description && (
                        <p dangerouslySetInnerHTML={{ __html: details[0].description }}></p>
                      )}

                    </details>
                      <br></br>
                      <Button variant="contained" size="small" onClick={() => navigate('/')} className="detailButton">ホームに戻る</Button>
                  </Box>
              ) : (
                  <p>Loading...</p>
              )}
              </Box>
          </Box>
      );
  }



export default Detail;

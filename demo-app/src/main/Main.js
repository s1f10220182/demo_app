import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
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
  // const handleClick = (elem) =>{
  //   navigate(elem)
  //   // ("/detail", {state:id})
  // }

  return (
    <div className="main">
      <h1>今週のランキング!</h1>
      <hr></hr>
      {items.map((item, n) => {
        const itemName = item.item_information.name;
        const price = item.item_information.regular_price.toLocaleString();
        const rate = item.review.rate;
        const seller_id = item.seller.id;
        const code = item.item_information.code
        const needCode = `${seller_id}_${code}`
        // console.log(`seller_id:${seller_id}, code:${code}`)
        // console.log(price, typeof(price))

        return (
          <div key={n+1} className="item" onClick={() => navigate('/detail', {state:itemName})}>
            <h3>第{n+1}位</h3>
              <img src={item.image.medium} alt={n+1} onClick={() => navigate('/detail', {state:itemName})} className="imgURL"/>
            <div className="title" onClick={() => navigate('/detail', {state:itemName})}>
                <p>{itemName.slice(0, 25)}</p>
              </div>
            <h3 className="price">{price}円</h3>
            <h4 className="rate">★{rate}</h4>
          </div>
        );
      })}
      <h2>title</h2>
      <h2>title</h2>
    </div>
  );
}

export default Main;

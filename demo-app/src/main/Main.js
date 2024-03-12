import React, { useEffect, useState } from "react";

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

  return (
    <div className="main">
      <h1>今週のランキング!</h1>
      <hr></hr>
      {items.map((item, n) => {
        const url = item.item_information.url;
        const itemName = item.item_information.name;
        const price = item.item_information.regular_price.toLocaleString();
        const rate = item.review.rate;
        // console.log(price, typeof(price))
        return (
          <div key={n+1} className="item">
            <h3>第{n+1}位</h3>
            <a href={url} className="imgURL">
              <img src={item.image.medium} alt={n+1}/>
            </a>
            <a href={url} className="titleURL">
              <div className="title">
                <p>{itemName.slice(0, 25)}</p>
              </div>
            </a>
            <h3 className="price">{price}円</h3>
            <h4>★{rate}</h4>
          </div>
        );
      })}
      <h2>title</h2>
      <h2>title</h2>
    </div>
  );
}

export default Main;

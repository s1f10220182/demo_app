import React, { useEffect, useState } from "react";

// let count = 0;
const Main = () => {
  const appid = 'dj00aiZpPVl0RmEzVno0MDJxZyZzPWNvbnN1bWVyc2VjcmV0Jng9NmM-';
  const API_URL = `https://shopping.yahooapis.jp/ShoppingWebService/V1/highRatingTrendRanking?appid=${appid}`
  const [ items, setItems ] = useState([]);
  let n = 0;
  useEffect(() => {
  const loadItems = async () =>{
      try{
        const res = await fetch(API_URL, { mode: "cors" });
        const data = await res.json();
        const newData = data.high_rating_trend_ranking.ranking_data
        console.log(newData)
        // for (let i of newData){
        //   console.log(i.item_information.name);
        // }
        // return data
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
        // console.log(price, typeof(price))
        return (
          <div key={n+1} className="item">
            <h3>第{n+1}位</h3>
            <img src={item.image.medium}/>
            <h3 className="price">{price}円</h3>
            {/*<h3 className="title"><a src={url}>{itemName}</a></h3>
        <hr></hr>*/}
          </div>
        );
      })}
      <h2>title</h2>
      <h2>title</h2>
    </div>
  );
}

export default Main;

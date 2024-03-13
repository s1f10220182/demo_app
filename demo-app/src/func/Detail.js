import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
// import Header from "../header/Header";
// import Footer from "../footer/Footer";

// const Detail = () => {
//   const location = useLocation()
//     const query = location.state
//     // console.log(query)
//     const appid = 'dj00aiZpPVl0RmEzVno0MDJxZyZzPWNvbnN1bWVyc2VjcmV0Jng9NmM-'
//     // const store = props.store;
//     const API_URL = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&query=${query}`;


//     // console.log('クリックされました！');

//     const [ details, setDetail ] = useState([]);
//     useEffect(() => {
//       const loadDetail = async () => {
//         try{
//           const res = await fetch(API_URL)
//           const data = await res.json()

//           console.log(data.hits);
//           setDetail(data.hits)
//         }catch(e){
//           console.log('エラーがでタ', e);
//         }
//         }
//         loadDetail();
//     }, [])


//     const navigate = useNavigate();

//     const name  = details[0].name;
//     const image = details[0].image.medium;
//     const price = details[0].price.toLocaleString();
//     const desc  = details[0].description;
//     const rate  = details[0].review.rate
//     const review = details[0].review

//     return(
//       <div className="detail">
//       {details.length > 0 ? (
//         <div>
//           <h1>{name}</h1>
//           <hr></hr>
//           <img src={image}/>
//           <h3 className="price">{price}円</h3>
//           <h4>★{rate}</h4>
//           <h2>【詳細】</h2>
//           <p>{desc}</p>
//           <hr></hr>
//           <h2>{review}</h2>
//           <button onClick={() => navigate('/')}>ボタン</button>
//         </div>
//       ) : (<p>Loading...</p>)
//       }
//         <h1>item</h1>
//         <h1>item</h1>
//         <h1>item</h1>
//         <h1>item</h1>
//         <h1>item</h1>
//         <h1>item</h1>
//       </div>
//     )}
    // loadDetail();


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
          <div className="detail">
              {details.length > 0 ? (
                  <div>
                      <h1>{details[0].name}</h1>
                      <hr />
                      <img src={details[0].image.medium} alt={details[0].name} />
                      <h3 className="price">{details[0].price.toLocaleString()}円</h3>
                      <h4 className="rate">★{details[0].review.rate}</h4>
                      <h2>【詳細】</h2>
                      <p>{details[0].description}</p>
                      <button onClick={() => navigate('/')}>ボタン</button>
                  </div>
              ) : (
                  <p>Loading...</p>
              )}
          </div>
      );
  }



export default Detail;

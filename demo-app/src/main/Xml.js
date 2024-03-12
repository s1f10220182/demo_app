// import React, {useEffect} from "react";
// // import xmljs from "xml-js";
// // import  xml2js  from "xml2js";

// const Xml = () => {
//   // const API_URL = 'https://circus.shopping.yahooapis.jp/ShoppingWebService/V1/getItem?seller_id=teststore&item_code=item1'
//   // const seller_id =
//   // const item_code =


//   // const loadDetail = async () => {
//   //   try {
//   //     const res = await fetch(API_URL, { mode: "cors" });
//   //     const xmlData = await res.text();

//   //     // ここでxmlDataを解析する方法を選択し、処理を行う
//   //     const jsonData = xmljs.xml2json(xmlData, { compact: true, spaces: 2 });
//   //     console.log(jsonData);
//   //     // 例えば、xml-jsライブラリを使ってXMLをJSONに変換することができます

//   //   } catch (e) {
//   //     console.log("エラーが出たよ", e);
//   //   }
//   // };

//   // console.log('hello')

//   // loadDetail();




//   // const [items, setItems] = useState([]);

//   // useEffect(() => {
//   //   const loadItems = async () =>{
//   //       try{
//   //         const res = await fetch(API_URL, { mode: "cors" });
//   //         const data = await res.json();
//   //         const newData = data.high_rating_trend_ranking.ranking_data
//   //         // console.log(newData)
//   //         // for (let i of newData){
//   //         //   console.log(i.item_information.name);
//   //         // }
//   //         // return data
//   //         setItems(newData);
//   //       }
//   //       catch(e){
//   //         console.log('Errorだよ!!!', e)
//   //       }
//   //     }
//   //   loadItems();
//   //   //   console.log(data);
//   //   }, [])
//   return (
//     <h1>Helloooooooo</h1>
//   )
// }

// export default Xml;



import React, { useEffect, useState } from "react";
import { parse } from "fast-xml-parser";

const Xml = () => {
  // APIのURLと必要なクエリパラメータを設定します
  const API_URL = `https://circus.shopping.yahooapis.jp/ShoppingWebService/V1/getItem`;
  const seller_id = "teststore";
  const item_code = "item1";

  // 商品データを保存するためのstateを設定します
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const apiUrlWithParams = `${API_URL}?seller_id=${seller_id}&item_code=${item_code}`;
    const loadItemDetail = async () => {
      try {
        const response = await fetch(apiUrlWithParams, { mode: "cors" });

        if (response.ok) {
          const xmlData = await response.text();

          // XMLデータをJSONに変換します
          const jsonObj = parse(xmlData);
          setItemData(jsonObj);

          // JSONデータをコンソールに出力して確認します
          console.log(jsonObj);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error("データ取得中にエラーが発生しました", error);
      }
    };

    // 商品詳細をロードします
    loadItemDetail();
  }, []);

  // 商品データがない場合は、「Loading...」などを表示します
  if (!itemData) {
    return <div>Loading...</div>;
  }

  // 商品データを表示するコンポーネントを作ります（適宜カスタマイズしてください）
  const renderItems = () => {
    // itemDataの構造に応じて表示用のJSXを記述する
    // 以下はサンプルであり、実際のAPIレスポンスに合わせて調整が必要です
    return <div>{JSON.stringify(itemData)}</div>;
  };

  // レンダリング
  return (
    <div>
      <h1>商品情報</h1>
      {renderItems()}
    </div>
  );
};

export default Xml;

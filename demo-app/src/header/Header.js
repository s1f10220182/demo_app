import React, { useState }from "react";
import { useLocation, useNavigate } from 'react-router-dom'

// import Button from '@mui/material/Button';
// import {useForm} from 'react-hook-form';


const Header = () => {
  const [text, setText] = useState('');
  const location = useLocation();
  // const { register, reset, handleSubmit } = useForm({
  //   mode: onsubmit,
  //   defaultValues: {name: "aaa", email: "test@test.com"}
  // })
  const navigate = useNavigate();

  const onchangeText = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // フォームのデフォルトの送信動作をキャンセル
    navigate('/search', {state: text});
  };

  return (
    <header>
    <h1><a href="/">Demo-app</a></h1>
    <form onSubmit={handleSubmit}> {/* onSubmitイベントハンドラーを追加 */}
      <input onChange={onchangeText} type="text"/>
      <button type="submit">検索</button> {/* buttonタイプをsubmitに変更 */}
    </form>

    </header>
  )
}

export default Header;

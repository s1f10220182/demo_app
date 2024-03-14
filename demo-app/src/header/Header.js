import React, { useState }from "react";
import {  useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

// import Button from '@mui/material/Button';
// import {useForm} from 'react-hook-form';


const Header = () => {
  const [text, setText] = useState('');
  // const location = useLocation();

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
    <Typography variant="h2"><a href="/">Yahoo! Demo App</a></Typography>
    <form onSubmit={handleSubmit}> {/* onSubmitイベントハンドラーを追加 */}
      <input onChange={onchangeText} type="text" placeholder="何をお探しですか？"/>
      <Button variant="contained" size="small" type="submit"><SearchIcon /></Button> {/* buttonタイプをsubmitに変更 */}
    </form>

    </header>
  );
}

export default Header;

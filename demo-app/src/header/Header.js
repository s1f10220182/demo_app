import React from "react";
// import Button from '@mui/material/Button';
// import {useForm} from 'react-hook-form';


const Header = () => {
  // const { register, reset, handleSubmit } = useForm({
  //   mode: onsubmit,
  //   defaultValues: {name: "aaa", email: "test@test.com"}
  // })
  return (
    <header>
        <h1><a href="/">Demo-app</a></h1>
       {/*} <Button
        variant="outlined"
        size='small'>
        ログイン
  </Button>*/}

    {/*   <input
          {...register('email', {
            required: true,
            maxLength: 60,
            pattern: {
              value:
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)]*$/,
              message: 'メールアドレスの形式が不正です',
            },
            validate: {
              lessThanTen: (value) =>
                parseInt(value, 60) < 60 || '60文字以内で入力してください'
            }
            }
          )}
          />*/}

    </header>
  )
}

export default Header;

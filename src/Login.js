import React, { useState, useContext, useEffect, useRef } from "react";
import { FormContext } from "./FormContext";
import { useForm } from "react-hook-form";
import { Redirect, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, setError, watch } = useForm({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useContext(FormContext);

  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data) => {
    history.push("/homepage");
    alert(JSON.stringify(data));
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  // const updatePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const updateRePassword = (e) => {
  //   setRePassword(e.target.value);
  // };

  function onSubmitForm(data) {
    console.log(data);

    // setUsers((prevForm) => [
    //   ...prevForm,
    //   { name: name, email, password, repassword },
    // ]);
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>
          Авторизация
        </h1>
        <small className="signin">
          Уже есть аккаунт?
              <Link to="/">
            <strong>Регистрация</strong>
          </Link>
        </small>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="firstName">
            <label htmlFor="firstName">Имя</label>
            <input
              className=" "
              placeholder="Введите Ваше имя"
              type="text"
              value={name}
              name="name"
              ref={register({ required: "Введите Ваше имя *" })}
              onChange={updateName}
            />
            {errors.name && (
              <p className="error">
                <span style={{ color: "red" }}>{errors.name.message}</span>
              </p>
            )}
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className=""
              placeholder="Введите Ваш Email"
              type="email"
              name="email"
              value={email}
              ref={register({
                required: "Введите Ваш Email *",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Введите действительный адрес электронной почты",
                },
              })}
              onChange={updateEmail}
            />
            {errors.email && (
              <p className="error">
                <span style={{ color: "red" }}>{errors.email.message}</span>
              </p>
            )}
          </div>

          <div className="password">
            <label htmlFor="password">Пароль</label>
            <input
              className=" "
              placeholder="Введите Ваш пароль"
              type="password"
              name="password"
              ref={register({
                required: "Вы должны указать пароль *",
                minLength: {
                  value: 6,
                  message: "пароль должен содержать не менее 6 символов",
                },
              })}
            />
            {errors.password && (
              <p className="error">
                <span style={{ color: "red" }}>{errors.password.message}</span>
              </p>
            )}
          </div>

          <div className="createAccount">
            <button type="submit" onClick={handleSubmit(onSubmit)}>
              ВОЙТИ
            </button>
            {errors.name &&
              errors.email &&
              errors.password &&
              "Все поля обязательны для заполнения"}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

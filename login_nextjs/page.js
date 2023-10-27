"use client";
import { useState } from "react";
import { account, ID } from "./appwrite";
import styles from "./page.module.css";

const LoginPage = () => {
  const [logged, setLogged] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [home, setHome] = useState(true);

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email, password) => {
    try {
      const session = await account.createEmailSession(email, password);
      setLoggedInUser(await account.get());
      alert('로그인 되었습니다.')
      setLogged(!logged);
      setHome(false);
      setSignUp(false);
      window.open("https://2019575042.ksecole.kr")
    } catch (err) {
      alert("로그인에 실패하였습니다. email과 패스워드를 확인해보세요.");
    }
    setEmail("");
    setPassword("");
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), email, password, name);
      alert('회원가입이 완료되었습니다.')
      setHome(true);
      setSignUp(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("회원가입에 실패하였습니다.");
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
    setHome(true);
    setLogged(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src="https://placehold.co/300x400"></img>
      </div>

      {home && (
        <form className={styles.form}>
          <h1 className={styles.title}>WELCOME !</h1>
          <p>ID</p>
          <input
            className={styles.input}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <p>PASSWORD</p>
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className={styles.btn}
            onClick={() => login(email, password)}
          >
            LOGIN
          </button>
          <p
            className={styles.signup}
            onClick={() => {
              setSignUp(!signUp);
              setHome(false);
            }}
          >
            SIGN UP
          </p>
        </form>
      )}
      {signUp && (
        <form className={styles.form}>
          <h1 className={styles.title}>REGISTER</h1>
          <p>ID</p>
          <input
            className={styles.input}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p>PASSWORD</p>
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p>NAME</p>
          <input
            className={styles.input}
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <div className={styles.box}>
            <button
              type="button"
              className={styles.btn}
              onClick={() => {
                setSignUp(false);
                setHome(true);
              }}
            >
              BACK
            </button>
            <button type="button" className={styles.btn} onClick={register}>
              SIGN UP
            </button>
          </div>
        </form>
      )}
      {logged && (
        <div className={styles.myPage}>
          <h2>{loggedInUser && loggedInUser.name}'s HOME</h2>
          <div className={styles.info}>
            <a
              href="https://2019575042.ksecole.kr"
              target="_blank"
              className={styles.link}
            >
              HOMEPAGE
            </a>
          </div>

          <button type="button" onClick={logout} className={styles.btn}>
            LOGOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;

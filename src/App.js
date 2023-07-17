import React from "react";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Путешествие👜</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>Что тебе нужно для 😍 поездки?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">СПИСОК</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 Что у тебя есть Х, что уже упаковал Х(X%)</em>
    </footer>
  );
}

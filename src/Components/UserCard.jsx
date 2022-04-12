import "../styles.css";
import React from "react";

export default function UserCard({ name, picture }) {
  const { title, first, last } = name;
  return (
    <div className="card">
      <img alt="pictire" src={picture.medium}></img>

      <div className="name">
        {title} {first} {last}
      </div>
    </div>
  );
}

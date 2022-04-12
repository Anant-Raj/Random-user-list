import "./styles.css";
import UserCard from "./Components/UserCard";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const endRef = useRef(null);

  useEffect(() => {
    if (loading) {
      fetch("https://randomuser.me/api/?page=0&results=3")
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            const newUserList = result.results;
            console.log()
            setUserList((userList) => [...userList, ...newUserList]);
            setLoading(false);
          },
          (error) => {
            console.log();
          }
        );
    }
  }, [loading]);

  useEffect(() => {
    endRef.current.scrollIntoView();
  });

  const loadMoreUsers = () => {
    if (!loading) {
      setLoading(true);
    }
  };

  const userCardList = userList.map((userDetail) => {
    const { name, picture } = userDetail;
    console.log("name is --", name, "picture is --", picture);
    return <UserCard name={name} picture={picture} />;
  });

  return (
    <div className="App">
      <div>{!!userCardList.length && userCardList}</div>
      <div> {loading && "Loading..."}</div>
      <button onClick={loadMoreUsers}> Load More</button>
      <div className="endDiv" ref={endRef}></div>
    </div>
  );
}

import React, { useState } from "react";
import HobbyList from "../../component/home/hobbyList";
import { useDispatch, useSelector } from "react-redux";
import { activeHobby, addNewHobby } from "../../actions/hobby";

function HomePage() {
  const hobbyList = useSelector((state) => state.hobby.list);
  const hobbyId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
  };
  const addHobby = () => {
    const newHobby = {
      hobbyId: randomNumber(),
      hobbyName: `hobby ${randomNumber()}`,
    };
    dispatch(addNewHobby(newHobby));
  };
  const ClickHobby = (id) => {
    const activeHobbyId = id;
    dispatch(activeHobby(activeHobbyId));
  };
  return (
    <React.Fragment>
      <button onClick={addHobby}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        hobbyId={hobbyId}
        onClickActive={ClickHobby}
      />
    </React.Fragment>
  );
}
export default HomePage;

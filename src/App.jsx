import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css?after";
import Header from "./header/Header";
import InputField from "./inputField/InputField";
import NoList from "./postList/NoList";
import PostList from "./postList/PostList";
import TotalCount from "./totalCount/TotalCount";

function App() {
  // const [count, setCount] = useState(0);
  // const data = ["송도센트럴파크", "파주 프로방스", "춘천 소양강 스카이워크"];
  let [list, setList] = useState([]);

  function getList(li) {
    console.log("adding ", li);
    list = [...list, li];
    setList(list);
    console.log("list is now", list);
  }
  function delList(li) {
    console.log("discarding ", li);
    // list.splice(li, 1); // 왜 안댐
    list = list.filter((v, i) => i !== li);
    setList(list);
    console.log("list is now", list);
  }

  return (
    <>
      <Header />
      <InputField getList={getList} />
      <TotalCount listCount={list.length} />
      {list.length === 0 ? (
        <NoList />
      ) : (
        <PostList list={list} delList={delList} />
      )}
    </>
  );
}

export default App;

// list에서 삭제 후 PostList도 다시 로딩해서 삭제한거 사라지고 보이도록 처리해야댐
// assets는 정적? 한번만 사용되는 친구들이 들어가면 될듯. or public 영역에 넣어도 됨.
// return 속의 jsx 부분에서는 if 같은걸 쓸 수 없음.. 고차함수나 삼항연산자 정도만 쓸 수 있다.

import { useRef, useState } from "react";
import "./inputField.css?after";

export default function InputField({ getList }) {
  const inputRef = useRef(null);
  const [notice, setNotice] = useState("");

  const showNotice = (bool) => {
    if (bool) {
      setNotice("등록되었습니다!");
      setTimeout(() => {
        setNotice("");
      }, 1000);
    } else {
      setNotice("입력된 장소가 없습니다!");
      setTimeout(() => {
        setNotice("");
      }, 1000);
    }
  };
  const addList = () => {
    if (inputRef.current.value !== "") {
      console.log("clicked", inputRef.current.value);
      getList(inputRef.current.value);
      showNotice(true);
    } else {
      showNotice(false);
    }
    inputRef.current.value = "";
  };
  const checkEnter = (e) => {
    if (e.key === "Enter") addList();
  };

  return (
    <div className="inputField mw">
      <input
        type="text"
        placeholder="가고싶은 여행지를 등록하세요"
        ref={inputRef}
        onKeyUp={checkEnter}
      />
      <p className="notice">{notice}</p>
      <button onClick={addList}>ADD</button>
    </div>
  );
}

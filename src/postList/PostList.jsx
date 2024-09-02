import List from "./List";
import "./list.css";

export default function PostList({ list, delList }) {
  return (
    <ul className="postList mw">
      {list.map((v, i) => (
        <List idx={i} val={v} delList={delList} key={i} />
      ))}
    </ul>
  );
}

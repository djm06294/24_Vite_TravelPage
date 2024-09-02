import "./list.css";

export default function List({ idx, val, delList }) {
  const discard = () => {
    delList(idx);
  };
  return (
    <li className="list">
      <p>{val}</p>
      <i className="fa-solid fa-minus" onClick={discard}></i>
    </li>
  );
}

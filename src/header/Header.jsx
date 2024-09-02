import "./header.css";

export default function Header() {
  return (
    <h1 className="header">
      <div className="clickable">
        <i className="fa-solid fa-rocket"></i>
        <strong>가자</strong>
        <strong>여행</strong>
      </div>
    </h1>
  );
}

import "./totalCount.css";

export default function TotalCount({ listCount }) {
  return (
    <div className="totalCount mw">
      <strong>count</strong>
      <span>{listCount}</span>
    </div>
  );
}

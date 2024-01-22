export default function Displays({ textTitle, value }) {
  return (
    <div className="displaysDivs">
      <h3 className="displaysTitle">{textTitle}</h3>
      <p className="displaysValue">{value}</p>
    </div>
  );
}

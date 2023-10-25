import "./styles.css";
export default function Response({ text, sender, key }) {
  return (
    <div
      className="response-div"
      style={
        sender == "bot"
          ? { backgroundColor: "lavender" }
          : { backgroundColor: "lavenderblush" }
      }
    >
      <div className="response-text" style={{ width: "75%" }}>
        <p>{text}</p>
      </div>
    </div>
  );
}

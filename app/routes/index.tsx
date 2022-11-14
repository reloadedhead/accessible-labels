export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Accessible labels and where to find them</h1>

      <span>1500.50 Kg CO₂</span>

      <div>
        <span>1500.50</span>{" "}
        <abbr title="Kilograms of carbon dioxide">Kg CO₂</abbr>
      </div>
    </div>
  );
}

export default function FormattedPrice({ amout }) {
  const fromattaedAmout = new Number(amout).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return <span>{fromattaedAmout}</span>;
}

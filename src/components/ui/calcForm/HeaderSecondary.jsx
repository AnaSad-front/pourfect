function HeaderSecondary({ amount = 1, productName = "candle" }) {
  return (
    <h2 className="text-sm text-secondary mb-xs text-end">
      {`for ${amount} ${productName}`}
    </h2>
  );
}

export default HeaderSecondary;

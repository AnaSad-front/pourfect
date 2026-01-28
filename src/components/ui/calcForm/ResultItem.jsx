function ResultItem({ name = "Wax", amount }) {
  return (
    <div className="text-primary text-sm/14 flex justify-between ">
      <p>{name}</p>
      <p>
        <span className="font-semibold text-accent">{amount}</span> g
      </p>
    </div>
  );
}

export default ResultItem;

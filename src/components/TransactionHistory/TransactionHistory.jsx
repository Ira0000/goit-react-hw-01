import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.tableRow}>
              <td className={css.tableCell}>{item.type}</td>
              <td className={css.tableCell}>{item.amount}</td>
              <td className={css.tableCell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

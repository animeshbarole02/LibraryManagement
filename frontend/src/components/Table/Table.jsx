import "./Table.css";

const Table = ({ className, data, columns }) => {
  return (
    <div className={`table-div ${className}`}>
      <table className={`custom-table ${className}`}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} style={{ width: column.width }}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} style={{ width: column.width }}>
                  {column.render ? column.render(row) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

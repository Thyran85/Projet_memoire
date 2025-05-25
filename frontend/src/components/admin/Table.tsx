interface TableProps {
  headers: string[];
  data: { [key: string]: any }[];
}

const Table = ({ headers, data }: TableProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th key={index} className="p-4 text-left text-gray-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="p-4">
                  {row[header]}
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
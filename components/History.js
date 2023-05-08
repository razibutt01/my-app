import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const History = () => {
  const { user } = useAuthContext();
  const [results, setResults] = React.useState([]);
  console.log(results);

  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/getResult?userId=${user.user._id}`);
      const data = await res.json();
      setResults(data);
    }
    fetchData();
  }, [user.user._id]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        History
      </h2>
      <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Disease
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Remedies
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Dermatologists
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.length > 0
              ? results.map((result) => (
                  <tr key={result._id}>
                    <td className="px-6 py-4 whitespace-wrap text-sm font-medium text-gray-900">
                      {result.disease}
                    </td>
                    <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                      {/* {result.remedies.map((rem) => rem.toUpperCase() + " , ")} */}
                      {result.remedies.map((rem, index) => (
                        <React.Fragment key={index}>
                          {rem.toUpperCase()}
                          <br />
                        </React.Fragment>
                      ))}
                    </td>
                    <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                      {result.dermatologists.map((derm) => derm + " , ")}
                    </td>
                    <td className="px-6 py-4 whitespace-wrap text-sm text-gray-500">
                      {new Date(result.created).toLocaleString()}
                    </td>
                  </tr>
                ))
              : "There is no History"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;

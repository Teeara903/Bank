// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function Chart(data) {
// //   const data = [
// //     {
// //       month: "Jan",
// //       income: 800000,
// //       expenses: 200000,
// //     },
// //     {
// //       month: "Feb",
// //       income: 650000,
// //       expenses: 180000,
// //     },
// //     {
// //       month: "Mar",
// //       income: 900000,
// //       expenses: 300000,
// //     },
// //     {
// //       month: "Apr",
// //       income: 700000,
// //       expenses: 250000,
// //     },
// //     {
// //       month: "May",
// //       income: 850000,
// //       expenses: 350000,
// //     },
// //     {
// //       month: "Jun",
// //       income: 950000,
// //       expenses: 400000,
// //     },
// //   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
//       <h2 className="text-2xl font-bold mb-6">Monthly Overview</h2>

//       <ResponsiveContainer width="100%" height={350}>
//         <BarChart data={data}>
//           <XAxis dataKey="month" />

//           <YAxis />

//           <Tooltip />

//           <Bar dataKey="income" fill="#2563eb" radius={[8, 8, 0, 0]} />

//           <Bar dataKey="expenses" fill="#ef4444" radius={[8, 8, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

// }
// export default Chart;
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Charts({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">Monthly Overview</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="income" fill="#2563eb" radius={[8, 8, 0, 0]} />

          <Bar dataKey="expenses" fill="#ef4444" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;

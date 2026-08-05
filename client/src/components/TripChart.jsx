import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TripChart({ trips }) {

  const labels = trips.map((trip) => trip.destination);

  const budgets = trips.map((trip) => Number(trip.budget));

  const data = {
    labels,
    datasets: [
      {
        label: "Trip Budget (₹)",
        data: budgets,
        backgroundColor: [
          "#0d6efd",
          "#20c997",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
          "#fd7e14",
        ],
      },
    ],
  };

  return (
    <div className="card shadow-lg border-0 rounded-4 p-4">
      <h3 className="mb-4">Travel Budget Analytics</h3>

      <Bar data={data} />
    </div>
  );
}

export default TripChart;
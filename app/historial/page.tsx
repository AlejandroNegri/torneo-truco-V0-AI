'use client';

import data from "@/data/data";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function HistorialPage() {
  // Prepare data for bar chart
  const processedData = [...data]
    .sort((a, b) => b.played - a.played)
    .map(player => ({
      name: player.name,
      played: player.played,
      won: player.won,
      lost: player.played - player.won
    }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const total = payload[0].payload.played;
      const won = payload[0].payload.won;
      const percentage = Math.round((won / total) * 100);

      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-bold">{label}</p>
          <p>Total jugados: {total}</p>
          <p>Ganados: {won}</p>
          <p>Efectividad: {percentage}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 pb-20 pt-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Estadísticas</h1>
        <p className="text-muted-foreground">Análisis del torneo</p>
      </header>

      <Card className="p-6 bg-card/50 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4">Resumen de Partidas</h2>
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={processedData}
              layout="vertical"
              margin={{ left: 70, right: 20, top: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 'dataMax']} />
              <YAxis
                dataKey="name"
                type="category"
                width={60}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="played"
                fill="#e2e8f0"
                maxBarSize={20}
                name="Total Jugados"
              />
              <Bar
                dataKey="won"
                fill="#22c55e"
                maxBarSize={20}
                name="Ganados"
                stackId="a"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}


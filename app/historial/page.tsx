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
  Legend,
  ResponsiveContainer
} from "recharts";

export default function HistorialPage() {
  // Sort data by games played
  const sortedByPlayed = [...data].sort((a, b) => b.played - a.played);

  // Calculate win ratios and sort by it
  const withRatios = data.map(player => ({
    ...player,
    ratio: (player.won / player.played * 100).toFixed(1)
  }));
  const sortedByRatio = [...withRatios].sort((a, b) => parseFloat(b.ratio) - parseFloat(a.ratio));

  return (
    <main className="container mx-auto px-4 pb-20">
      <h1 className="text-2xl font-bold text-center my-6">Estadísticas</h1>

      <div className="grid gap-6">
        {/* Games Played Chart */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Jugados/Ganados</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedByPlayed}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="played" fill="hsl(var(--primary))" name="Jugados" />
                <Bar dataKey="won" fill="hsl(var(--destructive))" name="Ganados" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Win Ratio Chart */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Porcentaje de Victoria</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedByRatio}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis unit="%" />
                <Tooltip
                  formatter={(value) => [`${value}%`, "Ratio de Victoria"]}
                />
                <Bar
                  dataKey="ratio"
                  fill="hsl(var(--primary))"
                  name="Ratio de Victoria"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </main>
  );
}


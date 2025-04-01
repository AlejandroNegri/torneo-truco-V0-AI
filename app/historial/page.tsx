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
  ResponsiveContainer,
  Cell
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

  const colors = {
    played: "hsl(var(--primary))",
    won: "hsl(var(--destructive))",
    ratio: "hsl(var(--primary))"
  };

  return (
    <div className="container mx-auto px-4 pb-20 pt-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Estadísticas</h1>
        <p className="text-muted-foreground">Análisis detallado del torneo</p>
      </header>

      <div className="grid gap-6">
        <Card className="p-6 bg-card/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4">Partidos Jugados vs. Ganados</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedByPlayed} margin={{ bottom: 65 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  tick={{ fill: "hsl(var(--foreground))" }}
                />
                <YAxis tick={{ fill: "hsl(var(--foreground))" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Legend />
                <Bar dataKey="played" fill={colors.played} name="Jugados" />
                <Bar dataKey="won" fill={colors.won} name="Ganados" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4">Porcentaje de Victoria</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sortedByRatio} margin={{ bottom: 65 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  tick={{ fill: "hsl(var(--foreground))" }}
                />
                <YAxis
                  unit="%"
                  tick={{ fill: "hsl(var(--foreground))" }}
                />
                <Tooltip
                  formatter={(value) => [`${value}%`, "Ratio de Victoria"]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="ratio" name="Ratio de Victoria">
                  {sortedByRatio.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        parseFloat(entry.ratio) >= 70 ? 'hsl(var(--success))' :
                          parseFloat(entry.ratio) >= 50 ? 'hsl(var(--info))' :
                            parseFloat(entry.ratio) >= 30 ? 'hsl(var(--warning))' :
                              'hsl(var(--destructive))'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}


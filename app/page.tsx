import data from "@/data/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // Sort the data by 'won' in descending order
  const sortedData = [...data].sort((a, b) => b.won - a.won);

  return (
    <div className="container mx-auto px-4 pb-20 pt-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Campeonato de Truco</h1>
        <p className="text-muted-foreground">Temporada 2025</p>
      </header>

      <Card className="bg-card/50 backdrop-blur-sm">
        <div className="bg-primary text-primary-foreground p-4">
          <h2 className="text-xl font-semibold">Tabla de Posiciones</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="py-4 px-4 text-left">#</th>
                <th className="py-4 px-4 text-left">Jugador</th>
                <th className="py-4 px-4 text-center">Partidos</th>
                <th className="py-4 px-4 text-center">Ganados</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((player, index) => (
                <tr key={index} className="border-t border-muted/20 hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-medium text-muted-foreground">{index + 1}</span>
                  </td>
                  <td className="py-4 px-4 font-medium">{player.name}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{player.played}</td>
                  <td className="py-4 px-4 text-center font-bold">{player.won}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}


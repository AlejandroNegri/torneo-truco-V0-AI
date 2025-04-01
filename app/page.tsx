import data from "@/data/data";

export default function Home() {
  // Sort the data by 'won' in descending order
  const sortedData = [...data].sort((a, b) => b.won - a.won);

  return (
    <main className="container mx-auto px-4 pb-20">
      <h1 className="text-2xl font-bold text-center my-6">Campeonato de Truco de la Peña</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary text-primary-foreground p-3">
          <h2 className="text-xl font-semibold">Tabla de Posiciones</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Jugador</th>
                <th className="py-3 px-4 text-center">Partidos</th>
                <th className="py-3 px-4 text-center">Ganados</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((player, index) => (
                <tr key={index} className="border-t border-muted">
                  <td className="py-3 px-4 font-medium">{index + 1}</td>
                  <td className="py-3 px-4">{player.name}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{player.played}</td>
                  <td className="py-3 px-4 text-center font-bold">{player.won}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}


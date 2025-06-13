// ce composant à la racine de src est dans un fichier page.tsx (exactement appelé comme ça) sera rendu dans le fichier html créé au moment de la requete du client
// le rendu de ce composant se fait coté server

import Counter from "@/components/Counter";
import MeteoCard from "@/components/MeteoCard";

export default function Home() {
	// de base avec next les composants sont rendus coté serveur
	// les console.log s'affichent dans la console du terminal !
	console.log("coucou");

	const cities = ["Paris", "Le Tampon"];

	return (
		<div className="bg-linear-to-t from-cyan-500 to-blue-500 min-h-screen text-gray-200 p-4">
			<h1 className="text-4xl text-center ">O 'Meteo Soso !!!!! ☀</h1>

			<Counter />

			<div className="flex gap-4 flex-col m-4 items-center">
				{cities.map((city) => (
					<MeteoCard key={city} city={city} />
				))}
			</div>
		</div>
	);
}

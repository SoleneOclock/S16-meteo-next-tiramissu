export default async function CityPage({
	params,
}: { params: Promise<{ city: string }> }) {
	// pour recupe la valeur du segment dynamique meme pas besoin d'utiliser un hook , on reçoit les valeur directement en props !
	const { city } = await params;

	// il faudrait fetch l'API pour récuperer les infos de la ville
	const data = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`,
	);
	const meteo = await data.json();
	const desc = meteo.weather[0].description;
	const icon = meteo.weather[0].icon;

	return (
		<div className="bg-linear-to-t from-cyan-500 to-blue-500 min-h-screen text-gray-200 p-4">
			<h2>Page {city}</h2>
			<img
				src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
				alt="icon"
			/>
			<p>{desc}</p>
		</div>
	);
}

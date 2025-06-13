// ce composant n'est pas une page : donc on le place pas dans le dossier app

import Link from "next/link";

export default async function MeteoCard({ city }: { city: string }) {
	// on veut recup les données sur l'API back mais ce code est executé coté serveur donc on va pas envoyer la requete depuis le navigateur du client
	// on peut direct faire le fetch attendre les données et envoyer direct au client une page avec les données
	// un composant rendu coté serveur peut etre asynchrone ! le client attendra un peu avant d'avoir sa page ...

  // simuler un delais
  //await new Promise(resolve => setTimeout(resolve, 3000));

	const data = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`,
	);
	const meteo = await data.json();
	const temp = meteo.main.temp;
  const icon = meteo.weather[0].icon;
  
  return (
		<Link
			href={`/city/${city}`}
			className="bg-blue-200 border-2 p-2 rounded-2xl text-cyan-800 w-1/2 flex border-white"
		>
			<img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
			<div>
				<div>{city}</div>
				<div className="text-2xl">{temp}°C</div>
			</div>
		</Link>,
	);
}

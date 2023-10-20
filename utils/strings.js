export const maleInputs = new Set([
	'masculino',
	'masc',
	'homem',
	'garoto',
	'rapaz',
	'male',
	'menino',
	'mas',
	'm',
	'h',
]);

export const femaleInputs = new Set([
	'feminino',
	'fem',
	'femi',
	'menina',
	'garota',
	'mulher',
	'mina',
	'f',
	'guria',
]);

export const strengthSports = new Set([
	'luta',
	'boxe',
	'box',
	'muaythai',
	'muaithai',
	'jiujitsu',
	'karate',
	'kungfu',
	'academia',
	'levantamentodepeso',
	'powerlifting',
	'gym',
	'lift',
]);

export const velocitySports = new Set([
	'corrida',
	'maratona',
	'caminhada',
	'correr',
	'corer',
	'corida',
	'bicicross',
	'bicicros',
	'bicicleta',
	'esteira',
	'atletismo',
]);

export const nonSports = new Set([
	'nada',
	'nenhum',
	'no',
	'nothing',
	'none',
	'null',
	'undefined',
	'naopratico',
	'semsportes',
	'semesportes',
	'not',
]);

export const nonGames = new Set([
	'nada',
	'nenhum',
	'no',
	'nothing',
	'none',
	'null',
	'undefined',
	'nenhumjogo',
	'naogosto',
	'semjogos',
	'semgames',
	'nenhumgame',
	'nadadejogo',
	'nadadejogar',
]);

export const intelligenceMusic = new Set([
	'jazz',
	'rock',
	'metal',
	'blues',
	'eletronica',
	'electronic',
	'classica',
	'heavymetal',
	'mpb',
	'classic',
	'rb',
	'pop',
	'powermetal',
	'trashmetal',
]);

export const totalDefenses = 3;

export const velocityDefenses = [
	'abrir asas e alçar voo',
	'usar hook gun para fugir',
	'usar a jetpack',
];

export const strengthDefenses = [
	'usar escudo de Adamantium',
	'criar campo de força',
	'usar espelhos para engar',
];

export const intelligenceDefenses = [
	'criar enigma',
	'tocar musica clássica alta',
	'citar uma peça de Shakespeare',
];

export const totalWeapons = 3;

export const velocityWeapons = [
	'usar pistola paralisadora',
	'usar granada smoke',
	'jogar óleo escorregadio no chão',
];

export const strengthWeapons = [
	'usar teaser super potente',
	'usar garra para empurrar o zumbi',
	'utilizar arma de repulsão',
];

export const intelligenceWeapons = [
	'criar uma fake news',
	'tocar musica dissonante',
	'usar a maiêutica para deixar o zumbi pirado',
];

export function clearInput(input) {
	return input
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^\w\s]|_/g, '')
		.replace(' ', '');
}

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

export function clearInput(input) {
	const differentCharacters = /[^a-z]/g;
	return input.toLowerCase().replaceAll(differentCharacters, '');
}

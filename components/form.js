import blessed from 'blessed';
import errorMessage from './error.js';
import validate from '../validation/host.js';
import insertHost from '../db/insertHost.js';
import getStrength from '../logic/getStrength.js';
import getVelocity from '../logic/getVelocity.js';
import getIntelligence from '../logic/getIntelligence.js';
import getDangerousness from '../logic/getDangerousness.js';
import getDefenses from '../logic/getDefenses.js';
import getStrengths from '../logic/getStrengths.js';
import getWeapons from '../logic/getWeapons.js';
import getWeakness from '../logic/getWeakness.js';
import insertDefenses from '../db/insertDefenses.js';
import insertWeaknesses from '../db/insertWeaknesses.js';
import insertWeapons from '../db/insertWeapons.js';

const labels = [
	{ label: 'Idade: ', key: 'age' },
	{ label: 'Sexo: ', key: 'sex' },
	{ label: 'Peso: ', key: 'weight' },
	{ label: 'Altura: ', key: 'height' },
	{ label: 'Tipo Sanguíneo: ', key: 'blood' },
	{ label: 'Gosto Musical: ', key: 'music' },
	{ label: 'Que Esporte Pratica: ', key: 'sport' },
	{ label: 'Jogo Preferido: ', key: 'game' },
];

async function uploadData(data) {
	await validate(data);

	const { age, sex, weight, height, blood, music, sport, game } = data;

	const strength = getStrength(age, sex, weight, height, sport);
	const velocity = getVelocity(age, sex, weight, height, sport);
	const intelligence = getIntelligence(age, sex, music, sport, game);
	const dangerousness = getDangerousness(strength, velocity, intelligence);

	data = { ...data, strength, velocity, intelligence, dangerousness };
	const hostId = await insertHost(data);

	const defenses = getDefenses(
		getStrengths(strength, velocity, intelligence)
	);
	const weakness = getWeakness(strength, velocity, intelligence);
	const weapons = getWeapons(weakness);

	await insertDefenses(hostId, defenses);
	await insertWeaknesses(hostId, weakness);
	await insertWeapons(hostId, weapons);
}

export default function createForm(screen, menu) {
	const form = blessed.form({
		top: 'center',
		left: 'center',
		width: '90%',
		height: '90%',
		keys: true,
		mouse: true,
		border: {
			type: 'line',
		},
		scrollable: true,
		label: 'Informações do Hospedeiro:',
	});

	const inputs = [];

	labels.forEach(({ label, key }, index) => {
		blessed.text({
			parent: form,
			top: index * 3 + 1,
			left: 2,
			content: label,
		});

		const input = blessed.textbox({
			parent: form,
			top: index * 3 + 2,
			left: 2,
			width: 32,
			height: 1,
			keys: true,
			input: true,
			inputOnFocus: true,
			name: key,
			style: {
				bg: 'white',
				fg: 'black',
				focus: {
					bg: 'red',
					fg: 'white',
				},
			},
		});

		inputs.push(input);
	});

	blessed.text({
		parent: form,
		bottom: 1,
		left: 'center',
		content: 'Pressione ENTER para enviar ou BACKSPACE para voltar',
		style: {
			fg: 'white',
			bg: 'red',
		},
		zIndex: 10,
	});

	function back() {
		screen.remove(form);
		menu.show();
		menu.focus();
		screen.render();
	}

	form.key('enter', async () => {
		let data = Object.fromEntries(
			inputs.map((input) => [input.name, input.value || null])
		);
		try {
			await uploadData(data);
			back();
		} catch (error) {
			const message = error?.inner
				? error.inner[0].message
				: `Erro ao tentar adicionar! Verifique se todos os dados estão corretos\n\n${error}`;
			errorMessage(screen, message);
		}
	});

	screen.key('backspace', back);

	screen.append(form);
	form.focus();
	screen.render();
}

import blessed from 'blessed';
import errorMessage from './error.js';
import getTotalZombies from '../db/getTotalZombies.js';
import { randomRange } from '../utils/random.js';
import getZombieDefenses from '../db/getZombieDefenses.js';
import getZombieWeakness from '../db/getZombieWeakness.js';
import getZombieWeapons from '../db/getZombieWeapons.js';
import getZombieAttributes from '../db/getZombieAttributes.js';

export default async function createDuck(screen, menu) {
	function noZombies() {
		menu.show();
		menu.focus();
		screen.render();
	}

	let text = 'O pato se depara com o zumbi de número ';

	try {
		const totalZombies = await getTotalZombies();
		if (totalZombies == 0) {
			errorMessage(screen, 'Nenhum hospedeiro foi adicionado!');
			noZombies();
			return;
		}

		const id = randomRange(1, totalZombies);

		const { strength, velocity, intelligence, dangerousness } =
			await getZombieAttributes(id);

		const weapons = await getZombieWeapons(id);
		const parsedWeapons = weapons.map(({ weapon }) => weapon).join(' ou ');

		const weaknesses = await getZombieWeakness(id);
		const parsedWeaknesses = weaknesses
			.map(({ weakness }) => weakness)
			.join(' e ');

		const defenses = await getZombieDefenses(id);
		const parsedDefenses = defenses
			.map(({ defense }) => defense)
			.join(' ou ');

		const hasWeaknesses = weaknesses.length > 0;
		const hasDefenses = defenses.length > 0;

		text += `${id}.\nSegundo o banco de dados, o zumbi possui força=${strength}, velocidade=${velocity} e inteligência=${intelligence}, possuindo no total periculosidade=${dangerousness}.\n\n${
			hasDefenses
				? `Para se defender, ele pode: ${parsedDefenses}`
				: 'Para esse zumbi não é necessário defesas'
		}.\nSegundo seus dados, ${
			!hasWeaknesses
				? 'ele não possui fraquezas, sendo assim o melhor é fugir/se defender!'
				: ` suas fraquezas são ${parsedWeaknesses}\n${
						!hasWeaknesses
							? ''
							: `Para combater suas fraquezas, há algumas armas para utilizar: ${parsedWeapons}.`
				  }`
		}`;
	} catch (error) {
		errorMessage(
			screen,
			`Falha ao tentar pegar os dados do zumbi!\n\n${error}`
		);
		noZombies();
		return;
	}

	const progressBarContainer = blessed.box({
		width: '100%',
		height: '100%',
		top: 'center',
		left: 'center',
	});

	blessed.text({
		parent: progressBarContainer,
		content: 'Obtendo informações do zumbi...',
		top: '50%-3',
		left: 'center',
	});

	const progressBar = blessed.progressbar({
		parent: progressBarContainer,
		ch: ' ',
		height: 3,
		width: '50%',
		top: 'center',
		left: 'center',
		value: 0,
		orientation: 'horizontal',
		style: {
			fg: 'green',
			bg: 'black',
			bar: {
				bg: 'green',
			},
		},
	});

	const dataContainer = blessed.box({
		top: 'center',
		left: 'center',
		width: '100%',
		height: '100%',
	});
	blessed.text({
		parent: dataContainer,
		left: 'center',
		top: 'center',
		content: text,
	});
	blessed.text({
		parent: dataContainer,
		bottom: 1,
		left: 'center',
		content: 'Pressione BACKSPACE para voltar',
		style: {
			fg: 'white',
			bg: 'red',
		},
		zIndex: 10,
	});

	let progress = 0;
	const totalSteps = 100;
	const updateInterval = 30;
	const updateProgress = () => {
		if (progress <= totalSteps) {
			progressBar.setProgress(progress);
			screen.render();
			progress++;

			if (progress > totalSteps) {
				screen.remove(progressBarContainer);
				screen.append(dataContainer);
				screen.render();
				return;
			}

			setTimeout(updateProgress, updateInterval);
		}
	};

	updateProgress();

	screen.key('backspace', () => {
		screen.remove(progressBarContainer);
		screen.remove(dataContainer);
		menu.show();
		menu.focus();
		screen.render();
	});

	screen.append(progressBarContainer);
	screen.render();
}

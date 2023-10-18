import blessed from 'blessed';
import errorMessage from './error.js';
import validate from '../validation/host.js';

const labels = [
	{ label: 'Idade: ', key: 'age' },
	{ label: 'Sexo: ', key: 'sex' },
	{ label: 'Peso: ', key: 'weight' },
	{ label: 'Altura: ', key: 'height' },
	{ label: 'Tipo Sanguíneo: ', key: 'blood' },
	{ label: 'Gosto Musical: ', key: 'music' },
	{ label: 'Qual Esporte Pratica: ', key: 'sport' },
	{ label: 'Jogo Preferido: ', key: 'game' },
];

export function createForm(screen) {
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
		content: 'Pressione ENTER para enviar',
		style: {
			fg: 'white',
			bg: 'red',
		},
	});

	form.key(['enter'], async () => {
		const data = Object.fromEntries(
			inputs.map((input) => [input.name, input.value || null])
		);
		try {
			await validate(data);
		} catch (error) {
			const message = error.inner[0].message;
			errorMessage(screen, message);
		}
	});

	screen.append(form);
	form.focus();
	screen.render();
}
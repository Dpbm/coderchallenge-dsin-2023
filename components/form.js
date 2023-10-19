import blessed from 'blessed';
import errorMessage from './error.js';
import validate from '../validation/host.js';
import insertHost from '../db/insertHost.js';

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
		const data = Object.fromEntries(
			inputs.map((input) => [input.name, input.value || null])
		);
		try {
			await validate(data);
			await insertHost(data);
			back();
		} catch (error) {
			const message = error?.inner
				? error.inner[0].message
				: 'Erro ao tentar adicionar! Verifique se todos os dados estão corretos';
			errorMessage(screen, message);
		}
	});

	screen.key('backspace', back);

	screen.append(form);
	form.focus();
	screen.render();
}

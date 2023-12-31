import blessed from 'blessed';

export default function errorMessage(screen, message) {
	const messageBox = blessed.message({
		parent: screen,
		top: 'center',
		left: 'center',
		width: 50,
		height: 20,
		style: {
			bg: 'blue',
			fg: 'white',
		},
		zIndex: 99999999,
	});
	messageBox.display('{center}' + message + '{/center}');
}

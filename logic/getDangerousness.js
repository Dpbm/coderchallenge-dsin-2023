export default function getDangerousness(strength, velocity, intelligence) {
	let dangerousness = 0;

	if (strength <= 30) {
		dangerousness += 10;
	} else if (strength <= 60) {
		dangerousness += 20;
	} else {
		dangerousness += 30;
	}

	if (velocity <= 30) {
		dangerousness += 10;
	} else if (velocity <= 60) {
		dangerousness += 20;
	} else {
		dangerousness += 30;
	}

	if (intelligence <= 30) {
		dangerousness += 10;
	} else if (intelligence <= 60) {
		dangerousness += 30;
	} else {
		dangerousness += 40;
	}

	return dangerousness;
}

import yup from 'yup';

const schema = yup.object({
	age: yup
		.number()
		.typeError('A idade deve ser um número')
		.integer('A idade deve ser um número inteiro')
		.positive('A idade deve ser um número positivo')
		.min(1, 'A idade mínima é 1')
		.max(130, 'A idade máxima é 130')
		.required('Está faltando a idade'),
	sex: yup
		.string()
		.typeError('O sexo deve ser uma string')
		.min(3, 'O tamanho mínimo do sexo é 3')
		.max(15, 'O tamanho mínimo do sexo é 15')
		.required('Está faltando o sexo'),
	weight: yup
		.number()
		.typeError('O peso deve ser um número')
		.positive('O peso deve ser positivo')
		.min(0.5, 'O peso mínimo é 0.5Kg')
		.max(200, 'O peso máximo é 200Kg')
		.required('Está faltando o peso'),
	height: yup
		.number()
		.typeError('A altura deve ser um número')
		.positive('A altura deve ser um número positiva')
		.min(0.5, 'A altura mínima é 0.5m')
		.max(3, 'A altura máxima é 3m')
		.required('Está faltando a altura'),
	blood: yup
		.string('O tipo sanguíneo deve ser uma string')
		.typeError('O tipo sanguíneo deve ser uma string')
		.min(1, 'O tamanho mínimo do tipo sanguíneo é 1')
		.max(4, 'O tamanho máximo do tipo sanguíneo é 4')
		.required('Está faltando o tipo sanguíneo'),
	music: yup
		.string()
		.typeError('O gosto musical deve ser uma string')
		.min(3, 'O tamanho mínimo do gosto musical é 3')
		.max(15, 'O tamanho máximo do gosto musical é 15')
		.required('Está faltando o gosto musical'),
	sport: yup
		.string()
		.typeError('O esporte praticado deve ser uma string')
		.min(3, 'O tamanho mínimo do esporte praticado é 3')
		.max(30, 'O tamanho máximo do esporte praticado é 30')
		.required('Está faltando o esporte (se não houver coloque "Nada")'),
	game: yup
		.string()
		.typeError('O jogo favorito deve ser uma string')
		.min(3, 'O tamanho mínimo do jogo favorito é 3')
		.max(40, 'O tamanho máximo do jogo favorito é 40')
		.required('Está faltando o jogo favorito'),
});

export default async function validate(data) {
	return await schema.validate(data, { abortEarly: false });
}

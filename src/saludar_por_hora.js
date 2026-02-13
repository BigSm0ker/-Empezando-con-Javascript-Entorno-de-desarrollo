function saludar_por_hora(hora, nombre, edad, genero) {
	let tratamiento = '';
	if (edad > 30 && genero === 'hombre') {
		tratamiento = 'Sr ';
	} else if (edad > 30 && genero === 'mujer') {
		tratamiento = 'Sra ';
	}

	if (hora >= 6 && hora < 12) {
		return `Buenos días, ${tratamiento}${nombre}`;
	} else if (hora >= 12 && hora < 18) {
		return `Buenas tardes, ${tratamiento}${nombre}`;
	} else {
		return `Buenas noches, ${tratamiento}${nombre}`;
	}
}
export default saludar_por_hora;

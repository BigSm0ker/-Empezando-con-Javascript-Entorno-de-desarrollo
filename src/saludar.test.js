import saludar_por_hora from "./saludar_por_hora";

describe('saludar_por_hora', () => {
  // Tests para saludos por hora SIN tratamiento (menor de 30 años)
  describe('Saludos por hora - sin tratamiento', () => {
    test('Debe saludar "Buenos días" en la mañana (hora 6-11)', () => {
      expect(saludar_por_hora(6, 'Juan', 25, 'hombre')).toBe('Buenos días, Juan');
      expect(saludar_por_hora(9, 'María', 20, 'mujer')).toBe('Buenos días, María');
      expect(saludar_por_hora(11, 'Pedro', 28, 'hombre')).toBe('Buenos días, Pedro');
    });

    test('Debe saludar "Buenas tardes" en la tarde (hora 12-17)', () => {
      expect(saludar_por_hora(12, 'Juan', 25, 'hombre')).toBe('Buenas tardes, Juan');
      expect(saludar_por_hora(15, 'María', 20, 'mujer')).toBe('Buenas tardes, María');
      expect(saludar_por_hora(17, 'Pedro', 28, 'hombre')).toBe('Buenas tardes, Pedro');
    });

    test('Debe saludar "Buenas noches" en la noche (hora 18-5)', () => {
      expect(saludar_por_hora(18, 'Juan', 25, 'hombre')).toBe('Buenas noches, Juan');
      expect(saludar_por_hora(22, 'María', 20, 'mujer')).toBe('Buenas noches, María');
      expect(saludar_por_hora(0, 'Pedro', 28, 'hombre')).toBe('Buenas noches, Pedro');
      expect(saludar_por_hora(5, 'Ana', 18, 'mujer')).toBe('Buenas noches, Ana');
    });
  });

  // Tests para saludos con tratamiento (mayor de 30 años)
  describe('Saludos por hora - con tratamiento', () => {
    test('Debe agregar "Sr " para hombres mayores de 30 años en la mañana', () => {
      expect(saludar_por_hora(8, 'Carlos', 35, 'hombre')).toBe('Buenos días, Sr Carlos');
      expect(saludar_por_hora(10, 'Roberto', 45, 'hombre')).toBe('Buenos días, Sr Roberto');
    });

    test('Debe agregar "Sr " para hombres mayores de 30 años en la tarde', () => {
      expect(saludar_por_hora(14, 'Carlos', 35, 'hombre')).toBe('Buenas tardes, Sr Carlos');
      expect(saludar_por_hora(16, 'Roberto', 45, 'hombre')).toBe('Buenas tardes, Sr Roberto');
    });

    test('Debe agregar "Sr " para hombres mayores de 30 años en la noche', () => {
      expect(saludar_por_hora(20, 'Carlos', 35, 'hombre')).toBe('Buenas noches, Sr Carlos');
      expect(saludar_por_hora(23, 'Roberto', 45, 'hombre')).toBe('Buenas noches, Sr Roberto');
    });

    test('Debe agregar "Sra " para mujeres mayores de 30 años en la mañana', () => {
      expect(saludar_por_hora(7, 'Carmen', 34, 'mujer')).toBe('Buenos días, Sra Carmen');
      expect(saludar_por_hora(11, 'Sofía', 50, 'mujer')).toBe('Buenos días, Sra Sofía');
    });

    test('Debe agregar "Sra " para mujeres mayores de 30 años en la tarde', () => {
      expect(saludar_por_hora(13, 'Carmen', 34, 'mujer')).toBe('Buenas tardes, Sra Carmen');
      expect(saludar_por_hora(15, 'Sofía', 50, 'mujer')).toBe('Buenas tardes, Sra Sofía');
    });

    test('Debe agregar "Sra " para mujeres mayores de 30 años en la noche', () => {
      expect(saludar_por_hora(19, 'Carmen', 34, 'mujer')).toBe('Buenas noches, Sra Carmen');
      expect(saludar_por_hora(21, 'Sofía', 50, 'mujer')).toBe('Buenas noches, Sra Sofía');
    });
  });

  // Tests para casos límite
  describe('Casos límite', () => {
    test('No debe agregar tratamiento a personas exactamente con 30 años', () => {
      expect(saludar_por_hora(9, 'Juan', 30, 'hombre')).toBe('Buenos días, Juan');
      expect(saludar_por_hora(14, 'María', 30, 'mujer')).toBe('Buenas tardes, María');
    });

    test('Debe agregar tratamiento a personas con 31 años', () => {
      expect(saludar_por_hora(9, 'Juan', 31, 'hombre')).toBe('Buenos días, Sr Juan');
      expect(saludar_por_hora(14, 'María', 31, 'mujer')).toBe('Buenas tardes, Sra María');
    });

    test('Debe manejar correctamente la hora límite 6 (inicio de mañana)', () => {
      expect(saludar_por_hora(6, 'Test', 25, 'hombre')).toBe('Buenos días, Test');
    });

    test('Debe manejar correctamente la hora límite 12 (inicio de tarde)', () => {
      expect(saludar_por_hora(12, 'Test', 25, 'hombre')).toBe('Buenas tardes, Test');
    });

    test('Debe manejar correctamente la hora límite 18 (inicio de noche)', () => {
      expect(saludar_por_hora(18, 'Test', 25, 'hombre')).toBe('Buenas noches, Test');
    });
  });
});

module.exports = {
    testEnvironment: 'node', // Entorno de pruebas: Node.js
    testMatch: ['**/tests/**/*.test.js'], // Patrón para encontrar archivos de prueba
    clearMocks: true, // Limpia los mocks después de cada prueba
    coverageDirectory: 'coverage', // Directorio para guardar los informes de cobertura
    coverageProvider: 'v8', // Proveedor de cobertura de código
    // setupFilesAfterEnv: ['./jest.setup.js'], // Configuraciones de Jest (opcional)
    transform: {
      '^.+\\.js$': 'babel-jest' // Transforma los archivos .js con Babel
    }
};
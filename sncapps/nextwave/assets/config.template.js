// This template file is used to generate config.js at runtime
// Environment variables will be substituted by the Docker entrypoint script
window.APP_CONFIG = {
	backendUrl: '${BACKEND_URL}',
};

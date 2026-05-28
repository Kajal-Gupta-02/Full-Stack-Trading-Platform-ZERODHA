module.exports = function override(config, env) {
  if (config.devServer) {
    config.devServer = {
      ...config.devServer,
      setupMiddlewares: (middlewares, devServer) => {
        // Custom logic that used to be in onBeforeSetupMiddleware
        // Add your before-setup middleware logic here if needed

        // Custom logic that used to be in onAfterSetupMiddleware
        // Add your after-setup middleware logic here if needed

        return middlewares;
      }
    };
  }
  return config;
};

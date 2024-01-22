type AppConfig = {
  env: {
    analyticsMeasurementId?: string;
  };
};
  
  const appConfig: AppConfig = {
    env: {
      analyticsMeasurementId: process.env.ANALYTICS_MEASUREMENT_ID,
    },
  };
  
  export default appConfig;
  
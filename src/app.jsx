import { runApp } from 'ice';

const appConfig = {
  app: {
    rootId: 'ice-container',
  },
  request: {
    // eslint-disable-next-line @iceworks/best-practices/no-http-url
    // baseURL: 'http://182.92.196.63:3000/v1',
    // eslint-disable-next-line @iceworks/best-practices/no-http-url
    baseURL: 'http://127.0.0.1:8080/v1',
  },
  router: {
    type: 'browser',
    modifyRoutes: (routes) => {
      return routes;
    },
  },
};
runApp(appConfig);

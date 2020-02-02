const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const offline = require("next-offline");

module.exports = withPlugins([
  [optimizedImages, {}],
  [
    offline,
    {
      generateInDevMode: false,
      workboxOpts: {
        swDest: "static/service-worker.js",
        cacheId: "app_name",
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "offlineCache",
              networkTimeoutSeconds: 10,
              expiration: {
                maxEntries: 200
              },
              cacheableResponse: {
                statuses: [0, 200],
                headers: {
                  "x-test": "true"
                }
              }
            }
          },
          {
            urlPattern: /.jpg$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /.png$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /.svg$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          },
          {
            urlPattern: /.min.js$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-resources",
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      }
    }
  ],
  {
    //config here
  }
]);

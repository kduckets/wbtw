// module.exports = {
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.mp3$/,
//         use: {
//           loader: 'url-loader',
//         },
//       });
//       return config;
//     },
//   }

const withFonts = require('next-fonts');

module.exports = withFonts({
            enableSvg: true,
            webpack(config, options) {
                config.module.rules.push({
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                });
                return config;
            }
        });
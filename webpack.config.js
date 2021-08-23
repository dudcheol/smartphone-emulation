const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                // asset/resource는 별도의 파일을 내보내고 URL을 추출합니다. 이전에는 file-loader를 사용하여 처리할 수 있었습니다. - https://webpack.kr/guides/asset-modules/
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext]',
                },
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    devServer: {
        historyApiFallback: true,
    },
    performance: {
        maxAssetSize: 500000, // 이미지 사이즈 244kb를 넘어서 뜨는 경고 제거. 500kb로 늘림
    },
};

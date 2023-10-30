import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { VueLoaderPlugin } from "vue-loader"; 
import webpack from "webpack";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
	mode: "development", //指定构建模式
	entry: "./src/main.ts",
	devtool: "inline-source-map", //告诉webpack提取source map，并内联到最终的bundle中
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"],
			},
			{
				test: /\.tsx?$/,
				use: [{
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,//只进行转译，不进行类型检查
                        configFile: path.resolve(process.cwd(), 'tsconfig.json'),
                        // 让 tsc 把 vue 文件当成一个 ts 模块去处理
                        appendTsSuffixTo: [/.\vue$/]
                    }
                }],
                exclude: /node_modules/
			},
            {
                test: /\.vue$/,//
                use: ["vue-loader"]
            },
            {
                test: /\.scss$/,
                // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".vue"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
	},
	plugins: [
        new VueLoaderPlugin(),
		//HtmlWebpackPlugin：Webpack的一个插件，用于自动生成HTML文件，并将生成的输出文件自动注入到生成的HTML文件中
		new HtmlWebpackPlugin({
			title: "数据大屏",
            template: "./index.html"
		}),
        new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	}
};

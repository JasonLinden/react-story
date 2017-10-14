module.exports = {
	type: 'react-component',
	npm: {
		esModules: true,
		umd: {
			global: 'ReactStory',
			externals: {
				react: 'React'
			}
		}
	},
  uglify: false,
	webpack: {
		extra: {
			module: {
				rules: [
					{
						test: /\.md$/,
						use: [
              { loader: 'raw-loader' }
            ]
					}
				]
			}
		}
	}
}

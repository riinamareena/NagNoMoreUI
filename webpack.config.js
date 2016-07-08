module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      Family: 'app/components/Family.jsx',
      FamilyMember: 'app/components/FamilyMember.jsx',
      FamilyMemberAdd: 'app/components/FamilyMemberAdd.jsx',
      FamilyMemberList: 'app/components/FamilyMemberList.jsx',
      TodoApp: 'app/components/TodoApp.jsx',
      Todo: 'app/components/Todo.jsx',
      TodoAdd: 'app/components/TodoAdd.jsx',
      TodoList: 'app/components/TodoList.jsx'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)|(bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

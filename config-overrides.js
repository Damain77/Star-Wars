const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@Components': 'src/Components',
        '@UI': 'src/Components/UI',
        '@constants': 'src/constants',
        '@Containers': 'src/Containers',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@Utils': 'src/Utils',
        '@styles': 'src/styles',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',
        '@store': 'src/store',
        '@context': 'src/context',
    })(config)
    return config;
  }
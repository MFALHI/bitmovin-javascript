var env = process.env.BABEL_ENV || process.env.NODE_ENV;

var defaultBabelPresetEnvConfig = {
  // No module transformation, webpack will take care of this if necessary.
  'modules': false
};

// Latest browsers
var browserBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': {
    'browsers': [
      'last 2 versions',
      'not ie < 13',
      'not android < 50'
    ]
  }
});

// Legacy browsers
var legacyBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': {
    'browsers': [
      'last 5 versions',
      'not ie < 10'
    ]
  }
});

// Node
var nodeBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': {
    'node': '4.7'
  }
});

// Combined node and browser environment for es6 modules version and tests
var modulesBabelPresetEnvConfig = Object.assign({}, defaultBabelPresetEnvConfig, {
  'targets': Object.assign(legacyBabelPresetEnvConfig.targets, nodeBabelPresetEnvConfig.targets)
});

var testBabelPresetEnvConfig = Object.assign({}, modulesBabelPresetEnvConfig, {
  // Tests need to transform modules
  'modules': 'commonjs'
});

var plugins = [
  'transform-object-rest-spread'
];

var babelConfig = {
  plugins
};

if (env === 'browser') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', browserBabelPresetEnvConfig]
    ]
  })
}

if (env === 'legacy') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', legacyBabelPresetEnvConfig]
    ]
  })
}

if (env === 'modules') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', modulesBabelPresetEnvConfig]
    ]
  })
}

if (env === 'node') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', nodeBabelPresetEnvConfig]
    ]
  })
}

if (env === 'test') {
  babelConfig = Object.assign(babelConfig, {
    'presets': [
      ['env', testBabelPresetEnvConfig]
    ],
    'plugins': babelConfig.plugins.concat([
      'rewire'
    ])
  })
}

module.exports = babelConfig;

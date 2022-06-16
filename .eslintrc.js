module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'spellcheck'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // Default
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // Custom
    '@typescript-eslint/no-floating-promises': 'off',
    'spellcheck/spell-checker': [
      1,
      {
        lang: 'en_US',
        skipWords: [
          'ack',
          'cors',
          'ctx',
          'dec',
          'dms',
          'dto',
          'eio',
          'enum',
          'fastify',
          'healths',
          'hmget',
          'hset',
          'io',
          'joi',
          'metatype',
          'metatypes',
          'microservice',
          'microservices',
          'msa',
          'msg',
          'namespace',
          'nestjs',
          'nsp',
          'nsps',
          'nullable',
          'orm',
          'pino',
          'postgresql',
          'publ',
          'redis',
          'recents',
          'rss',
          'sadd',
          'scard',
          'smembers',
          'srem',
          'txid',
          'txids',
          'typeorm',
          'utf',
          'utils',
          'req',
          'pkey',
          'hgetall',
          'hlen',
          'hget',
          'hdel',
          'mcsrid',
          'fullname',
          'aud',
          'iat',
          'iss',
          'jti',
          'nbf',
          'typ',
          'infos',
          'csotid',
          'chsaid',
          'csot',
          'mcsr',
          'unprocessable',
        ],
        skipIfMatch: ['http://[^s]*'],
        minLength: 3,
      },
    ],
  },
};

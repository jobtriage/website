/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)

  return config
}

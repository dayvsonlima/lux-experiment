export default {
  development: {
    driver: 'sqlite3',
    database: 'lux_node_like_rails_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'lux_node_like_rails_test'
  },

  production: {
    driver: 'sqlite3',
    database: 'lux_node_like_rails_prod'
  }
};

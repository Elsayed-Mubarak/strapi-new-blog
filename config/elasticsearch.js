
module.exports = ({ env }) => ({
  connection: {
    // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/auth-reference.html
    node: env('ELASTICSEARCH_HOST', 'http://127.0.0.1:9200'),
  },
  setting: {
    version: 1,
    validStatus: [200, 201],
    validMethod: ['PUT', 'POST', 'DELETE'],
    importLimit: 3000,
    index_postfix: '',
    index_postfix: '',
    removeExistIndexForMigration: false,
  },
  models: [{
    "model": ".gitkeep",
    "enable": true,
    "pk": "id",
    "plugin": null,
    "index": ".gitkeep",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "migration": false,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "article",
    "enable": true,
    "pk": "id",
    "plugin": null,
    "index": "article",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "migration": false,
    "supportAdminPanel": true,
    "urls": []
  },
  {
    "model": "category",
    "enable": true,
    "pk": "id",
    "plugin": null,
    "index": "category",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "migration": false,
    "supportAdminPanel": true,
    "urls": []
  }]
});
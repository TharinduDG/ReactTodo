var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');

    try {
      var parsedTodos = JSON.parse(stringTodos);
      return $.isArray(parsedTodos) ? parsedTodos: [];
    } catch(e) {
      return [];
    }
  }
};

import todoRestClient from './rest';

const handleResponse = response => {
  if (response.ok) {
    return response.json().catch(() => {});
  } else {
    return response.status;
  }
};
const todoAPI = {
  retrieveTodos() {
    return todoRestClient.get().then(handleResponse);
  },
  generateTodo(data) {
    return todoRestClient.post(data).then(handleResponse);
  }
};

export default todoAPI;

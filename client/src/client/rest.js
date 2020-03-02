class RestClient {
  constructor(baseurl = '') {
    this.baseurl = baseurl;
  }

  post(data) {
    let headers = {
      'Content-Type': 'application/json'
    };

    return fetch(this.baseurl, {
      method: 'post',
      headers,
      credentials: 'same-origin',
      body: JSON.stringify(data)
    });
  }
  get(
    headers = {
      'Content-Type': 'application/json'
    }
  ) {
    return fetch(this.baseurl, {
      method: 'get',
      headers,
      credentials: 'same-origin'
    });
  }
}

const baseUrl = 'http://localhost:5000/api';

const todoRestClient = new RestClient(baseUrl);

export default todoRestClient;

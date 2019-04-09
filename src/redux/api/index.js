export const get = (url) => fetch(url).then(data => data.json());

export const post = (url, body) => fetch(url, {
  method: 'POST',
  header: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
  .then(res => res.json());

export const deleteApi = (url) => fetch(url, {
  method: 'DELETE',
  header: {
    'Content-Type': 'application/json'
  }
})
  .then(res => res.json());

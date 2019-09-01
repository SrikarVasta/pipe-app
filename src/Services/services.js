const API = process.env.REACT_APP_API_URL,
  TOKEN = process.env.REACT_APP_API_TOKEN,
  USER = process.env.REACT_APP_API_USER;
export function searchCharacters(search, startVal) {
  return fetch(`${API}/persons/find?api_token=${TOKEN}&term=${search}`, {
    method: 'GET'
  })
    .then(async r => {
      return r.json();
    })
    .then(r => {
      return {
        data: r.data,
        more_items_in_collection:
          r.additional_data &&
          r.additional_data.pagination &&
          r.additional_data.pagination.more_items_in_collection
      };
    })
    .catch(error => {
      console.error(error);
      return [];
    });
}
export function fetchPersons(startVal) {
  const fields = `:(cc_email,id,name,label,org_id,org_name)`;
  return fetch(
    `${API}/persons/list${fields}?api_token=${TOKEN}&user_id=${USER}&sort=&label=&start=0&type=person&limit=10&start=${startVal}`,
    {
      method: 'GET'
    }
  )
    .then(async r => {
      return r.json();
    })
    .then(r => {
      return {
        data: r.data,
        more_items_in_collection:
          r.additional_data &&
          r.additional_data.pagination &&
          r.additional_data.pagination.more_items_in_collection
      };
    })
    .catch(error => {
      console.error(error);
      return [];
    });
}

export function fetchPerson(id) {
  return fetch(`${API}/persons/${id}?api_token=${TOKEN}&user_id=${USER}`, {
    method: 'GET'
  })
    .then(r => r.json())
    .then(r => r.data)
    .catch(error => {
      console.error(error);
      return [];
    });
}
export function deletePerson(id) {
  return fetch(`${API}/persons/${id}?api_token=${TOKEN}&user_id=${USER}`, {
    method: 'DELETE'
  })
    .then(r => r.json())
    .then(r => r.data)
    .catch(error => {
      console.error(error);
      return [];
    });
}
export function createPerson(person) {
  return fetch(`${API}/persons?api_token=${TOKEN}&user_id=${USER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(person)
  })
    .then(r => {
      return r.json();
    })
    .then(r => r.data)
    .catch(error => {
      console.error(error);
      return [];
    });
}

const fetchData = (url) => new Promise(resolve => {
  console.log(url);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    }
  }

  xhr.open('GET', url);
  xhr.send();
});

export default fetchData;

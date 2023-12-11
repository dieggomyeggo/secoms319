const getAllProducts = async (setProducts) =>
  await fetch('http://localhost:8081/listProducts', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => setProducts(data))

export {getAllProducts }

export const getAddress = async (param) => {
  const API1 = `https://cep.awesomeapi.com.br/json/${param}`;
  const API2 = `https://brasilapi.com.br/api/cep/v2/${param}`;
  try {
    const allApi = [fetch(API1), fetch(API2)];
    const response = await Promise.any(allApi);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
// console.log(await getAddress());
export const searchCep = async (param, local) => {
  try {
    const { address, district, city, state } = await getAddress(param);
    if (!city) {
      local.innerHTML = 'CEP não encontrado';
    } else if (address) {
      local.innerHTML = `${address} - ${district} - ${city} - ${state}`;
    } else {
      const { street, neighborhood } = await getAddress();
      local.innerHTML = `${street} - ${neighborhood} - ${city} - ${state}`;
    }
  } catch (error) {
    local.innerHTML = 'CEP não encontrado';
  }
};

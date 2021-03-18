/**
 * Função para passar todos os query params da requisição por um objeto para retornar uma string para utilizar na
 * url da chamada a api
 * - queryParams -> objeto com todos os query params
 * - isFirstParamInApiCall -> se é para ja incluir um '?' no primeiro query param
 * - clearEmptyQueryParams -> remove um query param q o valor dele não exista
 */
 export function mountApiQueryParams(
  queryParams: Record<string, unknown>,
  isFirstParamInApiCall?: boolean,
  clearEmptyQueryParams?: boolean
) {
  const paramsArr = [];
  const params = queryParams;
  let i = 0;

  if (clearEmptyQueryParams) {
    for (let [key, value] of Object.entries(params)) {
      if (!value) {
        delete params[key];
      }
    }
  }

  for (let [key, value] of Object.entries(params)) {
    if (i === 0) {
      paramsArr.push(
        isFirstParamInApiCall ? `?${key}=${value}` : `${key}=${value}`
      );
    } else {
      paramsArr.push(`${key}=${value}`);
    }
    i++;
  }

  return paramsArr.join('&');
}
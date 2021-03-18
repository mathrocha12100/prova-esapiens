/**
 * função para fazer os sorts de arrays 
 */
export function sortArray( a: { [key: string]: any }, b: { [key: string]: any }, fieldToCompare: string ) {
  if ( a[fieldToCompare] < b[fieldToCompare] ){
    return -1;
  }
  if ( a[fieldToCompare] > b[fieldToCompare] ){
    return 1;
  }
  return 0;
}
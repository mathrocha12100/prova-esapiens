export function compare( a: { [key: string]: any }, b: { [key: string]: any }, fieldToCompare: string ) {
  if ( a[fieldToCompare] < b[fieldToCompare] ){
    return -1;
  }
  if ( a[fieldToCompare] > b[fieldToCompare] ){
    return 1;
  }
  return 0;
}
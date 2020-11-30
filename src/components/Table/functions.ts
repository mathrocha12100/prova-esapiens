import { compare } from '@functions/arrayFunctions';

export function sort(tableField: any, order: 'asc' | 'desc', arr: any[], setArr: (arg: any[]) => void ) {
  const sortArray = arr.sort((a, b) => compare(a,b, tableField));
  
  if (order === 'asc') {
    setArr([...sortArray]);
  } else if (order === 'desc') {
    setArr([...sortArray.reverse()]);
  }
}
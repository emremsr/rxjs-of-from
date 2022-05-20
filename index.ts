import './style.css';

import { of, map, Observable, from } from 'rxjs';
import { reject, resolve } from 'promise';
of('Tom', 'Jack').subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Comppeted'),
});

from(['Marry', 'Lionel']).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Comppeted'),
});

from([10, 20, 30]).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Number Complete'),
});

const array = [5, 'Mike', 95];
const result = from(array);
result.subscribe((z) => console.log(z));

const somePromise = new Promise((resolve, reject) => {
  resolve('Accepted');
  reject('404 Not Found');
});

const ObservableFromPromise = from(somePromise);

ObservableFromPromise.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error =>', err),
  complete: () => console.log('Completed'),
});


import http from 'k6/http';
import { sleep } from 'k6';

// export const options = {
//   vus: 100,
//   duration: '30s',
// };

export default function () {
  http.get('http://localhost:3000/products/');
  sleep(1);
}

// export default function () {
//   http.get('http://localhost:3000/products/100999');
//   sleep(1);
// }

// export default function () {
//   http.get('http://localhost:3000/products/55555/styles');
//   sleep(1);
// }

// export default function () {
//   http.get('http://localhost:3000/products/55555/related');
//   sleep(1);
// }











//file path
// /Users/cassandrawages1/Desktop/hrla46/SDC/ProductsOne/k6testing/script.js

//commands
//k6 run /Users/cassandrawages1/Desktop/hrla46/SDC/ProductsOne/k6testing/script.js
//k6 run --vus 10 --duration 30s /Users/cassandrawages1/Desktop/hrla46/SDC/ProductsOne/k6testing/script.js

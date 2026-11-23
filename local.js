import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = { vus: 5, duration: '30s' };

export default function () {
  const ep = __ENV.EP || 'fast';
  const res = http.get(`http://localhost:3000/${ep}`);
  check(res, { 'status 200 байна': (r) => r.status === 200 });
  sleep(1);
}

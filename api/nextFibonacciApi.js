import axios from "../config/axios";

export function nextFibonacci(index) {
  return axios.get(`/fibonacci/nextMove?index=${index}`);
}

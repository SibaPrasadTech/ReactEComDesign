import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTRlYThmMjZlOGRiY2I1ODk2ODRjYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTk0NTM5NywiZXhwIjoxNjYwMjA0NTk3fQ.QlFb_KwmajzNXCWgX9vSjUTxh3mgLVjxGXMT31qqPPY"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${token}` }
})
import axios from 'axios'
import { site } from '../config'

const axiosInstance = axios.create({
  baseURL: 'https://formsubmit.co/ajax',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000,
})

export function sendForm(subject, data) {
  return axiosInstance.post(`/${site.formId}`, {
    ...data,
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
  })
}

export default axiosInstance

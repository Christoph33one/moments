import axios from "axios";

axios.defaults.baseURL = 'https://django-rest-project.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'muiltpart/form-data'
axios.defaults.withCredentials = true
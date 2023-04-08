import axios from "axios";

axios.defaults.baseURL = "https://django-rest-project.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

/** For setting up and connection you API. Look at Authentication: video with moments*/
/**remeber to always double check your CONVIG VARS */
/**Always check the heruko API ulr is correct */
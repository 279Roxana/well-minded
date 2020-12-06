import { isLocalhost } from './helpers';

let domain;

if (isLocalhost) {
    // if it's local host, do server requests to localhost.
    domain = "http://localhost:5000";
} else {
    // if it's the deployed version (heroku), do the server requests to hreoku url.
    domain = ""
}

export default domain;
//-------------------------------------------------------------------------------------------------
// Create a singleton instance of the bugsnag client so we don't have to duplicate our configuration
// anywhere.
//-------------------------------------------------------------------------------------------------
// https://docs.bugsnag.com/platforms/react-native/#basic-configuration
import { Client, Configuration, StandardDelivery } from 'bugsnag-react-native';
const config = new Configuration();
config.delivery = new StandardDelivery("http://localhost:62000");
config.sessionEndpoint = "http://localhost:62000/sessions";
const client = new Client(config);
//-------------------------------------------------------------------------------------------------
export default client;

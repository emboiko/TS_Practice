import {User} from "./User";
import {Company} from "./Company";
import {GMap} from "./gMap";

const user = new User();
const company = new Company();
const gMap = new GMap(".mapdiv");

gMap.addMarker(user);
gMap.addMarker(company);

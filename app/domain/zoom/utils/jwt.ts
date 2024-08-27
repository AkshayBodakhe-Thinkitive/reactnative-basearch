
import { sign } from "react-native-pure-jwt";

import { ZOOM_APP_KEY, ZOOM_APP_SECRET } from './config';

function makeId(length: number) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default async function generateJwt(
  sessionName: string,
  roleType: string
) {

  try {
    const token = await sign(
      {
        app_key: ZOOM_APP_KEY,
        version: 1,
        user_identity: makeId(10),
        iat: new Date().getTime(),
        exp: new Date(Date.now() + 23 * 3600 * 1000).getTime(),
        tpc: sessionName,
        role_type: parseInt(roleType, 10),
        cloud_recording_option: 1,
      },
      ZOOM_APP_SECRET,
      {
        alg: 'HS256',
      }
    );
    return token;
  } catch (e) {
    console.log(e);
    return '';
  }
}

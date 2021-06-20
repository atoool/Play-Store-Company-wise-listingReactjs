import axios from "axios";
import { constants } from "./constants";

export async function download(pack) {
  await axios
    .get(`${constants.base_url}download?pack=${pack}`)
    .then((res) => {
      const url = res?.data?.result;
      window.open(url, "_self");
    })
    .catch(() => {});
}

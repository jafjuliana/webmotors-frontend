import { vehicles } from "../api";

export default class Vehicles {
  static async getMakes() {
    try {
      const resp = await vehicles.getMakes();
      return resp;
    } catch (e) {
      return e.response;
    }
  }
}

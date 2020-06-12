import { api } from "./instance";

async function getMakes() {
  try {
    return await api.get(`/Make`, {
      headers: {
        Accept: "application/json",
      },
    });
  } catch (e) {
    return e.response;
  }
}

export default {
  getMakes,
};

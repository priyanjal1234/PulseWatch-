import axios from "axios";

async function ping(url) {
  const start = Date.now();
  try {
    await axios.get(url);
    return { status: "up", responseTime: Date.now() - start };
  } catch (error) {
    return { status: "down", responseTime: null };
  }
}

export default ping
import "dotenv/config";
// import "./db"
import httpServer from "./server";
// import "./wsServer";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
};

console.log("HIHIHI");

httpServer.listen(PORT, handleListening);

const crypto = require("crypto");

export default function generateUUID() {
  const bytes = crypto.randomBytes(16);
  bytes[6] = (bytes[6] & 0x0f) | 0x40; // Set version 4 (random UUID)
  bytes[8] = (bytes[8] & 0x3f) | 0x80; // Set variant to RFC 4122

  return (
    bytes.toString("hex", 0, 4) +
    "-" +
    bytes.toString("hex", 4, 6) +
    "-" +
    bytes.toString("hex", 6, 8) +
    "-" +
    bytes.toString("hex", 8, 10) +
    "-" +
    bytes.toString("hex", 10, 16)
  );
}

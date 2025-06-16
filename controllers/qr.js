import QRCode from "qrcode";
import { writeFile } from "fs/promises";
import path from "path";

export const getInputLink = async (req, res) => {
  res.render("index.ejs");
};

export const processInputLink = async (req, res) => {
  const { url } = req.body;
  try {
    const qrPath = path.resolve("public", "images", "qrcode.png");
    const pngBuffer = await QRCode.toBuffer(url);
    await writeFile(qrPath, pngBuffer);
    res.status(200).render("qr-image.ejs");
  } catch (err) {
    console.error("❌ Error generating QR code:", err);
    res.status(500).send("Error generating QR code.");
  }
};

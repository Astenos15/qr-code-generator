import QRCode from "qrcode";
import { writeFile } from "fs/promises";
import path from "path";

export const getInputLink = async (req, res) => {
  res.render("index.ejs");
};

export const processInputLink = async (req, res) => {
  const { url } = req.body;

  try {
    const qrCodeDataUrl = await QRCode.toDataURL(url); // base64 image
    res.render("qr-image.ejs", { qrImage: qrCodeDataUrl }); // pass to view
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to generate QR code");
  }
};

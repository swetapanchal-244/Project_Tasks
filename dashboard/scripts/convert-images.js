import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folders = [
    path.join(__dirname, "../public"),
    path.join(__dirname, "../src/assets")
];

async function convertImages() {
    for (const folder of folders) {

        if (!fs.existsSync(folder)) {
            console.log(`Folder not found: ${folder}`);
            continue;
        }

        const files = fs.readdirSync(folder, {
            withFileTypes: true
        });

        for (const file of files) {

            if (!file.isFile()) {
                continue;
            }

            if (!/\.(jpg|jpeg|png)$/i.test(file.name)) {
                continue;
            }

            const inputPath = path.join(folder, file.name);

            const outputPath = path.join(
                folder,
                path.parse(file.name).name + ".webp"
            );

            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`Converted: ${file.name}`);
        }
    }

    console.log("All images converted successfully!");
}

convertImages().catch((error) => {
    console.error("Image conversion failed:", error);
});
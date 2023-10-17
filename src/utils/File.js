import fs from "fs";
import sharp from "sharp";
import dotenv from "dotenv";

dotenv.config();

export const renameFile = (oldPath, newPath) => {
    return new Promise((resolve, reject) => {
        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}


// ... (rest of the code)

export const generateImageFileLink = async (req) => {

    const {filename, mimetype} = req.file;

    // Dosya uzantısını MIME türüne göre belirle
    let fileExtension;
    switch (mimetype) {
        case 'image/png':
            fileExtension = '.png';
            break;
        case 'image/jpeg':
            fileExtension = '.jpg';
            break;
        case 'image/gif':
            fileExtension = '.gif';
            break;
        // Diğer dosya türleri için ek uzantıları burada tanımlayabilirsiniz
        default:
            return false;
    }

    const oldFilePath = req.file.path;
    const newFileName = `uploads/${filename}.webp`; // Save the image as WebP format

    await sharp(oldFilePath) // Use sharp to process the image
        .webp({quality: 80}) // Set the WebP quality (0-100, 100 being the best)
        .toFile(newFileName);

    // Delete the original image file
    fs.unlinkSync(oldFilePath);


    // Dosya bağlantısını oluştur
    return `${req.protocol}://${req.get('host')}/${newFileName}`;
}


export const deleteFileByLink = async (req, fileLink) => {
    try {
        const filePath = fileLink.replace(process.env.SITE_URL, '');
        await fs.unlink(filePath);
    } catch (err) {
        console.error('Dosya silinirken bir hata oluştu:', err);
    }
};
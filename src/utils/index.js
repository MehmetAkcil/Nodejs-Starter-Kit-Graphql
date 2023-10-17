export const generateCronToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 30;
    let cronToken = '';

    for (let i = 0; i < tokenLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        cronToken += characters.charAt(randomIndex);
    }

    return cronToken;
}
export const moneyFormat = (amount, currency = 'TL') => {
    // Para birimi sembolünü ve binlik ayırıcıyı ekleyin
    const formattedAmount = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: currency,
    }).format(amount);

    return formattedAmount;
}
export const convertToSeoUrl = (name) => {
    const turkishChars = { 'ı': 'i', 'İ': 'I', 'ş': 's', 'Ş': 'S', 'ğ': 'g', 'Ğ': 'G', 'ü': 'u', 'Ü': 'U', 'ö': 'o', 'Ö': 'O', 'ç': 'c', 'Ç': 'C' };
    name = name.replace(/[ıİşŞğĞüÜöÖçÇ]/g, function (char) { return turkishChars[char]; });

    name = name.toLowerCase().replace(/[^a-z0-9-]/g, '-');

    name = name.replace(/[-]+/g, '-');

    name = name.replace(/^-+|-+$/g, '');

    return name;
}


const time = () => {
    return Math.floor(Date.now() / 1000);
}


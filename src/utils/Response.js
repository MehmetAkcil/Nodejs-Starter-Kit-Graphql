class Response {
    static create(res, data) {
        return res.status(201).send(data);
    }

    static success(res, data) {
        return res.status(200).send(data);
    }

    static error(res, message) {
        return res.status(400).json({ error: message });
    }

    static unauthorized(res, message) {
        return res.status(401).json({ error: message });
    }

    static forbidden(res, message) {
        return res.status(403).json({ error: message });
    }

    static notFound(res, message) {
        return res.status(404).json({ error: message });
    }

    static serverError(res, message) {
        return res.status(500).json({ error: message });
    }
}

export default Response;


/*
*
* import Response from './Response';

// Örnek kullanım
const data = { message: 'Başarılı yanıt' };

// 201 Created yanıtı
Response.create(res, data);

// 200 Success yanıtı
Response.success(res, data);

// 400 Bad Request yanıtı
Response.badRequest(res, 'Geçersiz istek');

// 401 Unauthorized yanıtı
Response.unauthorized(res, 'Kimlik doğrulama hatası');

// 403 Forbidden yanıtı
Response.forbidden(res, 'Erişim engellendi');

// 404 Not Found yanıtı
Response.notFound(res, 'Kaynak bulunamadı');

// 500 Internal Server Error yanıtı
Response.serverError(res, 'Sunucu hatası');

* */
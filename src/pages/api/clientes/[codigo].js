export default function handler(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        name: `galeno ${codigo}`,
        email: `galeno${codigo}@gmail.com`
    })
}
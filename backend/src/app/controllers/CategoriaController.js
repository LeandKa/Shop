import Categoria from '../models/Categoria';
import * as yup from 'yup';

class CategoriaController {
    async index(req, res) {
        try {
            const categoria = await Categoria.findAll();

            if (!categoria) {
                return res
                    .status(404)
                    .json({ ok: false, message: 'Categorie not found' });
            }

            return res.status(200).json({ categoria });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Error',
            });
        }
    }

    async create(req, res) {
        const { name } = req.body;
        const schema = yup.object().shape({
            name: yup.string().required(),
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ ok: false, message: 'no name' });
        }

        const finder = await Categoria.findOne({
            where: {
                name,
            },
        });

        if (finder) {
            return res.status(400).json({
                ok: false,
                message: 'Categoria already register',
            });
        }

        const categoria = await Categoria.create({
            name,
        });

        return res.status(200).json({ categoria });
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const schema = yup.object().shape({
                id: yup.number().required(),
            });
            if (!(await schema.isValid(req.params))) {
                return res.status(400).json({ ok: false, message: 'no id' });
            }
            const categoria = await Categoria.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).json({ ok: true });
        } catch (error) {
            return res.status(500).json({ ok: false });
        }
    }
}

export default new CategoriaController();

import User from '../models/User';
import * as yup from 'yup';
import jwt from 'jsonwebtoken';

class UserController {
    async create(req, res) {
        try {
            const { id, name, lastname, email, password } = req.body;

            const schema = yup.object().shape({
                name: yup.string().required('Nome requerido'),
                lastname: yup.string().required('Marca requerida'),
                email: yup.string().email().required('Informe uma categoria'),
                password: yup.string().min(3).required('Informe uma senha'),
            });
            if (!(await schema.isValid(req.body))) {
                return res
                    .status(400)
                    .json({ ok: false, message: 'validation fail' });
            }

            const userFind = await User.findOne({
                where: {
                    email: email,
                },
            });

            if (userFind) {
                return res
                    .status(400)
                    .send({ ok: false, message: 'email is already register' });
            }

            const create = await User.create({
                id,
                name,
                lastname,
                email,
                password,
            });

            return res.status(200).json({ ok: true, create });
        } catch (error) {
            return res.status(500).json({ ok: false, error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.query;

            const schema = yup.object().shape({
                id: yup.number().required('Id required'),
            });
            if (!(await schema.isValid(req.query))) {
                return res
                    .status(400)
                    .json({ ok: false, message: 'Validation fail' });
            }

            const del = await User.destroy({
                where: {
                    id,
                },
            });
            return res.status(200).json({ ok: true });
        } catch (error) {
            return res.status(500).json({ ok: false });
        }
    }

    async session(req, res) {
        const { email, password } = req.body;
        const schema = yup.object().shape({
            email: yup.string().required(),
            password: yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res
                .status(400)
                .json({ ok: false, message: 'Validation fail' });
        }

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return res
                .status(404)
                .json({ ok: false, message: 'User not found' });
        }

        const check = await user.checkPassword(password);
        if (!check) {
            return res
                .status(400)
                .json({ ok: false, message: 'Password not match' });
        }

        return res.status(200).json({
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            token: jwt.sign(
                {
                    id: user.id,
                },
                'secret',
                { expiresIn: '7d' }
            ),
        });
    }
}

export default new UserController();

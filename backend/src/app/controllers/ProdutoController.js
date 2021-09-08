import Produto from '../models/Produto';
import aws from 'aws-sdk';
import * as yup from 'yup';
import { Op } from 'sequelize';
import Categoria from '../models/Categoria';

const s3 = new aws.S3();

class ProdutoController {
    async index(req, res) {
        try {
            const { page } = req.query;
            const product = await Produto.findAndCountAll({
                include: [
                    {
                        model: Categoria,
                        as: 'categoria',
                        attributes: ['name', 'id'],
                    },
                ],
                limit: 10,
                offset: ((page || 1) - 1) * 10,
            });

            if (!product) {
                return res
                    .status(404)
                    .json({ ok: false, message: 'Nothing found' });
            }

            const countPages = await Produto.count();
            const totalPage = Math.ceil(countPages / 10);
            return res.status(200).json({
                product: product.rows,
                limit: 10,
                totalPage: Math.ceil(product.count / 10),
                page: page || 1,
            });
        } catch (error) {
            return res.status(500).json({ ok: false, message: 'Erro' });
        }
    }

    async getByCategorie(req, res) {
        try {
            const { page, categoria } = req.query;
            const product = await Produto.findAndCountAll({
                where: {
                    categoria_id: categoria,
                },
                include: [
                    {
                        model: Categoria,
                        as: 'categoria',
                        attributes: ['name', 'id'],
                    },
                ],
                limit: 10,
                offset: ((page || 1) - 1) * 10,
            });

            if (!product) {
                return res
                    .status(404)
                    .json({ ok: false, message: 'Nothing found' });
            }

            return res.status(200).json({
                product: product.rows,
                limit: 10,
                totalPage: Math.ceil(product.count / 10),
                page: page || 1,
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: 'Erro',
            });
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const product = await Produto.findOne({
                where: { id },
                include: [
                    {
                        model: Categoria,
                        as: 'categoria',
                        attributes: ['name', 'id'],
                    },
                ],
            });

            if (!product) {
                return res
                    .status(404)
                    .json({ ok: false, message: 'Nothing found' });
            }
            return res.status(200).json({
                product,
            });
        } catch (error) {
            return res.status(500).json({ ok: false, message: 'Erro' });
        }
    }

    async getBySearch(req, res) {
        const { page, ProductName } = req.query;
        const product = await Produto.findAndCountAll({
            where: {
                name: { [Op.like]: ProductName ? `${ProductName}%` : `%%` },
            },
            include: [
                {
                    model: Categoria,
                    as: 'categoria',
                    attributes: ['name', 'id'],
                },
            ],
            limit: 10,
            offset: ((page || 1) - 1) * 10,
        });

        if (!product) {
            return res
                .status(404)
                .json({ ok: false, message: 'Nothing found' });
        }
        return res.status(200).json({
            product: product.rows,
            limit: 10,
            totalPage: Math.ceil(product.count / 10),
            page: page || 1,
        });
    }
    catch(error) {
        return res.status(500).json({
            ok: false,
            message: error.message,
        });
    }

    async create(req, res) {
        try {
            const schema = yup.object().shape({
                name: yup.string().required('Nome requerido'),
                brand: yup.string().required('Marca requerida'),
                categoria_id: yup.string().required('Informe uma categoria'),
                price: yup.number().required('Informe um preço'),
            });
            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ ok: false });
            }
            const { location, key } = req.file;
            const { name, brand, categoria_id, price } = req.body;

            const categoria = await Categoria.findOne({
                where: {
                    id: categoria_id,
                },
            });

            if (!categoria) {
                const params = {
                    Bucket: process.env.AWS_BUCKET,
                    Key: key,
                    VersionId: 'null',
                };
                await s3.deleteObject(params).promise();
                return res
                    .status(404)
                    .json({ ok: false, message: 'categoria not found' });
            }

            const product = await Produto.create({
                name,
                brand,
                categoria_id,
                price,
                key,
                url: location,
            });
            return res.status(200).json({ ok: true, product });
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.query;
            const { name, brand, categoria_id, price } = req.body;

            const schema = yup.object().shape({
                name: yup.string().required('Nome requerido'),
                brand: yup.string().required('Marca requerida'),
                categoria_id: yup.string().required('Informe uma categoria'),
                price: yup.number().required('Informe um preço'),
            });
            if (!(await schema.isValid(req.body))) {
                return res
                    .status(400)
                    .json({ ok: false, message: 'validation fail' });
            }

            const Product = await Produto.findByPk(id);
            if (!Product) {
                return res
                    .status(400)
                    .json({ ok: false, message: 'Product not found' });
            }

            await Product.update({ name, brand, categoria_id, price });

            return res.status(200).json({ ok: true, Product });
        } catch (error) {
            return res
                .status(500)
                .json({ ok: false, message: 'erro generico' });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.query;

            const product = await Produto.findByPk(id);
            if (!product) {
                return res.status(404).send('Produto não encontrado');
            }
            const params = {
                Bucket: process.env.AWS_BUCKET,
                Key: product.key,
                VersionId: 'null',
            };
            await s3.deleteObject(params).promise();

            const del = await Produto.destroy({
                where: {
                    id,
                },
            });
            return res
                .status(200)
                .json({ ok: true, message: 'Removed with success' });
        } catch (error) {
            return res.status(500).json({ ok: false });
        }
    }
}

export default new ProdutoController();

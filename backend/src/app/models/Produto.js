import Sequelize, { Model } from 'sequelize';

class Produtos extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                brand: Sequelize.STRING,
                url: Sequelize.STRING,
                key: Sequelize.STRING,
                price: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );

        return this;
    }
    static associate(models) {
        this.belongsTo(models.Categorias, {
            foreignKey: 'categoria_id',
            as: 'categoria',
        });
    }
}

export default Produtos;

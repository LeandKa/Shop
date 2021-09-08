import Sequelize from 'sequelize';

import DatabaseConfig from '../config/database';
import Produto from '../app/models/Produto';
import Categoria from '../app/models/Categoria';
import User from '../app/models/User';

const models = [Produto, Categoria, User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();

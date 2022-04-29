module.exports = (sequelize, DataTypes) => {
    
    const Usuarios = sequelize.define(
        'Usuario', {
            nome : DataTypes.STRING,
            email : DataTypes.STRING,
            telefone : DataTypes.STRING,
            genero : DataTypes.STRING,
            data_nascimento : DataTypes.STRING,
            senha : DataTypes.STRING,
            cep : DataTypes.STRING,
            rua : DataTypes.STRING,
            complemento : DataTypes.STRING,
            numero : DataTypes.INTEGER,
            bairro : DataTypes.STRING,
            cidade : DataTypes.STRING,
            estado : DataTypes.STRING,
        }, {
            tableName : "Usuarios"
        }
    );
        
    return Usuarios;
}
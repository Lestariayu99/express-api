module.exports = mongoose =>{
    const schema = mongoose.Schema(
        {
            nama: String,
            brand: String,
            harga: Number,
            stock: Number,
}

);

schema.method("toJSON", function(){
    const {__v , _id, ...object} = this.toObject();
    object.id = _id;

    return object;
})

    return mongoose.model("product.model", schema);
}
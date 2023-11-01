class ProductModel {
    constructor(name, description, price, type, size, brandNew) {
        this.id = 0; 
        this.name = name;
        this.description = description;
        this.price = price;
        this.type = type;
        this.size = size;
        this.account = null; 
        this.brandNew = brandNew;
    }

    setCreatedAt(date) {
        this.createdAt = date.toISOString();
    }
}

export default ProductModel;

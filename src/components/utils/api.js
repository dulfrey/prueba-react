export fetchData = async ()=> {
    try {
        const response = await fetch('https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json')
        const data = await response.toJson();
        return data;
    } catch (error) {
        console.log (error)
    }
}
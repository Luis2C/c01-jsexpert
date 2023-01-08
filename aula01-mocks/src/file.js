class File {
    static async csvToJson(filePath){
        return 'hello!'
    }
}

(async() => {
    const result = await File.csvToJson('./../mocks/threeeItems-valid.csv')
    console.log('result', result)
})();
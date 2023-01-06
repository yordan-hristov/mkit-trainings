const sass = require('sass')

async function transpileFile(){
    try{
        const resultFile = await sass.compileAsync('./exercise_3_solution.sass');
        return resultFile.css
    }
    catch(error){
        return error
    }
}

transpileFile().then(res => console.log(res))

module.exports = {
    transpileFile
}
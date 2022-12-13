const sass = require('sass')

async function transpileFile(){
    try{
        const resultFile = await sass.compileAsync('course-lvl-up-fe-1/module-05-web-development-essentials/sass/exercise_1.scss');
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
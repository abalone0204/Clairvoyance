const target = process.argv[2]
const actionMap = require("./actionMap.json")
const fs = require('fs')

main(target, actionMap)

function main(target, actionMap) {
    actionMap.forEach(actionObject => {
        actionGenerator(target, actionObject)
    })
}

function actionGenerator(target, obj) {
    const fileName = obj.fileName
    const actions = obj.actions
    const constants = actions.map(action => getConstantName(action.name))
    const resultFile = `./${target}/${obj.fileName}.js`
    createFile(resultFile)
    const constantString = genConstantString(constants)
    const actionCreatorString = genActionCreators(actions)
    fs.appendFile(resultFile, constantString + '\n' + actionCreatorString, (err) => {
        if (err) throw err
    })
}

function genConstantString(constants) {
    return constants.map(constant => `export const ${constant} = '${constant}'`).join('\n')
}

function genActionCreators(actions) {
    const data = actions.map((action) => {
        const args = action.args ? action.args : []
        return `
        export function ${action.name} (${args.join(', ')}) {
            return {
                type: ${getConstantName(action.name)}${args.length > 0 ? ',' : ''}
                ${args.join(',\n')}
            }    
        }`.trim()
    }).join('\n\n')
    return '\n' + data
}

function createFile(resultFile) {
    fs.writeFile(resultFile, '\n', {
        flag: 'wx'
    }, (err) => {
        if (err) throw err
    })
}

function getConstantName(camelCaseName) {
    return camelCaseName.replace(/([A-Z])/g, '_$1')
        .toUpperCase()
}
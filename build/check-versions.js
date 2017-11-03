/**
 * Created by liujian on 2017/10/23.
 */
const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
const logger = require('./lib/logger')

function exec (cmd) {
    return require('child_process').execSync(cmd).toString().trim()
}

let versionRequirements = [
    {
        name: 'node',
        currentVersion: semver.clean(process.version),
        versionRequirement: packageConfig.engines.node
    },
    {
        name: 'npm',
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm
    }
]

module.exports = function () {
    var warnings = []
    for (var i = 0; i < versionRequirements.length; i++) {
        var mod = versionRequirements[i]
        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(mod.name + ': ' +
                chalk.red(mod.currentVersion) + ' should be ' +
                chalk.green(mod.versionRequirement)
            )
        }
    }

    if (warnings.length) {
        logger.warn('To use this template, you must update following to modules:')
        for (var i = 0; i < warnings.length; i++) {
            var warning = warnings[i]
            logger.warn('  ' + warning)
        }
        process.exit(1)
    }else{
        logger.success("Checked")
    }
}

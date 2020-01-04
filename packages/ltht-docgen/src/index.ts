/* eslint-disable no-await-in-loop, no-console */

import fs from 'fs'
import path from 'path'
import glob from 'glob-promise'
import chalk from 'chalk'
import { parse } from 'react-docgen'
import { promisify } from 'util'
import _ from 'lodash'

import generateMarkdown from './markdown/generateMarkdown'

const components = require('ltht-react')

function getComponentFolderName(file: string) {
  const dirs = path.dirname(file).split('/')
  let dir = dirs[dirs.length - 1]
  if (dir === 'src' || dir === 'lib') {
    dir = dirs[dirs.length - 2]
  }
  return dir
}

function getComponentNameFromFile(file: string) {
  const folderName = getComponentFolderName(file)
  return _.chain(folderName)
    .camelCase()
    .upperFirst()
    .value()
}

function getMarkdownForComponent(file: string) {
  const src = fs.readFileSync(path.resolve(__dirname, file))
  console.log(parse)
  const componentInfo = parse(src)
  const componentName = getComponentNameFromFile(file)
  const componentFolderName = getComponentFolderName(file)
  return generateMarkdown(componentName, componentFolderName, componentInfo)
}

function libPathToSrc(libPath: string, libFolder: string = '/lib/') {
  const pos = libPath.lastIndexOf(libFolder)
  const len = libFolder.length
  const dir = path.parse(libPath).dir
  const name = path.parse(libPath).name
  libPath = dir + '/' + name + '.tsx'
  return `${libPath.substring(0, pos)}/src/${libPath.substring(pos + len)}`
}

async function generateApiForFile(file: string) {
  try {
    const componentName = getComponentNameFromFile(file)
    console.log(chalk.yellow('componentName ', componentName))
    const src = libPathToSrc(file)
    console.log(chalk.yellow('src ', src))
    const md = getMarkdownForComponent(src)
    console.log(chalk.green('API Documented:'), componentName)
    return md
  } catch (e) {
    console.log(chalk.red('Skipping component:'), file, e.message)
    return ''
  }
}

function shouldDocumentComponent(file: string) {
  const name = getComponentNameFromFile(file)
  return Object.prototype.hasOwnProperty.call(components, name)
}

async function generateApiForFiles(files: string[]) {
  let md = ''
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i]
    if (shouldDocumentComponent(file)) {
      md += await generateApiForFile(file)
    }
  }
  return md
}

function dequote(string: string) {
  return string.replace(/^'(.*)'$/, '$1')
}

async function doc(relDir: string, outputMd: string) {
  const relDirNoQuotation = dequote(relDir)
  const outputMdNoQuotation = dequote(outputMd)

  const files = await glob(path.resolve(process.cwd(), relDirNoQuotation))
  const md = await generateApiForFiles(files)
  await promisify(fs.writeFile)(outputMdNoQuotation, md)
}

export default doc

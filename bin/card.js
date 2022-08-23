#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const chalk = require('chalk')
const boxen = require('boxen')
const AsciiTable = require('ascii-table')

// Define options for Boxen
const options = {
  padding: { top: 1, right: 10, bottom: 1, left: 8 },
  margin: 2,
  borderStyle: 'round',
  float: 'center',
}

var table = new AsciiTable().removeBorder()
  .addRow()
  .addRow(chalk.white.bold('Work'), chalk.white('Frontend Engineer'))
  .addRow(chalk.white.bold('Twitter'), chalk.cyan('twitter.com/romanyanke'))
  .addRow(chalk.white.bold('GitHub'), chalk.cyan('github.com/romanyanke'))
  .addRow(chalk.white.bold('LinkedIn'), chalk.cyan('linkedin.com/in/romanyanke'))
  .addRow(chalk.white.bold('Web'), chalk.cyan('yanke.world'))
  .addRow()
  .addRow(chalk.white.bold('Card'), chalk.white('npx romanyanke'),)

console.log(chalk.green(boxen(
  chalk.white.bold('Roman Yanke') + " / " + chalk.cyan('romanyanke') + '\n'+
  table.toString(), options)))

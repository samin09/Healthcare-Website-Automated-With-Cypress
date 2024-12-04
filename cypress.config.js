// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


//const { readPdf } = require('cypress/scripts/readPdf');

const { defineConfig } = require("cypress");
const { glob, globSync } = require("glob")
const { readAll, read } = require("./cypress/plugins/read-xlsx")
const fs = require('fs');
const { join } = require('path');

module.exports = defineConfig({
  projectId: '9j25yf',
  "pageLoadTimeout": 100000,
  "chromeWebSecurity": true,
  e2e: {
    //baseUrl: 'https://qa01.therapbd.net/',// https://192.168.0.137:7002/
    experimentalSessionAndOrigin: true,
    experimentalInteractiveRunEvents: true,
    testIsolation: false,
    experimentalStudio: true,
    setupNodeEvents(on, config) {

      on('task', {
        //readPdf,
        'readXlsx': read
      })


      on("before:spec", () => {

        function createJsonFile(xlsxPath, jsonPath) {
          fs.writeFile(jsonPath, JSON.stringify(readAll({ file: xlsxPath }), null, 4), (err) => {
            if (err) {
              console.error("An error occurred: ", err)
            } else {
              console.log(`Successfully created ${jsonPath}`)
            }
          })
        }

        return new Promise((resolve, reject) => {
          let fixtureFilePath = config.fixturesFolder.replaceAll("\\", "/")
          glob(fixtureFilePath + "/**/!(~$)*.xlsx", { withFileTypes: true, stat: true }).then(arr => {
            arr.forEach(xlsxPathObject => {
              let xlsxPath = xlsxPathObject.fullpath()
              let jsonPath = join(xlsxPathObject.path, xlsxPathObject.name.replace(/\.xlsx$/, ".json"));
              if (fs.existsSync(jsonPath)) {
                if (xlsxPathObject.mtime >= fs.statSync(jsonPath).mtime) {
                  createJsonFile(xlsxPath, jsonPath)
                }
              } else {
                createJsonFile(xlsxPath, jsonPath)
              }
            })
            resolve()
          })
        })
      })

    },
  },
});


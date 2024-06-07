const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "cypress/reports", // ** Path of .html file **//
    displayDuration: true,
    durationInMS: true,
    pageTitle: "Cypress Test Reporter",
    reportName: "Cypress Test R",
    metadata: {
        browser: {
            name: "chrome",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
        }
    },
    customData: {
        title: 'Execution Info', // Title for the custom data section
        data: [
          { label: 'Project', value: 'My Cypress Project' },
          { label: 'Environment', value: 'Staging' },
          { label: 'Execution Start Time', value: new Date().toLocaleString() },
          { label: 'Execution End Time', value: new Date().toLocaleString() },
        ],
      },
      displayDuration: true, // Display the duration of each test scenario
      displayReportTime: true, // Display the report generation time
      openReportInBrowser: true, // Automatically open the report in the default browser after generation
    
});

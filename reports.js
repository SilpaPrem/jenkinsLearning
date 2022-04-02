var reporter = require('cucumber-html-reporter');
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/indexnew.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Name":"Part B report"
        }
    };
reporter.generate(options);
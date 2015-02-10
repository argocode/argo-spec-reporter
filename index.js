var SpecReporter = function(baseReporterDecorator, formatError, config) {
  baseReporterDecorator(this);

  this.writeSpecMessage = function(status) {
    return (function(browser, result) {
      result.success;
      var message = status +
      result.suite + ' ' +
      result.description  + ' ' +
      result.time;

      this.writeCommonMsg(message + '\n');
    }).bind(this);
  };

  this.specSuccess = this.writeSpecMessage('PASS ');
  this.specFailure = this.writeSpecMessage('FAIL ');
};

SpecReporter.$inject = ['baseReporterDecorator', 'formatError', 'config'];

module.exports = {
  'reporter:spec': ['type', SpecReporter]
};

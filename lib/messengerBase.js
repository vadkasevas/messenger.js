// Generated by CoffeeScript 1.3.3
var MessengerBase;

MessengerBase = (function() {

  function MessengerBase() {
    this.savedBuffer = '';
  }

  MessengerBase.prototype.getHostByAddress = function(address) {
    if (typeof address === 'number') {
      return null;
    }
    if (typeof address === 'string') {
      return address.split(':')[0];
    }
  };

  MessengerBase.prototype.getPortByAddress = function(address) {
    if (typeof address === 'number') {
      return address;
    }
    if (typeof address === 'string') {
      return address.split(':')[1];
    }
  };

  MessengerBase.prototype.prepareJsonToSend = function(json) {
    return JSON.stringify(json) + '\0';
  };

  MessengerBase.prototype.tokenizeData = function(data) {
    var tokens;
    this.savedBuffer += data;
    tokens = this.savedBuffer.split('\0');
    if (tokens.pop()) {
      return [];
    }
    this.savedBuffer = '';
    return tokens;
  };

  return MessengerBase;

})();

module.exports = MessengerBase;

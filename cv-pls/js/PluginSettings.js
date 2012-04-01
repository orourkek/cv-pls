function PluginSettings(settings) {
  var self = this;

  this.showIcon = function() {
    return settings.normalizeDefaultTrue(settings.getSetting('showIcon'));
  };

  this.oneBox = function() {
    return settings.normalizeDefaultTrue(settings.getSetting('oneBox'));
  };

  this.oneBoxHeight = function() {
    return settings.getSetting('oneBoxHeight');
  };

  this.soundNotification = function() {
    return settings.normalizeDefaultFalse(settings.getSetting('soundNotification'));
  };

  this.avatarNotification = function() {
    return settings.normalizeDefaultFalse(settings.getSetting('avatarNotification'));
  };

  this.avatarNotificationOnLoad = function() {
    return settings.normalizeDefaultFalse(settings.getSetting('avatarNotificationOnLoad'));
  };

  this.showCloseStatus = function() {
    return settings.normalizeDefaultFalse(settings.getSetting('showCloseStatus'));
  };

  this.showCloseReason = function() {
    return settings.normalizeDefaultFalse(settings.getSetting('showCloseReason'));
  };

  this.pollCloseStatus = function() {
    return settings.normalizeDefaultFalse(settings.getSetting('pollCloseStatus'));
  };

  this.pollInterval = function() {
    return settings.getSetting('pollInterval');
  };

  this.getAllSettings = function() {
    return {
      showIcon: self.showIcon(),
      oneBox: self.oneBox(),
      oneBoxHeight: self.oneBoxHeight(),
      soundNotification: self.soundNotification(),
      avatarNotification: self.avatarNotification(),
      avatarNotificationOnLoad: self.avatarNotificationOnLoad(),
      showCloseStatus: self.showCloseStatus(),
      showCloseReason: self.showCloseReason(),
      pollCloseStatus: self.pollCloseStatus(),
      pollInterval: self.pollInterval()
    };
  };
}
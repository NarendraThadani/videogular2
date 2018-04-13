"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vg_states_1 = require("../states/vg-states");
var VgAPI = (function () {
    function VgAPI() {
        this.medias = {};
        this.playerReadyEvent = new core_1.EventEmitter(true);
        this.customErrorEvent = new core_1.EventEmitter(true);
        this.isPlayerReady = false;
    }
    VgAPI.prototype.onPlayerReady = function (fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    };
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    };
    VgAPI.prototype.getMasterMedia = function () {
        var master;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    };
    VgAPI.prototype.isMasterDefined = function () {
        var result = false;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                result = true;
                break;
            }
        }
        return result;
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isLive", {
        get: function () {
            return this.$$getAllProperties('isLive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMaster", {
        get: function () {
            return this.$$getAllProperties('isMaster');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "textTracks", {
        get: function () {
            return this.$$getAllProperties('textTracks');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.addTextTrack = function (type, label, language) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    };
    VgAPI.prototype.$$addTextTrack = function (media, type, label, language) {
        media.addTextTrack(type, label, language);
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var medias = {};
        var result;
        for (var id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        var nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = vg_states_1.VgStates.VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                var master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        this.medias[media.id] = media;
    };
    VgAPI.prototype.unregisterMedia = function (media) {
        delete this.medias[media.id];
    };
    VgAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgAPI.ctorParameters = function () { return []; };
    return VgAPI;
}());
exports.VgAPI = VgAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBRXZELGlEQUE2Qzs7SUFZekM7c0JBUGdCLEVBQUU7Z0NBRW9CLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUM7Z0NBQ3RCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUM7NkJBQ25DLEtBQUs7S0FLN0I7SUFFRCw2QkFBYSxHQUFiLFVBQWMsS0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztJQUVELCtCQUFlLEdBQWY7UUFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDSjtLQUNKO0lBRUQsOEJBQWMsR0FBZDtRQUNJLElBQUksTUFBVSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixLQUFLLENBQUM7YUFDVDtTQUNKO1FBQ0QsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDM0M7SUFFRCwrQkFBZSxHQUFmO1FBQ0ksSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLEtBQUssQ0FBQzthQUNUO1NBQ0o7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBRUQsNEJBQVksR0FBWixVQUFhLEVBQWdCO1FBQWhCLG1CQUFBLEVBQUEsU0FBZ0I7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNoQjtJQUVELG9CQUFJLEdBQUo7UUFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM1QjtTQUNKO0tBQ0o7SUFFRCxxQkFBSyxHQUFMO1FBQ0ksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7U0FDSjtLQUNKO0lBRUQsc0JBQUksMkJBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQVc7YUFJZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7YUFORCxVQUFnQixPQUFPO1lBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkQ7OztPQUFBO0lBTUQsc0JBQUksd0JBQUs7YUFJVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7YUFORCxVQUFVLEtBQUs7WUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7T0FBQTtJQU1ELHNCQUFJLHlCQUFNO2FBSVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO2FBTkQsVUFBVyxNQUFNO1lBQ2IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM3Qzs7O09BQUE7SUFNRCxzQkFBSSwrQkFBWTthQUloQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbEQ7YUFORCxVQUFpQixJQUFJO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakQ7OztPQUFBO0lBTUQsc0JBQUksMEJBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7OztPQUFBO0lBRUQsc0JBQUksaUNBQWM7YUFBbEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDcEQ7OztPQUFBO0lBRUQsc0JBQUksbUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3REOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2pEOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDOzs7T0FBQTtJQUVELHNCQUFJLHVCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDOzs7T0FBQTtJQUVELHNCQUFJLHlCQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDOzs7T0FBQTtJQUVELHNCQUFJLDJCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNuRDs7O09BQUE7SUFFRCxzQkFBSSw2QkFBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDs7O09BQUE7SUFFRCx3QkFBUSxHQUFSLFVBQVMsS0FBWSxFQUFFLFNBQXlCO1FBQXpCLDBCQUFBLEVBQUEsaUJBQXlCO1FBQzVDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0o7S0FDSjtJQUVELHNCQUFNLEdBQU4sVUFBTyxLQUFlLEVBQUUsS0FBWSxFQUFFLFNBQXlCO1FBQXpCLDBCQUFBLEVBQUEsaUJBQXlCO1FBQzNELElBQUksTUFBYSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFVLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFFckMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQzdDO1lBRUQsTUFBTSxHQUFHLEtBQUssR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2xCO1FBRUQsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7S0FDOUI7SUFFRCw0QkFBWSxHQUFaLFVBQWEsSUFBVyxFQUFFLEtBQWEsRUFBRSxRQUFnQjtRQUNyRCxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDakU7U0FDSjtLQUNKO0lBQ0QsOEJBQWMsR0FBZCxVQUFlLEtBQWUsRUFBRSxJQUFXLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQ3hFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM3QztJQUVELGtDQUFrQixHQUFsQixVQUFtQixRQUFlO1FBQzlCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLE1BQVUsQ0FBQztRQUVmLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUUsRUFBRSxDQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsQ0FBQzthQUNwQztTQUNKO1FBRUQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0MsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQzs7Z0JBRUYsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDZixLQUFLLE9BQU87d0JBQ1IsTUFBTSxHQUFHLG9CQUFRLENBQUMsU0FBUyxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBRVYsS0FBSyxjQUFjLENBQUM7b0JBQ3BCLEtBQUssUUFBUTt3QkFDVCxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNYLEtBQUssQ0FBQztvQkFFVixLQUFLLE1BQU07d0JBQ1AsTUFBTSxHQUFHLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQzt3QkFDekMsS0FBSyxDQUFDO2lCQUNiO2dCQUNELEtBQUssQ0FBQztZQUVWLEtBQUssQ0FBQzs7Z0JBRUYsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEMsS0FBSyxDQUFDO1lBRVY7O2dCQUVJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUM7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBRUQsa0NBQWtCLEdBQWxCLFVBQW1CLFFBQWUsRUFBRSxLQUFTO1FBQ3pDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxDQUFFLFFBQVEsQ0FBRSxHQUFHLEtBQUssQ0FBQzthQUN6QztTQUNKO0tBQ0o7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLElBQWdCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7S0FDakM7SUFFRCw2QkFBYSxHQUFiLFVBQWMsS0FBZTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLEtBQWU7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQzs7Z0JBblFKLGlCQUFVOzs7O2dCQUxYOztBQU1hLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJUGxheWFibGV9IGZyb20gXCIuLi92Zy1tZWRpYS9pLXBsYXlhYmxlXCI7XG5pbXBvcnQge1ZnU3RhdGVzfSBmcm9tIFwiLi4vc3RhdGVzL3ZnLXN0YXRlc1wiO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi92Zy1mdWxsc2NyZWVuLWFwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0FQSSB7XG4gICAgbWVkaWFzOk9iamVjdCA9IHt9Oy8vIFRPRE86IHJlZmFjdG9yIHRvIFNldDxJUGxheWFibGU+IFxuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBhbnk7XG4gICAgcGxheWVyUmVhZHlFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIGN1c3RvbUVycm9yRXZlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcih0cnVlKTtcbiAgICBpc1BsYXllclJlYWR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgZnNBUEk6IFZnRnVsbHNjcmVlbkFQSTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeShmc0FQSTogVmdGdWxsc2NyZWVuQVBJKSB7XG4gICAgICAgIHRoaXMuZnNBUEkgPSBmc0FQSTtcbiAgICAgICAgdGhpcy5pc1BsYXllclJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJSZWFkeUV2ZW50LmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdE1lZGlhKCk6SVBsYXlhYmxlIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFzW2l0ZW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TWFzdGVyTWVkaWEoKTpJUGxheWFibGUge1xuICAgICAgICBsZXQgbWFzdGVyOmFueTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0udmdNZWRpYSA9PT0gJ3RydWUnIHx8IHRoaXMubWVkaWFzW2lkXS52Z01lZGlhID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbWFzdGVyID0gdGhpcy5tZWRpYXNbaWRdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXN0ZXIgfHwgdGhpcy5nZXREZWZhdWx0TWVkaWEoKTtcbiAgICB9XG5cbiAgICBpc01hc3RlckRlZmluZWQoKTpib29sZWFuIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXS52Z01lZGlhID09PSAndHJ1ZScgfHwgdGhpcy5tZWRpYXNbaWRdLnZnTWVkaWEgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0TWVkaWFCeUlkKGlkOnN0cmluZyA9IG51bGwpOklQbGF5YWJsZSB7XG4gICAgICAgIGxldCBtZWRpYSA9IHRoaXMubWVkaWFzW2lkXTtcblxuICAgICAgICBpZiAoIWlkIHx8IGlkID09PSAnKicpIHtcbiAgICAgICAgICAgIG1lZGlhID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZWRpYTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzWyBpZCBdLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzW2lkXS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGR1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2R1cmF0aW9uJyk7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHNlY29uZHMpIHtcbiAgICAgICAgdGhpcy4kJHNldEFsbFByb3BlcnRpZXMoJ2N1cnJlbnRUaW1lJywgc2Vjb25kcyk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2N1cnJlbnRUaW1lJyk7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCdzdGF0ZScsIHN0YXRlKTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnc3RhdGUnKTtcbiAgICB9XG5cbiAgICBzZXQgdm9sdW1lKHZvbHVtZSkge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygndm9sdW1lJywgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3ZvbHVtZScpO1xuICAgIH1cblxuICAgIHNldCBwbGF5YmFja1JhdGUocmF0ZSkge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygncGxheWJhY2tSYXRlJywgcmF0ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXliYWNrUmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdwbGF5YmFja1JhdGUnKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuUGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdjYW5QbGF5Jyk7XG4gICAgfVxuXG4gICAgZ2V0IGNhblBsYXlUaHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2NhblBsYXlUaHJvdWdoJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzTWV0YWRhdGFMb2FkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNNZXRhZGF0YUxvYWRlZCcpO1xuICAgIH1cblxuICAgIGdldCBpc1dhaXRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNXYWl0aW5nJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2lzQ29tcGxldGVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzTGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc0xpdmUnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNNYXN0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNNYXN0ZXInKTtcbiAgICB9XG5cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCd0aW1lJyk7XG4gICAgfVxuXG4gICAgZ2V0IGJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdidWZmZXInKTtcbiAgICB9XG5cbiAgICBnZXQgYnVmZmVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnYnVmZmVyZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgc3Vic2NyaXB0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdzdWJzY3JpcHRpb25zJyk7XG4gICAgfVxuXG4gICAgZ2V0IHRleHRUcmFja3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygndGV4dFRyYWNrcycpO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKHZhbHVlOm51bWJlciwgYnlQZXJjZW50OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZWVrKHRoaXMubWVkaWFzWyBpZCBdLCB2YWx1ZSwgYnlQZXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICQkc2VlayhtZWRpYTpJUGxheWFibGUsIHZhbHVlOm51bWJlciwgYnlQZXJjZW50OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc2Vjb25kOm51bWJlcjtcbiAgICAgICAgbGV0IGR1cmF0aW9uOm51bWJlciA9IG1lZGlhLmR1cmF0aW9uO1xuXG4gICAgICAgIGlmIChieVBlcmNlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWFzdGVyRGVmaW5lZCgpKSB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSB0aGlzLmdldE1hc3Rlck1lZGlhKCkuZHVyYXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlICogZHVyYXRpb24gLyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lZGlhLmN1cnJlbnRUaW1lID0gc2Vjb25kO1xuICAgIH1cblxuICAgIGFkZFRleHRUcmFjayh0eXBlOnN0cmluZywgbGFiZWw/OnN0cmluZywgbGFuZ3VhZ2U/OnN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCRhZGRUZXh0VHJhY2sodGhpcy5tZWRpYXNbIGlkIF0sIHR5cGUsIGxhYmVsLCBsYW5ndWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJCRhZGRUZXh0VHJhY2sobWVkaWE6SVBsYXlhYmxlLCB0eXBlOnN0cmluZywgbGFiZWw/OnN0cmluZywgbGFuZ3VhZ2U/OnN0cmluZykge1xuICAgICAgICBtZWRpYS5hZGRUZXh0VHJhY2sodHlwZSwgbGFiZWwsIGxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICAkJGdldEFsbFByb3BlcnRpZXMocHJvcGVydHk6c3RyaW5nKXtcbiAgICAgICAgY29uc3QgbWVkaWFzID0ge307XG4gICAgICAgIGxldCByZXN1bHQ6YW55O1xuXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgbWVkaWFzWyBpZCBdID0gdGhpcy5tZWRpYXNbIGlkIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuTWVkaWFzID0gT2JqZWN0LmtleXMobWVkaWFzKS5sZW5ndGg7XG4gICAgICAgIHN3aXRjaCAobk1lZGlhcykge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlcyB1bnRpbCB2Z01lZGlhIGlzIGluaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwbGF5YmFja1JhdGUnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd2b2x1bWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge2N1cnJlbnQ6IDAsIHRvdGFsOiAwLCBsZWZ0OiAwfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgb25seSBvbmUgbWVkaWEgZWxlbWVudCB0aGVuIHJldHVybiB0aGUgcGxhaW4gdmFsdWVcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE1lZGlhSWQgPSBPYmplY3Qua2V5cyhtZWRpYXMpWzBdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1lZGlhc1tmaXJzdE1lZGlhSWRdW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmV0dXJuICdtYXN0ZXInIHZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IG1hc3RlciA9IHRoaXMuZ2V0TWFzdGVyTWVkaWEoKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBtZWRpYXNbbWFzdGVyLmlkXVtwcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgJCRzZXRBbGxQcm9wZXJ0aWVzKHByb3BlcnR5OnN0cmluZywgdmFsdWU6YW55KXtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhc1sgaWQgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFbGVtZW50KGVsZW06SFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy52aWRlb2d1bGFyRWxlbWVudCA9IGVsZW07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJNZWRpYShtZWRpYTpJUGxheWFibGUpIHtcbiAgICAgICAgdGhpcy5tZWRpYXNbbWVkaWEuaWRdID0gbWVkaWE7XG4gICAgfVxuXG4gICAgdW5yZWdpc3Rlck1lZGlhKG1lZGlhOklQbGF5YWJsZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5tZWRpYXNbbWVkaWEuaWRdO1xuICAgIH1cblxuXG59XG4iXX0=
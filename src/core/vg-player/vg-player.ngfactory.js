"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../services/vg-api");
var i2 = require("../services/vg-fullscreen-api");
var i3 = require("../services/vg-controls-hidden");
var i4 = require("./vg-player");
var styles_VgPlayer = ["\n        vg-player {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        vg-player.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n\n        vg-player.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n    "];
var RenderType_VgPlayer = i0.ɵcrt({ encapsulation: 2, styles: styles_VgPlayer, data: {} });
exports.RenderType_VgPlayer = RenderType_VgPlayer;
function View_VgPlayer_0(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0)], null, null); }
exports.View_VgPlayer_0 = View_VgPlayer_0;
function View_VgPlayer_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "vg-player", [], [[2, "fullscreen", null], [2, "native-fullscreen", null], [2, "controls-hidden", null], [4, "z-index", null]], null, null, View_VgPlayer_0, RenderType_VgPlayer)), i0.ɵprd(512, null, i1.VgAPI, i1.VgAPI, []), i0.ɵprd(512, null, i2.VgFullscreenAPI, i2.VgFullscreenAPI, []), i0.ɵprd(512, null, i3.VgControlsHidden, i3.VgControlsHidden, []), i0.ɵdid(4, 1228800, null, 1, i4.VgPlayer, [i0.ElementRef, i1.VgAPI, i2.VgFullscreenAPI, i3.VgControlsHidden], null, null), i0.ɵqud(603979776, 1, { medias: 1 })], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 4).isFullscreen; var currVal_1 = i0.ɵnov(_v, 4).isNativeFullscreen; var currVal_2 = i0.ɵnov(_v, 4).areControlsHidden; var currVal_3 = i0.ɵnov(_v, 4).zIndex; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
exports.View_VgPlayer_Host_0 = View_VgPlayer_Host_0;
var VgPlayerNgFactory = i0.ɵccf("vg-player", i4.VgPlayer, View_VgPlayer_Host_0, {}, { onPlayerReady: "onPlayerReady", onMediaReady: "onMediaReady" }, ["*"]);
exports.VgPlayerNgFactory = VgPlayerNgFactory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLm5nZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXBsYXllci5uZ2ZhY3RvcnkudHMiLCJ2Zy1wbGF5ZXIudHMuVmdQbGF5ZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O2tEQ0FBLGVBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmkwLkNvbXBvbmVudEZhY3Rvcnk7XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19
"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./vg-fullscreen");
var i2 = require("../../core/services/vg-api");
var i3 = require("../../core/services/vg-fullscreen-api");
var styles_VgFullscreen = ["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "];
var RenderType_VgFullscreen = i0.ɵcrt({ encapsulation: 2, styles: styles_VgFullscreen, data: {} });
exports.RenderType_VgFullscreen = RenderType_VgFullscreen;
function View_VgFullscreen_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["aria-label", "fullscreen button"], ["class", "icon"], ["role", "button"], ["tabindex", "0"]], [[2, "vg-icon-fullscreen", null], [2, "vg-icon-fullscreen_exit", null], [1, "aria-valuetext", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isFullscreen; var currVal_1 = _co.isFullscreen; var currVal_2 = _co.ariaValue; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }); }
exports.View_VgFullscreen_0 = View_VgFullscreen_0;
function View_VgFullscreen_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "vg-fullscreen", [], null, [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_VgFullscreen_0, RenderType_VgFullscreen)), i0.ɵdid(1, 245760, null, 0, i1.VgFullscreen, [i0.ElementRef, i2.VgAPI, i3.VgFullscreenAPI], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_VgFullscreen_Host_0 = View_VgFullscreen_Host_0;
var VgFullscreenNgFactory = i0.ɵccf("vg-fullscreen", i1.VgFullscreen, View_VgFullscreen_Host_0, {}, {}, []);
exports.VgFullscreenNgFactory = VgFullscreenNgFactory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi5uZ2ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1mdWxsc2NyZWVuLm5nZmFjdG9yeS50cyIsInZnLWZ1bGxzY3JlZW4udHMuVmdGdWxsc2NyZWVuLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3VEQ0FBLHVDQUNRLE1BQUEsc1FBTXVDLEtBQUEsdUNBQ3ZDLHlEQU5LLG9CQUEwQyxlQUMxQyxtQkFBOEMsZUFJOUMsbUJBQWlDLFlBTnRDLFlBTXVDLEVBTGxDLFNBQTBDLEVBQzFDLFNBQThDLEVBSTlDLFNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaTAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pMC5Db21wb25lbnRGYWN0b3J5O1xuIiwiXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1mdWxsc2NyZWVuXT1cIiFpc0Z1bGxzY3JlZW5cIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLWZ1bGxzY3JlZW5fZXhpdF09XCJpc0Z1bGxzY3JlZW5cIlxuICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgYXJpYS1sYWJlbD1cImZ1bGxzY3JlZW4gYnV0dG9uXCJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWVcIj5cbiAgICAgICAgPC9kaXY+Il19
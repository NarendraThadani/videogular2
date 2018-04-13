"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./vg-volume");
var i3 = require("../../core/services/vg-api");
var styles_VgVolume = ["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "];
var RenderType_VgVolume = i0.ɵcrt({ encapsulation: 2, styles: styles_VgVolume, data: {} });
exports.RenderType_VgVolume = RenderType_VgVolume;
function View_VgVolume_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { volumeBarRef: 0 }), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, [[1, 0], ["volumeBar", 1]], null, 10, "div", [["aria-label", "volume level"], ["aria-level", "polite"], ["aria-orientation", "horizontal"], ["aria-valuemax", "100"], ["aria-valuemin", "0"], ["class", "volumeBar"], ["role", "slider"], ["tabindex", "0"]], [[1, "aria-valuenow", 0], [1, "aria-valuetext", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_co.onMouseDown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(4, 0, null, null, 7, "div", [["class", "volumeBackground"]], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(6, { dragging: 0 }), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(8, 0, null, null, 0, "div", [["class", "volumeValue"]], [[4, "width", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n                "])), (_l()(), i0.ɵeld(10, 0, null, null, 0, "div", [["class", "volumeKnob"]], [[4, "left", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "volumeBackground"; var currVal_3 = _ck(_v, 6, 0, _co.isDragging); _ck(_v, 5, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ariaValue; var currVal_1 = (_co.ariaValue + "%"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_4 = ((_co.getVolume() * (100 - 15)) + "%"); _ck(_v, 8, 0, currVal_4); var currVal_5 = ((_co.getVolume() * (100 - 15)) + "%"); _ck(_v, 10, 0, currVal_5); }); }
exports.View_VgVolume_0 = View_VgVolume_0;
function View_VgVolume_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "vg-volume", [], null, [["document", "mousemove"], ["document", "mouseup"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("document:mousemove" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onDrag($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:mouseup" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).onStopDrag($event) !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (i0.ɵnov(_v, 1).arrowAdjustVolume($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_VgVolume_0, RenderType_VgVolume)), i0.ɵdid(1, 245760, null, 0, i2.VgVolume, [i0.ElementRef, i3.VgAPI], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_VgVolume_Host_0 = View_VgVolume_Host_0;
var VgVolumeNgFactory = i0.ɵccf("vg-volume", i2.VgVolume, View_VgVolume_Host_0, { vgFor: "vgFor" }, {}, []);
exports.VgVolumeNgFactory = VgVolumeNgFactory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdm9sdW1lLm5nZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXZvbHVtZS5uZ2ZhY3RvcnkudHMiLCJ2Zy12b2x1bWUudHMuVmdWb2x1bWUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7K0ZDQUEsdUNBQ1EsTUFBQSx3YUFhc0MsWUFEbEM7O3dCQUF5QjtNQUN6Qjs7d0JBQWlDO01BYnJDLHdCQWFzQyxLQUFBLDJDQUNsQyxNQUFBLGtSQUFpRSxHQUFuQyx3QkFBa0MsTUFBQywrQ0FDN0QsTUFBQSxvSEFBd0UsS0FBTSwrQ0FDOUUsTUFBQSxtSEFBc0UsS0FBTSwyQ0FDaEYsTUFBTSx1Q0FDVixNQUFNLG1DQUNWLG1EQUxhLGtDQUF3QixFQUFDLGlDQUFrQyxjQUFoRSxZQUFpRSxFQUE1RCxTQUF3QixFQUFDLFNBQWtDLG1EQVBoRSxtQkFBZ0MsWUFJaEMsb0NBQXVDLEdBWDNDLFlBYXNDLEVBTmxDLFNBQWdDLEVBSWhDLFNBQXVDLEdBSVYscURBQThDLEdBQXZFLFlBQXdFLEVBQS9DLFNBQThDLEdBQy9DLHFEQUE2QyxHQUFyRSxhQUFzRSxFQUE5QyxTQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGkwIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaTAuQ29tcG9uZW50RmFjdG9yeTtcbiIsIlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgI3ZvbHVtZUJhclxuICAgICAgICAgICAgY2xhc3M9XCJ2b2x1bWVCYXJcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgIHJvbGU9XCJzbGlkZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInZvbHVtZSBsZXZlbFwiXG4gICAgICAgICAgICBhcmlhLWxldmVsPVwicG9saXRlXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWVub3ddPVwiYXJpYVZhbHVlXCJcbiAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlICsgJyUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgKG1vdXNlZG93bik9XCJvbk1vdXNlRG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lQmFja2dyb3VuZFwiIFtuZ0NsYXNzXT1cIntkcmFnZ2luZzogaXNEcmFnZ2luZ31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lVmFsdWVcIiBbc3R5bGUud2lkdGhdPVwiKGdldFZvbHVtZSgpICogKDEwMC0xNSkpICsgJyUnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZUtub2JcIiBbc3R5bGUubGVmdF09XCIoZ2V0Vm9sdW1lKCkgKiAoMTAwLTE1KSkgKyAnJSdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAiXX0=
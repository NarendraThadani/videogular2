"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vg_overlay_play_1 = require("./vg-overlay-play");
var vg_api_1 = require("../core/services/vg-api");
var vg_states_1 = require("../core/states/vg-states");
var vg_fullscreen_api_1 = require("../core/services/vg-fullscreen-api");
describe('Videogular Player', function () {
    var overlayPlay;
    var ref;
    var api;
    var fsAPI;
    var controlsHidden;
    beforeEach(function () {
        ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        controlsHidden = {
            isHidden: {
                subscribe: function () { }
            }
        };
        api = new vg_api_1.VgAPI();
        fsAPI = new vg_fullscreen_api_1.VgFullscreenAPI();
        overlayPlay = new vg_overlay_play_1.VgOverlayPlay(ref, api, fsAPI, controlsHidden);
    });
    it('Should get media by id on init', function () {
        spyOn(api, 'getMediaById').and.returnValue({
            subscriptions: {
                bufferDetected: { subscribe: jasmine.createSpy('bufferDetected') }
            }
        });
        overlayPlay.vgFor = 'test';
        overlayPlay.onPlayerReady();
        expect(api.getMediaById).toHaveBeenCalledWith('test');
        expect(overlayPlay.target.subscriptions.bufferDetected.subscribe).toHaveBeenCalled();
    });
    describe('onClick', function () {
        beforeEach(function () {
            overlayPlay.target = {
                play: function () { },
                pause: function () { }
            };
        });
        it('current state play should set target to pause', function () {
            spyOn(overlayPlay, 'getState').and.callFake(function () { return vg_states_1.VgStates.VG_PLAYING; });
            spyOn(overlayPlay.target, 'pause');
            overlayPlay.onClick();
            expect(overlayPlay.getState).toHaveBeenCalled();
            expect(overlayPlay.target.pause).toHaveBeenCalled();
        });
        it('current state pause should set target to play', function () {
            spyOn(overlayPlay, 'getState').and.callFake(function () { return vg_states_1.VgStates.VG_PAUSED; });
            spyOn(overlayPlay.target, 'play');
            overlayPlay.onClick();
            expect(overlayPlay.getState).toHaveBeenCalled();
            expect(overlayPlay.target.play).toHaveBeenCalled();
        });
    });
    describe('getState', function () {
        beforeEach(function () {
            overlayPlay.target = {
                state: null
            };
        });
        it('if only one state returns that state', function () {
            overlayPlay.target.state = vg_states_1.VgStates.VG_PAUSED;
            expect(overlayPlay.getState()).toEqual(vg_states_1.VgStates.VG_PAUSED);
        });
        it('if more than one target should return pause if all of them are pause', function () {
            overlayPlay.target.state = [
                vg_states_1.VgStates.VG_PAUSED,
                vg_states_1.VgStates.VG_PAUSED,
                vg_states_1.VgStates.VG_PAUSED,
                vg_states_1.VgStates.VG_PAUSED
            ];
            expect(overlayPlay.getState()).toEqual(vg_states_1.VgStates.VG_PAUSED);
        });
        it('if more than one target should return play if any of them is play', function () {
            overlayPlay.target.state = [
                vg_states_1.VgStates.VG_PAUSED,
                vg_states_1.VgStates.VG_PLAYING,
                vg_states_1.VgStates.VG_PAUSED,
                vg_states_1.VgStates.VG_PAUSED
            ];
            expect(overlayPlay.getState()).toEqual(vg_states_1.VgStates.VG_PLAYING);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctb3ZlcmxheS1wbGF5LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1vdmVybGF5LXBsYXkuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFnRDtBQUNoRCxrREFBOEM7QUFFOUMsc0RBQWtEO0FBQ2xELHdFQUFxRTtBQUdyRSxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsSUFBSSxXQUEwQixDQUFDO0lBQy9CLElBQUksR0FBYyxDQUFDO0lBQ25CLElBQUksR0FBUyxDQUFDO0lBQ2QsSUFBSSxLQUFxQixDQUFDO0lBQzFCLElBQUksY0FBK0IsQ0FBQztJQUVwQyxVQUFVLENBQUM7UUFDUCxHQUFHLEdBQUc7WUFDRixhQUFhLEVBQUU7Z0JBQ1gsWUFBWSxFQUFFLFVBQUMsSUFBSTtvQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSixDQUFDO1FBRUYsY0FBYyxHQUFHO1lBQ2IsUUFBUSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxlQUFRO2FBQ3RCO1NBQ2dCLENBQUM7UUFFdEIsR0FBRyxHQUFHLElBQUksY0FBSyxFQUFFLENBQUM7UUFDbEIsS0FBSyxHQUFHLElBQUksbUNBQWUsRUFBRSxDQUFDO1FBQzlCLFdBQVcsR0FBRyxJQUFJLCtCQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7S0FDcEUsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1FBQ2pDLEtBQUssQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxhQUFhLEVBQUU7Z0JBQ1gsY0FBYyxFQUFFLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRTthQUNwRTtTQUNKLENBQUMsQ0FBQztRQUVILFdBQVcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFdB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TUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9ELENBQUMsQ0FBQztLQUNOLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VmdPdmVybGF5UGxheX0gZnJvbSBcIi4vdmctb3ZlcmxheS1wbGF5XCI7XG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwiLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VmdTdGF0ZXN9IGZyb20gXCIuLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXNcIjtcbmltcG9ydCB7IFZnRnVsbHNjcmVlbkFQSSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctZnVsbHNjcmVlbi1hcGknO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcblxuZGVzY3JpYmUoJ1ZpZGVvZ3VsYXIgUGxheWVyJywgKCkgPT4ge1xuICAgIGxldCBvdmVybGF5UGxheTogVmdPdmVybGF5UGxheTtcbiAgICBsZXQgcmVmOkVsZW1lbnRSZWY7XG4gICAgbGV0IGFwaTpWZ0FQSTtcbiAgICBsZXQgZnNBUEk6VmdGdWxsc2NyZWVuQVBJO1xuICAgIGxldCBjb250cm9sc0hpZGRlbjpWZ0NvbnRyb2xzSGlkZGVuO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIHJlZiA9IHtcbiAgICAgICAgICAgIG5hdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBnZXRBdHRyaWJ1dGU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb250cm9sc0hpZGRlbiA9IHtcbiAgICAgICAgICAgIGlzSGlkZGVuOiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlOiAoKSA9PiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIFZnQ29udHJvbHNIaWRkZW47XG5cbiAgICAgICAgYXBpID0gbmV3IFZnQVBJKCk7XG4gICAgICAgIGZzQVBJID0gbmV3IFZnRnVsbHNjcmVlbkFQSSgpO1xuICAgICAgICBvdmVybGF5UGxheSA9IG5ldyBWZ092ZXJsYXlQbGF5KHJlZiwgYXBpLCBmc0FQSSwgY29udHJvbHNIaWRkZW4pO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBnZXQgbWVkaWEgYnkgaWQgb24gaW5pdCcsICgpID0+IHtcbiAgICAgICAgc3B5T24oYXBpLCAnZ2V0TWVkaWFCeUlkJykuYW5kLnJldHVyblZhbHVlKHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBidWZmZXJEZXRlY3RlZDoge3N1YnNjcmliZTogamFzbWluZS5jcmVhdGVTcHkoJ2J1ZmZlckRldGVjdGVkJykgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGF5UGxheS52Z0ZvciA9ICd0ZXN0JztcbiAgICAgICAgb3ZlcmxheVBsYXkub25QbGF5ZXJSZWFkeSgpO1xuXG4gICAgICAgIGV4cGVjdChhcGkuZ2V0TWVkaWFCeUlkKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgndGVzdCcpO1xuICAgICAgICBleHBlY3Qob3ZlcmxheVBsYXkudGFyZ2V0LnN1YnNjcmlwdGlvbnMuYnVmZmVyRGV0ZWN0ZWQuc3Vic2NyaWJlKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnb25DbGljaycsICgpID0+IHtcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICBvdmVybGF5UGxheS50YXJnZXQgPSB7XG4gICAgICAgICAgICAgICAgcGxheTogKCkgPT4geyB9LFxuICAgICAgICAgICAgICAgIHBhdXNlOiAoKSA9PiB7IH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdjdXJyZW50IHN0YXRlIHBsYXkgc2hvdWxkIHNldCB0YXJnZXQgdG8gcGF1c2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBzcHlPbihvdmVybGF5UGxheSwgJ2dldFN0YXRlJykuYW5kLmNhbGxGYWtlKCgpID0+IHsgcmV0dXJuIFZnU3RhdGVzLlZHX1BMQVlJTkc7IH0pO1xuICAgICAgICAgICAgc3B5T24ob3ZlcmxheVBsYXkudGFyZ2V0LCAncGF1c2UnKTtcblxuICAgICAgICAgICAgb3ZlcmxheVBsYXkub25DbGljaygpO1xuXG4gICAgICAgICAgICBleHBlY3Qob3ZlcmxheVBsYXkuZ2V0U3RhdGUpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgICAgIGV4cGVjdChvdmVybGF5UGxheS50YXJnZXQucGF1c2UpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoJ2N1cnJlbnQgc3RhdGUgcGF1c2Ugc2hvdWxkIHNldCB0YXJnZXQgdG8gcGxheScsICgpID0+IHtcbiAgICAgICAgICAgIHNweU9uKG92ZXJsYXlQbGF5LCAnZ2V0U3RhdGUnKS5hbmQuY2FsbEZha2UoKCkgPT4geyByZXR1cm4gVmdTdGF0ZXMuVkdfUEFVU0VEOyB9KTtcbiAgICAgICAgICAgIHNweU9uKG92ZXJsYXlQbGF5LnRhcmdldCwgJ3BsYXknKTtcblxuICAgICAgICAgICAgb3ZlcmxheVBsYXkub25DbGljaygpO1xuXG4gICAgICAgICAgICBleHBlY3Qob3ZlcmxheVBsYXkuZ2V0U3RhdGUpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICAgICAgICAgIGV4cGVjdChvdmVybGF5UGxheS50YXJnZXQucGxheSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdnZXRTdGF0ZScsICgpID0+IHtcbiAgICAgICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgICAgICBvdmVybGF5UGxheS50YXJnZXQgPSB7XG4gICAgICAgICAgICAgICAgc3RhdGU6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdpZiBvbmx5IG9uZSBzdGF0ZSByZXR1cm5zIHRoYXQgc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgICAgICBvdmVybGF5UGxheS50YXJnZXQuc3RhdGUgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG5cbiAgICAgICAgICAgIGV4cGVjdChvdmVybGF5UGxheS5nZXRTdGF0ZSgpKS50b0VxdWFsKFZnU3RhdGVzLlZHX1BBVVNFRCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdpZiBtb3JlIHRoYW4gb25lIHRhcmdldCBzaG91bGQgcmV0dXJuIHBhdXNlIGlmIGFsbCBvZiB0aGVtIGFyZSBwYXVzZScsICgpID0+IHtcbiAgICAgICAgICAgIG92ZXJsYXlQbGF5LnRhcmdldC5zdGF0ZSA9IFtcbiAgICAgICAgICAgICAgICBWZ1N0YXRlcy5WR19QQVVTRUQsXG4gICAgICAgICAgICAgICAgVmdTdGF0ZXMuVkdfUEFVU0VELFxuICAgICAgICAgICAgICAgIFZnU3RhdGVzLlZHX1BBVVNFRCxcbiAgICAgICAgICAgICAgICBWZ1N0YXRlcy5WR19QQVVTRURcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGV4cGVjdChvdmVybGF5UGxheS5nZXRTdGF0ZSgpKS50b0VxdWFsKFZnU3RhdGVzLlZHX1BBVVNFRCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KCdpZiBtb3JlIHRoYW4gb25lIHRhcmdldCBzaG91bGQgcmV0dXJuIHBsYXkgaWYgYW55IG9mIHRoZW0gaXMgcGxheScsICgpID0+IHtcbiAgICAgICAgICAgIG92ZXJsYXlQbGF5LnRhcmdldC5zdGF0ZSA9IFtcbiAgICAgICAgICAgICAgICBWZ1N0YXRlcy5WR19QQVVTRUQsXG4gICAgICAgICAgICAgICAgVmdTdGF0ZXMuVkdfUExBWUlORyxcbiAgICAgICAgICAgICAgICBWZ1N0YXRlcy5WR19QQVVTRUQsXG4gICAgICAgICAgICAgICAgVmdTdGF0ZXMuVkdfUEFVU0VEXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBleHBlY3Qob3ZlcmxheVBsYXkuZ2V0U3RhdGUoKSkudG9FcXVhbChWZ1N0YXRlcy5WR19QTEFZSU5HKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==
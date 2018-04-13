import { Directive, ElementRef, Input, SimpleChanges, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { VgAPI } from "../../core/services/vg-api";
import { IHLSConfig } from './hls-config';
import { Subscription } from 'rxjs/Subscription';
import { VgEvents } from "../../../core";

declare let Hls;

@Directive({
    selector: '[vgHls]'
})
export class VgHLS implements OnInit, OnChanges, OnDestroy {
    @Input() vgHls:string;

    vgFor: string;
    target: any;
    hls: any;
    preload: boolean;
    crossorigin: string;
    config: IHLSConfig;

    subscriptions: Subscription[] = [];

    constructor(private ref:ElementRef, public API:VgAPI) {}

    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(() => this.onPlayerReady()));
        }
    }

    onPlayerReady() {
        this.crossorigin = this.ref.nativeElement.getAttribute('crossorigin');
        this.preload = this.ref.nativeElement.getAttribute('preload') !== 'none';
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        this.target = this.API.getMediaById(this.vgFor);

        this.config = <IHLSConfig>{
            autoStartLoad: this.preload
        };

        if (this.crossorigin === 'use-credentials') {
            this.config.xhrSetup = (xhr, url) => {
                // Send cookies
                xhr.withCredentials = true;
            };
        }

        this.createPlayer();

        if (!this.preload) {
            this.subscriptions.push(
                this.API.subscriptions.play.subscribe(
                    () => {
                        if (this.hls) {
                            console.log("ConnectingDotsInfotech msg");
                            this.hls.startLoad(0);
                        }
                    }
                )
            );
        }
    }

    ngOnChanges(changes:SimpleChanges) {
        if (changes['vgHls'].currentValue) {
            this.createPlayer();
        }
        else {
            this.destroyPlayer();
        }
    }

    createPlayer() {
        if (this.hls) {
            this.destroyPlayer();
        }

        // It's a HLS source
        if (this.vgHls && this.vgHls.indexOf('.m3u8') > -1 && Hls.isSupported()) {
            let video:HTMLVideoElement = this.ref.nativeElement;

            this.hls = new Hls(this.config);
            this.hls.loadSource(this.vgHls);
            this.hls.attachMedia(video);



            this.hls.on(Hls.Events.ERROR, this.onHlsError);



        }
        else {
            if (this.target && !!this.target.pause) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgHls;
            }
        }
    }

    onHlsError (event, data) {
        console.error( data );

        if (data.fatal) {
          switch(data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
          // try to recover network error
            
            console.error("fatal network error encountered, try to recover");
            //this.API.customErrorEvent.emit(data);
            //this.API.getDefaultMedia().dispatchEvent(new CustomEvent(VgEvents.VG_VOLUME_CHANGE));
            window.dispatchEvent(new CustomEvent(VgEvents.VG_START_ADS, data));
            
            
            window.dispatchEvent(new CustomEvent(VgEvents.VG_VOLUME_CHANGE));

            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log("fatal media error encountered, try to recover");
            break;
          default:
          // cannot recover
            break;
          }
        }
      }

    destroyPlayer() {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.destroyPlayer();
    }
}

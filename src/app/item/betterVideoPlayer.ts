import { View } from "tns-core-modules/ui/core/view";

declare var com, android;

export class BetterPlayer extends View {

    public mediaPlayer;

    public createNativeView(): any {

        const nativeView = this._openVideo();

        return nativeView;
    }


    public _openVideo() {
        let url = android.net.Uri.parse("http://jzvd.nathen.cn/c6e3dc12a1154626b3476d9bf3bd7266/6b56c5f0dc31428083757a45764763b0-5287d2089db37e62345123a1be272f8b.mp4");

        this.mediaPlayer = new com.halilibo.bettervideoplayer.BetterVideoPlayer(this._context);

        console.dir(this.mediaPlayer);

        this.mediaPlayer.setSource(url);
        this.mediaPlayer.setAutoPlay(true);
        this.mediaPlayer.setHideControlsOnPlay(true);

        return this.mediaPlayer;
    }
}
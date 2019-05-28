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

        //console.dir(this.mediaPlayer);

        this.mediaPlayer.setSource(url);
        this.mediaPlayer.setAutoPlay(true);
        this.mediaPlayer.setHideControlsOnPlay(true);

        this.mediaPlayer.setCallback(new com.halilibo.bettervideoplayer.BetterVideoCallback({
            onPause() {
            },

            onStarted(player) {
                //Log.i(TAG, "Started");
            },

            onPaused(player) {
                //Log.i(TAG, "Paused");
            },

            onPreparing(player) {
                console.log("onPreparing")
            },

            onPrepared(player) {
                //Log.i(TAG, "Prepared");
            },

            onBuffering(percent) {
                //Log.i(TAG, "Buffering " + percent);
            },

            onError(player, e) {
                //Log.i(TAG, "Error " +e.getMessage());
                console.log("error")
            },

            onCompletion(player) {
                //Log.i(TAG, "Completed");
            },

            onToggleControls(player, isShowing) {
                //Log.i(TAG, "Controls toggled " + isShowing);
            }
        }));

        this.mediaPlayer.onFinishInflate();

        return this.mediaPlayer;
    }
}
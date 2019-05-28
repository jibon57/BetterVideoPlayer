/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export class BetterVideoCallback {
				public static class: java.lang.Class<com.halilibo.bettervideoplayer.BetterVideoCallback>;
				/**
				 * Constructs a new instance of the com.halilibo.bettervideoplayer.BetterVideoCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStarted(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					onPaused(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					onPreparing(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					onPrepared(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					onBuffering(param0: number): void;
					onError(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer, param1: java.lang.Exception): void;
					onCompletion(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					onToggleControls(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer, param1: boolean): void;
				});
				public constructor();
				public onToggleControls(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer, param1: boolean): void;
				public onBuffering(param0: number): void;
				public onCompletion(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
				public onPrepared(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
				public onPreparing(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
				public onError(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer, param1: java.lang.Exception): void;
				public onStarted(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
				public onPaused(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export class BetterVideoPlayer implements com.halilibo.bettervideoplayer.IUserMethods {
				public static class: java.lang.Class<com.halilibo.bettervideoplayer.BetterVideoPlayer>;
				public setVolume(param0: number, param1: number): void;
				public onSurfaceTextureDestroyed(param0: globalAndroid.graphics.SurfaceTexture): boolean;
				public setHideControlsDuration(param0: number): void;
				public onStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
				public showToolbar(): void;
				public setButtonDrawable(param0: number, param1: globalAndroid.graphics.drawable.Drawable): void;
				public isControlsShown(): boolean;
				public onSurfaceTextureAvailable(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public setCaptions(param0: number, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
				public onClick(param0: globalAndroid.view.View): void;
				public onCompletion(param0: globalAndroid.media.MediaPlayer): void;
				public setLoop(param0: boolean): void;
				public setSource(param0: globalAndroid.net.Uri): void;
				public setLoadingStyle(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setBottomProgressBarVisibility(param0: boolean): void;
				public seekTo(param0: number): void;
				public getCurrentPosition(): number;
				public setInitialPosition(param0: number): void;
				public onVideoSizeChanged(param0: globalAndroid.media.MediaPlayer, param1: number, param2: number): void;
				public onDetachedFromWindow(): void;
				public enableControls(): void;
				public onSurfaceTextureSizeChanged(param0: globalAndroid.graphics.SurfaceTexture, param1: number, param2: number): void;
				public setCaptionLoadListener(param0: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CaptionsViewLoadListener): void;
				public onProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
				public disableGestures(): void;
				public onError(param0: globalAndroid.media.MediaPlayer, param1: number, param2: number): boolean;
				public getHideControlsDuration(): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getDuration(): number;
				public toggleControls(): void;
				public setHideControlsOnPlay(param0: boolean): void;
				public removeCaptions(): void;
				public onFinishInflate(): void;
				public setAutoPlay(param0: boolean): void;
				public hideToolbar(): void;
				public setCaptions(param0: globalAndroid.net.Uri, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
				public onStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
				public enableSwipeGestures(param0: globalAndroid.view.Window): void;
				public reset(): void;
				public setCallback(param0: com.halilibo.bettervideoplayer.BetterVideoCallback): void;
				public isPrepared(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public start(): void;
				public setSource(param0: globalAndroid.net.Uri, param1: java.util.Map<string,string>): void;
				public hideControls(): void;
				public getToolbar(): globalAndroid.support.v7.widget.Toolbar;
				public release(): void;
				public enableDoubleTapGestures(param0: number): void;
				public onPrepared(param0: globalAndroid.media.MediaPlayer): void;
				public showControls(): void;
				public isPlaying(): boolean;
				public pause(): void;
				public disableControls(): void;
				public stop(): void;
				public onSurfaceTextureUpdated(param0: globalAndroid.graphics.SurfaceTexture): void;
				public setProgressCallback(param0: com.halilibo.bettervideoplayer.BetterVideoProgressCallback): void;
				public enableSwipeGestures(): void;
				public onBufferingUpdate(param0: globalAndroid.media.MediaPlayer, param1: number): void;
				public onAttachedToWindow(): void;
			}
			export module BetterVideoPlayer {
				export class ButtonType {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.BetterVideoPlayer.ButtonType>;
					/**
					 * Constructs a new instance of the com.halilibo.bettervideoplayer.BetterVideoPlayer$ButtonType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class GestureType {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.BetterVideoPlayer.GestureType>;
					/**
					 * Constructs a new instance of the com.halilibo.bettervideoplayer.BetterVideoPlayer$GestureType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class LoadingStyle {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.BetterVideoPlayer.LoadingStyle>;
					/**
					 * Constructs a new instance of the com.halilibo.bettervideoplayer.BetterVideoPlayer$LoadingStyle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export class BetterVideoProgressCallback {
				public static class: java.lang.Class<com.halilibo.bettervideoplayer.BetterVideoProgressCallback>;
				/**
				 * Constructs a new instance of the com.halilibo.bettervideoplayer.BetterVideoProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onVideoProgressUpdate(param0: number, param1: number): void;
				});
				public constructor();
				public onVideoProgressUpdate(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export class BuildConfig {
				public static class: java.lang.Class<com.halilibo.bettervideoplayer.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export class HelperMethods {
				public static class: java.lang.Class<com.halilibo.bettervideoplayer.HelperMethods>;
				public static secondsToDuration(param0: number): string;
				public static isRemotePath(param0: globalAndroid.net.Uri): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export class IUserMethods {
				public static class: java.lang.Class<com.halilibo.bettervideoplayer.IUserMethods>;
				/**
				 * Constructs a new instance of the com.halilibo.bettervideoplayer.IUserMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setSource(param0: globalAndroid.net.Uri): void;
					setSource(param0: globalAndroid.net.Uri, param1: java.util.Map<string,string>): void;
					setCallback(param0: com.halilibo.bettervideoplayer.BetterVideoCallback): void;
					setProgressCallback(param0: com.halilibo.bettervideoplayer.BetterVideoProgressCallback): void;
					setButtonDrawable(param0: number, param1: globalAndroid.graphics.drawable.Drawable): void;
					setHideControlsOnPlay(param0: boolean): void;
					setAutoPlay(param0: boolean): void;
					setVolume(param0: number, param1: number): void;
					setLoop(param0: boolean): void;
					setLoadingStyle(param0: number): void;
					setHideControlsDuration(param0: number): void;
					setInitialPosition(param0: number): void;
					setBottomProgressBarVisibility(param0: boolean): void;
					enableSwipeGestures(): void;
					enableSwipeGestures(param0: globalAndroid.view.Window): void;
					enableDoubleTapGestures(param0: number): void;
					disableGestures(): void;
					showToolbar(): void;
					hideToolbar(): void;
					showControls(): void;
					hideControls(): void;
					toggleControls(): void;
					enableControls(): void;
					disableControls(): void;
					start(): void;
					seekTo(param0: number): void;
					pause(): void;
					stop(): void;
					reset(): void;
					release(): void;
					setCaptions(param0: globalAndroid.net.Uri, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
					setCaptions(param0: number, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
					setCaptionLoadListener(param0: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CaptionsViewLoadListener): void;
					removeCaptions(): void;
					getToolbar(): globalAndroid.support.v7.widget.Toolbar;
					getCurrentPosition(): number;
					getDuration(): number;
					getHideControlsDuration(): number;
					isPrepared(): boolean;
					isPlaying(): boolean;
					isControlsShown(): boolean;
				});
				public constructor();
				public setVolume(param0: number, param1: number): void;
				public disableGestures(): void;
				public getHideControlsDuration(): number;
				public setHideControlsDuration(param0: number): void;
				public getDuration(): number;
				public toggleControls(): void;
				public setHideControlsOnPlay(param0: boolean): void;
				public showToolbar(): void;
				public removeCaptions(): void;
				public setButtonDrawable(param0: number, param1: globalAndroid.graphics.drawable.Drawable): void;
				public setAutoPlay(param0: boolean): void;
				public hideToolbar(): void;
				public setCaptions(param0: globalAndroid.net.Uri, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
				public isControlsShown(): boolean;
				public enableSwipeGestures(param0: globalAndroid.view.Window): void;
				public reset(): void;
				public setCaptions(param0: number, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
				public setCallback(param0: com.halilibo.bettervideoplayer.BetterVideoCallback): void;
				public isPrepared(): boolean;
				public start(): void;
				public setLoop(param0: boolean): void;
				public setSource(param0: globalAndroid.net.Uri, param1: java.util.Map<string,string>): void;
				public hideControls(): void;
				public setSource(param0: globalAndroid.net.Uri): void;
				public getToolbar(): globalAndroid.support.v7.widget.Toolbar;
				public setLoadingStyle(param0: number): void;
				public release(): void;
				public enableDoubleTapGestures(param0: number): void;
				public showControls(): void;
				public setBottomProgressBarVisibility(param0: boolean): void;
				public pause(): void;
				public isPlaying(): boolean;
				public seekTo(param0: number): void;
				public getCurrentPosition(): number;
				public disableControls(): void;
				public stop(): void;
				public setInitialPosition(param0: number): void;
				public setProgressCallback(param0: com.halilibo.bettervideoplayer.BetterVideoProgressCallback): void;
				public enableControls(): void;
				public enableSwipeGestures(): void;
				public setCaptionLoadListener(param0: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CaptionsViewLoadListener): void;
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export abstract class OnSwipeTouchListener {
				public static class: java.lang.Class<com.halilibo.bettervideoplayer.OnSwipeTouchListener>;
				public initialX: number;
				public initialY: number;
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public onClick(): void;
				public onMove(param0: com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction, param1: number): void;
				public onAfterMove(): void;
				public onBeforeMove(param0: com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction): void;
				public constructor(param0: boolean);
				public onDoubleTap(param0: globalAndroid.view.MotionEvent): void;
			}
			export module OnSwipeTouchListener {
				export class Direction {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction>;
					public static LEFT: com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction;
					public static RIGHT: com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction;
					public static UP: com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction;
					public static DOWN: com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction;
					public static valueOf(param0: string): com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction;
					public static values(): native.Array<com.halilibo.bettervideoplayer.OnSwipeTouchListener.Direction>;
				}
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export module subtitle {
				export class CaptionsView {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.subtitle.CaptionsView>;
					public onDetachedFromWindow(): void;
					public run(): void;
					public setCaptionsSource(param0: number, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
					public setCaptionsSource(param0: globalAndroid.net.Uri, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onAttachedToWindow(): void;
					public static parseVtt(param0: java.io.InputStream): java.util.TreeMap<java.lang.Long,com.halilibo.bettervideoplayer.subtitle.CaptionsView.Line>;
					public static parse(param0: java.io.InputStream, param1: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime): java.util.TreeMap<java.lang.Long,com.halilibo.bettervideoplayer.subtitle.CaptionsView.Line>;
					public setCaptionsViewLoadListener(param0: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CaptionsViewLoadListener): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setPlayer(param0: globalAndroid.media.MediaPlayer): void;
					public static parseSrt(param0: java.io.InputStream): java.util.TreeMap<java.lang.Long,com.halilibo.bettervideoplayer.subtitle.CaptionsView.Line>;
				}
				export module CaptionsView {
					export class CMime {
						public static class: java.lang.Class<com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime>;
						public static SUBRIP: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime;
						public static WEBVTT: com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime;
						public static values(): native.Array<com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime>;
						public static valueOf(param0: string): com.halilibo.bettervideoplayer.subtitle.CaptionsView.CMime;
					}
					export class CaptionsViewLoadListener {
						public static class: java.lang.Class<com.halilibo.bettervideoplayer.subtitle.CaptionsView.CaptionsViewLoadListener>;
						/**
						 * Constructs a new instance of the com.halilibo.bettervideoplayer.subtitle.CaptionsView$CaptionsViewLoadListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCaptionLoadSuccess(param0: string, param1: number): void;
							onCaptionLoadFailed(param0: java.lang.Throwable, param1: string, param2: number): void;
						});
						public constructor();
						public onCaptionLoadSuccess(param0: string, param1: number): void;
						public onCaptionLoadFailed(param0: java.lang.Throwable, param1: string, param2: number): void;
					}
					export class Line {
						public static class: java.lang.Class<com.halilibo.bettervideoplayer.subtitle.CaptionsView.Line>;
						public constructor(param0: number, param1: number, param2: string);
						public setText(param0: string): void;
						public constructor(param0: number, param1: number);
					}
					export class TrackParseState {
						public static class: java.lang.Class<com.halilibo.bettervideoplayer.subtitle.CaptionsView.TrackParseState>;
						public static NEW_TRACK: com.halilibo.bettervideoplayer.subtitle.CaptionsView.TrackParseState;
						public static PARSED_CUE: com.halilibo.bettervideoplayer.subtitle.CaptionsView.TrackParseState;
						public static PARSED_TIME: com.halilibo.bettervideoplayer.subtitle.CaptionsView.TrackParseState;
						public static valueOf(param0: string): com.halilibo.bettervideoplayer.subtitle.CaptionsView.TrackParseState;
						public static values(): native.Array<com.halilibo.bettervideoplayer.subtitle.CaptionsView.TrackParseState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export module subtitle {
				export class DownloadCallback {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.subtitle.DownloadCallback>;
					/**
					 * Constructs a new instance of the com.halilibo.bettervideoplayer.subtitle.DownloadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDownload(param0: java.io.File): void;
						onFail(param0: java.lang.Exception): void;
					});
					public constructor();
					public onDownload(param0: java.io.File): void;
					public onFail(param0: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export module subtitle {
				export class DownloadFile extends globalAndroid.os.AsyncTask<string,string,string> {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.subtitle.DownloadFile>;
					public doInBackground(param0: native.Array<string>): string;
					public constructor(param0: globalAndroid.content.Context, param1: com.halilibo.bettervideoplayer.subtitle.DownloadCallback);
					public onPreExecute(): void;
					public onPostExecute(param0: string): void;
					public onProgressUpdate(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export module utility {
				export class EmptyCallback extends com.halilibo.bettervideoplayer.BetterVideoCallback {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.utility.EmptyCallback>;
					public onPrepared(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					public onCompletion(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					public onToggleControls(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer, param1: boolean): void;
					public constructor();
					public onPaused(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					public onPreparing(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					public onStarted(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer): void;
					public onBuffering(param0: number): void;
					public onError(param0: com.halilibo.bettervideoplayer.BetterVideoPlayer, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module halilibo {
		export module bettervideoplayer {
			export module utility {
				export class Util {
					public static class: java.lang.Class<com.halilibo.bettervideoplayer.utility.Util>;
					public static resolveColor(param0: globalAndroid.content.Context, param1: number): number;
					public constructor();
					public static adjustAlpha(param0: number, param1: number): number;
					public static resolveColor(param0: globalAndroid.content.Context, param1: number, param2: number): number;
					public static getDurationString(param0: number, param1: boolean): string;
					public static resolveDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
					public static isColorDark(param0: number): boolean;
					public static getScreenWidth(param0: globalAndroid.content.Context): number;
				}
			}
		}
	}
}

//Generics information:


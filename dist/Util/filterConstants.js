"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterConstants = void 0;
class filterConstants {
	constructor(filterOptions) {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
		this.filterOptions = filterOptions;
		this.volume = 1.0;
		this.equalizer =
			(_b =
				(_a = this.filterOptions) === null || _a === void 0
					? void 0
					: _a.equalizer) !== null && _b !== void 0
				? _b
				: null;
		this.karaoke =
			(_d =
				(_c = this.filterOptions) === null || _c === void 0
					? void 0
					: _c.karaoke) !== null && _d !== void 0
				? _d
				: null;
		this.timescale =
			(_f =
				(_e = this.filterOptions) === null || _e === void 0
					? void 0
					: _e.timescale) !== null && _f !== void 0
				? _f
				: null;
		this.tremolo =
			(_h =
				(_g = this.filterOptions) === null || _g === void 0
					? void 0
					: _g.tremolo) !== null && _h !== void 0
				? _h
				: null;
		this.vibrato =
			(_k =
				(_j = this.filterOptions) === null || _j === void 0
					? void 0
					: _j.vibrato) !== null && _k !== void 0
				? _k
				: null;
		this.rotation =
			(_m =
				(_l = this.filterOptions) === null || _l === void 0
					? void 0
					: _l.rotation) !== null && _m !== void 0
				? _m
				: null;
		this.distortion =
			(_p =
				(_o = this.filterOptions) === null || _o === void 0
					? void 0
					: _o.distortion) !== null && _p !== void 0
				? _p
				: null;
		this.lowpass =
			(_r =
				(_q = this.filterOptions) === null || _q === void 0
					? void 0
					: _q.lowpass) !== null && _r !== void 0
				? _r
				: null;
	}
}
exports.filterConstants = filterConstants;

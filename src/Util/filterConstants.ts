import { filtersData } from "../typings";

export class filterConstants {
	public volume = 1.0;
	public equalizer = this.filterOptions?.equalizer ?? null;
	public karaoke = this.filterOptions?.karaoke ?? null;
	public timescale = this.filterOptions?.timescale ?? null;
	public tremolo = this.filterOptions?.tremolo ?? null;
	public vibrato = this.filterOptions?.vibrato ?? null;
	public rotation = this.filterOptions?.rotation ?? null;
	public distortion = this.filterOptions?.distortion ?? null;
	public lowpass = this.filterOptions?.lowpass ?? null;
	public constructor(public filterOptions?: filtersData) {}
}

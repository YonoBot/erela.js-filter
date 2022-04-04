import { filtersData } from "../typings";

export class filterConstants {
	public volume = 1.0;
	public equalizer = this.filterOptions?.equalizer ?? undefined;
	public karaoke = this.filterOptions?.karaoke ?? undefined;
	public timescale = this.filterOptions?.timescale ?? undefined;
	public tremolo = this.filterOptions?.tremolo ?? undefined;
	public vibrato = this.filterOptions?.vibrato ?? undefined;
	public rotation = this.filterOptions?.rotation ?? undefined;
	public distortion = this.filterOptions?.distortion ?? undefined;
	public lowpass = this.filterOptions?.lowpass ?? undefined;
	public constructor(public filterOptions?: filtersData) {}
}

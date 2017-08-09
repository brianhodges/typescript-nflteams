class Team {
	city: string;
    name: string;
	conference: string;
	division: string;
    constructor(c: string, n: string, conf: string, div: string) {
        this.city = c;
        this.name = n;
		this.conference = conf;
		this.division = div;
    }
    full_name() {
        return this.city + " " + this.name;
    }
}
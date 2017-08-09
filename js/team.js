var Team = (function () {
    function Team(c, n, conf, div) {
        this.city = c;
        this.name = n;
        this.conference = conf;
        this.division = div;
    }
    Team.prototype.full_name = function () {
        return this.city + " " + this.name;
    };
    return Team;
})();

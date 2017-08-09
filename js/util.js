url = 'https://gist.githubusercontent.com/smykes/368afa60c1a75b3d5468/raw/9205194e4068a0904a682078b66338222f551376/nfl.json';
nfl_teams = [];

$(function() {
	$.ajax(url, {
      success: function(data) {
        teams = JSON.parse(data);
		teams.forEach(function(team) {
			t = new Team(team.city, team.name, team.conf, team.div);
			li = '<li class="team-items" name="' + t.division + '" onclick="teamLookUp(this);">' + t.full_name() + '</li>';
			list = "#" + t.conference + "_list";
			$(list).append(li);
			nfl_teams.push(t);
		});
      },
      error: function(e) {
         alert("Error: " + e.ToString());
      }
   });
});

function teamLookUp(obj) {
	swal(
		$(obj).text(),
		'Division: ' + $(obj).attr('name'),
		'success'
	);
}
var pie_chart = c3.generate({
    bindto: '#pie-chart',
    data: {
      columns: data,
      type : 'pie',
    },
    color: {
        pattern: ['#D81159', '#8F2D56', '#218380', '#FBB13C', '#726DA8']
    },
    pie: {
        label: {
        format: function (value, ratio, id) {
            return value + ' hr'
        }
    }
    }
});

var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: data,
      axes: {
        data: 'y2'
      },
      type: 'bar',
    },
    color: {
        pattern: ['#D81159', '#8F2D56', '#218380', '#FBB13C', '#726DA8']
    },
}); 